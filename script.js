document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      "nav.language": "中文",
      "nav.qq": "QQ Group (Beta)",
      "hero.prefix": "Everything you need for",
      "hero.suffix": ", all in PVPUtils.",
      "origin.title": "Origin",
      "origin.text1":
        "PVPUtils was created to fill the gap in modern Minecraft versions: a client-side mod dedicated to improving the PVP experience. Existing clients and similar mods are often not open enough for users to freely customize, while many functional mods only solve one problem and do not always work well together.",
      "origin.text2":
        "PVPUtils changes that. It is a fully open-source client mod that you can modify and improve under its open-source license. It integrates most common PVP and survival utilities, so one mod can provide the complete experience of several separate mods. As a client mod, it also works alongside other mods, and PVPUtils continues to adapt to most mainstream mod ecosystems.",
      "features.title": "See how PVPUtils changes the game",
      "features.subtitle":
        "After a full year of refinement, multiple rewrites, and several name changes, PVPUtils is now presented in its most complete and smooth form.",
      "features.hudedit":
        "PVPUtils provides an advanced and convenient HUD editor. You can open it from chat or ClickGUI, then drag HUD components with the mouse or scale them with the mouse wheel.",
      "features.customMainUi1":
        "PVPUtils implements an elegant GLSL main menu. Click the “P” beside the vanilla menu to open it, left-click the top-left title to return to vanilla, or right-click to choose from up to 27 GLSL renderers with different background styles. Some backgrounds support mouse interaction.",
      "features.customMainUi2":
        "You can also click the settings button in the top-right corner to switch to a custom background image, with mouse interaction effects supported as well.",
      "features.dynamicIsland":
        "PVPUtils adds a Dynamic Island visual component to the game. When it is enabled, holding “TAB” expands the player list on the island. You can also use commands to change the client name shown on the left side, and more features will be built around it in the future.",
      "features.moreText": "For more features, click the button on the right.",
      "features.moreButton": "Click here",
      "advantages.title": "Our Advantages",
      "advantages.configurable.title": "Configurable",
      "advantages.configurable.text":
        "Almost every PVPUtils module can be deeply configured through ClickGUI sliders and options, making it easy to get started at any skill level.",
      "advantages.language.title": "Multilingual",
      "advantages.language.text":
        "Cannot read English or Chinese? PVPUtils includes a language switcher. You can choose English or Chinese in ClickGUI, then reopen ClickGUI for the change to take effect.",
      "advantages.free.title": "Free to Use",
      "advantages.free.text":
        "PVPUtils has never charged users since its birth. It is built entirely by the developer team out of passion, and total donations so far have not exceeded 100 RMB.",
      "advantages.fastUpdates.title": "Fast Updates",
      "advantages.fastUpdates.text":
        "Our developer team updates test builds very quickly, once reaching a record of three test releases in a single day.",
      "advantages.feedback.title": "Listening to Feedback",
      "advantages.feedback.text":
        "Our developers are highly willing to listen to user suggestions. More than one third of PVPUtils features were proposed by users and then added by developers.",
      "advantages.ecosystem.title": "Open Ecosystem",
      "advantages.ecosystem.text":
        "Thanks to PVPUtils being open source, community members have created many excellent works. Some were absorbed into PVPUtils itself, while others continue as independent branches. PVPUtils remains open and supportive toward them.",
      "videos.title": "Want to See It?",
      "videos.subtitle": "These videos were recorded by the PVPUtils developer team.",
      "stats.title": "Statistics",
      "stats.subtitle": "All statistics since public release.",
      "stats.downloads": "Downloads",
      "stats.online": "Online Users",
      "stats.loading": "Loading",
      "stats.unavailable": "Unavailable",
      "developers.title": "Core Developers",
      "developers.subtitle":
        "PVPUtils would not have come this far without these passionate developers.",
      "developers.profile": "Profile",
      "developers.link": "Personal Link",
      "reviews.title": "User Reviews",
      "reviews.subtitle": "A collection of honest comments from users.",
      "reviews.hint": "Click the review to browse more comments.",
      "ending.title": "Ready to Start?",
      "ending.text":
        "Download PVPUtils, or join the project, and help make modern Minecraft PVP better together!",
      "ending.qq": "QQ Group (Beta)",
    },
    zh: {
      "nav.language": "English",
      "nav.qq": "QQ群聊（下载测试版）",
      "hero.prefix": "你所需要的",
      "hero.suffix": "，尽在PVPUtils。",
      "origin.title": "初衷",
      "origin.text1":
        "PVPUtils 的出现，是为了弥补高版本 Minecraft 缺乏专门针对 PVP 体验进行优化的模组这一空白。现有的同类模组或客户端往往不够开放，无法根据用户需求自由定制；而功能相关的模组虽然不少，但大多功能单一且彼此间缺乏兼容性。",
      "origin.text2":
        "PVPUtils 改变了这一现状。它是一个完全开源的客户端模组，您可以在遵守开源协议的前提下自由修改和改进。它整合了大部分 PVP 与生存中常见的辅助与优化功能，让您只需安装一款模组，即可获得多款模组带来的完整体验。同时，作为客户端模组，您也可以自由搭配其他模组来定制属于自己的游戏体验，PVPUtils 也在持续适配和兼容大多数主流模组。",
      "features.title": "来看看PVPUtils都对这个游戏做出了什么改变吧",
      "features.subtitle":
        "PVPUtils经过了长达1年的打磨，经历过多次重构和改名，最终以最完美、最流畅的姿态呈现在您眼前。",
      "features.hudedit":
        "PVPUtils提供了一个十分先进且方便的HUD编辑器，您可以打开聊天框或是在Clickgui内点击打开，并使用鼠标拖动或是使用鼠标滚轮来缩放HUD组件。",
      "features.customMainUi1":
        "PVPUtils实现了一套非常优美的GLSL主界面，点击原版主界面旁边的”P“即可打开，左键单击左上角标题即可返回原版，右键则可以在多达27中GLSL渲染器中选择一个合你口味的背景，部分背景支持鼠标交互。",
      "features.customMainUi2":
        "同时，点击右上角设置还可以切换为自定义背景图，同时也支持鼠标交互效果。",
      "features.dynamicIsland":
        "PVPUtils为游戏添加了灵动岛视觉组件，玩家可以在开启灵动岛时，长按“TAB”键在灵动岛上展开玩家列表，同时，也可以使用指令来修改灵动岛左侧的客户端名称，未来会围绕灵动岛添加更多功能。",
      "features.moreText": "更多功能可点击右侧按钮详细了解。",
      "features.moreButton": "点击这里",
      "advantages.title": "我们的优势",
      "advantages.configurable.title": "可配置",
      "advantages.configurable.text":
        "PVPUtils几乎所有模块都可以通过Clickgui的滑块和选项进行深度配置，无论您的水平如何都能快速上手。",
      "advantages.language.title": "多语言",
      "advantages.language.text":
        "看不懂英语/中文？没关系，PVPUtils提供了语言切换选项，您可以在Clickgui自由选择英语或中文，切换后重新开关Clickgui即可生效。",
      "advantages.free.title": "免费使用",
      "advantages.free.text":
        "PVPUtils自诞生之初就从未向用户收过一分钱，完全由开发者团队用爱发电，截至目前，收到的赞助金额也未超过100元。",
      "advantages.fastUpdates.title": "高更新速度",
      "advantages.fastUpdates.text":
        "我们的开发者团队对于测试版的更新速度极快，曾今创下过一天更新三个测试版的历史。",
      "advantages.feedback.title": "听取建议",
      "advantages.feedback.text":
        "我们的开发者十分愿意听取用户名的建议，PVPUtils超过三分之一的功能都是由用户提出，再经由开发者添加至客户端内的。",
      "advantages.ecosystem.title": "开放包容的生态",
      "advantages.ecosystem.text":
        "得益于PVPUtils的开源性质，社区成员已经做出了许多优异的作品，他们有的被吸纳进PVPUtils本体，有的则是作为独立分支进行发展，PVPUtils对此非常包容和支持。",
      "videos.title": "想看看吗",
      "videos.subtitle": "以下是PVPUtils开发者团队录制的视频",
      "stats.title": "统计数据",
      "stats.subtitle": "自公开以来所有的统计数据",
      "stats.downloads": "下载量",
      "stats.online": "在线人数",
      "stats.loading": "加载中",
      "stats.unavailable": "暂不可用",
      "developers.title": "核心开发者",
      "developers.subtitle": "PVPUtils能走到现在，都离不开这些用爱发电的开发者们。",
      "developers.profile": "个人简介",
      "developers.link": "个人链接",
      "reviews.title": "用户评价",
      "reviews.subtitle": "里面收集了一些来自用户中肯的评价。",
      "reviews.hint": "点击评论可浏览更多内容",
      "ending.title": "准备好开始了吗？",
      "ending.text":
        "下载 PVPUtils，或者加入项目，一起让高版本 Minecraft PVP 体验变得更好！",
      "ending.qq": "QQ群聊（下载测试版）",
    },
  };

  const wordSets = {
    en: [
      "Smoothness",
      "Utilities",
      "Control",
      "Game Feel",
      "Openness",
      "Customization",
      "Open Source",
      "Hacker Vision",
    ],
    zh: ["流畅", "实用工具", "手感", "游戏体验", "开放性", "可自定义", "开源", "黑客视觉"],
  };

  const reviewSets = {
    en: [
      "I have never used such a good PVP client! ————MagicMusician",
      "It feels like I am seeing another Soar client. ———StellarMaster",
      "A solid attempt. Please keep going! ———CrownAnti",
      "Bro, your mod is amazing! ———Solar_flareFan",
      "Keep it up. ———LoreSpielberg",
      "Nothing beats this PVP mod. It is so open. ———BossSpielberg",
      "After using this mod, I do not know how many separate mods it saved me from installing. ———SolarGalileo",
      "When I wanted to donate, I found these developers had not even prepared a payment QR code. It was like they did not want to make money. ———DimensionSolver93",
      "It has been a long time since I saw developers driven by this much passion. ———LegendStreamer",
      "Please keep going, do not stop updating, and let us move forward together! ———AncientStreep",
    ],
    zh: [
      "我从未用过这么好用的PVP客户端！ ————MagicMusician",
      "我好像看到了另一个Soar客户端。———StellarMaster",
      "不错的尝试，请一定要坚持下去！———CrownAnti",
      "兄弟你的模组做的太棒了！———Solar_flareFan",
      "加油。———LoreSpielberg",
      "没有什么比这个更好的PVP模组了，他太开放了。———BossSpielberg",
      "用了这个模组之后我不知道省去了装多少个模组的麻烦。———SolarGalileo",
      "当我想给这个模组赞助时却发现这些开发者连收款码都没准备，就像是不想赚钱一样。———DimensionSolver93",
      "好久没见过这样用爱发电的开发者了。———LegendStreamer",
      "一定要坚持下去，不要停更，一起加油！———AncientStreep",
    ],
  };

  const developerSets = {
    en: [
      {
        avatar: "./resource/baka_baicai.jpg",
        avatarType: "image",
        name: "baka_baicai",
        role: "Chief Developer / Project Owner",
        bio: "Chief developer responsible for most daily code maintenance and new feature development. More than 80% of the project code was written by them. They proposed and built the PVPUtils project, with extensive development experience across Java, Python, and C#. Most of the project's hardest technical issues are fixed by them. Because of their strong coding ability, they do not recommend writing the entire project with AI, but prefer to craft it directly themselves.",
        links: [
          { label: "GitHub", url: "https://github.com/bakabaicai" },
          { label: "Bilibili", url: "https://space.bilibili.com/3546915648047958" },
          { label: "Modrinth", url: "https://modrinth.com/user/baka_baicai" },
          { label: "CurseForge", url: "https://www.curseforge.com/members/baka_baicai/projects" },
        ],
      },
      {
        avatar: "./resource/yajiyi.jpg",
        avatarType: "image",
        name: "yajiyi",
        role: "Deputy Developer",
        bio: "Originally a GitHub contributor, yajiyi was brought into the PVPUtils project by the chief developer for excellent coding ability. As deputy developer, their role is to flexibly use AI tools and personal engineering skills to assist the chief developer when the workload becomes too heavy or when work touches areas outside the chief developer's specialization. This greatly reduces development pressure and significantly improves development speed.",
        links: [
          { label: "GitHub", url: "https://github.com/yajiyi" },
          { label: "Modrinth", url: "https://modrinth.com/user/yajiyi114514" },
          { label: "Bilibili", url: "https://space.bilibili.com/588813582" },
        ],
      },
      {
        avatar: "./resource/ThinkReally114.jpg",
        avatarType: "image",
        name: "ThinkReally114",
        role: "Platform Architect",
        bio: "Originally also a GitHub contributor to PVPUtils, ThinkReally114 proactively developed PVPUtils-fix, solving the limitation that PVPUtils only supported Windows 10 x64. They expanded compatibility to Android (arm64), macOS (x64, arm64), Linux (x64, arm64), and Windows (arm64). They also provide domain and CDN services for the PVPUtils website.",
        links: [
          { label: "GitHub", url: "https://github.com/ThinkReally114" },
          { label: "PVPUtils-Fix", url: "https://github.com/ThinkReally114/pvputils-fix" },
        ],
      },
      {
        avatar: "✦",
        name: "AI Tools Used in Development",
        role: "AI Agent",
        bio: "The following records all AI tools used in this project. They are mainly used by the deputy developer: Claude Fable 5, Claude Opus 4.8, Deepseek-v4-pro, GPT-5.5.",
        hideProfileLabel: true,
        links: [],
      },
    ],
    zh: [
      {
        avatar: "./resource/baka_baicai.jpg",
        avatarType: "image",
        name: "baka_baicai",
        role: "首席开发者 / 项目所有人",
        bio: "首席开发者，负责大部分代码的日常维护和新功能编写，项目里超过80%的代码由其进行编写，PVPUtils项目构想的提出者和构建者，拥有十分丰富的代码开发经验，技术范围覆盖Java、Python和C#，项目中大部分极难修复的技术性问题都由其进行修复，由于其优秀的代码编写水平，他并不推荐整个项目都由AI进行编写，而是由自己进行操刀。",
        links: [
          { label: "GitHub", url: "https://github.com/bakabaicai" },
          { label: "Bilibili", url: "https://space.bilibili.com/3546915648047958" },
          { label: "Modrinth", url: "https://modrinth.com/user/baka_baicai" },
          { label: "CurseForge", url: "https://www.curseforge.com/members/baka_baicai/projects" },
        ],
      },
      {
        avatar: "./resource/yajiyi.jpg",
        avatarType: "image",
        name: "yajiyi",
        role: "副开发者",
        bio: "原先是一名Github贡献者，由于其优秀的代码开发水平，被首席开发者看重并吸纳进PVPUtils项目，作为副开发，他的职责是在首席开发过于劳累或涉及其专业盲区时，灵活的使用ai工具和自身能力辅助首席开发进行编写代码，这极大地分担了项目的开发压力，并显著提升了开发速度。",
        links: [
          { label: "GitHub", url: "https://github.com/yajiyi" },
          { label: "Modrinth", url: "https://modrinth.com/user/yajiyi114514" },
          { label: "Bilibili", url: "https://space.bilibili.com/588813582" },
        ],
      },
      {
        avatar: "./resource/ThinkReally114.jpg",
        avatarType: "image",
        name: "ThinkReally114",
        role: "平台架构师",
        bio: "最初也是一名为PVPUtils做出贡献的Github贡献者，他主动为PVPUtils开发了PVPUtils-fix，解决了PVPUtils只兼容Windows 10 x64的局限性，他为PVPUtils扩展了Android (arm64)、macOS (x64, arm64)、Linux (x64, arm64)以及Windows (arm64)的兼容，同时，也为PVPUtils的网站提供了域名与CDN服务。",
        links: [
          { label: "GitHub", url: "https://github.com/ThinkReally114" },
          { label: "PVPUtils-Fix", url: "https://github.com/ThinkReally114/pvputils-fix" },
        ],
      },
      {
        avatar: "✦",
        name: "开发项目所用到的AI工具",
        role: "AI Agent",
        bio: "下面收录了本项目所使用的所有AI工具，他们主要由副开发进行使用：Claude Fable 5、Claude Opus 4.8、Deepseek-v4-pro、GPT-5.5",
        hideProfileLabel: true,
        links: [],
      },
    ],
  };

  const rotator = document.querySelector(".headline-rotator");
  const sections = Array.from(document.querySelectorAll(".snap-section"));
  const downloadCount = document.querySelector("#download-count");
  const onlineCount = document.querySelector("#online-count");
  const reviewPanel = document.querySelector("#review-panel");
  const reviewText = document.querySelector("#review-text");
  const languageToggle = document.querySelector("#language-toggle");
  const developerTrack = document.querySelector("#developer-track");
  const developerCards = Array.from(document.querySelectorAll("[data-developer-card]"));
  const developerPrev = document.querySelector(".developer-arrow-prev");
  const developerNext = document.querySelector(".developer-arrow-next");

  let currentLanguage = "en";

  let words = wordSets[currentLanguage];
  let wordIndex = 0;
  let currentWord = rotator ? rotator.querySelector(".rotating-word") : null;
  let reviewIndex = 0;
  let reviewAnimating = false;
  let reviewTimer = null;
  let developerIndex = 0;

  const translate = (key) => translations[currentLanguage][key] || key;

  const setActiveSection = (index) => {
    sections.forEach((section, sectionIndex) => {
      section.classList.toggle("is-active", sectionIndex === index);
    });
  };

  const syncActiveSectionFromScroll = () => {
    if (sections.length === 0) {
      return;
    }

    const viewportMiddle = window.scrollY + window.innerHeight * 0.5;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section, index) => {
      const sectionMiddle = section.offsetTop + section.offsetHeight * 0.5;
      const distance = Math.abs(sectionMiddle - viewportMiddle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSection(closestIndex);
  };

  const measureWordWidth = (word) => {
    if (!rotator) {
      return 0;
    }

    const probe = document.createElement("span");
    probe.className = "rotating-word";
    probe.style.visibility = "hidden";
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.textContent = word;
    rotator.appendChild(probe);
    const width = probe.getBoundingClientRect().width;
    rotator.removeChild(probe);
    return Math.ceil(width);
  };

  const syncRotatorWidth = (word) => {
    if (rotator) {
      rotator.style.width = `${measureWordWidth(word)}px`;
    }
  };

  const resetRotator = () => {
    if (!rotator) {
      return;
    }

    words = wordSets[currentLanguage];
    wordIndex = 0;
    rotator.textContent = "";
    currentWord = document.createElement("span");
    currentWord.className = "rotating-word";
    currentWord.textContent = words[wordIndex];
    rotator.appendChild(currentWord);
    syncRotatorWidth(words[wordIndex]);
  };

  const swapWord = () => {
    if (!rotator || words.length === 0) {
      return;
    }

    const nextIndex = (wordIndex + 1) % words.length;
    const nextWord = words[nextIndex];
    syncRotatorWidth(nextWord);

    const next = document.createElement("span");
    next.className = "rotating-word enter";
    next.textContent = nextWord;
    rotator.appendChild(next);

    if (currentWord) {
      const leaving = currentWord;
      leaving.classList.add("exit");
      leaving.classList.remove("enter");

      window.setTimeout(() => {
        if (leaving.parentNode) {
          leaving.parentNode.removeChild(leaving);
        }
      }, 420);
    }

    currentWord = next;
    wordIndex = nextIndex;
  };

  const formatNumber = (value) => {
    const locale = currentLanguage === "zh" ? "zh-CN" : "en-US";
    return new Intl.NumberFormat(locale).format(value);
  };

  const syncDeveloperCards = () => {
    if (developerCards.length === 0) {
      return;
    }

    const developers = developerSets[currentLanguage];
    const previousIndex =
      developerIndex === 0 && developers.length > 3
        ? developers.length - 2
        : (developerIndex - 1 + developers.length) % developers.length;
    const nextIndex = (developerIndex + 1) % developers.length;

    developerCards.forEach((card, cardPosition) => {
      const developer = developers[cardPosition];
      const avatar = card.querySelector(".developer-avatar");
      const name = card.querySelector("[data-developer-name]");
      const role = card.querySelector("[data-developer-role]");
      const label = card.querySelector(".developer-detail-label");
      const bio = card.querySelector("[data-developer-bio]");
      const links = card.querySelector("[data-developer-links]");
      const isActive = cardPosition === developerIndex;
      const isRight = cardPosition === nextIndex;
      const isLeft = cardPosition === previousIndex;

      card.dataset.developerIndex = String(cardPosition);
      card.classList.toggle("is-active", isActive);
      card.classList.toggle("is-left", isLeft);
      card.classList.toggle("is-right", isRight);
      card.setAttribute("aria-current", isActive ? "true" : "false");

      if (avatar) {
        avatar.textContent = "";
        avatar.classList.toggle("has-image", developer.avatarType === "image");
        if (developer.avatarType === "image") {
          const image = document.createElement("img");
          image.src = developer.avatar;
          image.alt = developer.name;
          avatar.appendChild(image);
        } else {
          avatar.textContent = developer.avatar;
        }
      }
      if (name) {
        name.textContent = developer.name;
      }
      if (role) {
        role.textContent = developer.role;
      }
      if (label) {
        label.hidden = Boolean(developer.hideProfileLabel);
      }
      if (bio) {
        bio.textContent = developer.bio;
      }
      if (links) {
        links.textContent = "";
        links.hidden = developer.links.length === 0;
        developer.links.forEach((developerLink) => {
          const link = document.createElement("a");
          link.className = "developer-link";
          link.href = developerLink.url;
          link.target = "_blank";
          link.rel = "noreferrer";
          link.textContent = developerLink.label;
          links.appendChild(link);
        });
      }
    });
  };

  const setDeveloperIndex = (nextIndex) => {
    const developers = developerSets[currentLanguage];
    const normalizedIndex = (nextIndex + developers.length) % developers.length;

    if (normalizedIndex === developerIndex) {
      return;
    }

    developerIndex = normalizedIndex;
    syncDeveloperCards();
  };

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n);
    });

    if (languageToggle) {
      languageToggle.setAttribute(
        "aria-label",
        currentLanguage === "zh" ? "Switch to English" : "Switch to Chinese",
      );
    }

    if (downloadCount && downloadCount.dataset.loadedValue) {
      downloadCount.textContent = formatNumber(Number(downloadCount.dataset.loadedValue));
    } else if (downloadCount && downloadCount.dataset.loadingKey) {
      downloadCount.textContent = translate(downloadCount.dataset.loadingKey);
    }

    if (onlineCount && onlineCount.dataset.loadedValue) {
      onlineCount.textContent = formatNumber(Number(onlineCount.dataset.loadedValue));
    } else if (onlineCount && onlineCount.dataset.loadingKey) {
      onlineCount.textContent = translate(onlineCount.dataset.loadingKey);
    }

    resetRotator();
    syncDeveloperCards();
    resetReview();
  };

  const fetchGithubDownloads = async () => {
    const response = await fetch("https://api.github.com/repos/bakabaicai/PVPUtils/releases");
    if (!response.ok) {
      throw new Error("GitHub downloads request failed");
    }

    const releases = await response.json();
    return releases.reduce((total, release) => {
      const assets = Array.isArray(release.assets) ? release.assets : [];
      return total + assets.reduce((assetTotal, asset) => {
        return assetTotal + Number(asset.download_count || 0);
      }, 0);
    }, 0);
  };

  const fetchModrinthDownloads = async () => {
    const response = await fetch("https://api.modrinth.com/v2/project/pvp_utils");
    if (!response.ok) {
      throw new Error("Modrinth downloads request failed");
    }

    const project = await response.json();
    return Number(project.downloads || 0);
  };

  const syncDownloadCount = async () => {
    if (!downloadCount) {
      return;
    }

    try {
      const [githubDownloads, modrinthDownloads] = await Promise.all([
        fetchGithubDownloads(),
        fetchModrinthDownloads(),
      ]);
      const totalDownloads = githubDownloads + modrinthDownloads;
      downloadCount.dataset.loadedValue = String(totalDownloads);
      downloadCount.textContent = formatNumber(totalDownloads);
    } catch {
      delete downloadCount.dataset.loadedValue;
      downloadCount.textContent = translate("stats.unavailable");
    }
  };

  const getOnlineState = () => {
    const stored = window.localStorage.getItem("pvputils-online-state");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Number.isFinite(parsed.value) && Number.isFinite(parsed.slot)) {
          return parsed;
        }
      } catch {
        window.localStorage.removeItem("pvputils-online-state");
      }
    }

    return {
      value: 96 + Math.floor(Math.random() * 35),
      slot: Math.floor(Date.now() / 180000),
    };
  };

  const saveOnlineState = (state) => {
    window.localStorage.setItem("pvputils-online-state", JSON.stringify(state));
  };

  const nextOnlineValue = (currentValue) => {
    const direction = Math.random() > 0.48 ? 1 : -1;
    const amount = 1 + Math.floor(Math.random() * 6);
    return Math.max(42, Math.min(186, currentValue + direction * amount));
  };

  const syncOnlineCount = () => {
    if (!onlineCount) {
      return;
    }

    const currentSlot = Math.floor(Date.now() / 180000);
    const state = getOnlineState();

    if (currentSlot > state.slot) {
      const elapsedSlots = Math.min(currentSlot - state.slot, 12);
      for (let i = 0; i < elapsedSlots; i += 1) {
        state.value = nextOnlineValue(state.value);
      }
      state.slot = currentSlot;
      saveOnlineState(state);
    } else {
      saveOnlineState(state);
    }

    onlineCount.dataset.loadedValue = String(state.value);
    onlineCount.textContent = formatNumber(state.value);
  };

  const glitchChars = "PVPUtils#01<>[]{}/*+-=_%";

  const randomGlitchText = (length) => {
    return Array.from({ length }, () => {
      return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }).join("");
  };

  const clearReviewTimer = () => {
    if (reviewTimer !== null) {
      window.clearTimeout(reviewTimer);
      reviewTimer = null;
    }
  };

  function resetReview() {
    if (!reviewText) {
      return;
    }

    clearReviewTimer();
    reviewIndex = 0;
    reviewAnimating = false;
    reviewText.classList.remove("is-glitching");
    reviewText.textContent = reviewSets[currentLanguage][reviewIndex];
  }

  const typeReview = (text, position = 0) => {
    if (!reviewText) {
      return;
    }

    const visibleText = text.slice(0, position);
    const remainingLength = Math.min(6, Math.max(0, text.length - position));
    reviewText.textContent = visibleText + randomGlitchText(remainingLength);

    if (position <= text.length) {
      reviewTimer = window.setTimeout(() => {
        typeReview(text, position + 1);
      }, 28);
      return;
    }

    reviewText.textContent = text;
    reviewAnimating = false;
  };

  const showNextReview = () => {
    if (!reviewText || reviewAnimating) {
      return;
    }

    reviewAnimating = true;
    clearReviewTimer();
    reviewText.classList.add("is-glitching");

    reviewTimer = window.setTimeout(() => {
      reviewText.classList.remove("is-glitching");
      reviewText.textContent = "";
      reviewIndex = (reviewIndex + 1) % reviewSets[currentLanguage].length;
      typeReview(reviewSets[currentLanguage][reviewIndex]);
    }, 420);
  };

  syncActiveSectionFromScroll();
  applyLanguage(currentLanguage);
  syncDownloadCount();
  syncOnlineCount();

  window.addEventListener("resize", () => {
    if (words.length > 0) {
      syncRotatorWidth(words[wordIndex]);
    }
    syncActiveSectionFromScroll();
  });

  window.addEventListener("scroll", syncActiveSectionFromScroll, { passive: true });
  window.setInterval(swapWord, 1000);
  window.setInterval(syncOnlineCount, 180000);

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      applyLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  }

  if (developerPrev) {
    developerPrev.addEventListener("click", () => {
      setDeveloperIndex(developerIndex - 1);
    });
  }

  if (developerNext) {
    developerNext.addEventListener("click", () => {
      setDeveloperIndex(developerIndex + 1);
    });
  }

  developerCards.forEach((card) => {
    const activateCard = () => {
      const nextIndex = Number(card.dataset.developerIndex);
      if (Number.isFinite(nextIndex) && nextIndex !== developerIndex) {
        setDeveloperIndex(nextIndex);
      }
    };

    card.addEventListener("click", activateCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateCard();
      }
    });
  });

  if (reviewPanel && reviewText) {
    reviewPanel.addEventListener("click", showNextReview);
  }
});
