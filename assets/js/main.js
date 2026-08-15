const translations = {
  en: {
    "nav.news": "News",
    "nav.publications": "Publications",
    "nav.patent": "Patent",
    "nav.honors": "Honors",
    "nav.education": "Education",
    "intro.title": "Hi, I am Chenglong Yu (于成龙).",
    "intro.p1Before": "Welcome to my homepage! I am currently a Ph.D. candidate in Artificial Intelligence at the School of Software, Shandong University, under the supervision of ",
    "intro.advisor": "Prof. Liqiang Nie",
    "intro.p1After": ". I received my B.S. degree in Data Science and Big Data Technology from Shandong University in 2023.",
    "intro.p2": "My research interests focus on computer vision, deep learning, and representation learning.",
    "news.title": "🔥 News",
    "news.item1": "Two papers, DGNet and ADGNet, were accepted by ACM MM 2026.",
    "news.item3": "Our paper HDNet was accepted by IEEE TGRS.",
    "publications.title": "📝 Publications",
    "patent.title": "🔖 Patent",
    "patent.status1": "Granted · First Inventor",
    "patent.status2": "Under Substantive Examination · First Inventor",
    "patent.status3": "Granted · Second Inventor",
    "patent.item1": "Infrared Small-Target Detection Method and System",
    "patent.item2": "Infrared Small-Target Detection Method and System Based on an Adaptive Collaborative Representation Network",
    "patent.item3": "Supervision Enhancement Method for Infrared Small-Target Detection",
    "patent.publicationNo": "Publication No.",
    "patent.applicationNo": "Application No.",
    "honors.title": "🎖 Honors and Awards",
    "honors.item1": "Shandong University Ph.D. Freshman First-Class Scholarship",
    "honors.item2": "Shandong University Academic First-Class Scholarship",
    "honors.item3": "Shandong University Outstanding Class Leader",
    "honors.item4": "Shandong University Master's Freshman First-Class Scholarship",
    "honors.item5": "National Third Prize, Huawei Cup — China Postgraduate Mathematical Contest in Modeling",
    "education.title": "📖 Educations",
    "education.item1": "Ph.D. Candidate in Artificial Intelligence, School of Software, Shandong University. Mentor: Prof. Liqiang Nie.",
    "education.item2": "B.S. in Data Science and Big Data Technology, School of Software, Shandong University.",
    "footer.updated": "Last updated: August 2026."
  },
  zh: {
    "nav.news": "动态",
    "nav.publications": "论文",
    "nav.patent": "专利",
    "nav.honors": "荣誉",
    "nav.education": "教育经历",
    "intro.title": "你好，我是于成龙（Chenglong Yu）。",
    "intro.p1Before": "欢迎来到我的个人主页！我目前是山东大学软件学院人工智能专业博士研究生，导师为",
    "intro.advisor": "聂礼强教授",
    "intro.p1After": "。此前，我于 2023 年在山东大学获得数据科学与大数据技术专业学士学位。",
    "intro.p2": "我的研究兴趣主要包括计算机视觉、深度学习与表征学习。",
    "news.title": "🔥 最新动态",
    "news.item1": "两篇论文 DGNet 和 ADGNet 被 ACM MM 2026 接收。",
    "news.item3": "论文 HDNet 被 IEEE TGRS 接收。",
    "publications.title": "📝 论文成果",
    "patent.title": "🔖 专利",
    "patent.status1": "有权－审定授权 · 第一发明人",
    "patent.status2": "审中－实质审查 · 第一发明人",
    "patent.status3": "有权－审定授权 · 第二发明人",
    "patent.item1": "一种红外小目标检测方法及系统",
    "patent.item2": "一种基于自适应协同表征网络的红外小目标检测方法及系统",
    "patent.item3": "一种红外小目标检测监督增强方法",
    "patent.publicationNo": "公开号",
    "patent.applicationNo": "申请号",
    "honors.title": "🎖 荣誉与奖励",
    "honors.item1": "山东大学博士新生一等学业奖学金",
    "honors.item2": "山东大学一等学业奖学金",
    "honors.item3": "山东大学优秀班长",
    "honors.item4": "山东大学硕士新生一等学业奖学金",
    "honors.item5": "“华为杯”中国研究生数学建模竞赛全国三等奖",
    "education.title": "📖 教育经历",
    "education.item1": "山东大学软件学院人工智能专业博士研究生，导师：聂礼强教授。",
    "education.item2": "山东大学软件学院数据科学与大数据技术专业学士。",
    "footer.updated": "最后更新：2026 年 8 月。"
  }
};

const languageButton = document.querySelector(".language-switch");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
let currentLanguage = localStorage.getItem("homepage-language") || "en";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("homepage-language", language);
}

languageButton.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "zh" : "en"));

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelector("#current-year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
