// 전체 카피 텍스트, 섹션 ID, 네비게이션 링크 등 상수 (카피 변경은 여기서만)
export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about",
  MODES: "modes",
  FEATURES: "features",
  HOW_IT_WORKS: "how-it-works",
  SAFETY: "safety",
  STATS: "stats",
  JOIN: "join",
  FAQ: "faq",
} as const;

export const NAV_LINKS = [
  { label: "소개", href: `#${SECTION_IDS.ABOUT}` },
  { label: "모드", href: `#${SECTION_IDS.MODES}` },
  { label: "기능", href: `#${SECTION_IDS.FEATURES}` },
  { label: "안전", href: `#${SECTION_IDS.SAFETY}` },
  { label: "사전등록", href: `#${SECTION_IDS.JOIN}` },
] as const;

export const COPY = {
  hero: {
    title: "우리 동네에서,\n믿고 만나는 반려견 보호자",
    sub: "동네 기반 인증으로 신뢰할 수 있는 보호자를 연결·매칭합니다.",
    summary: "친구 · 돌봄 · 가족 모드로 관계를 확장하세요",
    cta: "지금 사전 등록하기",
    trusts: [
      { icon: "shield", text: "철저한 신원 인증" },
      { icon: "users", text: "안전한 1:1 매칭" },
      { icon: "map-pin", text: "동네 기반 커뮤니티" },
    ],
  },
  about: {
    title: "우리 동네 보호자와 연결되는 가장 안전한 방법",
    description:
      "이런 경험, 한 번쯤 있으셨나요?\n\n마음에 맞는 산책 친구는 찾기 어렵고,\n믿고 맡길 사람은 부족하고,\n낯선 보호자는 늘 조심스러웠던 경험.\n\n댕개팅은 그 불편함에서 출발했습니다.\n\n반려견을 매개로\n라이프스타일이 비슷한 보호자를 연결하고,\n인증과 기록을 통해 신뢰를 쌓습니다.\n\n친구·돌봄·가족 모드를 기반으로\n한 번의 만남이 관계로 이어집니다.",
    marquee: [
      "신뢰 인증",
      "동네 매칭",
      "안전한 만남",
      "돌봄 교환",
      "기록 기반 신뢰",
      "보호자 커뮤니티",
    ],
  },
  modes: {
    title: "관계에 따라 확장되는 3단계 모드",
    items: [
      {
        name: "🟢 친구 모드",
        tagline: "우리 동네에서 연결되는 믿을 수 있는 반려견 친구",
        description:
          "우리 동네 보호자와 연결\n산책·카페·외출 메이트 매칭\n정보·경험 공유\n부담 없는 관계 형성",
        features: ["가볍게 시작하는 신뢰 기반 만남"],
        accent: false,
      },
      {
        name: "🔵 돌봄 모드",
        tagline: "신뢰가 쌓인 보호자 간 돌봄 교환 시스템",
        description:
          "일정 기간 활동·후기 기준 충족 시 활성화\n서로 돌봐주는 구조\n단순 펫시터 중개 ❌\n신뢰 네트워크 기반 교환",
        features: ["일회성이 아닌, 관계로 이어지는 돌봄"],
        accent: false,
      },
      {
        name: "🟣 가족 모드",
        tagline: "신뢰 기반 보호자 커뮤니티 네트워크",
        description:
          "일정 기준 이상 신뢰가 쌓인 사용자 대상\n우리 가족과 비슷한 양육 방식·가치관의 보호자 그룹 매칭\n소규모 커뮤니티 중심 운영",
        features: ["관계가 쌓이면 커뮤니티가 됩니다"],
        accent: false,
      },
    ],
  },
  features: {
    title: "신뢰를 가장 중요한 기준으로 삼습니다",
    subtitle: "신뢰를 설계하는 네 가지 시스템",
    tabs: [
      {
        id: "auth",
        label: "인증 시스템",
        title: "다층 인증으로 쌓는 신뢰",
        description:
          "휴대폰 인증, 반려견 등록, 지역 인증, 그리고 활동 기반 뱃지까지. 단계별 인증을 통해 신뢰할 수 있는 보호자를 연결합니다.",
        points: [
          "휴대폰 본인 인증",
          "반려견 정보 등록",
          "지역(동네) 인증",
          "활동 기반 신뢰 뱃지",
        ],
      },
      {
        id: "matching",
        label: "매칭 시스템",
        title: "비슷한 라이프스타일의 보호자를 연결",
        description:
          "산책 시간, 생활 패턴, 반려견 성향을 바탕으로\n자연스럽게 이어질 수 있는 연결을 만듭니다.",
        points: [
          "반경 기반 거리 필터",
          "활동 시간대 매칭",
          "반려견 성향 고려",
          "매칭 선호도 반영",
        ],
      },
      {
        id: "danglog",
        label: "댕로그",
        title: "가족과 함께 쓰는 반려견 육아 기록",
        description:
          "댕로그는 가족과 함께 작성할 수 있는 반려견 육아 일기입니다.\n\n돌봄 참여자를 초대해 함께 기록을 남길 수 있으며,\n매칭 여부와 상관없이 자유롭게 사용할 수 있습니다.\n\n댕로그를 통해 매칭 전 상대 반려견의 일상과 라이프스타일을 미리 확인할 수 있으며,\n쌓인 기록은 서로를 더 잘 이해하는 데 도움이 됩니다.",
        points: [
          "반려견 일기 작성",
          "가족·돌봄 참여자 공동 기록",
          "활동 타임라인 기록",
          "건강·산책 메모 관리",
          "매칭 전 상대 댕로그 확인 가능",
        ],
      },
      {
        id: "review",
        label: "후기 시스템",
        title: "만남 후에도 이어지는 신뢰",
        description:
          "만남 이후 서로에 대한 후기를 남길 수 있습니다.\n쌓인 후기는 신뢰로 이어지고, 더 많은 만남으로 이어집니다.",
        points: [
          "만남 후 양방향 후기",
          "후기 기반 신뢰 점수",
          "신뢰 레벨 업그레이드",
          "우수 보호자 인증",
        ],
      },
    ],
  },
  howItWorks: {
    title: "시작은 간단합니다",
    summary: "신뢰가 쌓일수록, 더 많은 기능이 열립니다.",
    steps: [
      {
        number: 1,
        title: "가입 및 인증",
        description: "휴대폰 인증으로 간편하게 가입하세요.",
      },
      {
        number: 2,
        title: "반려견 등록",
        description: "반려견 정보를 등록하고 프로필을 완성하세요.",
      },
      {
        number: 3,
        title: "동네 설정",
        description: "활동 동네를 설정하면 근처 보호자를 찾을 수 있어요.",
      },
      {
        number: 4,
        title: "친구 매칭",
        description: "조건에 맞는 보호자를 추천받고 매칭을 요청하세요.",
      },
      {
        number: 5,
        title: "채팅·만남",
        description: "매칭된 보호자와 채팅하고 만남 약속을 잡으세요.",
      },
      {
        number: 6,
        title: "기록·후기",
        description: "만남 후 기록과 후기를 남기며 신뢰를 쌓으세요.",
      },
      {
        number: 7,
        title: "모드 확장",
        description: "신뢰가 쌓이면 돌봄·가족 모드가 열립니다.",
      },
    ],
  },
  safety: {
    title: "신뢰를 가장 중요한 기준으로 삼습니다",
    badges: [
      {
        icon: "user-check",
        title: "실명 인증",
        description: "본인 인증을 거친 보호자만 활동할 수 있습니다.",
      },
      {
        icon: "paw",
        title: "반려견 등록",
        description: "반려견 정보를 등록하여 책임감 있는 보호자임을 증명합니다.",
      },
      {
        icon: "map",
        title: "동네 인증",
        description: "실제 거주 지역을 인증하여 동네 기반 신뢰를 형성합니다.",
      },
      {
        icon: "eye",
        title: "24시간 모니터링",
        description: "신고/차단 시스템과 운영팀이 안전한 환경을 유지합니다.",
      },
    ],
  },
  stats: {
    items: [
      { value: 1000, suffix: "+", label: "사전등록" },
      { value: 300, suffix: "+", label: "동네" },
      { value: 98, suffix: "%", label: "재사용 의향" },
    ],
  },
  join: {
    title: "댕개팅 첫 사용자로\n참여해보세요",
    cta: "유저 테스트 참여",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "1️⃣ 반려견을 키우지 않아도 이용할 수 있나요?",
        answer:
          "댕개팅은 보호자 간의 관계 매칭 서비스입니다.\n반려견을 매개로 친구·돌봄·가족 모드를 통해 보호자 간 다양한 관계를 형성할 수 있도록 설계되었습니다.\n따라서 현재 서비스 및 유저 테스트는 실제 반려견 보호자를 대상으로 진행되며,\n반려견을 키우지 않는 경우에는 이용 대상에 해당하지 않습니다.",
      },
      {
        question: "2️⃣ 서비스는 언제 정식 출시되나요?",
        answer:
          "현재는 유저 테스트 단계이며,\n참여자분들의 피드백을 바탕으로 서비스를 개선하고 다듬어 정식 출시를 준비하고 있습니다.\n출시 일정은 확정되는 대로 사전 등록자에게 우선 안내드릴 예정입니다.",
      },
    ],
  },
  footer: {
    email: "dangdating.team@gmail.com",
    representative: "대표 김윤아",
  },
} as const;
