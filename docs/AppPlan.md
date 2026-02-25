# 댕게팅 — Master Product Requirements Document (AI Agent Optimized)

Project: 댕게팅(Dangple)  
Version: 2.1.0 (AI Agent Optimized)  
Date: 20XX-XX-XX  
Context: 이 문서는 AI 코딩 에이전트가 프로젝트를 셋업하고 구현·배포·검증까지 수행하기 위한 절대 기준 문서입니다. 에이전트는 본 문서의 규칙을 위반할 수 없습니다.  

## 문서 상태 및 역할 (2026-02-25)
- 이 문서는 **미래 앱(본체) 로드맵 참고용 기존 문서**로 유지합니다.
- 랜딩 구현의 단일 기준 문서는 [LandingPlan.md](/C:/Users/gmdqn/dang/docs/LandingPlan.md) 입니다.
- 랜딩 이후 앱 확장 계획은 [FutureAppRoadmap.md](/C:/Users/gmdqn/dang/docs/FutureAppRoadmap.md) 를 기준으로 관리합니다.
- 충돌 방지 원칙: 랜딩 범위 의사결정은 `LandingPlan.md`가 항상 우선합니다.

## 0. 메타 / 버전관리  
- **문서 버전:** 2.1.0 (AI Agent Optimized)  
- **변경 기록:** (YYYY-MM-DD) — 초기 릴리스, (YYYY-MM-DD) — 내용 업데이트 등  
- **릴리스 노트 및 마이그레이션 가이드:** 각 릴리스에 기능 변화, 데이터베이스 마이그레이션 절차 등을 상세 기술  

## 1. 프로젝트 개요 (Overview)  
### 1.1 문제 / 목표  
현재 **반려견 보호자들이 지역의 다른 보호자와 쉽게 만나 산책 친구를 만들고, 반려견 케어를 공동으로 관리하며 정보를 공유할 수 있는 일원화된 플랫폼이 부족**합니다. 기존 Pet 소셜 앱의 사용자는 대부분 혼자 산책하거나 개 관련 정보를 인터넷에서 찾는 데 한계가 있으며, 서로 오프라인에서 교류하기 어렵습니다. 예를 들어, Pawmates와 같은 앱은 **사용자가 반려견 프로필을 만들고 인근 보호자와 매칭하여 채팅할 수 있는 기능**을 제공하여 이러한 수요를 충족하고 있습니다【30†L100-L104】【30†L110-L113】. 

- **Problem:**  반려견 보호자들이 온라인에서 손쉽게 친구를 맺고, 산책/모임 약속을 잡거나 반려견 활동을 기록·공유할 플랫폼 부재.  
- **Goal:** 첫 주 내 **사용자 100명** 가입, 그 중 DAU(일일 활성 사용자) 30명 달성, API 평균 응답시간 200ms 이하 등 구체적 목표.  
- **Non-goals:** 반려동물용품 쇼핑몰, 동물병원 예약 등은 본 프로젝트 범위에서 제외. 오직 커뮤니티·소셜 기능에 집중.  

### 1.2 타깃 사용자 페르소나 & 성공 지표  
- **Target User (Persona):** 20~30대 여성 반려견 보호자. 통계적으로 **반려동물 앱 사용자 중 89.9%가 여성**이며, 연령별로는 **20대(31%)와 30대(26%)**가 가장 많습니다【8†L126-L129】. 또한, 펫 관련 커뮤니티 이용자의 77%가 20~30대 MZ세대로 나타났습니다【23†L30-L34】. 기술 수준은 스마트폰 앱 사용에 익숙한 레벨로 가정합니다.  
- **Primary KPI:** 첫 달 **회원가입 전환율**, DAU, MAU(월간 활성 사용자), 사용자 유지율(리텐션), 친구 맺기 수, 채팅 이용량 등이 핵심 성과 지표가 됩니다.  
- **SLO/SLA:** API 응답시간 95th 퍼센타일 **≤ 300ms**, 시스템 가용성 **99.9%** 목표【28†L99-L102】. 로드가 높을 때도 99.9% 업타임을 유지하고, 대부분의 요청은 300ms 이내에 처리되도록 설정합니다.  

### 1.3 핵심 사용자 경험 (User Stories)  
아래는 대표적인 사용자 스토리 예시입니다. 각 시나리오는 Given/When/Then 형식과 수락 기준(AC)을 포함합니다.  

- **로그인/회원가입:**  
  - *Given* 사용자가 로그인하지 않은 상태에서  
  - *When* 로그인 화면에서 이메일/비밀번호를 입력해 로그인하면  
  - *Then* 2단계 인증(이메일 또는 SMS)을 요청한다. (AC: 인증 이메일/SMS 발송 성공)  
- **보호자 프로필 등록:**  
  - *Given* 사용자가 회원 가입 시  
  - *When* 보호자 정보(이름, 연락처, 거주 지역)를 입력하고 반려견 정보를 추가하면  
  - *Then* 통합 프로필이 생성된다. (AC: 모든 필수 필드 유효성 검사 통과)  
- **친구 요청 및 관계 설정:**  
  - *Given* 사용자가 다른 보호자의 프로필을 열람 중일 때  
  - *When* ‘친구 요청’ 버튼을 클릭하면  
  - *Then* 상대방에게 요청이 전송되고, 수락 시 양쪽 친구 목록에 추가된다. (AC: 요청 수락/거절 상태 처리)  
- **1:1 채팅 및 약속 설정:**  
  - *Given* 두 사용자가 친구 관계일 때  
  - *When* 채팅 창에서 대화를 시작하고 날짜/시간을 제안하면  
  - *Then* 약속 설정 UI가 표시되어 위치, 시간 등을 입력할 수 있다. (AC: 약속 생성 후 초대자/참여자 알림 발송)  
- **댕로그 작성 및 공유:**  
  - *Given* 사용자가 산책 혹은 놀이 후 댕로그 페이지에 진입했을 때  
  - *When* 사진과 텍스트를 입력하여 댕로그를 작성하면  
  - *Then* 친구 리스트 및 홈 피드에 해당 댕로그가 공유된다. (AC: 게시물 업로드 완료, 친구에게 알림)  
- **후기 작성 및 신뢰 평가:**  
  - *Given* 사용자가 공동 산책이나 케어 후  
  - *When* 상대 보호자/강아지에 대한 리뷰를 작성하고 별점 또는 신뢰 점수를 부여하면  
  - *Then* 해당 사용자 프로필에 리뷰가 표시되고 신뢰 점수가 누적된다. (AC: 리뷰 입력 저장, 점수 계산 정확)  

## 2. 기술 스택 & 제약 (Tech Stack & Constraints)  
### 2.1 권장/고정 스택 (버전 명시)  
- **Framework:** Next.js 14.x (App Router) — 서버사이드 렌더링과 React를 위한 최신 프레임워크. (*pin: yes*)  
- **Language:** TypeScript 5.x (strict 모드) — 정적 타입 검사를 위한 언어. (*pin: yes*)  
- **Styling:** Tailwind CSS 3.x — 유틸리티 기반 스타일링. (*pin: yes*)  
- **State Management:** Zustand ^5.0.0 — 경량 글로벌 상태 관리 라이브러리. (버전 고정 권장)  
- **Database:** Supabase (PostgreSQL) — 실시간 기능 포함한 매니지드 DB.  
- **CI/CD:** GitHub Actions — 워크플로우 자동화.  
- **Container:** Docker — 멀티 스테이지 빌드 Dockerfile로 배포용 이미지 생성.  

### 2.2 환경/인프라 제약  
- **Node.js LTS:** 20.x (이상) 사용.  
- **브라우저 지원:** Chrome 최신 2버전, Safari 최신 2버전 등 현대 브라우저.  
- **보안:** 모든 비밀(Secret) 값은 CI/CD나 클라우드 시크릿 매니저에 보관. `.env` 파일이나 코드에 직접 커밋 금지.  
- **라이선스:** 외부 패키지 사용 시 OSI 승인 오픈소스 라이선스인지 검토. 상용 라이브러리 사용 시 법적 검토 필수.  

## 3. 디자인 시스템 (Design System)  
- **Tailwind Config 토큰:** 색상 팔레트(예: `primary`, `secondary`, `success`, `danger`), 폰트 크기 및 여백 등의 디자인 토큰을 설정. 예:  
  ```js
  theme: {
    extend: {
      colors: { primary: '#1E90FF', secondary: '#FF69B4', ... },
      spacing: { 4: '1rem', 8: '2rem', ... },
      // ...
    }
  }
  ```  
- **컴포넌트 카탈로그:** Button, Input, Modal, Tooltip, Card 등 주요 UI 컴포넌트 정의. 각 컴포넌트는 다양한 변형(크기, 색상, 아이콘 포함 여부 등) 및 Props 인터페이스를 명세. 예: `Button` 컴포넌트는 `size`, `variant`, `disabled` 등을 Props로 받음.  
- **접근성 (A11y):** WCAG AA 수준 준수. 모든 UI 요소에 충분한 명도 대비와 의미 있는 ARIA 속성 제공. 키보드 네비게이션과 스크린리더 지원 필수. 예: `button`에는 `aria-label`, 폼 요소는 `label` 요소를 연계.  
- **국제화 (i18n):** 텍스트는 다국어 키(key)로 관리. 기본 언어는 한국어이며, 추후 영어 등 확장 대비. 날짜/통화 포맷도 로케일에 맞게 관리. 예를 들어, `dayjs` 또는 `Intl`을 사용하여 한국 표준 날짜/시간 형식 적용.  

## 4. 데이터 모델 & 인터페이스 (Data Models)  
모든 데이터 모델 인터페이스는 `types/*.ts`에 정의하고, DB 마이그레이션 시 스키마를 함께 업데이트해야 합니다. 예시:  
```ts
// types/user.ts
export interface User {
  id: string;           // UUID v4, 기본키
  email: string;        // 고유(unique), 로그인 ID
  nickname: string;
  avatarUrl?: string;
  role: 'admin'|'user';
  createdAt: string;    // ISO 8601
  updatedAt?: string;
}
```
```ts
// types/guardian.ts
export interface Guardian {
  id: string;             // UUID
  userId: string;         // FK -> User.id
  name: string;
  phone?: string;
  address?: string;       // 예: 거주 지역 정보
  verifiedRegion: boolean; // 지역 인증 여부
  createdAt: string;
}
```
```ts
// types/pet.ts
export interface Pet {
  id: string;             // UUID
  ownerId: string;        // FK -> Guardian.id
  name: string;
  breed?: string;
  age?: number;
  temperament?: string;   // 반려견 성향(예: 온순, 활발 등)
  photoUrls: string[];    // 사진 URL 목록
  documentUrls?: string[]; // 서류(예: 예방접종 증명 등)
  createdAt: string;
  updatedAt?: string;
}
```
```ts
// types/friendRequest.ts
export interface FriendRequest {
  id: string;
  fromGuardianId: string;
  toGuardianId: string;
  status: 'pending'|'accepted'|'rejected';
  createdAt: string;
}
```
```ts
// types/chat.ts
export interface ChatMessage {
  id: string;
  chatRoomId: string;
  senderGuardianId: string;
  content: string;
  timestamp: string;
}
```
```ts
// types/dangLog.ts
export interface DangLog {
  id: string;
  guardianId: string;   // 작성자
  title: string;
  content: string;
  imageUrls: string[];  // 사진 첨부
  createdAt: string;
  updatedAt?: string;
}
```
```ts
// types/review.ts
export interface Review {
  id: string;
  authorGuardianId: string;
  targetGuardianId: string;
  content: string;
  rating: number;        // 예: 1~5
  createdAt: string;
}
```
각 필드에는 적절한 제약을 설정해야 합니다. 예를 들어, `email`과 `nickname` 등에는 UNIQUE 제약을, 외래키에는 INDEX를 추가하여 조회 성능을 보장합니다. 추가로 `Post`, `Comment`, `AuditLog` 등 게시판 기능이 필요하다면 유사한 형식으로 인터페이스를 정의하고, 스키마 변경 시에는 마이그레이션 스크립트를 제공합니다.

## 5. 아키텍처 & 파일 구조 (Directory Structure)  
프로젝트는 다음과 같이 구성됩니다. 각 디렉터리의 역할을 간단히 설명합니다.

```
src/
├── app/               # Next.js App Router (페이지/라우트 및 레이아웃)
├── components/        # 재사용 가능한 React 컴포넌트
├── lib/               # 유틸리티 함수, API 클라이언트(Supabase 등)
├── stores/            # Zustand 상태 관리 스토어
├── types/             # TypeScript 인터페이스/타입 정의
├── tests/             # 단위 테스트 (Jest)
├── e2e/               # 종단 간 테스트 (Playwright)
└── infra/             # 인프라스트럭처 코드 (예: Terraform 또는 Kubernetes 매니페스트)
```

예를 들어 `app/`에는 Next.js 페이지와 API 라우트, `components/`에는 버튼, 입력폼 등의 UI 컴포넌트, `lib/`에는 Supabase 초기화 및 헬퍼 함수, `stores/`에는 글로벌 상태 관리 로직을 둡니다. `tests/` 폴더 아래에 유닛 테스트, `e2e/`에는 Playwright 테스트 스크립트를 위치시킵니다. `infra/`에는 배포를 위한 IaC(예: Terraform 스크립트)나 매니페스트를 저장합니다.

## 6. 기능 명세 & 비즈니스 로직 (Feature Specifications)  
각 기능의 목적, 사용자 흐름, API 계약, 에러 처리, 수락 기준을 상세히 기술합니다. 예시:  

- **회원가입 및 프로필 설정:** 사용자는 이메일/비밀번호로 회원가입 후 보호자 프로필과 반려견 정보를 입력합니다. *유저 플로우:* 회원가입 화면 → 인증(이메일 확인) → 보호자 정보 입력 → 반려견 이름/나이/성향/사진/서류 업로드 → 지역 인증(휴대폰 SMS, 주소 인증 등) → 통합 프로필 생성. *API:* `POST /api/v1/auth/register` (request: `{email, password}` 응답: `{success, userId}`), `PUT /api/v1/users/:id/profile` (request: 프로필 데이터). *에러:* 잘못된 입력(`400 Bad Request`), 이메일 중복(`409 Conflict`). *AC:* 이메일 검증 전송 완료, 프로필 정보 정상 저장.  

- **통합 프로필 조회:** 보호자는 자신의 마이페이지에서 개인 정보와 반려견 프로필을 확인합니다. 타인은 친구 관계일 경우에만 상대의 통합 프로필을 볼 수 있습니다. *API:* `GET /api/v1/users/:id/profile`. *에러:* 권한 없음(`403`), 존재하지 않는 유저(`404`). *AC:* 요청 권한이 있을 때 올바른 프로필 정보 반환.  

- **관계 유형 및 친구 요청:** 관계 유형(예: `playmate`, `neighbor` 등)을 선택하여 친구 요청을 보냅니다. 수락 시 양측의 친구 목록에 저장됩니다. *API:* `POST /api/v1/friends/request` (body: `{toGuardianId, relationType}`), `POST /api/v1/friends/accept` (body: `{requestId}`). *에러:* 이미 요청한 상태(`409`), 자기 자신에게 요청(`400`). *AC:* 친구 요청 수락 시 관계가 DB에 반영되고 서로 친구로 등록.  

- **1대1 채팅:** 친구 관계인 사용자끼리 실시간 채팅을 주고받습니다. WebSocket 또는 WebRTC 등을 사용해 메시지를 전송합니다. *API:* `POST /api/v1/chat/send` (body: `{chatRoomId, message}`), `GET /api/v1/chat/history` (query: `{chatRoomId}`). *에러:* 채팅방 미존재(`404`), 권한 없음. *AC:* 메시지 전송 후 상대방이 실시간으로 받을 수 있어야 함.  

- **산책 약속 설정:** 친구/그룹과 약속(산책, 견주 모임 등)을 잡고 장소와 시간을 공유합니다. *API:* `POST /api/v1/appointments` (body: `{participants, datetime, location}`), `PUT /api/v1/appointments/:id/respond` (응답 처리). *AC:* 약속 일정 생성 후 참가자들에게 알림 전송.  

- **활동 기록 (댕로그) 작성 및 공유:** 사용자는 일상 활동(산책, 놀이 등)을 사진과 함께 기록하고 다른 사용자와 공유합니다. 공동 케어 초대를 통해 여러 보호자가 하나의 댕로그를 공동 작성할 수 있습니다. *API:* `POST /api/v1/danglogs` (body: `{title, content, imageUrls}`), `PUT /api/v1/danglogs/:id/invite` (공동작성자 초대). *에러:* 내용 없음(`400`), 초대 대상 부적격. *AC:* 댕로그 작성 시 친구 피드에 노출, 초대 수락 시 공동편집 가능.  

- **후기 작성 및 신뢰 평가:** 만남이나 케어 후 서로에게 리뷰를 남기고 신뢰 점수를 부여합니다. 이는 플랫폼의 신뢰성을 높이기 위함입니다. *API:* `POST /api/v1/reviews` (body: `{targetGuardianId, content, rating}`), `GET /api/v1/guardians/:id/reviews`. *AC:* 리뷰 작성 시 상대 프로필에 리뷰 반영, 평균 평점 갱신.  

각 기능의 구체적 흐름과 API 요청/응답 예시는 추가 문서로 관리하며, 모든 케이스(성공/실패 코드)를 명세합니다. 예를 들어 로그인 기능의 경우 잘못된 비밀번호 시 401 응답, 3회 실패 시 15분 잠금 등의 수락 기준을 명시할 수 있습니다.

## 7. API 계약 (API Contract) — 상세  
모든 API는 JSON 형식으로 응답합니다. 표준 응답 래핑 규칙을 적용하여 `{ success: boolean, data?: T, error?: { code: string, message: string } }` 형태를 사용합니다. 인증은 JWT Bearer 토큰을 HTTP 헤더로 전달하며, `/api/v1/` 경로로 버저닝합니다.  

- **필수 헤더:** `Authorization: Bearer <JWT 토큰>` (인증 필요 API).  
- **예시 – POST /api/v1/auth/login:**  
  - *Request Body:* `{ email: string, password: string }`  
  - *Success Response (200):* `{ success: true, data: { userId: string, token: string } }`  
  - *Error Response:* `{ success: false, error: { code: 'INVALID_CREDENTIALS', message: '이메일 또는 비밀번호가 올바르지 않습니다.' } }` (401 Unauthorized)  

- **예시 – POST /api/v1/friends/request:**  
  - *Request Body:* `{ toGuardianId: string, relationType: string }`  
  - *Success:* `{ success: true, data: { requestId: string } }`  
  - *Error:* `{ success: false, error: { code: 'DUPLICATE_REQUEST', message: '이미 요청을 보낸 사용자입니다.' } }` (409 Conflict)  

각 API별로 입력 데이터 유효성 검사와 에러 코드를 정의하고, 실패 시에는 적절한 HTTP 상태 코드(400, 401, 403, 404, 409 등)를 반환합니다.

## 8. 테스트 / 검증 전략 (Testing & QA)  
- **Unit Tests:** Jest + ts-jest 사용, 모든 비즈니스 로직과 컴포넌트에 단위 테스트 작성. 커버리지 80% 이상 목표.  
- **Integration Tests:** Supabase 모의 서버 또는 Docker Compose를 이용해 실제 DB 연결을 검증. 주요 API 경로는 통합 테스트 수행.  
- **E2E Tests:** Playwright를 사용하여 로그인, 게시물 작성, 친구 요청 등 주요 유저 시나리오를 브라우저 기반으로 테스트.  
- **CI 파이프라인 테스트:** 모든 PR마다 자동으로 lint, 타입체크, 단위·통합·E2E 테스트를 실행하고, 실패 시 병합 금지.  
- **QA 체크리스트:** 접근성(A11y) 감사(예: Lighthouse), 성능 스모크 테스트, SAST/DAST 보안 스캔(OWASP 취약점 검사) 수행.  

## 9. CI / CD & 배포 전략 (CI/CD & Deployment)  
- **버전 관리:** Git은 trunk 기반 모델, 기능별 브랜치로 개발. 커밋 메시지는 Conventional Commits 규칙 준수(예: `feat:`, `fix:`, `chore:`). PR 템플릿에 *Tests*, *Types*, *Security*, *Performance* 체크리스트 포함.  
- **GitHub Actions 워크플로우:**  
  ```yaml
  name: CI
  on: [pull_request]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --coverage
  ```
- **배포:** 코드 머지 후 **staging** 배포, 이후 Canary 배포를 거쳐 **production** 롤아웃. 모니터링을 설정하고, 문제 발생 시 이전 버전으로 롤백 스크립트를 자동 실행.  
- **Rollback 계획:** 배포 파이프라인에서 실패 감지 시 자동으로 이전 안정화된 Docker 이미지로 돌아가도록 구성. 새 버전 릴리즈 시 Git 태그를 통해 명확히 관리.  

## 10. 보안 · 개인정보 (Security & Privacy)  
- **인증/권한:** JWT 기반 인증(JWT+Refresh Token) 사용. 토큰은 HTTP-only Cookie 또는 Secure Storage에 보관하여 XSS 공격 방지. 경로별 권한 검증 철저(예: Only Admin can delete).  
- **Secrets:** API 키, DB 비밀번호 등 모든 민감 정보는 환경변수로 관리하고 코드 저장소에 노출 금지. CI/Secrets Manager를 통해 주입.  
- **입력 검증:** SQL 인젝션, XSS 방지를 위한 철저한 입력 검증 및 ORM 사용. CORS 정책과 CSP(콘텐츠 보안 정책) 설정.  
- **개인정보 보호:** 사용자의 PII(예: 이메일, 전화번호)는 암호화 또는 해시 저장. GDPR 및 국내 개인정보 보호법 준수를 고려하여 개인정보 수집·보유 정책 수립. 개인정보는 저장 최소화 원칙에 따라 설계.  

## 11. 관찰성 (Observability)  
- **로깅:** 로그는 JSON 구조화(logrus 등)하여 기록. 각 요청에 trace ID를 부여해 추적성을 강화. 예를 들어 다음과 같이 logs를 JSON 포맷으로 전송하도록 설정합니다:  
  ```js
  logger.format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  );
  ```  
- **에러 추적:** Sentry 또는 유사 APM 도구를 연동해 런타임 에러와 예외를 모니터링. 에러 발생 시 스택 트레이스와 사용자 컨텍스트를 자동 수집하여 개발자가 즉시 대응.  
- **메트릭:** Prometheus/Grafana 조합을 도입해 응답 시간(latency), 요청량, 에러율 등의 메트릭을 수집. 애플리케이션 성능 대시보드를 구성하여 실시간 모니터링.  
- **헬스 체크:** `/health` 엔드포인트를 구현하여 서비스, DB 커넥션 등 상태를 확인할 수 있게 함. 예: HTTP 200 반환 시 정상, 500 시 문제 알림.  

## 12. 성능 · 확장성 (Performance & Scaling)  
- **캐싱:** CDN(CloudFront 등) 및 서버사이드 캐시(예: Redis)로 정적 리소스와 빈번한 쿼리 결과를 캐싱. 이미지 업로드 시 이미지 처리/저장을 별도의 오브젝트 스토리지(S3)로 오프로드.  
- **DB 인덱스:** 반려견 ID, 사용자 ID, foreign key 등 자주 검색되는 컬럼에 인덱스를 설정. 쿼리 비용이 많이 드는 경우 예비적으로 쿼리 로직을 최적화하고 인덱싱을 조정.  
- **API Rate Limit:** 사용자당 및 IP당 요청 제한 설정(Nginx 또는 애플리케이션 레벨). 예를 들어, 한 사용자가 1초에 10회 이상 API 호출 시 429 응답.  
- **오토스케일링:** 쿠버네티스 또는 클라우드 VM에서 CPU/메모리 기반 오토스케일링을 구성해 부하 증가 시 용량 자동 확장.  

## 13. 운영(오퍼레이션) / 유지보수 (Operations / Maintenance)  
- **백업:** PostgreSQL은 정기 백업 스케줄(예: 일일 덤프 + 주간 전체 스냅샷) 운영. 백업 파일은 다른 리전에 안전하게 저장.  
- **데이터베이스 마이그레이션:** Prisma Migrate 또는 Supabase Migration 툴 사용. 새로운 변경 발생 시 `migrations/` 폴더에 스크립트 생성, 마이그레이션 실행 가능 스크립트를 제공. 롤백을 위한 SQL 스크립트도 준비.  
- **온콜/on-call:** 주요 팀원이 교대로 온콜 대응. 장애 발생 시 연락망과 복구 절차를 문서화(예: Confluence).  
- **문서화:** API 스펙 자동 생성(OpenAPI/Swagger)하여 개발자 포털에 공개. 또한 코드베이스 루트 README에 프로젝트 개요, 환경 설정 가이드, 배포 방법을 자세히 작성.  

## 14. 위험관리 (Risks & Mitigation)  
- **외부 Auth 장애:** Supabase Auth 또는 서드파티 인증 서비스 장애 시 로컬 게스트 모드로 제한적 제공(읽기 전용). 인증 시점에 이슈가 있을 경우 메시지로 사용자에 안내하고 재시도 기능.  
- **DB 마이그레이션 실패:** 마이그레이션 전 스냅샷 백업, 트랜잭션 단위 마이그레이션 적용. 마이그레이션 실패 시 자동으로 이전 상태로 되돌리는 롤백 스크립트 준비.  
- **트래픽 급증:** 갑작스러운 사용량 증가에 대비해 오토스케일링 정책을 사전 설정. 급증 상황 모니터링과 알림을 통해 인프라 확장을 신속히 조치.  
- **보안 취약점:** OWASP Top 10 가이드라인에 따른 정기적인 보안 점검 수행. 필요 시 외부 보안 전문가 감사를 통해 위험 요소 사전 제거.  

## 15. 산출물(Deliverables) & 수락 기준 (Deliverables & Acceptance)  
- **최종 산출물:** 완전 컴파일 가능한 소스 코드, 단위 및 통합 테스트, E2E 테스트 스크립트, `Dockerfile` (멀티스테이지), 인프라 코드는 `infra/` 폴더, README, API 문서(OpenAPI) 등.  
- **Acceptance Checklist:** 
  - [ ] 타입스크립트 컴파일 에러 없이 빌드 성공  
  - [ ] 모든 테스트(PH, 통합, E2E) 통과  
  - [ ] CI 도구에서 lint, typecheck 통과  
  - [ ] 보안 스캔(예: `npm audit`) 문제 없음  
  - [ ] 성능 지표(응답시간 등) SLO 충족 여부 검증  

## 16. Agent 운영 프롬프트 (업그레이드된 프롬프트)  
> **Prompt Template for Agent:**  
> 당신은 시니어 풀스택 개발자이자 CI/CD, 보안, 관찰성 지침을 준수하는 배포 가능한 코드 생성기입니다. 첨부된 Master_PRD.md(버전 2.1.0)를 엄격히 준수하세요.  
> 
> **작업 규칙:**  
> 1. **변경 불가 규칙:** Node.js 20.x, TypeScript strict 모드, Tailwind CSS 3.x, Next.js 14.x 등을 반드시 고정하여 사용합니다.  
> 2. **생성 순서:**  
>    - **Step A:** 파일 트리 구조 출력 (텍스트).  
>    - **Step B:** `types/*.ts` 인터페이스 파일 생성 (먼저 컴파일이 되도록).  
>    - **Step C:** 기본 UI 컴포넌트 3개(Button, Input, Card) 생성 및 각 컴포넌트의 단위 테스트 작성.  
>    - **Step D:** 로그인 API 구현 및 통합 테스트.  
> 3. 모든 코드 스니펫은 `npm run build` 시 오류 없이 성공하도록 작성합니다.  
> 4. 커밋 메시지는 반드시 Conventional Commits 규칙을 사용합니다.  
> 5. 각 단계가 완료되면 “진행 보고”와 함께 생성된 파일 리스트 및 테스트 결과 요약을 출력하세요.  
> 6. PR 생성 전 모든 코드는 lint, 타입체크, 단위 테스트를 통과해야 합니다.  
> 
> **지금 바로 Step 1 (파일 트리 출력)과 Step 2 (타입 정의 생성)을 실행하세요.**

## 17. 빠른 시작 체크리스트 (Agent Quick-Start)  
- **Node.js 버전:** 20.x로 고정  
- **TypeScript 설정:** `tsconfig.json`에서 `strict: true` 설정  
- **Lint/Formatter:** ESLint + Prettier 설정 완료 (커밋 전 자동 포맷 실행)  
- **Dockerfile:** 멀티 스테이지 스켈레톤 생성 (빌드 → 프로덕션 이미지)  
- **CI 구성:** CI 파이프라인이 `npm ci && npm run build && npm run test`를 자동으로 통과하도록 설정  
- **환경변수 예시 (`.env.example`):**  
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  SUPABASE_SERVICE_ROLE_KEY=
  DATABASE_URL=postgres://user:pass@localhost:5432/db
  ```  
- **기타:** README에 프로젝트 소개, 설치/배포 가이드, API 문서 링크 등 요약 문서 포함.

**참고:**  개발·배포 과정 전반에서 AI 에이전트는 본 PRD의 규칙과 구조를 반드시 준수해야 합니다. 본 문서는 프로젝트 수행의 최종 기준입니다.  

**Sources:** 사용자 기반 및 시장 통계는 [반론보도](https://www.banronbodo.com/news/articleView.html?idxno=23095)의 데이터를 참고했습니다【6†L48-L56】【8†L126-L129】. 또한, 국내 주요 반려동물 커뮤니티 사례로 펫프렌즈의 ‘집사생활’이 **20~30대 MZ세대(77%)**를 주요 이용자로 확보하며 빠르게 성장하고 있음이 보고되었습니다【23†L30-L34】. 해외 사례로는 Pawmates 앱이 **맞춤형 반려견 프로필과 지역 매칭, 채팅, 주변 펫 비즈니스 지도 기능**을 제공하여 높은 사용자 참여를 이끌고 있습니다【30†L100-L104】【30†L110-L113】. 시스템 성능 기준은 웹 애플리케이션 모니터링 권고사항을 참고하여 **99% 요청을 300ms 이내로 처리**하고 **가용성 99.9%**를 목표로 설정하였습니다【28†L99-L102】. These sources provide context for our user persona and performance targets.  
