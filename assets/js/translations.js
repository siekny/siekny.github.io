const i18n = {
  en: {
    nav_home: 'Home', nav_about: 'About', nav_resume: 'Resume',
    nav_portfolio: 'Portfolio', nav_contact: 'Contact',

    breadcrumb_home: 'Home', breadcrumb_category: 'Category',
    breadcrumb_current: 'Portfolio Details',

    hero_title: 'Researcher & Developer with Passion',
    hero_subtitle: 'Transforming ideas into solutions through development',
    hero_btn_work: 'View My Work', hero_btn_connect: "Let's Connect",

    section_about: 'About',
    about_bio: 'I have experience in Web development and Android mobile application development, computer vision and deep learning, specializing in human detection, 3D pose estimation, object detection, image classification, image translation. As a researcher, I am passionate about advancing deep learning technologies and software solutions.',
    about_subtitle: 'About Me', about_heading: 'Research & Develop',
    about_lead: 'I am passionate about AI technologies such as deep learning and computer vision, as well as software development, to build impactful, real-world products and services.',
    label_name: 'Name', label_phone: 'Phone', label_age: 'Age',
    label_email: 'Email', label_nationality: 'Nationality', val_nationality: 'Cambodia',

    section_resume: 'Resume', resume_work: 'Work Experience',
    job1_period: 'Nov, 2025 - Present', job1_pos: 'AI Developer',
    job1_desc: 'Built a fully offline and online-capable AI voice assistant embedded in a Poomsae training kiosk. Users interact with the application — controlling screen navigations, asking their performance records, and general questions about poomsae by voice.',
    job2_period: 'Sep, 2024 - Mar, 2025', job2_pos: 'AI Researcher',
    job2_desc: 'Explored advanced deep learning techniques for image translation and developed deep learning models to reconstruct CT scans from X-ray images. Evaluation focused on the lung region and structures such as nodules.',
    job3_period: 'Feb, 2020 - Jun, 2021', job3_pos: 'IT Instructor',
    job3_li1: 'Regularly update course materials to align with emerging technologies and evolving curriculum needs.',
    job3_li2: 'Responsible for teaching Java programming, SQL database management, and React Native mobile app development.',
    job3_li3: 'Design and implement curriculums to equip students with up-to-date technical skills.',
    job3_li4: "Review and provide feedback on students' work.",
    job4_period: 'Sep, 2020 - Dec, 2020', job4_pos: 'Sister of Code Mentor',
    job4_desc: 'Delivering a three-module coding program covering:',
    job4_li1: 'Visual Coding using Code.org.', job4_li2: 'Game Development with Scratch.',
    job4_li3: 'Website Development with HTML/CSS and Wix.',
    job5_period: 'Feb, 2018 - Mar, 2019', job5_pos: 'Web Designer (Part-time)',
    job5_desc: 'Developed comprehensive style guides on visual elements such as colors, fonts, and imagery usage guidelines.',

    resume_edu: 'My Education',
    edu1_period: '2022 - 2024', edu1_pos: 'Master of Artificial Intelligence',
    edu1_desc: 'Research Interest in "Deep Learning, Computer Vision, Object Detection, 3D Hand Pose Estimation". Thesis on "Rethinking Fast and Accurate 3D Hand Pose Estimation", a lightweight graph-based network optimized for both accuracy and efficiency in 3D single-hand pose estimation.',
    edu2_period: '2016 - 2020', edu2_pos: 'Computer Science',
    edu2_desc: 'Specialize in Software development.',

    resume_training: 'Training Program',
    train1_period: '2021 - 2022', train1_pos: 'Korean Language Program',
    train1_li1: 'Be able to hold daily conversations in Korean.',
    train1_li2: 'Achieve TOPIK Level 4.',
    train2_period: '2019 - 2020', train2_pos: 'Software Development Training',
    train2_li1: 'Complete a full-time course with lectures, lab research, hands-on practice, tests, and project development.',
    train2_li2: 'Developed a web project using HTML, CSS (frontend), PostgreSQL, and Spring Boot (backend).',
    train2_li3: 'Worked on an Android mobile app using Java.',

    section_portfolio: 'Portfolio',
    filter_all: 'All Work', filter_ai: 'AI Research',
    filter_web: 'Web Development', filter_mobile: 'Mobile Development',
    proj1_cat: 'AI Research', proj1_title: 'AI Voice Agent',
    proj1_desc: 'Built a fully offline and online-capable AI voice assistant embedded in a Poomsae training kiosk. Users interact with the entire application — selecting modes, controlling practice sessions, and asking coaching questions — entirely by voice.',
    proj2_cat: 'AI Research', proj2_title: 'CT Reconstruction from X-Ray Images',
    proj2_desc: 'Developing a deep learning model to reconstruct CT scan from X-ray images.',
    proj3_cat: 'AI Research', proj3_title: '3D Pose Estimation',
    proj3_desc: 'A lightweight graph-based network optimized for both accuracy and efficiency in 3D single-hand pose estimation.',
    proj4_cat: 'AI Research', proj4_title: 'Human Detection',
    proj4_desc: 'An efficient real-time human detection model that accurately predicts occlusions and detects small humans.',
    proj5_cat: 'Web Development', proj5_title: 'MyAlumni',
    proj5_desc: 'A comprehensive web application for alumni information, designed to efficiently handle and organize alumni records.',
    proj6_cat: 'Mobile Development', proj6_title: 'MathForum Android App',
    proj6_desc: 'A mobile app that connects students in an online math community, allowing them to share knowledge and find solutions quickly and reliably.',

    section_contact_label: 'Contact',
    contact_heading: 'Any more questions about me?',
    contact_lead: 'Email us with any questions or inquiries or call. We would be happy to answer your questions.',
    contact_submit: 'Submit Message',
    contact_sent: 'Your message has been sent. Thank you!',
    placeholder_name: 'Your Name', placeholder_email: 'Your Email',
    placeholder_subject: 'Subject', placeholder_message: 'Message',

    va_title: 'AI Voice Agent',
    va_subtitle: 'Developing an AI voice assistant for a Poomsae training kiosk.',
    va_intro_heading: 'Introduction',
    va_intro: 'Developed an embedded AI voice assistant for a poomsae training kiosk that allows users to navigate the application, control practice sessions, and ask coaching questions entirely by voice — running on a Windows kiosk with internet dependency.',
    va_li1: 'Designed a 5-stage voice pipeline (IDLE → WAKEWORD → LISTENING → THINKING → SPEAKING) as a background daemon thread, exposing a single event callback to the UI layer',
    va_li2: 'Every component (STT, LLM, TTS) has a local and cloud implementation behind a unified interface',
    va_li3: 'Integrated the agent into a PySide6/QML application - no cloud wake word service needed',
    va_wakeword_heading: 'Wake Word & Speech',
    va_li4: 'Built a custom on-device wake word detector',
    va_li5: 'Implemented barge-in interruption',
    va_llm_heading: 'LLM & RAG',
    va_li6: 'Designed a task classifier that routes user speech into intents before dispatching to the appropriate agent',
    va_li7: 'Built a RAG coaching QA system',
    va_li8: "Built a RecommendationEngine that queries the user's local DB training history on login and uses the LLM to generate a personalized next-step greeting.",

    ct_title: 'CT Reconstruction from X-Ray Images',
    ct_subtitle: 'Developing a deep learning model to reconstruct CT scan from X-ray images.',
    ct_summary_heading: 'Summary',
    ct_summary: 'CT scans are more essential for accurate disease diagnosis, offering detailed 3D information. However, they are significantly more expensive than X-ray machines, making them less accessible in clinical settings. In this work, we propose a method called XR2CT to reconstruct CT images from a single X-ray using a GAN-based approach. Our method includes a 2D mapping network and a 3D encoder-decoder. Through qualitative and quantitative evaluations, our model demonstrates improved structural accuracy compared to existing methods.',
    ct_intro_heading: 'Introduction',
    ct_intro: 'X-ray and CT imaging are commonly used in hospitals. CT scans offer a significant advantage by presenting tissues in 3D, effectively resolving the tissue of overlapping structures seen in 2D imaging. However, CT scans are expensive and require extensive infrastructure, making them inaccessible in resource-limited areas. X-rays are cheaper and more widely available, but provide limited 2D anatomical information, which can obstruct accurate diagnosis.',
    ct_read_paper: 'Read our paper. (Note that we use only a single X-ray as input).',

    pose_title: '3D Pose Estimation',
    pose_subtitle: 'A lightweight graph-based network optimized for both accuracy and efficiency in 3D single-hand pose estimation.',
    pose_summary_heading: 'Summary',
    pose_summary: 'Hand pose estimation has gained significant interest recently, leading to the development of various methods. While existing approaches aim to improve performance, they often encounter efficiency challenges which make it hard to run in real-time. We propose a lightweight graph-based network using Chebyshev Graph Convolutions (ChebGConv). Our model has only 8.48M parameters and requires 1.7 GFLOPS, achieving 55 FPS on a CPU and 109 FPS on a GPU.',
    pose_intro_heading: 'Introduction',
    pose_intro: 'Single-hand pose estimation has seen substantial success across various fields, including industrial applications, primarily due to advancements in deep network architectures. Recent mesh reconstruction algorithms are typically trained end-to-end from the input image to the output mesh. While these methods have enhanced performance, they often demand greater computational resources and increased complexity.',
    pose_read_paper: 'Read our paper. (Coming soon)',
  },

  ko: {
    nav_home: '홈', nav_about: '소개', nav_resume: '이력서',
    nav_portfolio: '포트폴리오', nav_contact: '연락처',

    breadcrumb_home: '홈', breadcrumb_category: '카테고리',
    breadcrumb_current: '포트폴리오 상세',

    hero_title: '연구 & 개발',
    hero_subtitle: '개발을 통해 아이디어를 솔루션으로 변환합니다',
    hero_btn_work: '작업물 보기', hero_btn_connect: '연락하기',

    section_about: '소개',
    about_bio: '컴퓨터 비전 및 딥러닝 분야의 경험을 보유하고 있으며, 음성 에이전트, 인체 탐지, 3D 자세 추정, 객체 탐지, 이미지 분류 경험 쌓았습니다. 연구자로서 딥러닝 기술과 솔루션의 발전에 열정을 갖고 있습니다.',
    about_subtitle: '저에 대해', about_heading: '연구 & 개발',
    about_lead: '저는 딥러닝, 컴퓨터 비전 등 AI 기술과 소프트웨어 개발에 열정을 갖고 있으며, 실질적인 영향력 있는 제품 및 서비스를 만들기 위해 노력합니다.',
    label_name: '이름', label_phone: '전화번호', label_age: '나이',
    label_email: '이메일', label_nationality: '국적', val_nationality: '캄보디아',

    section_resume: '이력서', resume_work: '경력',
    job1_period: '2025년 11월 - 현재', job1_pos: 'AI 개발자',
    job1_desc: '품새 훈련 키오스크에 탑재된 오프라인/온라인 겸용 AI 음성 어시스턴트를 개발했습니다. 사용자는 화면 탐색, 훈련 기록 조회, 품새 관련 질문을 모두 음성으로 처리합니다.',
    job2_period: '2024년 9월 - 2025년 3월', job2_pos: 'AI 연구원',
    job2_desc: '이미지 변환을 위한 고급 딥러닝 기법을 탐구하고, X선 영상에서 CT 스캔을 재구성하는 딥러닝 모델을 개발했습니다. 폐 영역 및 결절 구조를 중심으로 모델 성능을 평가했습니다.',
    job3_period: '2020년 2월 - 2021년 6월', job3_pos: 'IT 강사',
    job3_li1: '최신 기술 동향에 맞게 강의 자료를 정기적으로 업데이트했습니다.',
    job3_li2: 'Java 프로그래밍, SQL 데이터베이스 관리, React Native 모바일 앱 개발을 가르쳤습니다.',
    job3_li3: '학생들이 최신 기술을 습득할 수 있도록 커리큘럼을 설계하고 구현했습니다.',
    job3_li4: '학생 과제물을 검토하고 피드백을 제공했습니다.',
    job4_period: '2020년 9월 - 2020년 12월', job4_pos: '코딩 멘토',
    job4_desc: '세 가지 모듈로 구성된 코딩 프로그램을 진행했습니다:',
    job4_li1: 'Code.org를 활용한 비주얼 코딩.',
    job4_li2: 'Scratch를 활용한 게임 개발.',
    job4_li3: 'HTML/CSS와 Wix를 활용한 웹사이트 개발.',
    job5_period: '2018년 2월 - 2019년 3월', job5_pos: '웹 디자이너 (파트타임)',
    job5_desc: '색상, 글꼴, 이미지 활용 지침 등 시각적 요소에 대한 종합적인 스타일 가이드를 개발했습니다.',

    resume_edu: '학력',
    edu1_period: '2022 - 2024', edu1_pos: '인공지능 석사',
    edu1_desc: '"딥러닝, 컴퓨터 비전, 객체 탐지, 3D 손 자세 추정" 연구. 논문: "3D 손 자세 추정의 속도와 정확도 재고찰" — 정확도와 효율성을 최적화한 경량 그래프 기반 네트워크.',
    edu2_period: '2016 - 2020', edu2_pos: '컴퓨터 공학',
    edu2_desc: '소프트웨어 개발 전공.',

    resume_training: '교육 프로그램',
    train1_period: '2021 - 2022', train1_pos: '한국어 교육 프로그램',
    train1_li1: '일상 회화 수준의 한국어 구사 능력 습득.',
    train1_li2: 'TOPIK 4급 취득.',
    train2_period: '2019 - 2020', train2_pos: '소프트웨어 개발 교육',
    train2_li1: '강의, 실습, 테스트, 프로젝트 개발을 포함한 전일제 과정 수료.',
    train2_li2: 'HTML, CSS (프론트엔드), PostgreSQL, Spring Boot (백엔드)를 사용한 웹 프로젝트 개발.',
    train2_li3: 'Java를 사용한 안드로이드 모바일 앱 개발.',

    section_portfolio: '포트폴리오',
    filter_all: '전체', filter_ai: 'AI 연구',
    filter_web: '웹 개발', filter_mobile: '모바일 개발',
    proj1_cat: 'AI 연구', proj1_title: 'AI 음성 에이전트',
    proj1_desc: '품새 훈련 키오스크에 탑재된 오프라인/온라인 겸용 AI 음성 어시스턴트를 개발했습니다. 모드 선택, 연습 세션 제어, 코칭 질문을 모두 음성으로 처리합니다.',
    proj2_cat: 'AI 연구', proj2_title: 'X선 영상에서 CT 재구성',
    proj2_desc: 'X선 영상에서 CT 스캔을 재구성하는 딥러닝 모델을 개발합니다.',
    proj3_cat: 'AI 연구', proj3_title: '3D 자세 추정',
    proj3_desc: '3D 단일 손 자세 추정에서 정확도와 효율성을 모두 최적화한 경량 그래프 기반 네트워크.',
    proj4_cat: 'AI 연구', proj4_title: '인체 탐지',
    proj4_desc: '가림 현상을 정확히 예측하고 작은 사람도 탐지하는 효율적인 실시간 인체 탐지 모델.',
    proj5_cat: '웹 개발', proj5_title: '동문 관리 시스템',
    proj5_desc: '동문 정보를 효율적으로 관리하고 정리하는 종합 웹 애플리케이션.',
    proj6_cat: '모바일 개발', proj6_title: '수학 포럼 안드로이드 앱',
    proj6_desc: '학생들이 온라인 수학 커뮤니티에서 지식을 공유하고 신뢰성 있게 해결책을 찾을 수 있는 모바일 앱.',

    section_contact_label: '연락처',
    contact_heading: '저에 대해 더 궁금한 점이 있으신가요?',
    contact_lead: '이메일이나 전화로 문의해 주세요. 친절하게 답변드리겠습니다.',
    contact_submit: '메시지 보내기',
    contact_sent: '메시지가 전송되었습니다. 감사합니다!',
    placeholder_name: '이름', placeholder_email: '이메일',
    placeholder_subject: '제목', placeholder_message: '메시지',

    va_title: 'AI 음성 에이전트',
    va_subtitle: 'AI 음성 어시스턴트를 품새 훈련 키오스크에 탑재하는 개발 프로젝트입니다.',
    va_intro_heading: '소개',
    va_intro: '품새 훈련 키오스크에 탑재된 AI 음성 어시스턴트를 개발했습니다. 사용자는 앱 탐색, 연습 세션 제어, 코칭 질문을 모두 음성으로 처리할 수 있으며, 인터넷 연결 여부와 관계없이 동작합니다.',
    va_li1: '5단계 음성 파이프라인(IDLE → WAKEWORD → LISTENING → THINKING → SPEAKING)을 백그라운드 데몬 스레드로 설계, UI 레이어에 단일 이벤트 콜백 제공',
    va_li2: '모든 구성 요소(STT, LLM, TTS)는 통합 인터페이스 뒤에 로컬 및 클라우드 구현을 보유',
    va_li3: 'PySide6/QML 애플리케이션에 에이전트 통합 — 클라우드 웨이크 워드 서비스 불필요',
    va_wakeword_heading: '웨이크 워드 & 음성',
    va_li4: '온디바이스 커스텀 웨이크 워드 감지기 개발',
    va_li5: '끼어들기(barge-in) 인터럽션 구현',
    va_llm_heading: 'LLM & RAG',
    va_li6: '사용자 음성을 의도로 분류하여 적절한 에이전트로 라우팅하는 태스크 분류기 설계',
    va_li7: 'RAG 기반 코칭 QA 시스템 개발',
    va_li8: '로그인 시 사용자의 훈련 기록을 조회하고 LLM으로 개인 맞춤형 안내를 생성하는 추천 엔진 개발.',

    ct_title: 'X선 영상에서 CT 재구성',
    ct_subtitle: 'X선 영상에서 CT 스캔을 재구성하는 딥러닝 모델을 개발합니다.',
    ct_summary_heading: '요약',
    ct_summary: 'CT 스캔은 정확한 질병 진단에 필수적이며 상세한 3D 정보를 제공합니다. 그러나 X선 장비보다 비용이 훨씬 높아 의료 현장에서 접근하기 어렵습니다. 이 연구에서는 GAN 기반 접근 방식을 사용하여 단일 X선 영상에서 CT 이미지를 재구성하는 XR2CT 방법을 제안합니다. 기존 방법 대비 향상된 구조적 정확도를 보입니다.',
    ct_intro_heading: '소개',
    ct_intro: 'X선과 CT 촬영은 병원에서 일반적으로 사용됩니다. CT는 3D로 조직을 제시하여 2D 영상의 중첩 구조 문제를 효과적으로 해결합니다. 그러나 비용이 높고 의료 자원이 부족한 지역에서는 이용하기 어렵습니다. X선은 저렴하고 널리 이용 가능하지만 제한된 2D 정보만 제공합니다.',
    ct_read_paper: '논문을 읽어보세요. (단일 X선만 입력으로 사용합니다.)',

    pose_title: '3D 자세 추정',
    pose_subtitle: '3D 단일 손 자세 추정에서 정확도와 효율성을 모두 최적화한 경량 그래프 기반 네트워크.',
    pose_summary_heading: '요약',
    pose_summary: '손 자세 추정은 최근 많은 관심을 받고 있으며 다양한 방법이 개발되었습니다. 기존 방법들은 실시간 처리가 어려운 효율성 문제에 자주 직면합니다. 이 연구에서는 Chebyshev Graph Convolutions(ChebGConv)을 활용한 경량 그래프 기반 네트워크를 제안합니다. 모델은 8.48M 파라미터와 1.7 GFLOPS로 CPU에서 55 FPS, GPU에서 109 FPS를 달성합니다.',
    pose_intro_heading: '소개',
    pose_intro: '단일 손 자세 추정은 심층 네트워크 아키텍처의 발전으로 다양한 분야에서 큰 성공을 거두었습니다. 최근 메시 재구성 알고리즘은 입력 이미지에서 출력 메시까지 엔드투엔드로 학습됩니다. 이러한 방법들은 성능을 향상시켰지만 더 많은 계산 자원과 복잡성을 요구합니다.',
    pose_read_paper: '논문을 읽어보세요. (출시 예정)',
  }
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = i18n[lang] && i18n[lang][el.getAttribute('data-i18n')];
    if (!text) return;
    if (el.children.length === 0) {
      el.textContent = text;
    } else {
      for (const node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = ' ' + text;
          return;
        }
      }
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = i18n[lang] && i18n[lang][el.getAttribute('data-i18n-placeholder')];
    if (text) el.placeholder = text;
  });
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );
  applyLang(localStorage.getItem('lang') || 'en');
});
