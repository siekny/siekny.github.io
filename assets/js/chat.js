/**
 * "Ask me" chat panel.
 * Runs entirely in the visitor's browser: it matches keywords in the question
 * against the topics below and answers from facts already on this site.
 * Nothing the visitor types is sent anywhere.
 *
 * To update an answer, edit TOPICS. Keywords are lower case; English keywords
 * match the start of a word ("skill" matches "skills"), Korean ones match anywhere.
 */
(function () {
  const onHome = /(^|\/)(index(\.html)?)?$/.test(location.pathname);
  const sect = id => (onHome ? '#' : 'index#') + id;
  const a = (href, text) => `<a href="${href}">${text}</a>`;

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
      greeting: '안녕하세요! Siekny의 사이트 도우미입니다. 기술, 프로젝트, 경력, 학력, 연락 방법을 물어보세요.',
      fallback: '죄송해요, 기술, 프로젝트, 경력, 학력, 언어, 연락처에 대해서만 답할 수 있어요. 아래에서 골라 보세요:',
      chips: ['기술', '프로젝트', '경력', '학력', '연락처'],
    },
  };

  // Order matters only for ties: the earlier topic wins.
  const TOPICS = [
    {
      keywords: ['thank', 'thanks', 'bye', 'goodbye', 'great', 'cool', 'awesome', '고마', '감사', '안녕히', '좋아요'],
      en: "You're welcome! Feel free to ask anything else.",
      ko: '천만에요! 더 궁금한 점이 있으면 물어보세요.',
    },
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', '안녕', '반가', '하이'],
      en: 'Hello! Ask me about my skills, projects, work experience, education or how to contact me.',
      ko: '안녕하세요! 기술, 프로젝트, 경력, 학력, 연락 방법에 대해 물어보세요.',
    },
    {
      keywords: ['are you a bot', 'are you real', 'bot', 'bots', 'robot', 'chatbot', 'automatic', '챗봇', '로봇', '자동', '사람이'],
      en: `I'm a simple automatic assistant: I answer from a list of facts on this site. For anything else, please ${a(sect('contact'), 'contact Siekny directly')}.`,
      ko: `저는 이 사이트의 정보 목록으로 답하는 간단한 자동 도우미예요. 그 밖의 질문은 ${a(sect('contact'), 'Siekny에게 직접 연락')}해 주세요.`,
    },
    {
      keywords: ['who are you', 'about you', 'yourself', 'introduce', 'introduction', 'background', 'profile', '소개', '누구', '프로필'],
      en: `I'm Siekny Hor, an AI engineer from Cambodia, living in Seoul. I work on computer vision, deep learning and, most recently, LLM-based voice agents. More in the ${a(sect('about'), 'About')} section.`,
      ko: `저는 캄보디아 출신으로 서울에 살고 있는 AI 엔지니어 Siekny Hor입니다. 컴퓨터 비전과 딥러닝, 그리고 최근에는 LLM 기반 음성 에이전트를 개발하고 있습니다. 자세한 내용은 ${a(sect('about'), '소개')} 섹션을 보세요.`,
    },
    {
      keywords: ['skill', 'stack', 'technolog', 'tool', 'framework', 'programming', 'python', 'expertise', 'tech', 'can you do', '기술', '스택', '도구', '프레임워크', '역량', '파이썬', '다룰 수'],
      en: 'AI: deep learning and computer vision (detection, pose estimation, classification, image translation), LLMs and RAG, AI agents and speech AI (speech-to-text, text-to-speech). Tools: Python, LangChain, ONNX Runtime, ChromaDB, PySide6/QML and pytest. Earlier I also worked with Java, Spring Boot, PostgreSQL, HTML/CSS and React Native.',
      ko: 'AI: 딥러닝과 컴퓨터 비전(탐지, 자세 추정, 분류, 이미지 변환), LLM과 RAG, AI 에이전트와 음성 AI(음성 인식, 음성 합성). 도구: Python, LangChain, ONNX Runtime, ChromaDB, PySide6/QML, pytest. 이전에는 Java, Spring Boot, PostgreSQL, HTML/CSS, React Native도 사용했습니다.',
    },
    {
      keywords: ['project', 'portfolio', 'built', 'made', 'work samples', '프로젝트', '포트폴리오', '작업물', '만든'],
      en: `My main projects: the ${a('ai-voice-coaching-agent', 'AI Voice Coaching Agent')}, ${a('ct-reconstruction-from-xray', 'CT Reconstruction from X-Ray Images')}, ${a('3d-hand-pose-estimation', '3D Hand Pose Estimation')} and a real-time human detection model, plus web and mobile apps. See them all in the ${a(sect('portfolio'), 'Portfolio')}.`,
      ko: `주요 프로젝트: ${a('ai-voice-coaching-agent', 'AI 음성 코칭 에이전트')}, ${a('ct-reconstruction-from-xray', 'X선 영상에서 CT 재구성')}, ${a('3d-hand-pose-estimation', '3D 손 자세 추정')}, 실시간 인체 탐지 모델, 그리고 웹·모바일 앱이 있습니다. ${a(sect('portfolio'), '포트폴리오')}에서 모두 볼 수 있어요.`,
    },
    {
      keywords: ['voice', 'agent', 'speech', 'coach', 'poomsae', 'taekwondo', 'wake word', 'barge', 'llm', 'rag', '음성', '에이전트', '코치', '코칭', '품새', '태권도', '호출어'],
      en: `I built a hands-free AI voice coaching agent for a Taekwondo coaching system: users control the app and ask about their training by voice. It has a custom wake word, barge-in, rules-first LLM routing and RAG answers, and switches to on-device models without internet. ${a('ai-voice-coaching-agent', 'See the project')}.`,
      ko: `태권도 코칭 시스템을 위한 핸즈프리 AI 음성 코칭 에이전트를 개발했습니다. 사용자는 음성으로 앱을 조작하고 수련에 대해 질문합니다. 커스텀 호출어, 끼어들기, 규칙 우선 LLM 라우팅과 RAG 답변을 갖추고, 인터넷이 없으면 기기 내 모델로 전환됩니다. ${a('ai-voice-coaching-agent', '프로젝트 보기')}.`,
    },
    {
      keywords: ['ct', 'x-ray', 'xray', 'x ray', 'medical', 'reconstruction', 'gan', 'xr2ct', 'samsung', 'lung', '의료', '엑스레이', 'x선', '재구성', '삼성', '폐'],
      en: `At Samsung Medical Center I developed XR2CT, a GAN-based model that reconstructs a 3D CT volume from a single X-ray image, with improved structural accuracy over existing methods. ${a('ct-reconstruction-from-xray', 'See the project')}.`,
      ko: `삼성서울병원에서 단일 X선 영상으로 3D CT 볼륨을 재구성하는 GAN 기반 모델 XR2CT를 개발했으며, 기존 방법보다 구조적 정확도를 높였습니다. ${a('ct-reconstruction-from-xray', '프로젝트 보기')}.`,
    },
    {
      keywords: ['hand', 'pose', '3d', 'graph', 'gnn', 'fps', '손 자세', '자세 추정', '손 추정', '그래프'],
      en: `My master's research: a lightweight graph network for 3D single-hand pose estimation, with 8.48M parameters, running at 55 FPS on a CPU and 109 FPS on a GPU. ${a('3d-hand-pose-estimation', 'See the project')}.`,
      ko: `석사 연구로 3D 단일 손 자세 추정을 위한 경량 그래프 네트워크를 개발했습니다. 파라미터 8.48M으로 CPU에서 55 FPS, GPU에서 109 FPS로 동작합니다. ${a('3d-hand-pose-estimation', '프로젝트 보기')}.`,
    },
    {
      keywords: ['detection', 'detect', 'human', 'pedestrian', 'occlu', 'object', '탐지', '인체', '객체', '보행자'],
      en: 'I built a real-time human detection model that predicts occluded people and detects small humans.',
      ko: '가려진 사람을 예측하고 작은 사람도 탐지하는 실시간 인체 탐지 모델을 개발했습니다.',
    },
    {
      keywords: ['web', 'website', 'android', 'mobile', 'app', 'myalumni', 'alumni', 'mathforum', 'math', '웹', '안드로이드', '모바일', '앱', '동문', '수학'],
      en: `I have also built web and mobile apps: MyAlumni, a web application that stores and organises alumni records, and MathForum, an Android app where students share math knowledge. See them in the ${a(sect('portfolio'), 'Portfolio')}.`,
      ko: `웹·모바일 앱도 개발했습니다. 동문 기록을 저장하고 정리하는 웹 애플리케이션 MyAlumni와, 학생들이 수학 지식을 공유하는 안드로이드 앱 MathForum이 있습니다. ${a(sect('portfolio'), '포트폴리오')}에서 볼 수 있어요.`,
    },
    {
      keywords: ['experience', 'work', 'job', 'jobs', 'career', 'company', 'employ', 'zeroneday', 'current', 'worked', '경력', '경험', '회사', '직장', '근무', '일하', '제로원데이'],
      en: `Now: AI Developer at ZerOneDay in South Korea (since Nov 2025). Before: AI Researcher at Samsung Medical Center (Sep 2024 – Mar 2025), IT Instructor at Korea Software HRD Center (2020–2021), coding mentor at Sister of Code (2020) and part-time web designer at Plan-B (2018–2019). Details in my ${a(sect('resume'), 'Resume')}.`,
      ko: `현재: (주)제로원데이 AI 개발자(2025년 11월부터). 이전: 삼성서울병원 미래의학연구원 AI 연구원(2024년 9월 – 2025년 3월), Korea Software HRD Center IT 강사(2020–2021), Sister of Code 코딩 멘토(2020), Plan-B 파트타임 웹 디자이너(2018–2019). 자세한 내용은 ${a(sect('resume'), '이력서')}를 보세요.`,
    },
    {
      keywords: ['education', 'study', 'studied', 'degree', 'university', 'school', 'master', 'bachelor', 'graduat', 'unist', 'thesis', 'major', '학력', '학교', '대학', '석사', '학사', '졸업', '전공', '논문', '공부'],
      en: `Master of Artificial Intelligence at UNIST (2022–2024), with a thesis on fast and accurate ${a('3d-hand-pose-estimation', '3D hand pose estimation')}. Before that I studied Computer Science at the Royal University of Phnom Penh (2016–2020).`,
      ko: `울산과학기술원(UNIST)에서 인공지능 석사(2022–2024)를 마쳤고, 빠르고 정확한 ${a('3d-hand-pose-estimation', '3D 손 자세 추정')}에 관한 논문을 썼습니다. 그 전에는 프놈펜 왕립대학교에서 컴퓨터 공학을 공부했습니다(2016–2020).`,
    },
    {
      keywords: ['language', 'speak', 'korean', 'english', 'topik', '언어', '한국어', '영어', '외국어'],
      en: 'I work in English and can hold daily conversations in Korean (Korean Language Program at SeoKyeong University).',
      ko: '영어로 업무를 하고, 한국어로 일상 대화가 가능합니다(서경대학교 한국어 교육 프로그램 수료).',
    },
    {
      keywords: ['where', 'location', 'live', 'based', 'city', 'country', 'seoul', 'south korea', 'cambodia', 'nationality', '어디', '위치', '사는', '서울', '캄보디아', '국적', '출신'],
      en: "I'm from Cambodia and live in Seoul, South Korea.",
      ko: '캄보디아 출신이며, 대한민국 서울에 살고 있습니다.',
    },
    {
      keywords: ['resume', 'cv', 'résumé', '이력서'],
      en: `My resume is on this page: ${a(sect('resume'), 'Resume')}, with work experience, education and training.`,
      ko: `이력서는 이 페이지의 ${a(sect('resume'), '이력서')} 섹션에 있어요. 경력, 학력, 교육 프로그램을 볼 수 있습니다.`,
    },
    {
      keywords: ['contact', 'email', 'e-mail', 'mail', 'phone', 'call me', 'reach', 'linkedin', 'message', 'hire', 'hiring', 'interview', '연락', '이메일', '메일', '전화', '링크드인', '채용', '문의', '면접'],
      en: `Email me at ${a('mailto:sieknyhor@gmail.com', 'sieknyhor@gmail.com')}, connect on ${a('https://www.linkedin.com/in/siekny-hor-862898151/', 'LinkedIn')}, or send a message with the ${a(sect('contact'), 'contact form')}.`,
      ko: `${a('mailto:sieknyhor@gmail.com', 'sieknyhor@gmail.com')}으로 이메일을 보내거나, ${a('https://www.linkedin.com/in/siekny-hor-862898151/', 'LinkedIn')}에서 연결하거나, ${a(sect('contact'), '문의 양식')}으로 메시지를 보내 주세요.`,
    },
  ];
  const CHIP_QUERIES = { en: ['skills', 'projects', 'experience', 'education', 'contact'], ko: ['기술', '프로젝트', '경력', '학력', '연락처'] };

  const normalize = text => ' ' + text.toLowerCase().replace(/[^0-9a-zÀ-ɏ가-힣\s-]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Korean keywords match anywhere; English ones match the start of a word,
  // or the whole word when they are 3 letters or fewer ("hi" must not match "hire").
  function score(topic, q) {
    let total = 0;
    for (const kw of topic.keywords) {
      let hit;
      if (/[가-힣]/.test(kw)) {
        hit = q.includes(kw);
      } else {
        const end = kw.length <= 3 ? '(?![0-9a-z])' : '';
        hit = new RegExp('[^0-9a-z]' + escapeRe(kw) + end).test(q);
      }
      if (hit) total += kw.includes(' ') ? 2 : 1;
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

  const pageLang = () => (document.documentElement.lang === 'ko' ? 'ko' : 'en');
  const questionLang = q => (/[가-힣]/.test(q) ? 'ko' : /[a-z]/i.test(q) ? 'en' : pageLang());

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
      typing.innerHTML = topic ? topic[lang] : UI[lang].fallback;
      log.scrollTop = log.scrollHeight;
    }, 450);
  }

  function open(show) {
    panel.hidden = !show;
    toggle.setAttribute('aria-expanded', String(show));
    root.classList.toggle('chat--open', show);
    if (show) {
      if (!started) { add('bot', UI[pageLang()].greeting, false); started = true; }
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

  // Follow the English / 한국어 switch.
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  labels();
})();
