/**
 * "Ask me" chat panel.
 * Runs entirely in the visitor's browser: it matches keywords in the question
 * against the topics below and answers from facts already on this site.
 * Nothing the visitor types is sent anywhere.
 *
 * To update an answer, edit TOPICS. Keywords are lower case; English keywords
 * match the start of a word ("skill" matches "skills"; 3 letters or fewer must be
 * the whole word), Khmer and Korean keywords match anywhere in the question.
 * Answers are given in Khmer (km), English (en) and Korean (ko).
 */
(function () {
  const onHome = /(^|\/)(index(\.html)?)?$/.test(location.pathname);
  const sect = id => (onHome ? '#' : 'index#') + id;
  const a = (href, text) => `<a href="${href}">${text}</a>`;
  const LINKEDIN = 'https://www.linkedin.com/in/siekny-hor-862898151/';
  const MAIL = 'mailto:sieknyhor@gmail.com';

  const UI = {
    en: {
      open: 'Chat with me', close: 'Close chat', title: 'Ask me anything',
      subtitle: 'Automatic answers from this site', placeholder: 'Type a question…', send: 'Send',
      greeting: "Hi! I'm Siekny's site assistant. Ask about my skills, projects, experience, education or how to contact me.",
      fallback: 'Sorry, I can only answer about my skills, projects, experience, education, languages and contact details. Try one of these:',
      chips: ['Skills', 'Projects', 'Experience', 'Education', 'Contact'],
    },
    ko: {
      open: '채팅하기', close: '채팅 닫기', title: '무엇이든 물어보세요',
      subtitle: '이 사이트의 정보로 자동 답변해요', placeholder: '질문을 입력하세요…', send: '보내기',
      greeting: '안녕하세요! 호식니의 사이트 도우미입니다. 기술, 프로젝트, 경력, 학력, 연락 방법을 물어보세요.',
      fallback: '죄송해요, 기술, 프로젝트, 경력, 학력, 언어, 연락처에 대해서만 답할 수 있어요. 아래에서 골라 보세요:',
      chips: ['기술', '프로젝트', '경력', '학력', '연락처'],
    },
    km: {
      open: 'ជជែកជាមួយខ្ញុំ', close: 'បិទការជជែក', title: 'សួរខ្ញុំអ្វីក៏បាន',
      subtitle: 'ចម្លើយស្វ័យប្រវត្តិពីគេហទំព័រនេះ', placeholder: 'វាយសំណួររបស់អ្នក…', send: 'ផ្ញើ',
      greeting: 'សួស្តី! ខ្ញុំជាជំនួយការគេហទំព័ររបស់ សៀកនី។ សូមសួរអំពីជំនាញ គម្រោង បទពិសោធន៍ ការអប់រំ ឬរបៀបទំនាក់ទំនង។',
      fallback: 'សូមអភ័យទោស ខ្ញុំអាចឆ្លើយបានតែអំពីជំនាញ គម្រោង បទពិសោធន៍ ការអប់រំ ភាសា និងព័ត៌មានទំនាក់ទំនងប៉ុណ្ណោះ។ សូមសាកល្បងមួយក្នុងចំណោមទាំងនេះ៖',
      chips: ['ជំនាញ', 'គម្រោង', 'បទពិសោធន៍', 'ការអប់រំ', 'ទំនាក់ទំនង'],
    },
  };
  const CHIP_QUERIES = {
    en: ['skills', 'projects', 'experience', 'education', 'contact'],
    ko: ['기술', '프로젝트', '경력', '학력', '연락처'],
    km: ['ជំនាញ', 'គម្រោង', 'បទពិសោធន៍', 'ការអប់រំ', 'ទំនាក់ទំនង'],
  };

  // Order matters only for ties: the earlier topic wins.
  const TOPICS = [
    {
      keywords: ['thank', 'thanks', 'bye', 'goodbye', 'great', 'cool', 'awesome', '고마', '감사', '안녕히', '좋아요',
        'អរគុណ', 'លាហើយ', 'ជម្រាបលា', 'ល្អណាស់'],
      en: "You're welcome! Feel free to ask anything else.",
      ko: '천만에요! 더 궁금한 점이 있으면 물어보세요.',
      km: 'មិនអីទេ! សូមសួរបន្ថែមបានគ្រប់ពេល។',
    },
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', '안녕', '반가', '하이',
        'សួស្តី', 'សួស្ដី', 'ជំរាបសួរ', 'ជម្រាបសួរ'],
      en: 'Hello! Ask me about my skills, projects, work experience, education or how to contact me.',
      ko: '안녕하세요! 기술, 프로젝트, 경력, 학력, 연락 방법에 대해 물어보세요.',
      km: 'សួស្តី! សូមសួរខ្ញុំអំពីជំនាញ គម្រោង បទពិសោធន៍ការងារ ការអប់រំ ឬរបៀបទំនាក់ទំនង។',
    },
    {
      keywords: ['are you a bot', 'are you real', 'bot', 'bots', 'robot', 'chatbot', 'automatic', '챗봇', '로봇', '자동', '사람이',
        'បូត', 'រ៉ូបូត', 'ស្វ័យប្រវត្តិ', 'មនុស្សពិត'],
      en: `I'm a simple automatic assistant: I answer from a list of facts on this site. For anything else, please ${a(sect('contact'), 'contact Siekny directly')}.`,
      ko: `저는 이 사이트의 정보 목록으로 답하는 간단한 자동 도우미예요. 그 밖의 질문은 ${a(sect('contact'), '호식니에게 직접 연락')}해 주세요.`,
      km: `ខ្ញុំជាជំនួយការស្វ័យប្រវត្តិសាមញ្ញ ដែលឆ្លើយពីបញ្ជីព័ត៌មាននៅលើគេហទំព័រនេះ។ សម្រាប់សំណួរផ្សេងទៀត សូម${a(sect('contact'), 'ទាក់ទង សៀកនី ដោយផ្ទាល់')}។`,
    },
    {
      keywords: ['who are you', 'about you', 'yourself', 'introduce', 'introduction', 'background', 'profile', '소개', '누구', '프로필',
        'អ្នកជានរណា', 'អំពីអ្នក', 'អំពីខ្លួន', 'ណែនាំខ្លួន'],
      en: `I'm Siekny Hor, an AI engineer from Cambodia, living in Seoul. I work on computer vision, deep learning and, most recently, LLM-based voice agents. More in the ${a(sect('about'), 'About')} section.`,
      ko: `저는 캄보디아 출신으로 서울에 살고 있는 AI 엔지니어 호식니입니다. 컴퓨터 비전과 딥러닝, 그리고 최근에는 LLM 기반 음성 에이전트를 개발하고 있습니다. 자세한 내용은 ${a(sect('about'), '소개')} 섹션을 보세요.`,
      km: `ខ្ញុំឈ្មោះ ហោ សៀកនី ជាវិស្វករ AI មកពីកម្ពុជា រស់នៅទីក្រុងសេអ៊ូល។ ខ្ញុំធ្វើការលើចក្ខុវិស័យកុំព្យូទ័រ Deep Learning ហើយថ្មីៗនេះ លើភ្នាក់ងារសំឡេងដែលប្រើ LLM។ មើលបន្ថែមនៅផ្នែក${a(sect('about'), 'អំពីខ្ញុំ')}។`,
    },
    {
      keywords: ['skill', 'stack', 'technolog', 'tool', 'framework', 'programming', 'python', 'expertise', 'tech', 'can you do',
        '기술', '스택', '도구', '프레임워크', '역량', '파이썬', '다룰 수',
        'ជំនាញ', 'បច្ចេកវិទ្យា', 'ឧបករណ៍', 'ភាសាកម្មវិធី', 'សមត្ថភាព'],
      en: 'AI: deep learning and computer vision (detection, pose estimation, classification, image translation), LLMs and RAG, AI agents and speech AI (speech-to-text, text-to-speech). Tools: Python, LangChain, ONNX Runtime, ChromaDB, PySide6/QML and pytest. Earlier I also worked with Java, Spring Boot, PostgreSQL, HTML/CSS and React Native.',
      ko: 'AI: 딥러닝과 컴퓨터 비전(탐지, 자세 추정, 분류, 이미지 변환), LLM과 RAG, AI 에이전트와 음성 AI(음성 인식, 음성 합성). 도구: Python, LangChain, ONNX Runtime, ChromaDB, PySide6/QML, pytest. 이전에는 Java, Spring Boot, PostgreSQL, HTML/CSS, React Native도 사용했습니다.',
      km: 'AI៖ Deep Learning និងចក្ខុវិស័យកុំព្យូទ័រ (ការរកឃើញ ការប៉ាន់ប្រមាណឥរិយាបថ ការចាត់ថ្នាក់ ការបំប្លែងរូបភាព) LLM និង RAG ភ្នាក់ងារ AI និង AI សំឡេង (សំឡេងទៅជាអត្ថបទ អត្ថបទទៅជាសំឡេង)។ ឧបករណ៍៖ Python, LangChain, ONNX Runtime, ChromaDB, PySide6/QML និង pytest។ ពីមុនខ្ញុំក៏បានប្រើ Java, Spring Boot, PostgreSQL, HTML/CSS និង React Native ផងដែរ។',
    },
    {
      keywords: ['voice', 'agent', 'speech', 'coach', 'poomsae', 'taekwondo', 'wake word', 'barge', 'llm', 'rag',
        '음성', '에이전트', '코치', '코칭', '품새', '태권도', '호출어',
        'សំឡេង', 'ភ្នាក់ងារ', 'គ្រូបង្វឹក', 'ពូមសេ', 'តេក្វាន់ដូ', 'ពាក្យដាស់'],
      en: `I built a hands-free AI voice coaching agent for a Taekwondo coaching system: users control the app and ask about their training by voice. It has a custom wake word, barge-in, rules-first LLM routing and RAG answers, and switches to on-device models without internet. ${a('ai-voice-coaching-agent', 'See the project')}.`,
      ko: `태권도 코칭 시스템을 위한 핸즈프리 AI 음성 코칭 에이전트를 개발했습니다. 사용자는 음성으로 앱을 조작하고 수련에 대해 질문합니다. 커스텀 호출어, 끼어들기, 규칙 우선 LLM 라우팅과 RAG 답변을 갖추고, 인터넷이 없으면 기기 내 모델로 전환됩니다. ${a('ai-voice-coaching-agent', '프로젝트 보기')}.`,
      km: `ខ្ញុំបានបង្កើតភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI ដែលមិនចាំបាច់ប្រើដៃ សម្រាប់ប្រព័ន្ធបង្វឹកតេក្វាន់ដូ៖ អ្នកប្រើគ្រប់គ្រងកម្មវិធី និងសួរអំពីការហ្វឹកហាត់ដោយសំឡេង។ វាមានពាក្យដាស់ផ្ទាល់ខ្លួន ការកាត់សម្ដី ការបញ្ជូនបន្តដោយច្បាប់ជាមុនជាមួយ LLM និងចម្លើយដោយ RAG ហើយប្តូរទៅម៉ូដែលលើឧបករណ៍ពេលគ្មានអ៊ីនធឺណិត។ ${a('ai-voice-coaching-agent', 'មើលគម្រោង')}។`,
    },
    {
      keywords: ['ct', 'x-ray', 'xray', 'x ray', 'medical', 'reconstruction', 'gan', 'xr2ct', 'samsung', 'lung',
        '의료', '엑스레이', 'x선', '재구성', '삼성', '폐',
        'កាំរស្មីអ៊ិច', 'វេជ្ជសាស្ត្រ', 'សួត', 'ការស្កេន', 'សាំសុង'],
      en: `At Samsung Medical Center I developed XR2CT, a GAN-based model that reconstructs a 3D CT volume from a single X-ray image, with improved structural accuracy over existing methods. ${a('ct-reconstruction-from-xray', 'See the project')}.`,
      ko: `삼성서울병원에서 단일 X선 영상으로 3D CT 볼륨을 재구성하는 GAN 기반 모델 XR2CT를 개발했으며, 기존 방법보다 구조적 정확도를 높였습니다. ${a('ct-reconstruction-from-xray', '프로젝트 보기')}.`,
      km: `នៅ Samsung Medical Center ខ្ញុំបានអភិវឌ្ឍ XR2CT ដែលជាម៉ូដែលផ្អែកលើ GAN សម្រាប់បង្កើតរូបភាព CT 3D ឡើងវិញពីរូបភាពកាំរស្មីអ៊ិចតែមួយ ដោយមានភាពត្រឹមត្រូវនៃរចនាសម្ព័ន្ធប្រសើរជាងវិធីសាស្ត្រដែលមានស្រាប់។ ${a('ct-reconstruction-from-xray', 'មើលគម្រោង')}។`,
    },
    {
      keywords: ['hand', 'pose', '3d', 'graph', 'gnn', 'fps', '손 자세', '자세 추정', '손 추정', '그래프',
        'ឥរិយាបថដៃ', 'ឥរិយាបថ', 'ក្រាហ្វ'],
      en: `My master's research: a lightweight graph network for 3D single-hand pose estimation, with 8.48M parameters, running at 55 FPS on a CPU and 109 FPS on a GPU. ${a('3d-hand-pose-estimation', 'See the project')}.`,
      ko: `석사 연구로 3D 단일 손 자세 추정을 위한 경량 그래프 네트워크를 개발했습니다. 파라미터 8.48M으로 CPU에서 55 FPS, GPU에서 109 FPS로 동작합니다. ${a('3d-hand-pose-estimation', '프로젝트 보기')}.`,
      km: `ការស្រាវជ្រាវថ្នាក់អនុបណ្ឌិតរបស់ខ្ញុំ៖ បណ្តាញក្រាហ្វស្រាលសម្រាប់ការប៉ាន់ប្រមាណឥរិយាបថដៃតែមួយក្នុង 3D មានប៉ារ៉ាម៉ែត្រ 8.48M ដំណើរការ 55 FPS លើ CPU និង 109 FPS លើ GPU។ ${a('3d-hand-pose-estimation', 'មើលគម្រោង')}។`,
    },
    {
      keywords: ['detection', 'detect', 'human', 'pedestrian', 'occlu', 'object', '탐지', '인체', '객체', '보행자',
        'រកឃើញ', 'រកឃើញមនុស្ស', 'វត្ថុ'],
      en: 'I built a real-time human detection model that predicts occluded people and detects small humans.',
      ko: '가려진 사람을 예측하고 작은 사람도 탐지하는 실시간 인체 탐지 모델을 개발했습니다.',
      km: 'ខ្ញុំបានបង្កើតម៉ូដែលរកឃើញមនុស្សក្នុងពេលវេលាជាក់ស្តែង ដែលទស្សន៍ទាយមនុស្សដែលត្រូវបិទបាំង និងរកឃើញមនុស្សតូចៗ។',
    },
    {
      keywords: ['web', 'website', 'android', 'mobile', 'app', 'myalumni', 'alumni', 'mathforum', 'math',
        '웹', '안드로이드', '모바일', '앱', '동문', '수학',
        'គេហទំព័រ', 'កម្មវិធីទូរស័ព្ទ', 'អតីតនិស្សិត', 'គណិតវិទ្យា'],
      en: `I have also built web and mobile apps: MyAlumni, a web application that stores and organizes alumni records, and MathForum, an Android app where students share math knowledge. See them in the ${a(sect('portfolio'), 'Portfolio')}.`,
      ko: `웹·모바일 앱도 개발했습니다. 동문 기록을 저장하고 정리하는 웹 애플리케이션 MyAlumni와, 학생들이 수학 지식을 공유하는 안드로이드 앱 MathForum이 있습니다. ${a(sect('portfolio'), '포트폴리오')}에서 볼 수 있어요.`,
      km: `ខ្ញុំក៏បានបង្កើតកម្មវិធីគេហទំព័រ និងទូរស័ព្ទផងដែរ៖ MyAlumni ជាកម្មវិធីគេហទំព័រសម្រាប់រក្សាទុក និងរៀបចំកំណត់ត្រាអតីតនិស្សិត និង MathForum ជាកម្មវិធី Android ដែលសិស្សចែករំលែកចំណេះដឹងគណិតវិទ្យា។ មើលនៅផ្នែក${a(sect('portfolio'), 'ស្នាដៃ')}។`,
    },
    {
      keywords: ['project', 'portfolio', 'built', 'made', 'work samples', '프로젝트', '포트폴리오', '작업물', '만든',
        'គម្រោង', 'ស្នាដៃ', 'បានបង្កើត'],
      en: `My main projects: the ${a('ai-voice-coaching-agent', 'AI Voice Coaching Agent')}, ${a('ct-reconstruction-from-xray', 'CT Reconstruction from X-Ray Images')}, ${a('3d-hand-pose-estimation', '3D Hand Pose Estimation')} and a real-time human detection model, plus web and mobile apps. See them all in the ${a(sect('portfolio'), 'Portfolio')}.`,
      ko: `주요 프로젝트: ${a('ai-voice-coaching-agent', 'AI 음성 코칭 에이전트')}, ${a('ct-reconstruction-from-xray', 'X선 영상에서 CT 재구성')}, ${a('3d-hand-pose-estimation', '3D 손 자세 추정')}, 실시간 인체 탐지 모델, 그리고 웹·모바일 앱이 있습니다. ${a(sect('portfolio'), '포트폴리오')}에서 모두 볼 수 있어요.`,
      km: `គម្រោងសំខាន់ៗរបស់ខ្ញុំ៖ ${a('ai-voice-coaching-agent', 'ភ្នាក់ងារគ្រូបង្វឹកសំឡេង AI')} ${a('ct-reconstruction-from-xray', 'ការបង្កើតរូបភាព CT ឡើងវិញពីកាំរស្មីអ៊ិច')} ${a('3d-hand-pose-estimation', 'ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D')} និងម៉ូដែលរកឃើញមនុស្សក្នុងពេលវេលាជាក់ស្តែង ព្រមទាំងកម្មវិធីគេហទំព័រ និងទូរស័ព្ទ។ មើលទាំងអស់នៅផ្នែក${a(sect('portfolio'), 'ស្នាដៃ')}។`,
    },
    {
      keywords: ['experience', 'work', 'job', 'jobs', 'career', 'company', 'employ', 'zeroneday', 'current', 'worked',
        '경력', '경험', '회사', '직장', '근무', '일하', '제로원데이',
        'បទពិសោធន៍', 'ការងារ', 'ក្រុមហ៊ុន', 'អាជីព', 'ធ្វើការ'],
      en: `Now: AI Developer at ZerOneDay in South Korea (since Nov 2025). Before: AI Researcher at Samsung Medical Center (Sep 2024 – Mar 2025), IT Instructor at Korea Software HRD Center (2020–2021), coding mentor at Sister of Code (2020) and part-time web designer at Plan-B (2018–2019). Details in my ${a(sect('resume'), 'Resume')}.`,
      ko: `현재: (주)제로원데이 AI 개발자(2025년 11월부터). 이전: 삼성서울병원 미래의학연구원 AI 연구원(2024년 9월 – 2025년 3월), Korea Software HRD Center IT 강사(2020–2021), Sister of Code 코딩 멘토(2020), Plan-B 파트타임 웹 디자이너(2018–2019). 자세한 내용은 ${a(sect('resume'), '이력서')}를 보세요.`,
      km: `បច្ចុប្បន្ន៖ អ្នកអភិវឌ្ឍ AI នៅ ZerOneDay ប្រទេសកូរ៉េខាងត្បូង (ចាប់ពីវិច្ឆិកា 2025)។ មុននេះ៖ អ្នកស្រាវជ្រាវ AI នៅ Samsung Medical Center (កញ្ញា 2024 – មីនា 2025) គ្រូបង្រៀន IT នៅ Korea Software HRD Center (2020–2021) អ្នកណែនាំសរសេរកូដនៅ Sister of Code (2020) និងអ្នករចនាគេហទំព័រក្រៅម៉ោងនៅ Plan-B (2018–2019)។ មើលលម្អិតនៅផ្នែក${a(sect('resume'), 'ប្រវត្តិរូប')}។`,
    },
    {
      keywords: ['education', 'study', 'studied', 'degree', 'university', 'school', 'master', 'bachelor', 'graduat', 'unist', 'thesis', 'major',
        '학력', '학교', '대학', '석사', '학사', '졸업', '전공', '논문', '공부',
        'ការអប់រំ', 'សិក្សា', 'សាកលវិទ្យាល័យ', 'សញ្ញាបត្រ', 'អនុបណ្ឌិត', 'បរិញ្ញាបត្រ', 'និក្ខេបបទ'],
      en: `Master of Artificial Intelligence at UNIST (2022–2024), with a thesis on fast and accurate ${a('3d-hand-pose-estimation', '3D hand pose estimation')}. Before that I studied Computer Science at the Royal University of Phnom Penh (2016–2020).`,
      ko: `울산과학기술원(UNIST)에서 인공지능 석사(2022–2024)를 마쳤고, 빠르고 정확한 ${a('3d-hand-pose-estimation', '3D 손 자세 추정')}에 관한 논문을 썼습니다. 그 전에는 프놈펜 왕립대학교에서 컴퓨터 공학을 공부했습니다(2016–2020).`,
      km: `អនុបណ្ឌិតផ្នែកបញ្ញាសិប្បនិម្មិតនៅ UNIST (2022–2024) ជាមួយនិក្ខេបបទស្តីពី${a('3d-hand-pose-estimation', 'ការប៉ាន់ប្រមាណឥរិយាបថដៃ 3D')} ដែលលឿន និងត្រឹមត្រូវ។ មុននោះ ខ្ញុំបានសិក្សាវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (2016–2020)។`,
    },
    {
      keywords: ['language', 'speak', 'korean', 'english', 'khmer', 'native', 'mother tongue', 'topik',
        '언어', '한국어', '영어', '외국어', '크메르', '모국어',
        'ភាសា', 'និយាយ', 'ភាសាកូរ៉េ', 'ភាសាអង់គ្លេស', 'ភាសាខ្មែរ', 'ភាសាកំណើត'],
      en: 'Khmer is my native language. I work in English and can hold daily conversations in Korean (Korean Language Program at SeoKyeong University).',
      ko: '크메르어가 모국어이고, 영어로 업무를 하며, 한국어로 일상 대화가 가능합니다(서경대학교 한국어 교육 프로그램 수료).',
      km: 'ភាសាខ្មែរជាភាសាកំណើតរបស់ខ្ញុំ។ ខ្ញុំធ្វើការជាភាសាអង់គ្លេស ហើយអាចសន្ទនាប្រចាំថ្ងៃជាភាសាកូរ៉េបាន (កម្មវិធីភាសាកូរ៉េនៅសាកលវិទ្យាល័យ SeoKyeong)។',
    },
    {
      keywords: ['where', 'location', 'live', 'based', 'city', 'country', 'seoul', 'south korea', 'cambodia', 'nationality',
        '어디', '위치', '사는', '서울', '캄보디아', '국적', '출신',
        'នៅឯណា', 'រស់នៅ', 'ទីតាំង', 'សេអ៊ូល', 'ប្រទេស', 'មកពី', 'សញ្ជាតិ'],
      en: "I'm from Cambodia and live in Seoul, South Korea.",
      ko: '캄보디아 출신이며, 대한민국 서울에 살고 있습니다.',
      km: 'ខ្ញុំមកពីប្រទេសកម្ពុជា ហើយរស់នៅទីក្រុងសេអ៊ូល ប្រទេសកូរ៉េខាងត្បូង។',
    },
    {
      keywords: ['resume', 'cv', 'résumé', '이력서', 'ប្រវត្តិរូប'],
      en: `My resume is on this page: ${a(sect('resume'), 'Resume')}, with work experience, education and training.`,
      ko: `이력서는 이 페이지의 ${a(sect('resume'), '이력서')} 섹션에 있어요. 경력, 학력, 교육 프로그램을 볼 수 있습니다.`,
      km: `ប្រវត្តិរូបរបស់ខ្ញុំនៅលើទំព័រនេះ៖ ${a(sect('resume'), 'ប្រវត្តិរូប')} ដែលមានបទពិសោធន៍ការងារ ការអប់រំ និងការបណ្តុះបណ្តាល។`,
    },
    {
      keywords: ['contact', 'email', 'e-mail', 'mail', 'phone', 'call me', 'reach', 'linkedin', 'message', 'hire', 'hiring', 'interview',
        '연락', '이메일', '메일', '전화', '링크드인', '채용', '문의', '면접',
        'ទំនាក់ទំនង', 'អ៊ីមែល', 'ទូរស័ព្ទ', 'ផ្ញើសារ', 'ជ្រើសរើស', 'សម្ភាសន៍'],
      en: `Email me at ${a(MAIL, 'sieknyhor@gmail.com')}, connect on ${a(LINKEDIN, 'LinkedIn')}, or send a message with the ${a(sect('contact'), 'contact form')}.`,
      ko: `${a(MAIL, 'sieknyhor@gmail.com')}으로 이메일을 보내거나, ${a(LINKEDIN, 'LinkedIn')}에서 연결하거나, ${a(sect('contact'), '문의 양식')}으로 메시지를 보내 주세요.`,
      km: `សូមផ្ញើអ៊ីមែលមក ${a(MAIL, 'sieknyhor@gmail.com')} ភ្ជាប់ទំនាក់ទំនងតាម ${a(LINKEDIN, 'LinkedIn')} ឬផ្ញើសារតាម${a(sect('contact'), 'ទម្រង់ទំនាក់ទំនង')}។`,
    },
  ];

  const normalize = text => ' ' + text.toLowerCase()
    .replace(/[^0-9a-zÀ-ɏក-៿가-힣\s-]+/g, ' ')
    .replace(/\s+/g, ' ').trim() + ' ';
  const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Khmer and Korean keywords match anywhere; English ones match the start of a word,
  // or the whole word when they are 3 letters or fewer ("hi" must not match "hire").
  function score(topic, q) {
    let total = 0;
    for (const kw of topic.keywords) {
      let hit;
      if (/[^\x00-\x7f]/.test(kw) && !/^[\x00-\x7fé]+$/.test(kw)) {
        hit = q.includes(kw);
      } else {
        const end = kw.length <= 3 ? '(?![0-9a-z])' : '';
        hit = new RegExp('[^0-9a-z]' + escapeRe(kw) + end).test(q);
      }
      if (hit) total += kw.includes(' ') || kw.length >= 6 && /[ក-៿]/.test(kw) ? 2 : 1;
    }
    return total;
  }

  function answerFor(question) {
    const q = normalize(question);
    let best = null;
    let bestScore = 0;
    for (const topic of TOPICS) {
      const s = score(topic, q);
      if (s > bestScore) { best = topic; bestScore = s; }
    }
    return best;
  }

  const pageLang = () => (UI[document.documentElement.lang] ? document.documentElement.lang : 'en');
  const questionLang = q => (/[ក-៿]/.test(q) ? 'km' : /[가-힣]/.test(q) ? 'ko' : /[a-z]/i.test(q) ? 'en' : pageLang());

  // ---------------------------------------------------------------- panel
  const root = document.createElement('div');
  root.className = 'chat';
  root.innerHTML = `
    <button type="button" class="chat-toggle" aria-expanded="false" aria-controls="chat-panel">
      <i class="bi bi-chat-dots-fill" aria-hidden="true"></i>
    </button>
    <div class="chat-panel" id="chat-panel" role="dialog" hidden>
      <div class="chat-head">
        <span class="chat-avatar" aria-hidden="true">SH</span>
        <div><strong class="chat-title"></strong><span class="chat-sub"></span></div>
        <button type="button" class="chat-close"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div class="chat-log" role="log" aria-live="polite"></div>
      <div class="chat-chips"></div>
      <form class="chat-form" autocomplete="off">
        <input class="chat-input" type="text" maxlength="200">
        <button type="submit" class="chat-send"><i class="bi bi-send-fill" aria-hidden="true"></i></button>
      </form>
    </div>`;
  document.body.appendChild(root);

  const toggle = root.querySelector('.chat-toggle');
  const panel = root.querySelector('.chat-panel');
  const log = root.querySelector('.chat-log');
  const chips = root.querySelector('.chat-chips');
  const form = root.querySelector('.chat-form');
  const input = root.querySelector('.chat-input');
  let started = false;

  function labels() {
    const t = UI[pageLang()];
    toggle.setAttribute('aria-label', t.open);
    toggle.title = t.open;
    panel.setAttribute('aria-label', t.title);
    root.querySelector('.chat-title').textContent = t.title;
    root.querySelector('.chat-sub').textContent = t.subtitle;
    root.querySelector('.chat-close').setAttribute('aria-label', t.close);
    root.querySelector('.chat-send').setAttribute('aria-label', t.send);
    input.placeholder = t.placeholder;
    input.setAttribute('aria-label', t.placeholder);
    chips.innerHTML = '';
    t.chips.forEach((label, i) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chat-chip';
      chip.textContent = label;
      chip.addEventListener('click', () => ask(CHIP_QUERIES[pageLang()][i]));
      chips.appendChild(chip);
    });
  }

  function add(who, content, isHtml) {
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg--' + who;
    if (isHtml) msg.innerHTML = content; else msg.textContent = content;
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function ask(question) {
    const text = question.trim();
    if (!text) return;
    add('user', text, false);
    const lang = questionLang(text);
    const topic = answerFor(text);
    const typing = add('bot', '•••', false);
    typing.classList.add('chat-typing');
    setTimeout(() => {
      typing.classList.remove('chat-typing');
      const reply = topic ? topic[lang] : UI[lang].fallback;
      typing.innerHTML = lang === 'km' && window.khmerKeepWords ? window.khmerKeepWords(reply) : reply;
      log.scrollTop = log.scrollHeight;
    }, 450);
  }

  function open(show) {
    panel.hidden = !show;
    toggle.setAttribute('aria-expanded', String(show));
    root.classList.toggle('chat--open', show);
    if (show) {
      if (!started) {
        const hello = UI[pageLang()].greeting;
        add('bot', pageLang() === 'km' && window.khmerKeepWords ? window.khmerKeepWords(hello) : hello, false);
        started = true;
      }
      input.focus();
    } else {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => open(panel.hidden));
  root.querySelector('.chat-close').addEventListener('click', () => open(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) open(false); });
  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); input.value = ''; });
  log.addEventListener('click', e => { if (e.target.closest('a[href^="#"]')) open(false); });

  // Follow the ខ្មែរ / English / 한국어 switch.
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  labels();
})();
