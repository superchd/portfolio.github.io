// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png";
import BRIcon from "./images/skillsIcon/Bear_Robotics.png";
import openCVIcon from "./images/skillsIcon/OpenCV.png";
import RPIIcon from "./images/skillsIcon/CPU.svg";
import SolidworksIcon from "./images/skillsIcon/CAD.svg";
import codeIcon from "./images/skillsIcon/code.svg";
import isaacsIcon from "./images/skillsIcon/isaacsim.png";
import airplaneIcon from "./images/skillsIcon/airplane.svg";
import harmonyIcon from "./images/skillsIcon/Harmony.png";
import RosIcon from "./images/skillsIcon/ROS.jpg";
import kaboatIcon from "./images/skillsIcon/kaboat.png";


// Social Icon
import githubIcon from "./images/contactIcon/github.svg";
import linkedinIcon from "./images/contactIcon/linkedin.png";
import googleScholarIcon from "./images/contactIcon/gscholar.png";

// Placeholder school wat
import UHLogo from "./images/school/UniversityOfHouston.webp";
import UHImg from "./images/school/UniversityOfHouston.webp";
import PNULogo from "./images/school/PusanNationalUniversity.webp";
import PNUImg from "./images/school/PusanNationalUniversity.webp";

// Placeholder work media 
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4";
import ecobee from "./images/workPhotos/ecobeeProduct.webp";
import ford from "./images/workPhotos/Ford.webp";
import bangujeong from "./images/workPhotos/Bangujeong.png"

// Helper function for getting text in current language
export const getText = (textObj, language = "en") => {
  if (typeof textObj === "string") return textObj;

  if (textObj && typeof textObj === "object") {
    return (
      textObj[language] ||
      textObj.en ||
      textObj.ko ||
      textObj.zh ||
      Object.values(textObj)[0] ||
      ""
    );
  }
  return textObj || "";
};

const siteData = {
  name: {
    en: "Hyundae Cha",
    ko: "차현대",
  },

  headerParagraph: {
    en: "Robotics / controls engineer with field deployment experience and upper-limb exoskeleton research in human-centered robotics.",
    ko: "필드 로봇 운영 경험과 상지 재활 로봇(엑소스켈레톤) 연구를 하는 로보틱스/제어 엔지니어입니다.",
  },

  // Navigation labels
  nav: {
    home: { en: "Home", ko: "홈" },
    about: { en: "About", ko: "소개" },
    work: { en: "Work", ko: "경험" },
    projects: { en: "Projects", ko: "프로젝트" },
    notes: { en: "Notes", ko: "공부노트" },
    contact: { en: "Contact", ko: "연락" },
    resume: { en: "Resume", ko: "이력서" },
  },

  // Section titles
  sections: {
    about: { en: "About", ko: "소개" },
    education: { en: "Education", ko: "학력" },
    internships: { en: "Experience", ko: "경험" },
    projects: { en: "Projects", ko: "프로젝트" },
    skills: { en: "Skills", ko: "기술" },
    contact: { en: "Contact", ko: "연락" },
  },

  buttons: {
    explore: { en: "Explore", ko: "자세히" },
    readMore: { en: "Read More", ko: "더 보기" },
    close: { en: "Close", ko: "닫기" },
  },

  // ✅ 너 이메일로 바꿔줘
  contactEmail: "hcha2@cougarnet.uh.edu",

  // About text
  aboutParaOne: {
    en: "I build reliable robot behaviors end-to-end—from on-site deployment and debugging to control logic and data analysis.",
    ko: "현장에서 로봇을 실제로 굴리며 디버깅하고, 제어 로직과 데이터 분석까지 ‘끝까지’ 만드는 걸 좋아합니다.",
  },
  aboutParaTwo: {
    en: "Recently, I have been working on upper-limb exoskeleton assessment (shoulder–elbow coupling, task protocol design, and control/measurement tooling).",
    ko: "최근에는 상지 엑소스켈레톤 기반 평가(shoulder–elbow 커플링, 태스크 프로토콜 설계, 제어/계측 툴링)를 진행하고 있습니다.",
  },
  aboutParaThree: {
    en: "I’m interested in humanoids and human-centered robotics—especially control, teleoperation, and robust system integration.",
    ko: "휴머노이드/인간-로봇 상호작용 분야에 관심이 많고, 특히 제어·텔레옵·시스템 통합을 포트폴리오로 보여주고 싶습니다.",
  },

  // Education (1~2개만 깔끔하게)
  education: [
    {
      title: { en: "University of Houston", ko: "University of Houston" },
      para: {
        en: "M.S. Biomedical Engineering (Human-centered robotics / Rehab robotics)",
        ko: "생체의공학 석사 (휴먼 센터드 로보틱스 / 재활 로보틱스)",
      },
      imageSrc: UHLogo, // placeholder
      workImg: UHImg, // placeholder
      url: "https://www.uh.edu/",
      description: [
        {
          en: "Research: upper-limb exoskeleton assessment, task protocol + control/measurement tooling",
          ko: "연구: 상지 엑소스켈레톤 평가, 태스크 프로토콜 + 제어/계측 툴링",
        },
        {
          en: "Tools: C++/Python, ROS, data analysis pipelines",
          ko: "툴: C++/Python, ROS, 데이터 분석 파이프라인",
        },
      ],
    },
    {
      title: { en: "Pusan National University", ko: "Pusan National University" },
      para: {
        en: "Bachelor of Naval Architecture and Ocean Engineering",
        ko: "Bachelor of Naval Architecture and Ocean Engineering",
      },
      imageSrc: PNULogo, // placeholder
      workImg: PNUImg, // placeholder
      url: "#",
      description: [
        {
          en: "Replace this block with your B.S. school/major when you want.",
          ko: "여기는 나중에 학부(학교/전공)로 교체하면 됩니다.",
        },
      ],
    },
  ],

  // Work / Experience cards (Work 섹션에서 카드로 표시 + 모달 상세)
  projects: [
    {
      title: { en: "Bear Robotics", ko: "Bear Robotics" },
      position: {
        en: "Robotics Field Engineer (Deployment & Support)",
        ko: "로보틱스 필드 엔지니어 (배포/운영/지원)",
      },
      para: {
        en: "Deployed and supported service robots at scale; resolved on-site issues and improved operational reliability.",
        ko: "서비스 로봇을 대규모로 운영/배포하며 현장 이슈를 해결하고 운영 안정성을 개선했습니다.",
      },
      imageSrc: BRIcon,
      url: "https://www.bearrobotics.ai",
      date: "2+ years",
      workImg: bangujeong, // placeholder media
      description: [
        {
          en: "Managed multi-robot environments, troubleshooting failures across HW/SW/ops.",
          ko: "멀티 로봇 환경에서 HW/SW/운영 관점의 장애를 트러블슈팅했습니다.",
        },
        {
          en: "Delivered customer-facing solutions: mapping, workflow optimization, remote monitoring/support.",
          ko: "맵핑/워크플로우 최적화/원격 모니터링 등 고객 현장 솔루션을 제공했습니다.",
        },
        {
          en: "Built playbooks and operational processes to reduce downtime and speed up recovery.",
          ko: "다운타임을 줄이고 복구 시간을 단축하는 운영 프로세스를 정리했습니다.",
        },
      ],
    },
    {
      title: { en: "Mission Connect / REIGN Lab", ko: "Mission Connect / REIGN Lab" },
      position: {
        en: "Research Engineer — Upper-limb Exoskeleton Assessment",
        ko: "리서치 엔지니어 — 상지 엑소스켈레톤 평가",
      },
      para: {
        en: "Designed task protocols and software tooling to quantify abnormal shoulder–elbow coupling in stroke survivors.",
        ko: "뇌졸중 대상자의 비정상 shoulder–elbow 커플링을 정량화하기 위한 프로토콜과 소프트웨어 툴을 만들고 있습니다.",
      },
      imageSrc: harmonyIcon,
      url: "/work/mission-connect/",
      date: "2025 – Present",
      workImg: IsaacSim, // placeholder media
      description: [
        {
          en: "Protocol design: dynamic tasks, onset/offset rules, repeatable measurement workflows.",
          ko: "프로토콜: 동적 태스크, onset/offset 룰, 재현 가능한 측정 워크플로우 설계",
        },
        {
          en: "Control tooling: posture lock / task transitions / unified keyboard control program.",
          ko: "제어 툴링: 자세 락 / 태스크 전환 / 키보드 통합 제어 프로그램",
        },
        {
          en: "Analysis: coupling metrics (angles/torques), regression trends, and visualization for reports.",
          ko: "분석: 각도/토크 커플링 지표, 회귀 분석, 리포트용 시각화",
        },
      ],
    },
    {
      title: { en: "KABOAT Competition", ko: "KABOAT 대회" },
      position: {
        en: "Autonomous Surface Vehicle — Jetson Nano Stack",
        ko: "자율운항 보트 — Jetson Nano 스택",
      },
      para: {
        en: "Built an end-to-end autonomy pipeline (sensor → perception → decision → control) on NVIDIA Jetson Nano.",
        ko: "NVIDIA Jetson Nano에서 센서→인지→판단→제어까지 자율운항 파이프라인을 구성했습니다.",
      },
      imageSrc: kaboatIcon,
      url: "/work/kaboat/",
      date: "Project / Competition",
      workImg: ecobee, // placeholder media
      description: [
        {
          en: "Implemented real-time pipeline and fail-safe logic for sensor dropouts/unstructured environments.",
          ko: "실시간 파이프라인과 센서 드롭아웃 대응/안전 로직을 구현했습니다.",
        },
        {
          en: "Integrated multiple sensors and tuned control behaviors for stable autonomous runs.",
          ko: "복수 센서를 통합하고 제어 행동을 튜닝해 안정적인 주행을 확보했습니다.",
        },
      ],
    },
  ],

  // Projects carousel (Projects 섹션 슬라이더) — media 키는 src/components/projects.js의 mediaMap에 맞춰야 함
  projectsCarouselItems: [
    {
      media: "harmonyVideo",
      type: "video",
      title: { en: "Unified Robot Control Program", ko: "통합 로봇 제어 프로그램" },
      subtitle: { en: "Keyboard-driven task state machine", ko: "키보드 기반 태스크 상태머신" },
      description: {
        en: "One program to handle posture capture, ramp-up/down, return-to-init, and joint-lock transitions.",
        ko: "자세 캡처, ramp-up/down, 초기 자세 복귀, 조인트 락 전환을 하나의 프로그램으로 통합.",
      },
      buttons: [
        { text: { en: "GitHub", ko: "깃허브" }, url: "https://github.com/superchd/harmonyshr" },
      ],
    },
    {
      media: "harmonywearableImg",
      type: "image",
      title: { en: "Harmony Exoskeleton Assessment", ko: "Harmony 엑소스켈레톤 평가" },
      subtitle: { en: "Shoulder–elbow coupling metrics", ko: "Shoulder–elbow 커플링 지표" },
      description: {
        en: "Task protocol + analysis pipeline to quantify abnormal synergy/coupling patterns in stroke survivors.",
        ko: "뇌졸중 대상자의 비정상 시너지/커플링 패턴을 정량화하는 프로토콜 + 분석 파이프라인.",
      },
      buttons: [],
    },
    {
      media: "bangujeongImage",
      type: "image",
      title: { en: "Multi-Robot Deployment", ko: "멀티 로봇 운영/배포" },
      subtitle: { en: "Operations + reliability", ko: "운영 + 안정성" },
      description: {
        en: "Scaled deployments with monitoring, mapping, and on-site troubleshooting workflows.",
        ko: "모니터링/맵핑/현장 트러블슈팅 워크플로우로 운영 확장.",
      },
      buttons: [],
    },
    {
      media: "logAnalysisImage", // <- 이 키는 projects.js의 mediaMap에 추가해야 함(아래 참고)
      type: "image",
      title: { en: "Field Log Analytics & Repair Playbook", ko: "필드 로그 분석 & 리페어 플레이북" },
      subtitle: { en: "Prevented 33 replacements ($20,460+ saved)", ko: "불필요 교체 33건 방지 ($20,460+ 절감)" },
      description: {
        en: "Authored repair + log-analysis manuals and built a structured triage workflow. Reduced unnecessary robot replacements by 33 cases and saved $20,460+ by diagnosing control anomalies from real-time logs and prescribing targeted fixes.",
        ko: "수리/로그 분석 매뉴얼과 트러블슈팅 워크플로우를 표준화했습니다. 실시간 로그 기반으로 제어 이상을 진단해 정확한 조치를 제시하여 불필요 교체 33건을 방지하고 $20,460+ 비용을 절감했습니다.",
      },
      buttons: [],
    },
    {
      media: "kaboatVideo",
      type: "video",
      title: { en: "Jetson Nano Autonomous Boat", ko: "Jetson Nano 자율운항 보트" },
      subtitle: { en: "Perception → decision → control", ko: "인지 → 판단 → 제어" },
      description: {
        en: "End-to-end autonomy stack and robust fallbacks for real-world trials.",
        ko: "현장 테스트를 위한 자율운항 스택과 안정적인 fallback 로직.",
      },
      buttons: [
         { text: { en: "GitHub", ko: "깃허브" }, url: "https://github.com/superchd/kaboat" }
      ],
    },

    {
      media: "cancerPredictionImg", 
      type: "image",
      title: { en: "Multimodal ML: 10-Year Survival (METABRIC)", ko: "멀티모달 ML: 10년 생존 예측 (METABRIC)" },
      subtitle: { en: "Clinical + CNA + Mutation early-fusion pipeline", ko: "Clinical + CNA + Mutation early-fusion 파이프라인" },
      description: {
        en: "Built a reproducible sklearn pipeline to predict 10-year overall survival using METABRIC clinical data + gene-level CNA (GISTIC) + mutation features. Compared LR / RF / GB / Linear SVM / XGBoost; best test AUC ~0.731 with XGBoost.",
        ko: "METABRIC 임상 + 유전자 단위 CNA(GISTIC) + 변이 데이터를 early-fusion으로 결합해 10년 전체생존을 예측하는 재현 가능한 sklearn 파이프라인을 구축. LR/RF/GB/Linear SVM/XGBoost 비교, XGBoost가 최고 성능(Test AUC≈0.731).",
      },
      buttons: [
        { text: { en: "Colab", ko: "Colab" }, url: "https://colab.research.google.com/drive/1Qz-nBU5eoGq7BrP-2o-a6_NwOLQOJX1K?usp=sharing" },
        { text: { en: "Dataset", ko: "데이터" }, url: "https://www.cbioportal.org/study/clinicalData?id=brca_metabric" },
      ],
    },
    {
      media: "watoImage",
      type: "image",
      title: { en: "Multi-Robot Deployment", ko: "멀티 로봇 운영/배포" },
      subtitle: { en: "Operations + reliability", ko: "운영 + 안정성" },
      description: {
        en: "Scaled deployments with monitoring, mapping, and on-site troubleshooting workflows.",
        ko: "모니터링/맵핑/현장 트러블슈팅 워크플로우로 운영 확장.",
      },
      buttons: [],
    },
    {
      media: "webappImg",
      type: "image",
      title: { en: "Teleoperation (Webcam Pose → Robot)", ko: "텔레옵 (웹캠 포즈 → 로봇)" },
      subtitle: { en: "Portfolio demo idea", ko: "포트폴리오 데모 아이디어" },
      description: {
        en: "Real-time webcam motion capture driving robot motion for intuitive demonstrations.",
        ko: "웹캠 모션 캡처로 로봇을 실시간 추종시키는 직관적인 데모.",
      },
      buttons: [],
    },
    {
      media: "mte380Img",
      type: "image",
      title: { en: "Data/ML Pipelines", ko: "데이터/ML 파이프라인" },
      subtitle: { en: "Biomedical datasets", ko: "바이오메디컬 데이터" },
      description: {
        en: "Clean, reproducible pipelines for prediction/analysis with clear reporting plots.",
        ko: "예측/분석을 위한 재현 가능한 파이프라인과 리포트용 플랏.",
      },
      buttons: [],
    },
  ],

  skills: [
    { img: clangIcon, para: "C/C++, Python, MATLAB" },
    { img: RosIcon, para: "ROS/ROS2, Linux, Git" },
    { img: openCVIcon, para: "Computer Vision (OpenCV), Sensors" },
    { img: RPIIcon, para: "Embedded/Edge (Jetson, MCU basics)" },
    { img: SolidworksIcon, para: "CAD/Prototyping (basic)" },
    { img: isaacsIcon, para: "Control, Simulation, System Integration" },
    { img: airplaneIcon, para: "Autonomy (Perception→Decision→Control)" },
    { img: codeIcon, para: "Field debugging & ops playbooks" },
  ],

  contactSubHeading: {
    en: "Let’s build something reliable.",
    ko: "같이 ‘진짜 돌아가는’ 걸 만들어봅시다.",
  },

  // ✅ 링크는 너 걸로 바꿔줘
  social: [
    { img: githubIcon, url: "https://github.com/superchd" },
    // 필요 없으면 지워도 됨
    { img: linkedinIcon, url: "https://www.linkedin.com/in/hyundaecha/" },
  ],
};

export default siteData;
