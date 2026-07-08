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
      "changelog.title": "Update Log",
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
      "changelog.title": "更新日志",
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

  const changelogEntries = [
    {
      version: "V1.5-beta.2",
      type: "beta",
      logs: {
        zh: [
          "从此版本开始，许可证从GPL V3更换至PVPUtils Source-Available Non-Commercial License v1.0许可证。此前的版本将继续使用GPL V3许可证。从该版本以后，请在使用、修改或二次分发 PVPUtils 前先阅读并遵守新的许可证。",
          "从该版本开始，PVPUtils将逐步删除其内置的“反作弊”相关代码。Minecraft是一款开放包容的游戏，外挂也属于这个游戏的一种特色。这意味着你可以自行将PVPUtils与其他外挂客户端一同使用而不会受到内置“反作弊”的影响，但是PVPUtils并不提倡这样做，同时也永远不会受理因和外挂客户端一同使用造成的兼容性问题，PVPUtils永远不会尝试兼容任何外挂客户端。",
          "添加物品使用状态显示，包括但不限于弓还有多久拉满，食物还有多久吃完等有使用进度的物品的进度显示，包含Lite和New两种风格",
          "改进挖掘状态显示，现在会提示你当前手持的工具能否正常挖掘并掉落当前方块",
          "优化自动更新的稳定性",
          "灵动岛接入HUDEdit，支持调节位置和大小",
          "添加Freelook，默认按键为鼠标侧键2，可在MC按键设置中更改",
          "添加彩虹附魔光效",
          "灵动岛新增方块数量显示，这与原先的方块数量显示冲突，二者不能同时开启",
          "优化官网布局，修复部分浏览器解析失败的bug",
          "官网新增更新日志板块",
        ],
        en: [
          "Starting from this version, the license changes from GPL V3 to PVPUtils Source-Available Non-Commercial License v1.0. Previous versions will continue to use GPL V3. From this version onward, please read and comply with the new license before using, modifying, or redistributing PVPUtils.",
          "Starting from this version, PVPUtils will gradually remove its built-in anti-cheat related code. Minecraft is an open and inclusive game, and cheat clients are also one of its characteristics. This means you may use PVPUtils together with other cheat clients without being affected by the built-in anti-cheat. However, PVPUtils does not encourage this, will never handle compatibility issues caused by using cheat clients together with PVPUtils, and will never attempt to support any cheat client.",
          "Added item usage status display, including but not limited to progress display for bows, food, and other items with usage progress. Includes both Lite and New styles.",
          "Improved digging status display. It now tells whether the currently held tool can properly mine and drop the targeted block.",
          "Improved automatic update stability.",
          "Integrated Dynamic Island into HUDEdit, supporting position and size adjustment.",
          "Added Freelook. The default key is mouse side button 2 and can be changed in Minecraft key settings.",
          "Added rainbow enchantment glint effect.",
          "Added block count display to Dynamic Island. It conflicts with the original block count display, so both cannot be enabled at the same time.",
          "Optimized official website layout and fixed bugs where some browsers failed to parse it.",
          "Added the update log section to the official website.",
        ],
      },
    },
    {
      version: "V1.5-beta.1",
      type: "beta",
      logs: {
        zh: [
          "修复了正式版自动更新版本号解析错误导致一直提示有更新的问题",
          "修复灵动岛无法正常读取部分服务器名称前缀与颜色的bug",
          "灵动岛接入HUDEdit，支持调节大小与位置",
          "挖掘状态显示现在会提示你手中的工具是否可以挖掘掉这个方块",
          "加入主手辅助（需要在完整模式下才能使用）",
          "加入物品使用状态提示，可以实时追踪弓是否拉满、食物/物品还有多久才能使用完",
          "加入缩放，默认快捷键C，可以在MC原版按键设置中更改按键",
          "加入受击颜色更改，可以自由改变实体受击时的颜色",
          "内置去除 “Reconfiguring...” 界面 Disconnect 按钮等待时间",
          "修复自定义披风会给所有人装备上的bug",
          "重构命令逻辑，加入help指令，优化命令反馈",
          "优化伽马值修改的视觉效果，减少亮度突然增加带来的闪烁",
        ],
        en: [
          "Fixed an issue where release auto-update version parsing was incorrect and kept reporting available updates.",
          "Fixed Dynamic Island failing to correctly read some server name prefixes and colors.",
          "Integrated Dynamic Island into HUDEdit, supporting size and position adjustment.",
          "Digging status now tells you whether the tool in your hand can mine the targeted block.",
          "Added Main Hand Assist. It requires full mode to use.",
          "Added item usage status hints, allowing real-time tracking of bow charge and remaining food/item use time.",
          "Added zoom. The default key is C and can be changed in vanilla Minecraft key settings.",
          "Added hit color customization, allowing entity hit colors to be changed freely.",
          "Built in removal of the wait time for the Disconnect button on the “Reconfiguring...” screen.",
          "Fixed custom capes being equipped on everyone.",
          "Refactored command logic, added the help command, and improved command feedback.",
          "Optimized the visual effect of gamma changes, reducing flicker caused by sudden brightness increases.",
        ],
      },
    },
    {
      version: "V1.4",
      type: "release",
      logs: {
        zh: [
          "新增灵动岛，长按TAB可用灵动岛展开玩家列表，使用/PVPUtlis clientname xxx可以改变显示的客户端名称",
          "为TargetHUD与Blockcount添加Blur模式（模糊效果）",
          "增加物品物理掉落",
          "增加掉落物2D渲染",
          "自定义披风从 渲染 迁移至 工具",
          "优化性能",
          "修复部分情况下会导致游戏内物品图标消失的bug",
          "添加改变客户端时间和改变客户端天气",
          "增加攻击目标效果，可以自定义攻击目标时的粒子效果",
          "增加全局主题切换",
          "增加/PVPUtlis help指令",
        ],
        en: [
          "Added Dynamic Island. Hold TAB to expand the player list through Dynamic Island. Use /PVPUtlis clientname xxx to change the displayed client name.",
          "Added Blur mode for TargetHUD and Blockcount.",
          "Added physical item drops.",
          "Added 2D rendering for dropped items.",
          "Moved Custom Cape from Render to Tools.",
          "Optimized performance.",
          "Fixed a bug that could cause in-game item icons to disappear in some cases.",
          "Added client-side time and weather changing.",
          "Added attack target effects, allowing custom particles when attacking targets.",
          "Added global theme switching.",
          "Added the /PVPUtlis help command.",
        ],
      },
    },
    {
      version: "V1.4-beta.1",
      type: "beta",
      logs: {
        zh: ["修复输入法冲突，修复偶发BUG，创造物品栏搜索仍需要手动点击输入框"],
        en: [
          "Fixed input method conflicts and occasional bugs. Creative inventory search still requires manually clicking the input box.",
        ],
      },
    },
    {
      version: "V1.3",
      type: "release",
      logs: {
        zh: ["修复了v1.3-beta.6在部分设备下偶发崩溃的问题"],
        en: ["Fixed occasional crashes from v1.3-beta.6 on some devices."],
      },
    },
    {
      version: "V1.3-beta.6",
      type: "beta",
      logs: {
        zh: ["优化自动更新", "添加更好的聊天框"],
        en: ["Optimized automatic updates.", "Added a better chat box."],
      },
    },
    {
      version: "V1.3-beta.5",
      type: "beta",
      logs: {
        zh: [
          "彻底重构底层渲染逻辑，将逻辑从 CPU Rasterization with Texture Caching 改进为 Direct GPU Hardware-Accelerated Rendering，大幅度优化性能，性能比较与之前提升3-4x",
          "添加自动更新，也可以使用/PVPUtils update手动检测更新，该功能为实验性阶段，暂不稳定，需要稳定的网络环境（后续考虑加入镜像站）",
          "修复防砍动画异常",
          "修复部分崩溃问题",
          "修复上一个alpha版本的各种兼容性bug",
          "修复部分ui在特殊场景下会出现闪烁、形状与大小出现错误、文字反转的问题",
          "修复GLSL渲染器偶发崩溃的问题",
          "移除部分功能",
          "添加盔甲显示",
          "添加药水效果显示",
          "内置MC-159163bug修复",
          "修复语言不会自动根据当前用户使用语言改变的问题",
          "完善使用条款",
          "减少运行时内存占用",
          "修复HUDEdit部分情况下三分线与元素边框不显示或偏移的问题",
          "优化运动模糊算法",
          "修复ClickGUI与Notification同时显示时ClickGUI显示不正常的问题",
        ],
        en: [
          "Completely refactored the low-level rendering logic, moving from CPU Rasterization with Texture Caching to Direct GPU Hardware-Accelerated Rendering. Performance is greatly improved, reaching roughly 3-4x compared with the previous implementation.",
          "Added automatic updates. You can also manually check updates with /PVPUtils update. This feature is experimental, currently unstable, and requires a stable network environment. Mirror sites may be added later.",
          "Fixed abnormal anti-hit animation behavior.",
          "Fixed several crash issues.",
          "Fixed various compatibility bugs from the previous alpha version.",
          "Fixed UI flickering, incorrect shape or size, and reversed text in some special scenarios.",
          "Fixed occasional GLSL renderer crashes.",
          "Removed some features.",
          "Added armor display.",
          "Added potion effect display.",
          "Built in a fix for MC-159163.",
          "Fixed language not automatically changing according to the user's current language.",
          "Improved terms of use.",
          "Reduced runtime memory usage.",
          "Fixed HUDEdit guide lines and element borders not displaying or shifting in some cases.",
          "Optimized motion blur algorithm.",
          "Fixed ClickGUI rendering incorrectly when ClickGUI and Notification are displayed at the same time.",
        ],
      },
    },
    {
      version: "V1.3-beta.4",
      type: "beta",
      logs: {
        zh: [
          "修复了一些已知问题",
          "Keystrokes 添加了 New 样式",
          "加入鞘翅改进和暴击辅助",
          "增加五个背景GLSL",
          "优化文件结构以减小约1/2包体大小",
        ],
        en: [
          "Fixed several known issues.",
          "Added the New style to Keystrokes.",
          "Added Elytra improvements and Critical Assist.",
          "Added five background GLSL effects.",
          "Optimized the file structure, reducing package size by roughly half.",
        ],
      },
    },
    {
      version: "V1.3-beta.3",
      type: "beta",
      logs: {
        zh: ["增加自定义披风", "自定义主界面增加自定义图片功能", "修了一堆奇奇怪怪的bug"],
        en: [
          "Added custom capes.",
          "Added custom image support to the custom main menu.",
          "Fixed a bunch of strange bugs.",
        ],
      },
    },
    {
      version: "V1.3-beta.2",
      type: "beta",
      logs: {
        zh: [
          "增加更美观的主菜单界面（在主菜单单击“P”来开启）",
          "修复方块数量显示误触发问题",
          "修复使用动画影响长矛的问题",
          "修复部分已知崩溃与资源加载问题",
        ],
        en: [
          "Added a more beautiful main menu interface. Click “P” on the main menu to open it.",
          "Fixed false triggering in block count display.",
          "Fixed use animation affecting tridents.",
          "Fixed several known crashes and resource loading issues.",
        ],
      },
    },
    {
      version: "V1.3-beta.1",
      type: "beta",
      logs: {
        zh: [
          "增加钓鱼竿辅助",
          "增加TargetHUD新模式",
          "增加BlockCount",
          "增加去除攻击冷却动画",
          "大幅优化性能",
          "修复部分已知崩溃bug",
        ],
        en: [
          "Added Fishing Rod Assist.",
          "Added a new TargetHUD mode.",
          "Added BlockCount.",
          "Added attack cooldown animation removal.",
          "Greatly optimized performance.",
          "Fixed several known crash bugs.",
        ],
      },
    },
    {
      version: "V1.3-alpha.2",
      type: "alpha",
      logs: {
        zh: ["增加动态模糊"],
        en: ["Added motion blur."],
      },
    },
    {
      version: "V1.3-alpha.1",
      type: "alpha",
      logs: {
        zh: [
          "该版本为Alpha版本，极不稳定，很多地方存在未知bug，请不要将其作为长期使用对象",
          "超大幅优化性能",
          "彻底重构底层渲染逻辑",
          "将部分渲染全部转移至GPU",
        ],
        en: [
          "This is an alpha version. It is extremely unstable and contains unknown bugs in many areas. Do not use it as a long-term version.",
          "Massively optimized performance.",
          "Completely refactored the low-level rendering logic.",
          "Moved part of the rendering pipeline entirely to the GPU.",
        ],
      },
    },
    {
      version: "V1.2",
      type: "release",
      logs: {
        zh: [
          "加入全新 ClickGUI（基于 Skija 自绘），替换原版按钮界面，带来现代化、流畅的交互体验",
          "加入语言切换功能，支持中文/英文切换（需关闭并重新打开设置菜单生效）",
          "战斗模块：受击反馈（HitMarker）命中目标时在准星附近显示视觉提示",
          "战斗模块：受击音效（HitSound）命中目标时播放音效，支持自定义音效类型与触发条件",
          "渲染模块：UI编辑器（UI Editor）打开HUD布局编辑器，自由拖拽调整所有HUD元素位置",
          "渲染模块：剑格挡动画（Sword Blocking Animation）还原经典旧版剑格挡视觉效果",
          "渲染模块：自动格挡（AutoBlock）目标进入合适距离时自动触发格挡动画",
          "渲染模块：使用物品动画（Use Animation）使用或消耗物品时启用自定义动画",
          "渲染模块：挖掘状态显示（Digging Status）准星下方显示当前挖掘进度与剩余时间，如 99% (1s)",
          "渲染模块：潜行动画调整（Sneak Animation Adjustment）微调潜行时摄像机下降效果",
          "渲染模块：伽马值覆盖（Gamma Override）自定义并突破亮度上限",
          "渲染模块：渲染控制（Render Control）选择性隐藏告示牌文字、附魔台浮动书、第一人称火焰覆盖、受伤倾斜/摇晃效果",
          "渲染模块：低血量警告（LowHealthWarning）血量过低时显示醒目提醒",
          "渲染模块：目标信息显示（TargetHUD）实时显示当前目标的血量、距离等状态信息",
          "渲染模块：按键显示（Keystrokes）显示WASD输入、鼠标按键及实时CPS",
          "工具模块：胜利截图（VictoryScreenshot）获胜时自动截图并保存至桌面",
          "工具模块：掉落伤害预测（FallDamagePredictor）预测掉落是否造成伤害，安全时自动隐藏",
          "工具模块：自动疾跑（Auto Sprint）移动时自动触发疾跑",
          "工具模块：快速存放（Quick Deposit）在容器中左键单击物品快速存入，可限制仅对起床战争资源生效",
          "优化：修复游戏内 CJK（中日韩）输入法导致游戏卡死或无法响应的问题",
          "杂项：胜利音效（VictorySound）获胜时播放自定义音效，并提供一键打开音效文件夹的快捷按钮",
        ],
        en: [
          "Added a brand-new ClickGUI based on Skija custom rendering, replacing the vanilla button interface with a modern and smooth interaction experience.",
          "Added language switching, supporting Chinese and English. The settings menu must be closed and reopened for changes to take effect.",
          "Combat: HitMarker displays a visual indicator near the crosshair when hitting a target.",
          "Combat: HitSound plays a sound when hitting a target, with customizable sound type and trigger conditions.",
          "Render: UI Editor opens a HUD layout editor, allowing all HUD elements to be freely dragged and adjusted.",
          "Render: Sword Blocking Animation restores the classic old sword blocking visual effect.",
          "Render: AutoBlock automatically triggers the blocking animation when the target is within a suitable distance.",
          "Render: Use Animation enables custom animations when using or consuming items.",
          "Render: Digging Status displays current digging progress and remaining time under the crosshair, such as 99% (1s).",
          "Render: Sneak Animation Adjustment fine-tunes camera lowering while sneaking.",
          "Render: Gamma Override customizes and breaks through the brightness limit.",
          "Render: Render Control selectively hides sign text, enchanting table floating book, first-person fire overlay, and hurt tilt/shake effects.",
          "Render: LowHealthWarning displays a prominent warning when health is too low.",
          "Render: TargetHUD displays current target health, distance, and other status information in real time.",
          "Render: Keystrokes displays WASD input, mouse buttons, and real-time CPS.",
          "Tools: VictoryScreenshot automatically takes and saves a screenshot to the desktop after winning.",
          "Tools: FallDamagePredictor predicts whether a fall will cause damage and automatically hides when safe.",
          "Tools: Auto Sprint automatically triggers sprinting while moving.",
          "Tools: Quick Deposit lets left-clicking items in containers quickly deposit them, with an option to restrict it to BedWars resources.",
          "Optimization: Fixed in-game CJK input methods causing the game to freeze or stop responding.",
          "Misc: VictorySound plays a custom sound after winning and provides a shortcut button to open the sound folder.",
        ],
      },
    },
    {
      version: "V1.1",
      type: "release",
      logs: {
        zh: [
          "项目底层代码完全重构，抛弃旧版冗余结构与不规范命名，大幅提升用户体验与后续开发维护效率",
          "加入掉落伤害预测（FallDamagePredictor）",
          "加入受击反馈（HitMarker）",
          "加入目标信息显示（TargetHUD）",
          "加入低血量警告（LowHealthWarning）",
          "加入胜利截图（VictoryScreenshot）",
          "加入胜利音效（VictorySound）",
          "大部分功能支持通过设置菜单自定义",
        ],
        en: [
          "Completely refactored the underlying project code, removing old redundant structure and non-standard naming to greatly improve user experience and future maintainability.",
          "Added FallDamagePredictor.",
          "Added HitMarker.",
          "Added TargetHUD.",
          "Added LowHealthWarning.",
          "Added VictoryScreenshot.",
          "Added VictorySound.",
          "Most features now support customization through the settings menu.",
        ],
      },
    },
    {
      version: "V1.0.0",
      type: "release",
      logs: {
        zh: [
          "PVPUtils第一个版本，诞生于2026年3月14日（第一次上传Github的时候，实际上第一个版本的日期在2025年6月19日）",
        ],
        en: [
          "The first version of PVPUtils, born on March 14, 2026 when it was first uploaded to GitHub. The actual first version date was June 19, 2025.",
        ],
      },
    },
  ];

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
  const changelogPanel = document.querySelector(".changelog-panel");
  const changelogTree = document.querySelector("#changelog-tree");

  const getInitialLanguage = () => {
    const savedLanguage = window.localStorage.getItem("pvputils-language");
    if (savedLanguage === "zh" || savedLanguage === "en") {
      return savedLanguage;
    }

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || ""];

    return browserLanguages.some((language) => {
      return language.toLowerCase().startsWith("zh");
    })
      ? "zh"
      : "en";
  };

  let currentLanguage = getInitialLanguage();

  let words = wordSets[currentLanguage];
  let wordIndex = 0;
  let currentWord = rotator ? rotator.querySelector(".rotating-word") : null;
  let reviewIndex = 0;
  let reviewAnimating = false;
  let reviewTimer = null;
  let developerIndex = 0;
  let activeChangelogVersion = null;
  let hoveredChangelogVersion = null;
  let changelogFollowFrame = null;

  const translate = (key, fallback = key) => {
    return translations[currentLanguage][key] || fallback;
  };

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

    const activeSection = sections[closestIndex];
    if (
      activeChangelogVersion !== null &&
      activeSection &&
      !activeSection.querySelector("#changelog-tree")
    ) {
      setActiveChangelogVersion(null);
    }
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

  const syncChangelogLines = () => {
    if (!changelogPanel || !changelogTree) {
      return;
    }

    let svg = changelogPanel.querySelector(".changelog-lines");
    if (!svg) {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("changelog-lines");
      svg.setAttribute("aria-hidden", "true");
      changelogPanel.prepend(svg);
    }

    svg.textContent = "";
    const panelRect = changelogPanel.getBoundingClientRect();
    const items = Array.from(changelogTree.querySelectorAll(".changelog-item"));
    items.forEach((item, index) => {
      const nextItem = items[index + 1];
      if (!nextItem) {
        return;
      }

      const node = item.querySelector(".changelog-node");
      const nextNode = nextItem.querySelector(".changelog-node");
      if (!node || !nextNode) {
        return;
      }

      const nodeRect = node.getBoundingClientRect();
      const nextNodeRect = nextNode.getBoundingClientRect();
      const x1 = nodeRect.left + nodeRect.width * 0.5 - panelRect.left;
      const y1 = nodeRect.top + nodeRect.height * 0.5 - panelRect.top;
      const x2 = nextNodeRect.left + nextNodeRect.width * 0.5 - panelRect.left;
      const y2 = nextNodeRect.top + nextNodeRect.height * 0.5 - panelRect.top;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const isBetaPair =
        item.classList.contains("changelog-item-beta") &&
        nextItem.classList.contains("changelog-item-beta");
      const isAlphaPair =
        item.classList.contains("changelog-item-alpha") &&
        nextItem.classList.contains("changelog-item-alpha");
      const isReleasePair =
        item.classList.contains("changelog-item-release") &&
        nextItem.classList.contains("changelog-item-release");

      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      line.setAttribute(
        "stroke",
        isAlphaPair ? "#e85b5b" : isBetaPair ? "#d79246" : isReleasePair ? "#30d77a" : "#a9a05a",
      );
      line.setAttribute("stroke-width", "1.4");
      line.setAttribute("stroke-linecap", "round");
      line.setAttribute("opacity", "0.78");
      svg.appendChild(line);
    });
  };

  const queueChangelogLineSync = () => {
    window.requestAnimationFrame(() => {
      syncChangelogLines();
      window.setTimeout(syncChangelogLines, 90);
      window.setTimeout(syncChangelogLines, 220);
      window.setTimeout(syncChangelogLines, 380);
    });
  };

  const followChangelogLines = (duration = 220) => {
    const startedAt = performance.now();

    if (changelogFollowFrame !== null) {
      window.cancelAnimationFrame(changelogFollowFrame);
    }

    const tick = (now) => {
      syncChangelogLines();
      if (now - startedAt < duration) {
        changelogFollowFrame = window.requestAnimationFrame(tick);
      } else {
        changelogFollowFrame = null;
        syncChangelogLines();
      }
    };

    changelogFollowFrame = window.requestAnimationFrame(tick);
  };

  const setActiveChangelogVersion = (version) => {
    activeChangelogVersion = version;

    if (!changelogTree) {
      return;
    }

    changelogTree.querySelectorAll(".changelog-item").forEach((item) => {
      const isExpanded = item.dataset.version === activeChangelogVersion;
      item.classList.toggle("is-expanded", isExpanded);
      const button = item.querySelector(".changelog-version");
      if (button) {
        button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      }
    });

    followChangelogLines(420);
  };

  const renderChangelog = () => {
    if (!changelogTree) {
      return;
    }

    changelogTree.textContent = "";

    changelogEntries.forEach((entry) => {
      const item = document.createElement("li");
      item.className = `changelog-item changelog-item-${entry.type}`;
      item.dataset.version = entry.version;

      if (activeChangelogVersion === entry.version) {
        item.classList.add("is-expanded");
      }
      if (hoveredChangelogVersion === entry.version) {
        item.classList.add("is-hovered");
      }

      const node = document.createElement("span");
      node.className = "changelog-node";
      node.setAttribute("aria-hidden", "true");

      const button = document.createElement("button");
      button.className = "changelog-version";
      button.type = "button";
      button.textContent = entry.version;
      button.setAttribute("aria-expanded", activeChangelogVersion === entry.version ? "true" : "false");

      const details = document.createElement("div");
      details.className = "changelog-detail";

      const logs = entry.logs ? entry.logs[currentLanguage] : [];
      if (logs.length > 0) {
        const list = document.createElement("ul");
        logs.forEach((log) => {
          const logItem = document.createElement("li");
          logItem.textContent = log;
          list.appendChild(logItem);
        });
        details.appendChild(list);
      }

      button.addEventListener("click", () => {
        setActiveChangelogVersion(activeChangelogVersion === entry.version ? null : entry.version);
      });

      item.addEventListener("mouseenter", () => {
        hoveredChangelogVersion = entry.version;
        item.classList.add("is-hovered");
        followChangelogLines();
      });

      item.addEventListener("mouseleave", () => {
        if (hoveredChangelogVersion === entry.version) {
          hoveredChangelogVersion = null;
        }
        item.classList.remove("is-hovered");
        followChangelogLines();
      });

      item.append(node, button, details);
      changelogTree.appendChild(item);
    });

    queueChangelogLineSync();
    if (activeChangelogVersion !== null) {
      followChangelogLines(420);
    }
  };

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n, element.textContent);
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
    renderChangelog();
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
    syncChangelogLines();
  });

  window.addEventListener("scroll", syncActiveSectionFromScroll, { passive: true });
  window.setInterval(swapWord, 1000);
  window.setInterval(syncOnlineCount, 180000);

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
      window.localStorage.setItem("pvputils-language", nextLanguage);
      applyLanguage(nextLanguage);
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
