// POST /api/lead — 리드 수집 API (Nodemailer/Gmail 발송 포함)
import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: result.error.issues[0]?.message || "입력값이 올바르지 않습니다",
          },
        },
        { status: 400 }
      );
    }

    const { email, wantsLaunchAlert, wantsUserTest } = result.data;

    // 1. Nodemailer를 통한 이메일 발송 (Gmail SMTP)
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // 앱 비밀번호 사용 필요
          },
        });

        await transporter.sendMail({
          from: `"DangDating" <${process.env.GMAIL_USER}>`,
          to: "dangdating.team@gmail.com, gmdqn2tp@gmail.com",
          subject: "🎉 새로운 사전 예약 신청이 도착했습니다!",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #4f46e5;">নতুন Lead (댕개팅)</h2>
              <p>새로운 사용자가 사전 예약을 완료했습니다.</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>이메일:</strong> ${email}</p>
              <p><strong>출시 알림 희망:</strong> ${wantsLaunchAlert ? "✅ 예" : "❌ 아니오"}</p>
              <p><strong>유저 테스트 참여 희망:</strong> ${wantsUserTest ? "✅ 예" : "❌ 아니오"}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;">이 메일은 댕개팅 랜딩페이지에서 자동으로 발송되었습니다.</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email via Gmail:", emailError);
      }
    } else {
      console.log("[MOCK] Gmail credentials missing. Lead details:", result.data);
    }

    // 2. Mock: log and return success
    console.log("Lead captured:", result.data);

    return NextResponse.json({
      success: true,
      data: { leadId: crypto.randomUUID() },
    });
  } catch (error) {
    console.error("Server API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "서버 오류가 발생했습니다" },
      },
      { status: 500 }
    );
  }
}
