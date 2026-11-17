const i18n = {
  en: {
    nav_home: 'Home', nav_about: 'About', nav_resume: 'Resume',
    nav_portfolio: 'Portfolio', nav_contact: 'Contact',

    breadcrumb_home: 'Home', breadcrumb_category: 'Portfolio',
    breadcrumb_current: 'Portfolio Details',

    hero_title: 'AI Engineer: Computer Vision, LLM & AI Agent',
    hero_subtitle: 'Transforming ideas into solutions through development',
    hero_btn_work: 'View My Work', hero_btn_connect: "Let's Connect",

    section_about: 'About',
    about_bio: 'I am an AI developer with experience in computer vision, deep learning and, most recently, LLM-based voice agents. I have worked on human detection, 3D pose estimation, object detection, classification and image translation, and I built a voice coach that combines speech recognition, RAG and speech synthesis.',
    about_subtitle: 'About Me', about_heading: 'Research & Develop',
    about_lead: 'I am passionate about AI technologies such as deep learning, computer vision and LLMs, as well as software development, to build impactful, real-world products and services.',
    label_name: 'Name', label_phone: 'Phone', label_age: 'Age',
    label_email: 'Email', label_nationality: 'Nationality', val_nationality: 'Cambodia',

    section_resume: 'Resume', resume_work: 'Work Experience',
    job1_period: 'Nov, 2025 - Present', job1_pos: 'AI Developer',
    job1_desc: 'Developing an AI system that coaches Taekwondo poomsae practice: it recognises and scores each movement and gives feedback. I am responsible for its AI voice coaching agent.',
    job1_li1: 'Built a hands-free voice coach: users control the app and ask about their training records and Taekwondo while they practise.',
    job1_li2: 'Designed the speech pipeline: custom wake word, streaming speech-to-text, barge-in and streaming text-to-speech, with automatic fallback to on-device models.',
    job1_li3: 'Built rules-first LLM routing and RAG coaching over each user\'s records and a Taekwondo knowledge base.',
    job1_li4: "Contributed to the app's screens and coach character animations.",
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
    train2_period: '2019 - 2020', train2_pos: 'Software Development Training',
    train2_li1: 'Complete a full-time course with lectures, lab research, hands-on practice, tests, and project development.',
    train2_li2: 'Developed a web project using HTML, CSS (frontend), PostgreSQL, and Spring Boot (backend).',
    train2_li3: 'Worked on an Android mobile app using Java.',

    section_portfolio: 'Portfolio',
    portfolio_intro: 'Selected projects in AI engineering, AI research and software development.',
    proj_view: 'View project', proj_preview: 'View image',
    filter_all: 'All Work', filter_eng: 'AI Engineering', filter_ai: 'AI Research',
    filter_web: 'Web Development', filter_mobile: 'Mobile Development',
    proj1_cat: 'AI Engineering', proj1_title: 'AI Voice Coaching Agent',
    proj1_desc: 'The hands-free voice coach of a Taekwondo coaching system. Users control the app and ask about their training by voice, and get answers from their own records and a Taekwondo knowledge base.',
    proj2_cat: 'AI Research', proj2_title: 'CT Reconstruction from X-Ray Images',
    proj2_desc: 'XR2CT: a GAN-based model that reconstructs a 3D CT volume from a single X-ray image, with improved structural accuracy over existing methods.',
    proj3_cat: 'AI Research', proj3_title: '3D Hand Pose Estimation',
    proj3_desc: 'A lightweight graph network for 3D single-hand pose estimation: 8.48M parameters, running at 55 FPS on a CPU and 109 FPS on a GPU.',
    proj4_cat: 'AI Research', proj4_title: 'Human Detection',
    proj4_desc: 'A real-time human detection model that predicts occluded people and detects small humans.',
    proj5_cat: 'Web Development', proj5_title: 'MyAlumni',
    proj5_desc: 'A web application that stores and organises alumni records.',
    proj6_cat: 'Mobile Development', proj6_title: 'MathForum Android App',
    proj6_desc: 'An Android app where students share math knowledge and find solutions in an online community.',

    section_contact_label: 'Contact',
    contact_heading: 'Any more questions about me?',
    contact_lead: 'Email or call me with any questions or inquiries. I would be happy to answer them.',
    contact_submit: 'Submit Message',
    contact_sent: 'Your message has been sent. Thank you!',
    placeholder_name: 'Your Name', placeholder_email: 'Your Email',
    placeholder_subject: 'Subject', placeholder_message: 'Message',

    va_title: 'AI Voice Coaching Agent',
    va_subtitle: 'A hands-free AI voice coach for a Taekwondo coaching system.',
    va_diagram_caption: 'One voice turn, from the wake phrase to the spoken reply.',
    va_overview_heading: 'Overview',
    va_problem: 'Students practising poomsae had to stop, walk back to the screen and touch it to pause, retry or read their feedback, which broke their practice. Touch menus also could not answer questions such as "Which movement did I do worst?"',
    va_solution: 'I built a voice coach that listens from a few metres away. Users control the whole app by voice and ask about their own training records and Taekwondo knowledge. The coach answers by voice while the screen follows what it says.',
    va_pipeline_heading: 'Voice Pipeline',
    va_li1: 'Designed a real-time pipeline (wake word → speech detection → speech-to-text → routing → LLM/RAG → text-to-speech) that runs in the background and reports its state to the UI.',
    va_li4: 'Trained a custom on-device wake-word model for the phrase "Hi ○○", so no cloud wake-word service is needed.',
    va_li9: 'Detects the end of a sentence with voice activity detection plus an end-of-turn model, so users can pause mid-sentence without being cut off.',
    va_li5: "Barge-in: users can interrupt the coach mid-sentence. Echo cancellation (WebRTC AEC3) removes the coach's own voice from the microphone so the user is still heard.",
    va_li2: 'Online by default with cloud speech and LLM services; switches automatically to on-device models (speech-to-text, LLM, text-to-speech) when there is no internet.',
    va_llm_heading: 'LLM & RAG',
    va_li6: 'Rules-first routing: common commands are matched instantly by rules, and only unclear sentences go to the LLM.',
    va_li7: 'RAG coaching over each user\'s own training records and a Taekwondo knowledge base (competition rules, curriculum, form guides and a terminology glossary). Answers are grounded in the retrieved documents; the coach asks back when a question is unclear and handles follow-up questions.',
    va_li8: 'At login, the coach reviews the user\'s sessions and greets them with a personalised recommendation for what to practise next.',
    va_app_heading: 'Highlights',
    va_li10: 'A typed chat panel that uses the same question-answering engine.',
    va_info_heading: 'At a Glance',
    va_info_role_label: 'Role', va_info_role: 'AI Developer, responsible for the voice agent end to end',
    va_info_period_label: 'Period', va_info_period: 'Nov 2025 – Present',
    va_info_platform_label: 'Platform', va_info_platform: 'Windows app (Python, PySide6/QML)',
    va_info_stack_label: 'Tech Stack',

    ct_title: 'CT Reconstruction from X-Ray Images',
    ct_subtitle: 'Developing a deep learning model to reconstruct CT scan from X-ray images.',
    ct_summary_heading: 'Summary',
    ct_summary: 'CT scans are more essential for accurate disease diagnosis, offering detailed 3D information. However, they are significantly more expensive than X-ray machines, making them less accessible in clinical settings. In this work, we propose a method called XR2CT to reconstruct CT images from a single X-ray using a GAN-based approach. Our method includes a 2D mapping network and a 3D encoder-decoder. Through qualitative and quantitative evaluations, our model demonstrates improved structural accuracy compared to existing methods.',
    ct_intro_heading: 'Introduction',
    ct_intro: 'X-ray and CT imaging are commonly used in hospitals. CT scans offer a significant advantage by presenting tissues in 3D, effectively resolving the tissue of overlapping structures seen in 2D imaging. However, CT scans are expensive and require extensive infrastructure, making them inaccessible in resource-limited or underserved areas. In contrast, X-rays are cheaper and more widely available imaging modality, but providing limited 2D anatomical information, which can obstruct accurate diagnosis. In this work, we propose a method to reconstruct a 3D CT volume from a single X-ray captured from an orthogonal plane. The major challenge in reconstruction is the ambiguity inherent in X-ray imaging, multiple different 3D CT volume can produce the same 2D X-ray when projected. Existing method, such as X2CT-GAN[1], used generative adversarial networks (GANs) for CT reconstruction, demonstrating promising results. However, it loses high-frequency details and produces low-resolution outputs due to the challenges of inverse imaging problems. To address these issues and enhance reconstruction performance, we introduce a method called XR2CT: Reconstruction CT from a Single X-Ray view with GAN. Our method uses a single frontal X-ray image as input and incorporates an initial template CT to guide the 3D network. The generated 3D CT volumes are then passed into the discriminator for improved fidelity.',
    ct_read_paper: 'Read our paper. (Note that we use only a single X-ray as input).',

    pose_title: '3D Hand Pose Estimation',
    pose_subtitle: 'A lightweight graph-based network optimized for both accuracy and efficiency in 3D single-hand pose estimation.',
    pose_summary_heading: 'Summary',
    pose_summary: 'Hand pose estimation has gained significant interest recently, leading to the development of various methods. While existing approaches aim to improve performance, they often encounter efficiency challenges which make it hard to run in real-time. We propose a lightweight graph-based network using Chebyshev Graph Convolutions (ChebGConv). Our model has only 8.48M parameters and requires 1.7 GFLOPS, achieving 55 FPS on a CPU and 109 FPS on a GPU.',
    pose_intro_heading: 'Introduction',
    pose_intro: 'Single-hand pose estimation has seen substantial success across various fields, including industrial applications, primarily due to advancements in deep network architectures. Recent mesh reconstruction algorithms [8, 10, 31, 41, 49, 54] are typically trained end-to-end from the input image to the output mesh. While these methods have enhanced performance, they often demand greater computational resources and increased complexity. Previous works [8, 53] have demonstrated that CNN-based structure information is critical for learning feature representations for 3D hand pose estimation. However, the CNN-based method is weak in precisely modeling the kinematic structure information. To better model the kinematic structure information, several studies [41, 49, 54, 71] employ attention mechanism in the transformer to capture the global visual information over the entire feature representation. This allows interactions among all nodes, thereby modeling their relations. However, the self-attention builds upon calculating similarities of nodes and ignores the graph structure information, such as the adjacency relations among nodes ...',
    pose_read_paper: 'Read our paper. (Coming soon)',

    // Labels, tags, image addresses and descriptions
    title_home: 'Siekny Hor – AI Engineer',
    title_va: 'AI Voice Coaching Agent – Siekny Hor',
    title_ct: 'CT Reconstruction from X-Ray Images – Siekny Hor',
    title_pose: '3D Hand Pose Estimation – Siekny Hor',
    alt_hero: 'Portrait of Siekny Hor',
    alt_about: 'Illustration of a cat coding at a desk',
    age_format: '{n} years old',
    skill_ml: 'Machine / Deep Learning',
    skill_voice: 'Voice Agent',
    skill_speech: 'Speech (STT / TTS)',
    skill_imgtrans: 'Image Translation',
    skill_pose: 'Pose Estimation',
    skill_det: 'Detection',
    skill_cls: 'Classification',
    co1: 'ZerOneDay ((주) 제로원데이), South Korea',
    co2: 'Samsung Medical Center (삼성서울병원 미래의학연구원), South Korea',
    co3: 'Korea Software HRD Center, Cambodia',
    co4: 'Sister of Code, Cambodia',
    edu1_org: 'Ulsan National Institute of Science and Technology (울산과학기술원)',
    edu2_org: 'Royal University of Phnom Penh',
    train1_org: 'SeoKyeong University (서경대학교)',
    tag_deep_learning: 'Deep Learning',
    tag_medical: 'Medical Imaging',
    tag_gnn: 'Graph Neural Network',
    tag_realtime: 'Real-time',
    tag_cv: 'Computer Vision',
    tag_od: 'Object Detection',
    tag_webapp: 'Web App',
    tag_android: 'Android',
    tag_mobile: 'Mobile App',
    tag_cloud_llm: 'Cloud LLM',
    tag_device_llm: 'On-device LLM',
    tag_cloud_stt: 'Cloud STT',
    tag_device_stt: 'On-device STT',
    tag_cloud_tts: 'Cloud TTS',
    tag_device_tts: 'On-device TTS',
    img_card_va: 'assets/img/portfolio/ai-voice-coaching-agent.svg',
    img_pipeline: 'assets/img/portfolio/voice-agent-pipeline.svg',
    alt_card1: 'A student in a Taekwondo stance asks a question by voice, and the monitor shows the coach\'s answer',
    alt_card2: 'X-ray images reconstructed into a 3D CT volume',
    alt_card3: '3D hand pose predictions on hand images',
    alt_card4: 'Human detection results on street scenes',
    alt_card5: 'MyAlumni web application screens',
    alt_card6: 'MathForum Android app screens',
    alt_pipeline: 'Voice agent pipeline: wake word, speech detection, speech-to-text, a rules-first router, then screen control or RAG coaching, and a spoken reply. Cloud models online, on-device models offline; the user can interrupt the reply.',
    aria_preview: 'Preview image',
    aria_details: 'Project details',
    aria_breadcrumb: 'breadcrumb',
    contact_address: 'Bongcheon-dong, Gwanak-gu, Seoul, South Korea',
    contact_loading: 'Loading',
    footer_rights: 'All Rights Reserved',
    theme_toggle: 'Dark mode',
    logo: 'SNH',
    name_full: 'Siekny Hor',
    scroll_top: 'Back to top',
    scroll_down: 'Scroll to bottom',
    ct_axial: 'Axial',
    ct_coronal: 'Coronal',
    ct_sagittal: 'Sagittal',
  },

  ko: {
    nav_home: '홈', nav_about: '소개', nav_resume: '이력서',
    nav_portfolio: '포트폴리오', nav_contact: '연락처',

    breadcrumb_home: '홈', breadcrumb_category: '포트폴리오',
    breadcrumb_current: '포트폴리오 상세',

    hero_title: 'AI 엔지니어: 컴퓨터 비전, LLM & AI 에이전트',
    hero_subtitle: '개발을 통해 아이디어를 솔루션으로 변환합니다',
    hero_btn_work: '작업물 보기', hero_btn_connect: '연락하기',

    section_about: '소개',
    about_bio: '컴퓨터 비전과 딥러닝, 그리고 최근에는 LLM 기반 음성 에이전트 분야의 경험을 갖춘 AI 개발자입니다. 인체 탐지, 3D 자세 추정, 객체 탐지, 분류, 이미지 변환을 연구했고, 음성 인식·RAG·음성 합성을 결합한 음성 코치를 개발했습니다.',
    about_subtitle: '저에 대해', about_heading: '연구 & 개발',
    about_lead: '저는 딥러닝, 컴퓨터 비전, LLM 등 AI 기술과 소프트웨어 개발에 열정을 갖고 있으며, 실질적인 영향력 있는 제품 및 서비스를 만들기 위해 노력합니다.',
    label_name: '이름', label_phone: '전화번호', label_age: '나이',
    label_email: '이메일', label_nationality: '국적', val_nationality: '캄보디아',

    section_resume: '이력서', resume_work: '경력',
    job1_period: '2025년 11월 - 현재', job1_pos: 'AI 개발자',
    job1_desc: '태권도 품새 수련을 코칭하는 AI 시스템을 개발하고 있습니다. 각 동작을 인식하고 채점해 피드백을 제공하며, 저는 AI 음성 코칭 에이전트를 담당합니다.',
    job1_li1: '핸즈프리 음성 코치 개발: 사용자는 수련 중에 음성으로 앱을 조작하고 자신의 훈련 기록과 태권도에 대해 질문합니다.',
    job1_li2: '음성 파이프라인 설계: 커스텀 호출어, 스트리밍 음성 인식, 끼어들기(barge-in), 스트리밍 음성 합성, 기기 내 모델로의 자동 전환.',
    job1_li3: '규칙 우선 LLM 라우팅과 사용자 기록·태권도 지식 기반 RAG 코칭 개발.',
    job1_li4: '앱 화면과 코치 캐릭터 애니메이션 개발에 참여했습니다.',
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
    train2_period: '2019 - 2020', train2_pos: '소프트웨어 개발 교육',
    train2_li1: '강의, 실습, 테스트, 프로젝트 개발을 포함한 전일제 과정 수료.',
    train2_li2: 'HTML, CSS (프론트엔드), PostgreSQL, Spring Boot (백엔드)를 사용한 웹 프로젝트 개발.',
    train2_li3: 'Java를 사용한 안드로이드 모바일 앱 개발.',

    section_portfolio: '포트폴리오',
    portfolio_intro: 'AI 엔지니어링, AI 연구, 소프트웨어 개발 분야의 주요 프로젝트입니다.',
    proj_view: '자세히 보기', proj_preview: '이미지 보기',
    filter_all: '전체', filter_eng: 'AI 엔지니어링', filter_ai: 'AI 연구',
    filter_web: '웹 개발', filter_mobile: '모바일 개발',
    proj1_cat: 'AI 엔지니어링', proj1_title: 'AI 음성 코칭 에이전트',
    proj1_desc: '태권도 코칭 시스템의 핸즈프리 음성 코치입니다. 사용자는 음성으로 앱을 조작하고 수련에 대해 질문하며, 자신의 기록과 태권도 지식에 근거한 답을 받습니다.',
    proj2_cat: 'AI 연구', proj2_title: 'X선 영상에서 CT 재구성',
    proj2_desc: 'XR2CT: 단일 X선 영상에서 3D CT 볼륨을 재구성하는 GAN 기반 모델로, 기존 방법보다 구조적 정확도를 높였습니다.',
    proj3_cat: 'AI 연구', proj3_title: '3D 손 자세 추정',
    proj3_desc: '3D 단일 손 자세 추정을 위한 경량 그래프 네트워크: 파라미터 8.48M, CPU에서 55 FPS, GPU에서 109 FPS로 동작합니다.',
    proj4_cat: 'AI 연구', proj4_title: '인체 탐지',
    proj4_desc: '가려진 사람을 예측하고 작은 사람도 탐지하는 실시간 인체 탐지 모델.',
    proj5_cat: '웹 개발', proj5_title: '동문 관리 시스템',
    proj5_desc: '동문 기록을 저장하고 정리하는 웹 애플리케이션.',
    proj6_cat: '모바일 개발', proj6_title: '수학 포럼 안드로이드 앱',
    proj6_desc: '학생들이 온라인 커뮤니티에서 수학 지식을 공유하고 해결책을 찾는 안드로이드 앱.',

    section_contact_label: '연락처',
    contact_heading: '저에 대해 더 궁금한 점이 있으신가요?',
    contact_lead: '이메일이나 전화로 문의해 주세요. 친절하게 답변드리겠습니다.',
    contact_submit: '메시지 보내기',
    contact_sent: '메시지가 전송되었습니다. 감사합니다!',
    placeholder_name: '이름', placeholder_email: '이메일',
    placeholder_subject: '제목', placeholder_message: '메시지',

    va_title: 'AI 음성 코칭 에이전트',
    va_subtitle: '태권도 코칭 시스템을 위한 핸즈프리 AI 음성 코치.',
    va_diagram_caption: '한 번의 음성 대화 흐름: 호출어부터 음성 답변까지.',
    va_overview_heading: '개요',
    va_problem: '품새를 연습하던 사용자는 일시정지, 다시 하기, 피드백 확인을 위해 연습을 멈추고 화면까지 걸어가 터치해야 했고, 그때마다 연습의 흐름이 끊겼습니다. 터치 메뉴로는 "어떤 동작을 가장 못했어?" 같은 질문에도 답할 수 없었습니다.',
    va_solution: '몇 미터 떨어진 곳에서도 말을 알아듣는 음성 코치를 개발했습니다. 사용자는 앱 전체를 음성으로 조작하고, 자신의 훈련 기록과 태권도 지식에 대해 질문할 수 있습니다. 코치는 음성으로 답하고, 화면은 그 내용에 맞춰 함께 움직입니다.',
    va_pipeline_heading: '음성 파이프라인',
    va_li1: '호출어 → 음성 감지 → 음성 인식(STT) → 라우팅 → LLM/RAG → 음성 합성(TTS)으로 이어지는 실시간 파이프라인을 설계했습니다. 백그라운드에서 동작하며 상태를 UI에 전달합니다.',
    va_li4: '"Hi ○○" 호출어를 위한 기기 내 커스텀 웨이크워드 모델을 학습해, 클라우드 호출어 서비스 없이 동작합니다.',
    va_li9: '음성 활동 감지(VAD)와 발화 종료 모델로 문장의 끝을 판단해, 사용자가 말하다 잠시 멈춰도 끊기지 않습니다.',
    va_li5: '끼어들기(barge-in): 코치가 말하는 중에도 사용자가 말을 끊을 수 있습니다. 에코 제거(WebRTC AEC3)로 마이크에서 코치 자신의 목소리를 지워 사용자의 목소리를 듣습니다.',
    va_li2: '기본적으로 클라우드 음성·LLM 서비스를 사용하고, 인터넷이 없으면 기기 내 모델(음성 인식, LLM, 음성 합성)로 자동 전환합니다.',
    va_llm_heading: 'LLM & RAG',
    va_li6: '규칙 우선 라우팅: 자주 쓰는 명령은 규칙으로 즉시 처리하고, 애매한 문장만 LLM에 보냅니다.',
    va_li7: '사용자 본인의 훈련 기록과 태권도 지식(경기 규칙, 교육 과정, 품새 동작 안내, 용어집)을 대상으로 한 RAG 코칭을 개발했습니다. 검색된 문서에 근거해서만 답하고, 질문이 모호하면 되묻고, 이어지는 질문도 처리합니다.',
    va_li8: '로그인하면 코치가 수련 기록을 살펴보고, 다음에 연습할 내용을 추천하는 맞춤 인사를 건넵니다.',
    va_app_heading: '주요 특징',
    va_li10: '같은 질의응답 엔진을 사용하는 채팅 패널.',
    va_info_heading: '한눈에 보기',
    va_info_role_label: '역할', va_info_role: 'AI 개발자, 음성 에이전트 전체 담당',
    va_info_period_label: '기간', va_info_period: '2025년 11월 – 현재',
    va_info_platform_label: '플랫폼', va_info_platform: 'Windows 앱 (Python, PySide6/QML)',
    va_info_stack_label: '기술 스택',

    ct_title: 'X선 영상에서 CT 재구성',
    ct_subtitle: 'X선 영상에서 CT 스캔을 재구성하는 딥러닝 모델을 개발합니다.',
    ct_summary_heading: '요약',
    ct_summary: 'CT 스캔은 정확한 질병 진단에 필수적이며 상세한 3D 정보를 제공합니다. 그러나 X선 장비보다 비용이 훨씬 높아 의료 현장에서 접근하기 어렵습니다. 이 연구에서는 GAN 기반 접근 방식을 사용하여 단일 X선 영상에서 CT 이미지를 재구성하는 XR2CT 방법을 제안합니다. 기존 방법 대비 향상된 구조적 정확도를 보입니다.',
    ct_intro_heading: '소개',
    ct_intro: 'X선과 CT 촬영은 병원에서 흔히 사용됩니다. CT는 조직을 3D로 보여 주어 2D 영상에서 겹쳐 보이는 구조의 문제를 효과적으로 해결한다는 큰 장점이 있습니다. 그러나 CT는 비용이 높고 대규모 인프라가 필요해, 자원이 부족하거나 의료 서비스가 취약한 지역에서는 이용하기 어렵습니다. 반면 X선은 더 저렴하고 널리 보급된 영상 기법이지만, 제한된 2D 해부학적 정보만 제공해 정확한 진단을 방해할 수 있습니다. 이 연구에서는 직교 평면에서 촬영한 단일 X선 영상으로 3D CT 볼륨을 재구성하는 방법을 제안합니다. 재구성의 주요 과제는 X선 영상 고유의 모호성으로, 서로 다른 여러 3D CT 볼륨이 투영되면 같은 2D X선 영상이 될 수 있습니다. X2CT-GAN[1] 등 기존 방법은 생성적 적대 신경망(GAN)으로 CT를 재구성해 유망한 결과를 보였습니다. 그러나 역영상 문제의 어려움 때문에 고주파 세부 정보가 손실되고 해상도가 낮은 결과가 생성됩니다. 이러한 문제를 해결하고 재구성 성능을 높이기 위해 XR2CT(Reconstruction CT from a Single X-Ray view with GAN)라는 방법을 제안합니다. 이 방법은 단일 정면 X선 영상을 입력으로 사용하고, 초기 템플릿 CT로 3D 네트워크를 유도합니다. 생성된 3D CT 볼륨은 판별자(discriminator)로 전달되어 충실도를 높입니다.',
    ct_read_paper: '논문을 읽어보세요. (단일 X선만 입력으로 사용합니다.)',

    pose_title: '3D 손 자세 추정',
    pose_subtitle: '3D 단일 손 자세 추정에서 정확도와 효율성을 모두 최적화한 경량 그래프 기반 네트워크.',
    pose_summary_heading: '요약',
    pose_summary: '손 자세 추정은 최근 많은 관심을 받고 있으며 다양한 방법이 개발되었습니다. 기존 방법들은 실시간 처리가 어려운 효율성 문제에 자주 직면합니다. 이 연구에서는 Chebyshev Graph Convolutions(ChebGConv)을 활용한 경량 그래프 기반 네트워크를 제안합니다. 모델은 8.48M 파라미터와 1.7 GFLOPS로 CPU에서 55 FPS, GPU에서 109 FPS를 달성합니다.',
    pose_intro_heading: '소개',
    pose_intro: '단일 손 자세 추정은 주로 심층 네트워크 아키텍처의 발전 덕분에 산업 응용을 포함한 여러 분야에서 큰 성공을 거두었습니다. 최근의 메시 재구성 알고리즘 [8, 10, 31, 41, 49, 54]은 일반적으로 입력 이미지에서 출력 메시까지 엔드투엔드로 학습됩니다. 이러한 방법은 성능을 높였지만, 더 많은 계산 자원과 높은 복잡도를 요구하는 경우가 많습니다. 기존 연구 [8, 53]는 CNN 기반 구조 정보가 3D 손 자세 추정의 특징 표현 학습에 중요하다는 것을 보여 주었습니다. 그러나 CNN 기반 방법은 운동학적 구조 정보를 정밀하게 모델링하는 데 약합니다. 운동학적 구조 정보를 더 잘 모델링하기 위해 여러 연구 [41, 49, 54, 71]는 트랜스포머의 어텐션 메커니즘으로 전체 특징 표현에 걸친 전역 시각 정보를 포착합니다. 이를 통해 모든 노드 간의 상호작용이 가능해져 노드 간 관계를 모델링할 수 있습니다. 그러나 셀프 어텐션은 노드 간 유사도 계산에 기반하며, 노드 간 인접 관계와 같은 그래프 구조 정보를 무시합니다 ...',
    pose_read_paper: '논문을 읽어보세요. (출시 예정)',

    // Labels, tags, image addresses and descriptions
    title_home: '허식니 – AI 엔지니어',
    title_va: 'AI 음성 코칭 에이전트 – 허식니',
    title_ct: 'X선 영상에서 CT 재구성 – 허식니',
    title_pose: '3D 손 자세 추정 – 허식니',
    alt_hero: '허식니 프로필 사진',
    alt_about: '책상에서 코딩하는 고양이 일러스트',
    age_format: '{n}세',
    skill_ml: '머신러닝 / 딥러닝',
    skill_voice: '음성 에이전트',
    skill_speech: '음성 인식·합성 (STT / TTS)',
    skill_imgtrans: '이미지 변환',
    skill_pose: '자세 추정',
    skill_det: '탐지',
    skill_cls: '분류',
    co1: '(주)제로원데이, 대한민국',
    co2: '삼성서울병원 미래의학연구원, 대한민국',
    co3: 'Korea Software HRD Center, 캄보디아',
    co4: 'Sister of Code, 캄보디아',
    edu1_org: '울산과학기술원 (UNIST)',
    edu2_org: '프놈펜 왕립대학교',
    train1_org: '서경대학교',
    tag_deep_learning: '딥러닝',
    tag_medical: '의료 영상',
    tag_gnn: '그래프 신경망',
    tag_realtime: '실시간',
    tag_cv: '컴퓨터 비전',
    tag_od: '객체 탐지',
    tag_webapp: '웹 앱',
    tag_android: '안드로이드',
    tag_mobile: '모바일 앱',
    tag_cloud_llm: '클라우드 LLM',
    tag_device_llm: '기기 내 LLM',
    tag_cloud_stt: '클라우드 STT',
    tag_device_stt: '기기 내 STT',
    tag_cloud_tts: '클라우드 TTS',
    tag_device_tts: '기기 내 TTS',
    img_card_va: 'assets/img/portfolio/ai-voice-coaching-agent.ko.svg',
    img_pipeline: 'assets/img/portfolio/voice-agent-pipeline.ko.svg',
    alt_card1: '태권도 자세를 취한 학생이 음성으로 질문하고, 모니터에 코치의 답이 표시됩니다',
    alt_card2: 'X선 영상으로 재구성한 3D CT 볼륨',
    alt_card3: '손 이미지에 대한 3D 손 자세 예측 결과',
    alt_card4: '거리 장면의 인체 탐지 결과',
    alt_card5: 'MyAlumni 웹 애플리케이션 화면',
    alt_card6: 'MathForum 안드로이드 앱 화면',
    alt_pipeline: '음성 에이전트 파이프라인: 호출어, 음성 감지, 음성 인식, 규칙 우선 라우터, 화면 제어 또는 RAG 코칭, 음성 답변. 온라인에서는 클라우드 모델, 인터넷이 없으면 기기 내 모델을 사용하며, 사용자는 답변 중에 끼어들 수 있습니다.',
    aria_preview: '이미지 미리보기',
    aria_details: '프로젝트 상세',
    aria_breadcrumb: '이동 경로',
    contact_address: '대한민국 서울특별시 관악구 봉천동',
    contact_loading: '전송 중',
    footer_rights: '모든 권리 보유',
    theme_toggle: '다크 모드',
    logo: 'ㅎㅅㄴ',
    name_full: '허식니',
    scroll_top: '맨 위로',
    scroll_down: '맨 아래로',
    ct_axial: '축상면 (Axial)',
    ct_coronal: '관상면 (Coronal)',
    ct_sagittal: '시상면 (Sagittal)',
  },
  km: {
    nav_home: 'ទំព័រដើម',
    nav_about: 'អំពីខ្ញុំ',
    nav_resume: 'ប្រវត្តិរូប',
    nav_portfolio: 'ស្នាដៃ',
    nav_contact: 'ទំនាក់ទំនង',
    breadcrumb_home: 'ទំព័រដើម',
    breadcrumb_category: 'ស្នាដៃ',
    breadcrumb_current: 'ព័ត៌មានលម្អិតនៃស្នាដៃ',
    hero_title: 'វិស្វករ AI៖ ចក្ខុវិស័យកុំព្យូទ័រ, LLM និង AI Agent',
    hero_subtitle: 'បំប្លែងគំនិតទៅជាដំណោះស្រាយ តាមរយៈការអភិវឌ្ឍ',
    hero_btn_work: 'មើលស្នាដៃរបស់ខ្ញុំ',
    hero_btn_connect: 'ទាក់ទងមកខ្ញុំ',
    section_about: 'អំពីខ្ញុំ',
    about_bio: 'ខ្ញុំជាអ្នកអភិវឌ្ឍ AI ដែលមានបទពិសោធន៍ផ្នែកចក្ខុវិស័យកុំព្យូទ័រ Deep Learning ហើយថ្មីៗនេះ ផ្នែកភ្នាក់ងារសំឡេងដែលប្រើ LLM។ ខ្ញុំបានធ្វើការលើការរកឃើញមនុស្ស ការប៉ាន់ប្រមាណឥរិយាបថ 3D ការរកឃើញវត្ថុ ការចាត់ថ្នាក់ និងការបំប្លែងរូបភាព ហើយបានបង្កើតគ្រូបង្វឹកសំឡេងដែលរួមបញ្ចូលការសម្គាល់សំឡេង RAG និងការសំយោគសំឡេង។',
    about_subtitle: 'អំពីខ្ញុំ',
    about_heading: 'ស្រាវជ្រាវ និងអភិវឌ្ឍ',
    about_lead: 'ខ្ញុំចាប់អារម្មណ៍យ៉ាងខ្លាំងលើបច្ចេកវិទ្យា AI ដូចជា Deep Learning ចក្ខុវិស័យកុំព្យូទ័រ និង LLM ព្រមទាំងការអភិវឌ្ឍកម្មវិធី ដើម្បីបង្កើតផលិតផល និងសេវាកម្មដែលមានឥទ្ធិពលពិតប្រាកដ។',
    label_name: 'ឈ្មោះ',
    label_phone: 'ទូរស័ព្ទ',
    label_age: 'អាយុ',
    label_email: 'អ៊ីមែល',
    label_nationality: 'សញ្ជាតិ',
    val_nationality: 'កម្ពុជា',
    section_resume: 'ប្រវត្តិរូប',
    resume_work: 'បទពិសោធន៍ការងារ',
    job1_period: 'វិច្ឆិកា 2025 - បច្ចុប្បន្ន',
    job1_pos: 'អ្នកអភិវឌ្ឍ AI',
    job1_desc: 'កំពុងអភិវឌ្ឍប្រព័ន្ធ AI ដែលបង្វឹកការហាត់ពូមសេតេក្វាន់ដូ៖ វាសម្គាល់ និងដាក់ពិន្ទុចលនានីមួយៗ ហើយផ្តល់មតិយោបល់។ ខ្ញុំទទួលខុសត្រូវលើភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI របស់វា។',
    job1_li1: 'បានបង្កើតគ្រូបង្វឹកសំឡេងដែលមិនចាំបាច់ប្រើដៃ៖ អ្នកប្រើគ្រប់គ្រងកម្មវិធី និងសួរអំពីកំណត់ត្រាហ្វឹកហាត់ និងតេក្វាន់ដូ ខណៈពេលកំពុងហាត់។',
    job1_li2: 'បានរចនាបណ្តាញដំណើរការសំឡេង៖ ពាក្យដាស់ផ្ទាល់ខ្លួន ការបំប្លែងសំឡេងទៅជាអត្ថបទជាលំហូរ ការកាត់សម្ដី (barge-in) និងការបំប្លែងអត្ថបទទៅជាសំឡេងជាលំហូរ ព្រមទាំងប្តូរទៅម៉ូដែលលើឧបករណ៍ដោយស្វ័យប្រវត្តិ។',
    job1_li3: 'បានបង្កើតការបញ្ជូនបន្តដោយច្បាប់ជាមុនសិនជាមួយ LLM និងការបង្វឹកដោយ RAG លើកំណត់ត្រារបស់អ្នកប្រើម្នាក់ៗ និងមូលដ្ឋានចំណេះដឹងតេក្វាន់ដូ។',
    job1_li4: 'បានចូលរួមអភិវឌ្ឍអេក្រង់កម្មវិធី និងចលនាតួអង្គគ្រូបង្វឹក។',
    job2_period: 'កញ្ញា 2024 - មីនា 2025',
    job2_pos: 'អ្នកស្រាវជ្រាវ AI',
    job2_desc: 'បានស្វែងរកបច្ចេកទេស Deep Learning កម្រិតខ្ពស់សម្រាប់ការបំប្លែងរូបភាព និងបានអភិវឌ្ឍម៉ូដែល Deep Learning ដើម្បីបង្កើតរូបភាព CT ឡើងវិញពីរូបភាពកាំរស្មីអ៊ិច។ ការវាយតម្លៃផ្តោតលើតំបន់សួត និងរចនាសម្ព័ន្ធដូចជាដុំពក (nodule)។',
    job3_period: 'កុម្ភៈ 2020 - មិថុនា 2021',
    job3_pos: 'គ្រូបង្រៀន IT',
    job3_li1: 'ធ្វើបច្ចុប្បន្នភាពឯកសារមេរៀនជាប្រចាំ ឱ្យស្របតាមបច្ចេកវិទ្យាថ្មីៗ និងតម្រូវការកម្មវិធីសិក្សា។',
    job3_li2: 'ទទួលខុសត្រូវបង្រៀនការសរសេរកម្មវិធី Java ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ SQL និងការអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ React Native។',
    job3_li3: 'រចនា និងអនុវត្តកម្មវិធីសិក្សា ដើម្បីបំពាក់សិស្សនូវជំនាញបច្ចេកទេសទាន់សម័យ។',
    job3_li4: 'ពិនិត្យ និងផ្តល់មតិយោបល់លើកិច្ចការរបស់សិស្ស។',
    job4_period: 'កញ្ញា 2020 - ធ្នូ 2020',
    job4_pos: 'អ្នកណែនាំ Sister of Code',
    job4_desc: 'បានបង្រៀនកម្មវិធីសរសេរកូដបីម៉ូឌុល ដែលរួមមាន៖',
    job4_li1: 'ការសរសេរកូដតាមរូបភាពដោយប្រើ Code.org។',
    job4_li2: 'ការអភិវឌ្ឍហ្គេមជាមួយ Scratch។',
    job4_li3: 'ការអភិវឌ្ឍគេហទំព័រជាមួយ HTML/CSS និង Wix។',
    job5_period: 'កុម្ភៈ 2018 - មីនា 2019',
    job5_pos: 'អ្នករចនាគេហទំព័រ (ក្រៅម៉ោង)',
    job5_desc: 'បានបង្កើតមគ្គុទ្ទេសក៍រចនាប័ទ្មយ៉ាងទូលំទូលាយ សម្រាប់ធាតុរូបភាពដូចជា ពណ៌ ពុម្ពអក្សរ និងគោលការណ៍ប្រើប្រាស់រូបភាព។',
    resume_edu: 'ការអប់រំ',
    edu1_period: '2022 - 2024',
    edu1_pos: 'អនុបណ្ឌិតផ្នែកបញ្ញាសិប្បនិម្មិត',
    edu1_desc: 'ចំណាប់អារម្មណ៍ស្រាវជ្រាវ៖ "Deep Learning, ចក្ខុវិស័យកុំព្យូទ័រ, ការរកឃើញវត្ថុ, ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D"។ និក្ខេបបទស្តីពី "Rethinking Fast and Accurate 3D Hand Pose Estimation" ដែលជាបណ្តាញក្រាហ្វស្រាល បង្កើនប្រសិទ្ធភាពទាំងភាពត្រឹមត្រូវ និងល្បឿន សម្រាប់ការប៉ាន់ប្រមាណឥរិយាបថដៃតែមួយក្នុង 3D។',
    edu2_period: '2016 - 2020',
    edu2_pos: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ',
    edu2_desc: 'ជំនាញផ្នែកអភិវឌ្ឍកម្មវិធី។',
    resume_training: 'កម្មវិធីបណ្តុះបណ្តាល',
    train1_period: '2021 - 2022',
    train1_pos: 'កម្មវិធីភាសាកូរ៉េ',
    train1_li1: 'អាចសន្ទនាប្រចាំថ្ងៃជាភាសាកូរ៉េបាន។',
    train2_period: '2019 - 2020',
    train2_pos: 'វគ្គបណ្តុះបណ្តាលអភិវឌ្ឍកម្មវិធី',
    train2_li1: 'បានបញ្ចប់វគ្គពេញម៉ោង ដែលមានការបង្រៀន ការស្រាវជ្រាវក្នុងមន្ទីរពិសោធន៍ ការអនុវត្តជាក់ស្តែង ការប្រឡង និងការអភិវឌ្ឍគម្រោង។',
    train2_li2: 'បានអភិវឌ្ឍគម្រោងគេហទំព័រដោយប្រើ HTML, CSS (frontend), PostgreSQL និង Spring Boot (backend)។',
    train2_li3: 'បានធ្វើការលើកម្មវិធីទូរស័ព្ទ Android ដោយប្រើ Java។',
    section_portfolio: 'ស្នាដៃ',
    portfolio_intro: 'គម្រោងជ្រើសរើសផ្នែកវិស្វកម្ម AI ការស្រាវជ្រាវ AI និងការអភិវឌ្ឍកម្មវិធី។',
    proj_view: 'មើលគម្រោង',
    proj_preview: 'មើលរូបភាព',
    filter_all: 'ទាំងអស់',
    filter_eng: 'វិស្វកម្ម AI',
    filter_ai: 'ស្រាវជ្រាវ AI',
    filter_web: 'អភិវឌ្ឍគេហទំព័រ',
    filter_mobile: 'អភិវឌ្ឍកម្មវិធីទូរស័ព្ទ',
    proj1_cat: 'វិស្វកម្ម AI',
    proj1_title: 'ភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI',
    proj1_desc: 'គ្រូបង្វឹកសំឡេងដែលមិនចាំបាច់ប្រើដៃ សម្រាប់ប្រព័ន្ធបង្វឹកតេក្វាន់ដូ។ អ្នកប្រើគ្រប់គ្រងកម្មវិធី និងសួរអំពីការហ្វឹកហាត់ដោយសំឡេង ហើយទទួលបានចម្លើយពីកំណត់ត្រារបស់ខ្លួន និងមូលដ្ឋានចំណេះដឹងតេក្វាន់ដូ។',
    proj2_cat: 'ស្រាវជ្រាវ AI',
    proj2_title: 'ការបង្កើតរូបភាព CT ឡើងវិញពីកាំរស្មីអ៊ិច',
    proj2_desc: 'XR2CT៖ ម៉ូដែលផ្អែកលើ GAN ដែលបង្កើតរូបភាព CT 3D ឡើងវិញពីរូបភាពកាំរស្មីអ៊ិចតែមួយ ដោយមានភាពត្រឹមត្រូវនៃរចនាសម្ព័ន្ធប្រសើរជាងវិធីសាស្ត្រដែលមានស្រាប់។',
    proj3_cat: 'ស្រាវជ្រាវ AI',
    proj3_title: 'ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D',
    proj3_desc: 'បណ្តាញក្រាហ្វស្រាលសម្រាប់ការប៉ាន់ប្រមាណឥរិយាបថដៃតែមួយក្នុង 3D៖ ប៉ារ៉ាម៉ែត្រ 8.48M ដំណើរការ 55 FPS លើ CPU និង 109 FPS លើ GPU។',
    proj4_cat: 'ស្រាវជ្រាវ AI',
    proj4_title: 'ការរកឃើញមនុស្ស',
    proj4_desc: 'ម៉ូដែលរកឃើញមនុស្សក្នុងពេលវេលាជាក់ស្តែង ដែលទស្សន៍ទាយមនុស្សដែលត្រូវបិទបាំង និងរកឃើញមនុស្សតូចៗ។',
    proj5_cat: 'អភិវឌ្ឍគេហទំព័រ',
    proj5_title: 'MyAlumni',
    proj5_desc: 'កម្មវិធីគេហទំព័រសម្រាប់រក្សាទុក និងរៀបចំកំណត់ត្រាអតីតនិស្សិត។',
    proj6_cat: 'អភិវឌ្ឍកម្មវិធីទូរស័ព្ទ',
    proj6_title: 'កម្មវិធី Android MathForum',
    proj6_desc: 'កម្មវិធី Android ដែលសិស្សចែករំលែកចំណេះដឹងគណិតវិទ្យា និងស្វែងរកដំណោះស្រាយក្នុងសហគមន៍អនឡាញ។',
    section_contact_label: 'ទំនាក់ទំនង',
    contact_heading: 'មានសំណួរបន្ថែមអំពីខ្ញុំទេ?',
    contact_lead: 'សូមផ្ញើអ៊ីមែល ឬទូរស័ព្ទមកខ្ញុំ ប្រសិនបើមានសំណួរ ឬការសាកសួរណាមួយ។ ខ្ញុំរីករាយនឹងឆ្លើយ។',
    contact_submit: 'ផ្ញើសារ',
    contact_sent: 'សាររបស់អ្នកត្រូវបានផ្ញើហើយ។ សូមអរគុណ!',
    placeholder_name: 'ឈ្មោះរបស់អ្នក',
    placeholder_email: 'អ៊ីមែលរបស់អ្នក',
    placeholder_subject: 'ប្រធានបទ',
    placeholder_message: 'សារ',
    va_title: 'ភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI',
    va_subtitle: 'គ្រូបង្វឹកសំឡេង AI ដែលមិនចាំបាច់ប្រើដៃ សម្រាប់ប្រព័ន្ធបង្វឹកតេក្វាន់ដូ។',
    va_diagram_caption: 'ការសន្ទនាដោយសំឡេងមួយជុំ ចាប់ពីពាក្យដាស់ រហូតដល់ចម្លើយជាសំឡេង។',
    va_overview_heading: 'ទិដ្ឋភាពទូទៅ',
    va_problem: 'សិស្សដែលហាត់ពូមសេត្រូវឈប់ ដើរត្រឡប់ទៅអេក្រង់ ហើយប៉ះវា ដើម្បីផ្អាក ហាត់ម្តងទៀត ឬអានមតិយោបល់ ដែលធ្វើឱ្យការហាត់ត្រូវរំខាន។ ម៉ឺនុយប៉ះក៏មិនអាចឆ្លើយសំណួរដូចជា "តើខ្ញុំធ្វើចលនាណាខ្សោយជាងគេ?" បានដែរ។',
    va_solution: 'ខ្ញុំបានបង្កើតគ្រូបង្វឹកសំឡេងដែលស្តាប់បានពីចម្ងាយពីរបីម៉ែត្រ។ អ្នកប្រើគ្រប់គ្រងកម្មវិធីទាំងមូលដោយសំឡេង ហើយសួរអំពីកំណត់ត្រាហ្វឹកហាត់ផ្ទាល់ខ្លួន និងចំណេះដឹងតេក្វាន់ដូ។ គ្រូបង្វឹកឆ្លើយដោយសំឡេង ខណៈអេក្រង់ផ្លាស់ប្តូរតាមអ្វីដែលវានិយាយ។',
    va_pipeline_heading: 'បណ្តាញដំណើរការសំឡេង',
    va_li1: 'បានរចនាបណ្តាញដំណើរការក្នុងពេលវេលាជាក់ស្តែង (ពាក្យដាស់ → ការចាប់សំឡេង → សំឡេងទៅជាអត្ថបទ → ការបញ្ជូនបន្ត → LLM/RAG → អត្ថបទទៅជាសំឡេង) ដែលដំណើរការនៅផ្ទៃខាងក្រោយ ហើយរាយការណ៍ស្ថានភាពទៅ UI។',
    va_li4: 'បានបង្ហាត់ម៉ូដែលពាក្យដាស់ផ្ទាល់ខ្លួនលើឧបករណ៍ សម្រាប់ឃ្លា "Hi ○○" ដូច្នេះមិនចាំបាច់ប្រើសេវាពាក្យដាស់លើពពក។',
    va_li9: 'កំណត់ចុងប្រយោគដោយការចាប់សកម្មភាពសំឡេង (VAD) និងម៉ូដែលចុងវេននិយាយ ដូច្នេះអ្នកប្រើអាចផ្អាកកណ្តាលប្រយោគ ដោយមិនត្រូវកាត់។',
    va_li5: 'ការកាត់សម្ដី (barge-in)៖ អ្នកប្រើអាចកាត់សម្ដីគ្រូបង្វឹកកណ្តាលប្រយោគបាន។ ការលុបសំឡេងបន្ទរ (WebRTC AEC3) ដកសំឡេងគ្រូបង្វឹកចេញពីមីក្រូហ្វូន ដូច្នេះនៅតែឮសំឡេងអ្នកប្រើ។',
    va_li2: 'ជាលំនាំដើម ប្រើសេវាសំឡេង និង LLM លើពពក ហើយប្តូរទៅម៉ូដែលលើឧបករណ៍ (សំឡេងទៅជាអត្ថបទ, LLM, អត្ថបទទៅជាសំឡេង) ដោយស្វ័យប្រវត្តិ នៅពេលគ្មានអ៊ីនធឺណិត។',
    va_llm_heading: 'LLM និង RAG',
    va_li6: 'ការបញ្ជូនបន្តដោយច្បាប់ជាមុនសិន៖ ពាក្យបញ្ជាទូទៅត្រូវបានផ្គូផ្គងភ្លាមៗដោយច្បាប់ ហើយមានតែប្រយោគដែលមិនច្បាស់ប៉ុណ្ណោះ ដែលត្រូវបញ្ជូនទៅ LLM។',
    va_li7: 'ការបង្វឹកដោយ RAG លើកំណត់ត្រាហ្វឹកហាត់ផ្ទាល់ខ្លួនរបស់អ្នកប្រើម្នាក់ៗ និងមូលដ្ឋានចំណេះដឹងតេក្វាន់ដូ (ច្បាប់ប្រកួត កម្មវិធីសិក្សា មគ្គុទ្ទេសក៍ពូមសេ និងសទ្ទានុក្រមពាក្យបច្ចេកទេស)។ ចម្លើយផ្អែកលើឯកសារដែលបានស្វែងរក ហើយគ្រូបង្វឹកសួរបញ្ជាក់វិញ នៅពេលសំណួរមិនច្បាស់ ព្រមទាំងឆ្លើយសំណួរបន្តបាន។',
    va_li8: 'ពេលចូលគណនី គ្រូបង្វឹកពិនិត្យមើលការហ្វឹកហាត់របស់អ្នកប្រើ ហើយស្វាគមន៍ពួកគេជាមួយការណែនាំផ្ទាល់ខ្លួន អំពីអ្វីដែលគួរហាត់បន្ទាប់។',
    va_app_heading: 'ចំណុចលេចធ្លោ',
    va_li10: 'ផ្ទាំងជជែកសម្រាប់វាយអក្សរ ដែលប្រើម៉ាស៊ីនឆ្លើយសំណួរដូចគ្នា។',
    va_info_heading: 'ព័ត៌មានសង្ខេប',
    va_info_role_label: 'តួនាទី',
    va_info_role: 'អ្នកអភិវឌ្ឍ AI ទទួលខុសត្រូវលើភ្នាក់ងារសំឡេងទាំងស្រុង',
    va_info_period_label: 'រយៈពេល',
    va_info_period: 'វិច្ឆិកា 2025 – បច្ចុប្បន្ន',
    va_info_platform_label: 'វេទិកា',
    va_info_platform: 'កម្មវិធី Windows (Python, PySide6/QML)',
    va_info_stack_label: 'បច្ចេកវិទ្យាដែលប្រើ',
    ct_title: 'ការបង្កើតរូបភាព CT ឡើងវិញពីកាំរស្មីអ៊ិច',
    ct_subtitle: 'អភិវឌ្ឍម៉ូដែល Deep Learning ដើម្បីបង្កើតរូបភាព CT ឡើងវិញពីរូបភាពកាំរស្មីអ៊ិច។',
    ct_summary_heading: 'សេចក្តីសង្ខេប',
    ct_summary: 'ការស្កេន CT មានសារៈសំខាន់សម្រាប់ការធ្វើរោគវិនិច្ឆ័យឱ្យបានត្រឹមត្រូវ ដោយផ្តល់ព័ត៌មាន 3D លម្អិត។ ប៉ុន្តែវាមានតម្លៃថ្លៃជាងម៉ាស៊ីនកាំរស្មីអ៊ិចយ៉ាងច្រើន ដែលធ្វើឱ្យពិបាកទទួលបានក្នុងការព្យាបាល។ ក្នុងការងារនេះ យើងស្នើវិធីសាស្ត្រមួយហៅថា XR2CT ដើម្បីបង្កើតរូបភាព CT ឡើងវិញពីកាំរស្មីអ៊ិចតែមួយ ដោយប្រើវិធីផ្អែកលើ GAN។ វិធីសាស្ត្ររបស់យើងរួមមានបណ្តាញផែនទី 2D និង encoder-decoder 3D។ តាមរយៈការវាយតម្លៃគុណភាព និងបរិមាណ ម៉ូដែលរបស់យើងបង្ហាញភាពត្រឹមត្រូវនៃរចនាសម្ព័ន្ធប្រសើរជាងវិធីសាស្ត្រដែលមានស្រាប់។',
    ct_intro_heading: 'សេចក្តីផ្តើម',
    ct_intro: 'ការថតកាំរស្មីអ៊ិច និង CT ត្រូវបានប្រើជាទូទៅនៅមន្ទីរពេទ្យ។ ការស្កេន CT មានគុណសម្បត្តិធំ ដោយបង្ហាញជាលិកាជា 3D ដែលដោះស្រាយបញ្ហារចនាសម្ព័ន្ធត្រួតគ្នាដែលឃើញក្នុងរូបភាព 2D ប្រកបដោយប្រសិទ្ធភាព។ ប៉ុន្តែការស្កេន CT មានតម្លៃថ្លៃ និងត្រូវការហេដ្ឋារចនាសម្ព័ន្ធច្រើន ដែលធ្វើឱ្យតំបន់ខ្វះធនធាន ឬខ្វះសេវាពិបាកទទួលបាន។ ផ្ទុយទៅវិញ កាំរស្មីអ៊ិចមានតម្លៃថោក និងមានទូលំទូលាយជាង ប៉ុន្តែផ្តល់ព័ត៌មានកាយវិភាគសាស្ត្រ 2D មានកម្រិត ដែលអាចរារាំងការធ្វើរោគវិនិច្ឆ័យឱ្យបានត្រឹមត្រូវ។ ក្នុងការងារនេះ យើងស្នើវិធីសាស្ត្រមួយដើម្បីបង្កើតរូបភាព CT 3D ឡើងវិញពីកាំរស្មីអ៊ិចតែមួយ ដែលថតពីប្លង់កែងគ្នា។ បញ្ហាប្រឈមចម្បងក្នុងការបង្កើតឡើងវិញ គឺភាពមិនច្បាស់លាស់ដែលមានក្នុងរូបភាពកាំរស្មីអ៊ិច ពោលគឺរូបភាព CT 3D ផ្សេងៗគ្នាជាច្រើនអាចបង្កើតរូបភាពកាំរស្មីអ៊ិច 2D ដូចគ្នា នៅពេលបញ្ចាំង។ វិធីសាស្ត្រដែលមានស្រាប់ ដូចជា X2CT-GAN[1] បានប្រើបណ្តាញ GAN សម្រាប់ការបង្កើត CT ឡើងវិញ ហើយបង្ហាញលទ្ធផលល្អ។ ប៉ុន្តែវាបាត់បង់ព័ត៌មានលម្អិតប្រេកង់ខ្ពស់ និងបង្កើតលទ្ធផលកម្រិតច្បាស់ទាប ដោយសារភាពលំបាកនៃបញ្ហារូបភាពបញ្ច្រាស។ ដើម្បីដោះស្រាយបញ្ហាទាំងនេះ និងបង្កើនប្រសិទ្ធភាពនៃការបង្កើតឡើងវិញ យើងណែនាំវិធីសាស្ត្រមួយហៅថា XR2CT៖ Reconstruction CT from a Single X-Ray view with GAN។ វិធីសាស្ត្ររបស់យើងប្រើរូបភាពកាំរស្មីអ៊ិចខាងមុខតែមួយជាទិន្នន័យបញ្ចូល ហើយប្រើ CT គំរូដំបូងដើម្បីណែនាំបណ្តាញ 3D។ បន្ទាប់មក រូបភាព CT 3D ដែលបានបង្កើតត្រូវបានបញ្ជូនទៅ discriminator ដើម្បីឱ្យលទ្ធផលកាន់តែស្មោះត្រង់នឹងការពិត។',
    ct_read_paper: 'អានឯកសារស្រាវជ្រាវរបស់យើង។ (សូមចំណាំថា យើងប្រើតែរូបភាពកាំរស្មីអ៊ិចមួយប៉ុណ្ណោះជាទិន្នន័យបញ្ចូល)។',
    pose_title: 'ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D',
    pose_subtitle: 'បណ្តាញក្រាហ្វស្រាល ដែលបង្កើនប្រសិទ្ធភាពទាំងភាពត្រឹមត្រូវ និងល្បឿន សម្រាប់ការប៉ាន់ប្រមាណឥរិយាបថដៃតែមួយក្នុង 3D។',
    pose_summary_heading: 'សេចក្តីសង្ខេប',
    pose_summary: 'ការប៉ាន់ប្រមាណឥរិយាបថដៃបានទាក់ទាញការចាប់អារម្មណ៍យ៉ាងខ្លាំងនាពេលថ្មីៗនេះ ដែលនាំឱ្យមានការអភិវឌ្ឍវិធីសាស្ត្រផ្សេងៗ។ ទោះបីវិធីសាស្ត្រដែលមានស្រាប់មានគោលបំណងបង្កើនប្រសិទ្ធភាព ក៏ពួកវាតែងជួបបញ្ហាល្បឿន ដែលធ្វើឱ្យពិបាកដំណើរការក្នុងពេលវេលាជាក់ស្តែង។ យើងស្នើបណ្តាញក្រាហ្វស្រាលដែលប្រើ Chebyshev Graph Convolutions (ChebGConv)។ ម៉ូដែលរបស់យើងមានប៉ារ៉ាម៉ែត្រត្រឹមតែ 8.48M និងត្រូវការ 1.7 GFLOPS ដោយសម្រេចបាន 55 FPS លើ CPU និង 109 FPS លើ GPU។',
    pose_intro_heading: 'សេចក្តីផ្តើម',
    pose_intro: 'ការប៉ាន់ប្រមាណឥរិយាបថដៃតែមួយទទួលបានជោគជ័យយ៉ាងច្រើនក្នុងវិស័យផ្សេងៗ រួមទាំងកម្មវិធីឧស្សាហកម្ម ដោយសារភាពរីកចម្រើននៃស្ថាបត្យកម្មបណ្តាញស៊ីជម្រៅជាចម្បង។ ក្បួនដោះស្រាយបង្កើត mesh ឡើងវិញថ្មីៗ [8, 10, 31, 41, 49, 54] ជាធម្មតាត្រូវបានបង្ហាត់ពីចុងដល់ចុង ពីរូបភាពបញ្ចូលរហូតដល់ mesh លទ្ធផល។ ទោះបីវិធីសាស្ត្រទាំងនេះបានបង្កើនប្រសិទ្ធភាព ក៏ពួកវាតែងទាមទារធនធានគណនាច្រើន និងមានភាពស្មុគស្មាញខ្ពស់។ ការងារមុនៗ [8, 53] បានបង្ហាញថា ព័ត៌មានរចនាសម្ព័ន្ធផ្អែកលើ CNN មានសារៈសំខាន់សម្រាប់ការរៀនតំណាងលក្ខណៈ សម្រាប់ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D។ ប៉ុន្តែវិធីសាស្ត្រផ្អែកលើ CNN នៅខ្សោយក្នុងការធ្វើគំរូព័ត៌មានរចនាសម្ព័ន្ធចលនា (kinematic) ឱ្យបានច្បាស់លាស់។ ដើម្បីធ្វើគំរូព័ត៌មាននេះឱ្យកាន់តែល្អ ការសិក្សាមួយចំនួន [41, 49, 54, 71] ប្រើយន្តការ attention ក្នុង transformer ដើម្បីចាប់យកព័ត៌មានរូបភាពសកលលើតំណាងលក្ខណៈទាំងមូល។ វាអនុញ្ញាតឱ្យមានអន្តរកម្មរវាងថ្នាំង (node) ទាំងអស់ ហើយដូច្នេះធ្វើគំរូទំនាក់ទំនងរបស់ពួកវា។ ប៉ុន្តែ self-attention ផ្អែកលើការគណនាភាពស្រដៀងគ្នានៃថ្នាំង ហើយមិនអើពើព័ត៌មានរចនាសម្ព័ន្ធក្រាហ្វ ដូចជាទំនាក់ទំនងជាប់គ្នារវាងថ្នាំង ...',
    pose_read_paper: 'អានឯកសារស្រាវជ្រាវរបស់យើង។ (នឹងមកដល់ឆាប់ៗ)',
    title_home: 'ហោ សៀកនី – វិស្វករ AI',
    title_va: 'ភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI – ហោ សៀកនី',
    title_ct: 'ការបង្កើតរូបភាព CT ឡើងវិញពីកាំរស្មីអ៊ិច – ហោ សៀកនី',
    title_pose: 'ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D – ហោ សៀកនី',
    alt_hero: 'រូបថតរបស់ ហោ សៀកនី',
    alt_about: 'រូបគំនូរឆ្មាកំពុងសរសេរកូដនៅតុ',
    age_format: '{n} ឆ្នាំ',
    skill_ml: 'ការរៀនម៉ាស៊ីន / Deep Learning',
    skill_voice: 'ភ្នាក់ងារសំឡេង',
    skill_speech: 'សំឡេង (STT / TTS)',
    skill_imgtrans: 'ការបំប្លែងរូបភាព',
    skill_pose: 'ការប៉ាន់ប្រមាណឥរិយាបថ',
    skill_det: 'ការរកឃើញ',
    skill_cls: 'ការចាត់ថ្នាក់',
    co1: 'ZerOneDay, កូរ៉េខាងត្បូង',
    co2: 'Samsung Medical Center, កូរ៉េខាងត្បូង',
    co3: 'Korea Software HRD Center, កម្ពុជា',
    co4: 'Sister of Code, កម្ពុជា',
    edu1_org: 'Ulsan National Institute of Science and Technology (UNIST), កូរ៉េខាងត្បូង',
    edu2_org: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ',
    train1_org: 'សាកលវិទ្យាល័យ SeoKyeong, កូរ៉េខាងត្បូង',
    tag_deep_learning: 'Deep Learning',
    tag_medical: 'រូបភាពវេជ្ជសាស្ត្រ',
    tag_gnn: 'Graph Neural Network',
    tag_realtime: 'ពេលវេលាជាក់ស្តែង',
    tag_cv: 'ចក្ខុវិស័យកុំព្យូទ័រ',
    tag_od: 'ការរកឃើញវត្ថុ',
    tag_webapp: 'កម្មវិធីគេហទំព័រ',
    tag_android: 'Android',
    tag_mobile: 'កម្មវិធីទូរស័ព្ទ',
    tag_cloud_llm: 'LLM លើពពក',
    tag_device_llm: 'LLM លើឧបករណ៍',
    tag_cloud_stt: 'STT លើពពក',
    tag_device_stt: 'STT លើឧបករណ៍',
    tag_cloud_tts: 'TTS លើពពក',
    tag_device_tts: 'TTS លើឧបករណ៍',
    img_card_va: 'assets/img/portfolio/ai-voice-coaching-agent.km.svg',
    img_pipeline: 'assets/img/portfolio/voice-agent-pipeline.km.svg',
    alt_card1: 'សិស្សក្នុងឥរិយាបថតេក្វាន់ដូសួរសំណួរដោយសំឡេង ហើយម៉ូនីទ័របង្ហាញចម្លើយរបស់គ្រូបង្វឹក',
    alt_card2: 'រូបភាពកាំរស្មីអ៊ិចដែលបានបង្កើតឡើងវិញជារូបភាព CT 3D',
    alt_card3: 'លទ្ធផលប៉ាន់ប្រមាណឥរិយាបថដៃ 3D លើរូបភាពដៃ',
    alt_card4: 'លទ្ធផលរកឃើញមនុស្សលើទិដ្ឋភាពផ្លូវ',
    alt_card5: 'អេក្រង់កម្មវិធីគេហទំព័រ MyAlumni',
    alt_card6: 'អេក្រង់កម្មវិធី Android MathForum',
    alt_pipeline: 'បណ្តាញដំណើរការរបស់ភ្នាក់ងារសំឡេង៖ ពាក្យដាស់ ការចាប់សំឡេង សំឡេងទៅជាអត្ថបទ អ្នកបញ្ជូនបន្តដោយច្បាប់ជាមុន បន្ទាប់មកការគ្រប់គ្រងអេក្រង់ ឬការបង្វឹកដោយ RAG និងចម្លើយជាសំឡេង។ ប្រើម៉ូដែលលើពពកពេលមានអ៊ីនធឺណិត និងម៉ូដែលលើឧបករណ៍ពេលគ្មាន ហើយអ្នកប្រើអាចកាត់សម្ដីចម្លើយបាន។',
    aria_preview: 'មើលរូបភាព',
    aria_details: 'ព័ត៌មានលម្អិតនៃគម្រោង',
    aria_breadcrumb: 'ផ្លូវរុករក',
    contact_address: 'Bongcheon-dong, Gwanak-gu, ទីក្រុងសេអ៊ូល, កូរ៉េខាងត្បូង',
    contact_loading: 'កំពុងផ្ញើ',
    footer_rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាង',
    theme_toggle: 'ម៉ូដងងឹត',
    logo: 'SNH',
    name_full: 'ហោ សៀកនី',
    scroll_top: 'ទៅលើបំផុត',
    scroll_down: 'ទៅក្រោមបំផុត',
    ct_axial: 'ផ្ទៃកាត់ទទឹង (Axial)',
    ct_coronal: 'ផ្ទៃកាត់ខាងមុខ (Coronal)',
    ct_sagittal: 'ផ្ទៃកាត់ចំហៀង (Sagittal)',
  },
};

// Khmer has no spaces between words, so the browser chooses line breaks with its
// own Khmer dictionary. It sometimes splits a word the wrong way ("កុំ|ព្យូទ័រ").
// For the words below, a word joiner (U+2060) between syllables keeps them whole.
// It is never put inside a syllable (not around the subscript sign U+17D2).
const KHMER_WORDS = [
  'ហេដ្ឋារចនាសម្ព័ន្ធ',
  'បញ្ញាសិប្បនិម្មិត',
  'មូលដ្ឋានទិន្នន័យ',
  'ពេលវេលាជាក់ស្តែង',
  'មូលដ្ឋានចំណេះដឹង',
  'កាយវិភាគសាស្ត្រ',
  'ចំណាប់អារម្មណ៍',
  'ក្បួនដោះស្រាយ',
  'ស្វ័យប្រវត្តិ',
  'សាកលវិទ្យាល័យ',
  'កូរ៉េខាងត្បូង',
  'ការចាត់ថ្នាក់',
  'ការបញ្ជូនបន្ត',
  'វិទ្យាសាស្ត្រ',
  'រចនាសម្ព័ន្ធ',
  'ការហ្វឹកហាត់',
  'បច្ចេកវិទ្យា',
  'បណ្តុះបណ្តាល',
  'ស្ថាបត្យកម្ម',
  'ប៉ារ៉ាម៉ែត្រ',
  'មគ្គុទ្ទេសក៍',
  'វេជ្ជសាស្ត្រ',
  'កាំរស្មីអ៊ិច',
  'ប្រសិទ្ធភាព',
  'ផ្ទាល់ខ្លួន',
  'អតីតនិស្សិត',
  'ប្រវត្តិរូប',
  'សទ្ទានុក្រម',
  'មីក្រូហ្វូន',
  'ប៉ាន់ប្រមាណ',
  'វិធីសាស្ត្រ',
  'គណិតវិទ្យា',
  'ចក្ខុវិស័យ',
  'ដំណោះស្រាយ',
  'កុំព្យូទ័រ',
  'ទំនាក់ទំនង',
  'តេក្វាន់ដូ',
  'ស្រាវជ្រាវ',
  'ការបំប្លែង',
  'គ្រូបង្វឹក',
  'ពាក្យបញ្ជា',
  'ពិនិត្យមើល',
  'ពាក្យដាស់',
  'និក្ខេបបទ',
  'បច្ចេកទេស',
  'ក្រុមហ៊ុន',
  'វិស្វកម្ម',
  'អនុបណ្ឌិត',
  'ជម្រាបសួរ',
  'អន្តរកម្ម',
  'ភ្នាក់ងារ',
  'អ៊ីនធឺណិត',
  'បទពិសោធន៍',
  'ហ្វឹកហាត់',
  'កំណត់ត្រា',
  'មតិយោបល់',
  'ស្ថានភាព',
  'ទូរស័ព្ទ',
  'ចំណេះដឹង',
  'កម្មវិធី',
  'ប្រព័ន្ធ',
  'ទាន់សម័យ',
  'ការរកឃើញ',
  'គេហទំព័រ',
  'ម៉ូនីទ័រ',
  'សញ្ជាតិ',
  'ភ្នំពេញ',
  'ម៉ាស៊ីន',
  'អេក្រង់',
  'វិស្វករ',
  'អភិវឌ្ឍ',
  'ចាំបាច់',
  'ឥរិយាបថ',
  'កម្ពុជា',
  'ស្វែងរក',
  'ប្រេកង់',
  'ម៉ូដែល',
  'អ៊ីមែល',
  'វីដេអូ',
  'ឧបករណ៍',
  'បណ្តាញ',
  'រូបភាព',
  'សហគមន៍',
  'សេអ៊ូល',
  'អត្ថបទ',
  'លម្អិត',
  'ប្រយោគ',
  'ពូមសេ',
  'អនឡាញ',
  'សំឡេង',
  'សៀកនី',
  'ដុំពក',
  'សួត',
];
const joinKhmerSyllables = word => word.replace(/([\u1780-\u17FF])(?=[\u1780-\u17B3])/g,
  (m, prev) => (prev === '\u17D2' ? prev : prev + '\u2060'));
const KHMER_JOINED = KHMER_WORDS.map(word => [word, joinKhmerSyllables(word)]);

function khmerKeepWords(text) {
  for (const [word, joined] of KHMER_JOINED) text = text.split(word).join(joined);
  return text;
}

const I18N_ATTRS = {
  'data-i18n-placeholder': 'placeholder',
  'data-i18n-alt': 'alt',
  'data-i18n-aria': 'aria-label',
  'data-i18n-src': 'src',
  'data-i18n-href': 'href',
  'data-i18n-title': 'title',
};

function applyLang(lang) {
  const t = i18n[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    let text = t[el.getAttribute('data-i18n')];
    if (!text) return;
    if (lang === 'km') text = khmerKeepWords(text);
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
  // Attributes: placeholders, image descriptions, labels, and the image itself.
  Object.entries(I18N_ATTRS).forEach(([dataAttr, attr]) => {
    document.querySelectorAll('[' + dataAttr + ']').forEach(el => {
      const text = t[el.getAttribute(dataAttr)];
      if (!text) return;
      el.setAttribute(attr, text);
      if ((attr === 'src' || attr === 'href') && el.hasAttribute('data-dark')) el.dataset.light = text;
    });
  });
  const ageEl = document.getElementById('age-value');
  if (ageEl && ageEl.dataset.age && t.age_format) {
    ageEl.textContent = t.age_format.replace('{n}', ageEl.dataset.age);
  }
  // Show light or dark images for the current theme (assets/js/theme.js).
  if (window.siteThemeImages) window.siteThemeImages();
  // The lightbox reads image addresses when it starts; refresh its list so a
  // preview opens the image in the chosen language (no extra click handlers).
  if (window.siteLightbox && typeof window.siteLightbox.getElements === 'function') {
    window.siteLightbox.elements = window.siteLightbox.getElements();
  }
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );
  document.documentElement.lang = (lang === 'ko' || lang === 'km') ? lang : 'en';
  try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* storage unavailable */ }
  applyLang(i18n[saved] ? saved : 'en');
});
