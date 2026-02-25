# 댕개팅(Dang-Dating) — Landing Execution Plan

## 0. 문서 메타
- 문서명: LandingPlan
- 버전: 2.1.0
- 날짜: 2026-02-25 (KST)
- 기준: Master Landing PRD v2.1.0 고정 준수
- 범위: 랜딩 전환 퍼널(소개/신뢰 설득/사전등록)만 포함

## 1. 문제/목표/KPI/Non-goals
### 1.1 Problem
- 보호자는 산책 친구/정보 교류/돌봄 교환 니즈가 있으나, 낯선 보호자 만남에 대한 불안이 크다.
- 랜딩은 귀여운 소개가 아니라, "안전장치가 구조적으로 있다"는 점을 10초 내 설득해야 한다.

### 1.2 Goal
- 1스크린에서 정체성(동네 기반 신뢰 매칭 + 3모드 확장)을 이해시킨다.
- 사전 테스트 유저 리드를 수집한다.
- 심사 관점에서 문제-해결-검증 설계를 한 페이지에서 읽히게 한다.

### 1.3 Primary KPI
- 방문 -> CTA 클릭률 >= 8%
- 방문 -> 사전 등록 제출 전환율 >= 3%
- 폼 제출 실패율 < 1%
- 모바일 Lighthouse: Performance >= 85 / SEO >= 90 / Accessibility >= 90
- Core Web Vitals: LCP <= 2.5s, CLS <= 0.1, INP 양호

### 1.4 Non-goals
- 매칭/채팅/체크인 등 앱 본체 기능 구현
- 결제/유료화
- 커뮤니티/댕로그 실사용 기능 구현

## 2. 타깃 사용자/유저스토리
### 2.1 타깃
- Primary: 20~40대 반려견 보호자, "설렘보다 안심/신뢰 우선"
- Secondary: 유치원/호텔/훈련사 등 B2B 관찰군

### 2.2 핵심 사용자 경험
- 10초 이해 테스트: "우리 동네에서 믿고 만나는 반려견 보호자 연결 플랫폼"으로 설명 가능해야 함
- 신뢰 장치 확인: 인증/후기/운영 구조를 보고 불안이 줄어야 함
- 사전 등록 완료: 제출 성공 시 저장 + 감사 페이지 + 후속 안내

## 3. 고정 기술 스택/제약
- Framework: Next.js 14.x (App Router)
- Language: TypeScript 5.x (`strict: true`)
- Styling: Tailwind CSS 3.x
- Forms: React Hook Form + Zod
- DB: Supabase (PostgreSQL, 리드/이벤트 중심)
- Analytics: GA4 필수 (PostHog 선택)
- CI/CD: GitHub Actions
- Hosting: Vercel 권장
- Runtime: Node.js 20.x

## 4. 디자인 시스템
### 4.1 브랜드 컬러 (고정)
- Background: `#F5F7FA`
- Card: `#FFFFFF`
- Main (Sky Blue): `#9EC6E8`
- CTA (Bright Blue): `#1E88E5`

### 4.2 톤앤매너
- 신뢰 중심 / 차분함 / 전문성 / 친근함
- 과한 캐릭터성, 유치한 표현, 과장된 데이팅앱 인상 금지

### 4.3 랜딩 필수 컴포넌트
- `Button` (Primary/Secondary)
- `SectionWrapper` (anchor 지원)
- `FeatureCard`
- `ModeCard` (친구/돌봄/가족)
- `SafetyBadgeCard`
- `TestimonialCard` (베타 코멘트)
- `FAQAccordion`
- `LeadForm`

## 5. IA 및 고정 카피 (순서 고정)
순서: Home -> About -> Modes -> Features -> How It Works -> Safety -> Join -> FAQ -> Footer

### 5.1 Home
- Hero: `우리 동네에서, 믿고 만나는 반려견 보호자`
- Sub: `동네 기반 인증으로 신뢰할 수 있는 보호자를 연결·매칭합니다.`
- Summary: `친구 · 돌봄 · 가족 모드로 관계를 확장하세요`
- CTA: `지금 사전 등록하기`

### 5.2 About
- Title: `우리 동네 보호자와 연결되는 가장 안전한 방법`
- 핵심 방향: 인증과 기록 기반 신뢰 네트워크

### 5.3 Modes (핵심)
- 친구 모드: 부담 없는 신뢰 기반 만남
- 돌봄 모드: 신뢰 누적 후 활성화되는 보호자 간 교환 구조
- 가족 모드: 신뢰 누적 기반 소규모 커뮤니티 확장

### 5.4 Features
- 인증 시스템: 휴대폰/반려견/지역/뱃지
- 매칭 시스템: 거리/시간대/성향 필터
- 댕로그: 기록 기반 신뢰 데이터 축적
- 후기 시스템: 만남 이후 신뢰 순환 구조

### 5.5 How It Works
- 고정 7단계:
1. 가입 및 인증
2. 반려견 등록
3. 동네 설정
4. 친구 매칭
5. 채팅·만남
6. 기록·후기
7. 신뢰 누적 -> 모드 확장
- 요약: `신뢰가 쌓일수록, 더 많은 기능이 열립니다.`

### 5.6 Safety
- Title: `신뢰를 가장 중요한 기준으로 삼습니다.`
- 요소: 신뢰 뱃지, 후기, 신고/차단, 운영 모니터링

### 5.7 Join
- Title: `댕개팅 첫 사용자로 참여해보세요 🐶`
- CTA: `유저테스트 · 사전 등록 신청하기`

### 5.8 FAQ
- Q1/Q2는 Master Landing PRD 원문 그대로 사용 (수정 금지)

### 5.9 Footer
- 문의: `dangdating.team@gmail.com (대표 김윤아)`

## 6. 데이터 모델/인터페이스
```ts
export interface Lead {
  id: string;
  createdAt: string;
  source?: string;
  medium?: string;
  campaign?: string;
  name?: string;
  email: string;
  phone?: string;
  hasDog: boolean;
  testPhase1: 'possible' | 'maybe';
  testPhase2: 'possible' | 'maybe';
  consentLaunchAlert: boolean;
  preRegisterIntent: 'yes' | 'thinking' | 'no';
  comment?: string;
  consentPrivacy: boolean;
}

export interface LandingEvent {
  id: string;
  createdAt: string;
  sessionId: string;
  eventName:
    | 'page_view'
    | 'cta_click'
    | 'lead_submit'
    | 'scroll_depth'
    | 'faq_open';
  props?: Record<string, unknown>;
}
```

### DB 제약
- `email` NOT NULL
- `consentPrivacy = true` 필수
- `createdAt` 인덱스
- 중복 정책: upsert 또는 `409 DUPLICATE_LEAD` 중 하나를 운영 정책으로 고정

## 7. API 계약
표준 응답:
```ts
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: { code: string; message: string };
};
```

### 7.1 POST `/api/lead`
- Request: `Lead` 기반 입력
- Success(200): `{ success: true, data: { leadId: string } }`
- Error:
  - 400 `INVALID_INPUT`
  - 409 `DUPLICATE_LEAD` (중복 정책 선택 시)

### 7.2 POST `/api/event` (선택)
- Request: `LandingEvent`
- Success(200): `{ success: true }`

### 7.3 폼 로직 (필수)
- `hasDog=false` 이면 설문 종료 후 감사 화면
- `consentPrivacy=false` 이면 제출 불가
- 제출 중 로딩/중복 제출 방지

## 8. 테스트/검증
- Unit:
  - Zod validation
  - `POST /api/lead` 핸들러
- E2E (Playwright 최소 1개):
  - 랜딩 로드 -> CTA -> 폼 제출 -> thank-you 도달
- 품질:
  - Lighthouse 모바일 점수 검증
  - GA4 이벤트 기록(`cta_click`, `lead_submit_success`, `lead_submit_fail`, `scroll_depth`)

## 9. 보안/개인정보/관찰성
- Supabase RLS: `leads` 테이블은 서버만 insert 허용
- 개인정보 최소 수집 원칙
- 스팸 방지: rate limit + honeypot
- 최소 이벤트:
  - `cta_click`
  - `lead_submit_success`
  - `lead_submit_fail`
  - `scroll_depth(25/50/75/100)`

## 10. 배포/운영/리스크/수락 기준
### 10.1 배포
- GitHub Actions: `lint` / `typecheck` / `test` / `build`
- PR -> Preview, main -> Production (Vercel)
- 문제 시 Vercel 이전 배포로 즉시 롤백

### 10.2 리스크와 대응
- 데이팅앱 오해: Hero/Modes/Safety를 동등하고 명확하게 노출
- 스팸 리드: 중복 처리 + rate limit + honeypot
- 추상 카피 리스크: 고정 IA 카피 우선, A/B 테스트는 후속 버전

### 10.3 Acceptance Checklist
- [ ] `npm run build` 성공
- [ ] 반응형(모바일/데스크탑) 이상 없음
- [ ] 폼 제출 성공 + DB 저장 확인
- [ ] `hasDog=false` 종료 동작 확인
- [ ] 개인정보 미동의 시 제출 불가 확인
- [ ] Lighthouse 목표치 충족

## 11. 관련 문서
- 기존 앱 참고 문서: [AppPlan.md](/C:/Users/gmdqn/dang/docs/AppPlan.md)
- 랜딩 이후 앱 확장: [FutureAppRoadmap.md](/C:/Users/gmdqn/dang/docs/FutureAppRoadmap.md)
- Out of Scope: 앱 본체 구현은 `FutureAppRoadmap.md` 범위
