const i18nMap = {
  "Welcome": "主页",
  "About": "我是谁",
  "Projects": "项目",
  "Games": "游戏",
  "Career": "经历",
  "Contact": "联系",
  "Game records, ranks, and personal achievements": "游戏记录、段位和个人成就",
  "Game Records": "游戏记录",
  "Worked Games": "参与制作的游戏",
  "This section is reserved for the games I play seriously: playtime, rank, milestone achievements, and the way each game shaped my design taste.": "这里预留给我认真游玩的游戏：游玩时长、段位、里程碑成就，以及这些游戏如何影响我的设计审美。",
  "Personal game achievements": "个人游戏成就",
  "Game Name Pending": "游戏名称待补充",
  "Game Record Pending": "游戏记录待补充",
  "README game achievement entry pending.": "README 中的游戏成就条目待补充。",
  "Other games I played": "我还玩过的游戏",
  "README list pending": "README 列表待补充",
  "More played games": "更多游玩游戏",
  "Challenge runs": "挑战记录",
  "Competitive practice": "竞技练习",
  "Design references": "设计参考",
  "The remaining played-game names from README will scroll here.": "README 中其余玩过的游戏名称会在这里滚动展示。",
  "RainbowSix: Siege": "彩虹六号：攻势",
  "3000+ hours": "3000小时+",
  "4400+ MMR across multiple seasons": "多赛季4400MMR+",
  "2nd place in China Critical Moment League S3 Division B, Top 8 in S4 Division A, and multiple online tournaments from 2019 to 2021.": "中国《关键时刻联赛》S3乙级第二，S4甲级八强。2019-2021年间参与过多项线上赛事。",
  "Valorant": "无畏契约",
  "2000+ hours": "2000小时+",
  "Immortal across multiple seasons": "多赛季神话（Immortal）",
  "Premier Launch champion, multiple North American collegiate league appearances, and 2nd place in the PCL Immortal division.": "Premier Launch冠军，多次参加北美高校联赛，PCL神话赛段第二。",
  "CS:GO": "CS：GO",
  "1400+ hours": "1400小时+",
  "SMFC": "小地球（SMFC）",
  "FACEIT Level 7.": "FACEIT联赛7级。",
  "Stellaris": "群星（Stellaris）",
  "LoL": "英雄联盟（LoL）",
  "Cities: Skylines I & II": "城市：天际线1 & 2（Cities: Skylines I & II）",
  "Battlefield 5 & 6": "战地风云系列（Battlefield 5 & 6）",
  "Party Animals": "猛兽派对（Party Animals）",
  "Sid Meier's Civilization VI": "文明六（Sid Meier's Civilization VI）",
  "Slay the Spire 1 & 2": "杀戮尖塔 1 & 2（Slay the Spire 1 & 2）",
  "The Forest & Sons of the Forest": "森林 & 森林之子（The Forest & Sons of the Forest）",
  "A rolling list of other games that shaped my systems thinking and design taste.": "这些游戏共同影响了我的系统思维、玩法理解和设计审美。",
  "Playtime": "游玩时长",
  "Rank": "段位",
  "Achievement": "成就",
  "Placeholder for competitive rank, completion record, rare unlock, or personal milestone.": "预留给竞技段位、完成度记录、稀有解锁或个人里程碑。",
  "Game Slot 04": "游戏位 04",
  "Game Slot 05": "游戏位 05",
  "Placeholder for another production, jam, coursework, or shipped game entry.": "预留给另一个制作项目、Game Jam、课程作品或已发布游戏条目。",
  "Placeholder for a fifth game project with cover art, store link, platforms, and role notes.": "预留给第五个游戏项目，后续添加封面、商店链接、平台和职责说明。",
  "Playable game achievements and production experience": "可玩的游戏成果与制作经历",
  "I have more than five years of Unity and Unreal Engine development experience, with hands-on work across game design, technical art, production leadership, animation pipelines, interactive prototypes, and playable demos. This section will collect shipped games, prototypes, jams, class projects, and collaborative productions as official materials are added.": "我拥有超过5年的 Unity 和 Unreal Engine 游戏开发经验，实践内容覆盖游戏设计、技术美术、制作管理、动画管线、交互原型和可玩 Demo。这个板块会随着正式素材加入，持续收录已发布游戏、原型、Game Jam、课程项目和合作制作。",
  "Playable Work": "可玩作品",
  "Games I worked on": "我参与制作的游戏",
  "Fan game / gacha battle RPG": "二创游戏 / 抽卡战斗 RPG",
  "Endmon": "Endmon",
  "An Arknights: Endfield fan game where players can pull characters, fight, and upgrade their squad.": "一款允许你抽卡、战斗和升级的明日方舟终末地二创游戏。",
  "March 2026": "2026年3月",
  "Fan Game": "二创游戏",
  "Gotcha UI/UX, gameplay design, 3D art.": "Gotcha UI/UX、玩法设计、3D美术。",
  "Tower defense / exploration game": "塔防探索类游戏",
  "Dig too deep": "Dig too deep",
  "When the abyss calls, will you dig deeper? A Unity tower-defense exploration game.": "当深渊在呼唤你，你会挖下去吗？一款 Unity 塔防探索类游戏。",
  "May 2026": "2026年5月",
  "Exploration": "探索",
  "UI/UX design, game design.": "UI/UX 设计、策划。",
  "Horror puzzle game": "恐怖解谜类游戏",
  "Basement1": "Basement1",
  "Welcome to the company. Follow the rules, complete the tasks, and you may survive.": "欢迎来到公司，遵守规则，完成任务，你就能活下去。",
  "January 2026": "2026年1月",
  "Horror Puzzle": "恐怖解谜",
  "Technical artist, 3D artist, material design.": "技术美术、3D美术、材质设计。",
  "Interactive mocap prototype": "交互式动捕原型",
  "Syneste Mocap Demo": "Syneste 动捕 Demo",
  "A realtime Vicon mocap pipeline demo that retargets captured performance into Unreal Engine interaction.": "一个实时 Vicon 动捕管线 Demo，将捕捉表演重定向到 Unreal Engine 交互场景中。",
  "Solo UE5 interactive scene": "单人 UE5 交互场景",
  "An immersive UE5 concept art project with interactable tasks, character assets, environment dressing, and escape flow.": "一个沉浸式 UE5 概念美术项目，包含交互任务、角色资产、场景布置和逃离流程。",
  "Supported platforms": "支持平台",
  "External Page": "外部页面",
  "Play Now": "点击游玩",
  "Open Page": "打开页面",
  "Producer, animation TA, mocap performer, researcher.": "制作人、动画技术美术、动捕演员、研究员。",
  "Solo designer, 3D artist, technical artist, blueprint implementation.": "单人设计师、3D 美术、技术美术、蓝图实现。",
  "Upcoming entry": "后续条目",
  "Game Slot 03": "游戏位 03",
  "Placeholder for the next game project. Cover, supported platforms, external link, and role details will be added later.": "预留给下一个游戏项目。封面、支持平台、外部链接和职责说明会在之后补充。",
  "Cover Pending": "封面待补充",
  "Platform pending": "平台待补充",
  "To be added.": "待添加。",
  "Open comms": "开启联络",
  "Contact Me": "联系我",
  "Back Home": "返回首页",
  "Back to Projects": "返回项目",
  "Next project": "下一个项目",
  "Open Project": "打开项目",
  "Download Sheet": "下载图集",
  "Download Video": "下载视频",
  "Download Clip": "下载片段",
  "Ticket to Subway Survival": "前往 地铁生存 镜头",
  "Ticket to Nuclear War": "车票前往 核战后五十年",
  "Ticket to Gas Mask": "前往 防毒面具道具",
  "Ticket to Breakdown": "前往 资产拆解图",
  "Lighting / Environment": "灯光 / 环境",
  "Realtime Scene": "实时场景",
  "Material / Asset": "材质 / 资产",
  "Wireframe / Texture / Render": "线框 / 贴图 / 渲染",
  "Material / Asset Breakdown": "材质 / 资产拆解",
  "Subway Survival Frame": "地铁生存镜头",
  "50 Years After Nuclear War": "核战后五十年",
  "Post-Nuclear Gas Mask": "后核战防毒面具",
  "Asset Breakdown Sheet": "资产拆解展示图",
  "Realtime visuals / shaders / pipeline tools": "实时视觉 / 着色器 / 流程工具",
  "Game technical art": "游戏技术美术",
  "for worlds that feel alive.": "让世界真正活起来。",
  "I build the bridge between art direction and engine reality: materials, VFX, rigging tools, procedural systems, optimization, and visual problem solving.": "我连接艺术方向与引擎现实：材质、特效、绑定工具、程序化系统、优化，以及视觉问题解决。",
  "About Me": "我是谁",
  "Technical art with a production mindset.": "以生产思维做技术美术。",
  "I build bridges between art, animation, and programming: mocap pipelines, automated tool development, animation optimization, IK design, iteration, and more.": "我在美术，动画和程序之间建立桥梁：动捕管线，自动化工具开发，动画优化，IK设计和迭代...",
  "Motion Capture Animation Pipeline": "动捕动画管线",
  "Research and practice with Vicon and Rokoko motion capture animation pipelines, plus applying Metahuman monocular mocap to game-ready assets.": "Vicon和Rokoko动捕动画管线研究与实践，Metahuman单目动捕到游戏资产的应用。",
  "Deep AI Involvement": "深度AI参与",
  "Using Codex, Claude Code, and other AI Agents to accelerate development, with deep hands-on experience across image, audio, video, and generative AI workflows.": "利用Codex&Claude code等等AI Agent加速开发速度，从图像，到音视频生成等等生成式AI，均有深度体验。",
  "Game Design": "游戏设计",
  "Over five years of Unity and Unreal Engine game development experience, serving as producer and technical artist across multiple projects with strong teamwork and leadership experience.": "超过5年的Unity/UE游戏开发经验，在多个项目中担任制作人&技术美术，有丰富的团队协作和领导能力。",
  "Key Projects": "精选项目",
  "My Key Projects": "我的重点项目",
  "Each project now opens like a compact Steam page, with image/video switching, role notes, tools, and download actions.": "每个项目都像紧凑版 Steam 页面：支持图片/视频切换、职责说明、工具信息和下载操作。",
  "Career / Education": "职业 / 教育",
  "Before / after compare": "前后对比",
  "Open to game technical art conversations.": "欢迎交流游戏技术美术相关机会。",
  "I turn art problems into playable systems.": "把美术问题转化为可运行的游戏系统。",
  "Profile render: technical artist / realtime visual problem solver": "角色渲染：技术美术 / 实时视觉问题解决者",
  "Bridge Role": "桥梁型角色",
  "My work lives between art, engineering, and design. I care about visuals that serve gameplay: readable effects, responsive materials, stable pipelines, and tools that make creative iteration less painful.": "我的工作处在美术、工程与设计之间。我关注服务玩法的视觉：可读的特效、响应式材质、稳定流程，以及减少创作迭代痛苦的工具。",
  "This site is structured to show both final visuals and the thinking behind them: constraints, graphs, workflows, performance choices, and how each solution helps a team ship.": "这个网站不仅展示最终视觉，也展示背后的思考：限制条件、节点图、工作流、性能取舍，以及每个方案如何帮助团队交付。",
  "What I Optimize For": "我优化的目标",
  "Iteration speed, visual clarity, stable handoff, and effects that still look intentional under real gameplay constraints.": "迭代速度、视觉清晰度、稳定交接，以及在真实玩法约束下依然有设计感的效果。",
  "How I Communicate": "我的沟通方式",
  "With prototypes, annotated graphs, before/after captures, and tools that make the invisible technical decisions visible.": "通过原型、标注节点图、前后对比截图，以及把隐性的技术决策可视化的工具来沟通。",
  "A development path through art, engines, tools, and production constraints.": "一条穿过美术、引擎、工具与生产约束的发展路径。",
  "Now": "现在",
  "Game Technical Art Focus": "游戏技术美术方向",
  "Building portfolio pieces around shaders, VFX systems, procedural workflows, rigging support, and engine-facing tools.": "围绕着色器、特效系统、程序化工作流、绑定支持和面向引擎的工具构建作品集。",
  "Interactive Portfolio Build": "交互式作品集搭建",
  "Creating a personal website that behaves like a realtime art lab, with interactive case-study modules and visual breakdowns.": "创建一个像实时美术实验室一样运作的个人网站，包含交互式案例模块和视觉拆解。",
  "Project Development": "项目开发",
  "Add game projects, engine experiments, coursework, jam entries, or production collaborations here.": "这里可以加入游戏项目、引擎实验、课程作品、Game Jam 作品或生产协作。",
  "Education": "教育",
  "Academic / Training Background": "学术 / 培训背景",
  "Add school, degree, certifications, relevant classes, awards, research topics, and technical art learning path.": "这里可以加入学校、学位、证书、相关课程、奖项、研究主题和技术美术学习路径。",
  "Education and professional work across game design, technical art, and animation pipelines.": "横跨游戏设计、技术美术和动画管线的教育与职业经历。",
  "Education Background": "教育背景",
  "/ Art and design university ranked QS World No.3 and U.S. No.1 in 2024.": "：帕森斯设计学院 2024 年 QS 艺术与设计大学世界第三、美国第一。",
  "/ STEM program ranked U.S. News No.3 in game design.": "：U.S. News 游戏设计第三，STEM 专业。",
  "designed and produced a psychological horror game prototype in a five-person team, iterated through multiple rounds of playtesting, improved performance and gameplay, and delivered a highly polished prototype with hundreds of plays and dozens of positive comments.": "以 5 人小组的形式，按照游戏行业标准，在学期内设计制作一款心理恐怖游戏原型，并根据试玩多次迭代，优化游戏性能，改善游戏玩法，最终产出完成度较高的游戏原型，收获上百次游玩和数十次好评。",
  "practiced procedural content creation in Unity, including wave-function-collapse, Lindenmayer systems, Perlin noise, algorithmic terrain, landform and river generation, procedural scene props, and batch material workflows with texture sets.": "在 Unity 中，利用波函数坍缩算法、林登迈尔系统算法、柏林噪声算法来程序化生成游戏内容；掌握了利用算法生成山地、地牢、河流等地形，以及在游戏中程序化生成场景道具，或使用贴图集来批量制定材质。",
  "Parsons School of Design": "帕森斯设计学院",
  "New York, United States": "纽约，美国",
  "BFA Design and Technology": "本科（BFA 艺术学士）：设计与科技",
  "BFA Design and Technology / Art and design university ranked QS World No.3 and U.S. No.1 in 2024.": "本科（BFA 艺术学士）：设计与科技，帕森斯设计学院 2024 年 QS 艺术与设计大学世界第三、美国第一。",
  "Focused on Unity game development and game design principles, with coursework including Lore Lab, Studio core game design, CG1/2, modeling, and rendering.": "主要学习 Unity 游戏开发和游戏设计原理，主修课程包括 Lore Lab、Studio 核心游戏设计课、CG1/2、建模与渲染课程。",
  "GPA: 3.87 / 4.0. Scholarship: 32,000 USD.": "GPA：3.87 / 4.0。奖学金：32000 USD。",
  "Rochester Institute of Technology": "罗切斯特理工",
  "Rochester, United States": "罗切斯特，美国",
  "MS Game Design and Development": "硕士（MS 科学硕士）：游戏设计与开发",
  "MS Game Design and Development / STEM program ranked U.S. News No.3 in game design.": "硕士（MS 科学硕士）：游戏设计与开发，U.S. News 游戏设计第三，STEM 专业。",
  "601 Game Development:": "601 Game Development：",
  "601 Game Development: designed and produced a psychological horror game prototype in a five-person team, iterated through multiple rounds of playtesting, improved performance and gameplay, and delivered a highly polished prototype with hundreds of plays and dozens of positive comments.": "601 Game Development：以 5 人小组的形式，按照游戏行业标准，在学期内设计制作一款心理恐怖游戏原型，并根据试玩多次迭代，优化游戏性能，改善游戏玩法，最终产出完成度较高的游戏原型。收获上百次游玩和数十次好评。",
  "Procedural Generation:": "Procedural Generation：",
  "Procedural Generation: practiced procedural content creation in Unity, including wave-function-collapse, Lindenmayer systems, Perlin noise, algorithmic terrain, landform and river generation, procedural scene props, and batch material workflows with texture sets.": "Procedural Generation：在 Unity 中，利用波函数坍缩算法、林登迈尔系统算法、柏林噪声算法来程序化生成游戏内容。在课程中掌握了利用算法生成山地、地牢、河流等地形，以及在游戏中程序化生成场景道具，或使用贴图集来批量制定材质。",
  "GPA: 3.7 / 4.0. Scholarship: RIT Graduate and Merit Scholarship, 55% tuition award.": "GPA：3.7 / 4.0。奖学金：RIT Graduate and Merit Scholarship，55% 半奖奖学金。",
  "Professional": "职业",
  "Professional Experience": "职业经历",
  "MAGIC Maker Research Project - Syneste": "MAGIC Maker Research Project - Syneste",
  "2026.01 - 2026.05": "2026.1 - 2026.5",
  "Role:": "担任角色：",
  "Role: Project Lead, Mocap Animator, and Researcher.": "担任角色：项目组长、动捕动画师、研究员。",
  "Project setup:": "项目立项：",
  "Project setup: sponsored by RIT MAGIC Spell Studios with equipment support, this project studies concrete applications of motion capture in games and film.": "项目立项：本项目由罗切斯特理工的 MAGIC Spell Studio 赞助并提供设备支持，旨在研究动作捕捉在游戏和影视领域的具体应用。",
  "Mocap workflow research:": "领导动捕工作研究：",
  "Mocap workflow research: led team members in motion capture research, recorded mocap data with Vicon optical capture equipment in the MAGIC Spell Studios mocap room, imported assets into different engines and platforms, and documented workflow problems and solutions. Through the project, I accumulated experience in mocap production, animation production, and project management.": "领导动捕工作研究：在项目中，我负责领导组员开展动捕研究，以及在 MAGIC Spell Studio 的动捕工作室中利用 Vicon 光学动捕设备录制素材，并导入不同引擎和平台中，对工作流和产生的问题进行研究、记录和解决。最终，在项目中积攒了大量动捕制作、动画制作和项目管理相关的经验。",
  "Industry communication:": "开展行业交流：",
  "Industry communication: actively exchanged with universities and industry companies, shared mocap production experience with different teams, and improved my problem-solving approach. These exchanges helped complete the research and produce rigorous reports and documentation.": "开展行业交流：在研究的过程中，积极与不同高校以及行业内公司进行交流，通过和不同团队分享动捕制作的经验，从而提升了我在解决问题时的能力和思路。最终这些交流也帮助我更好地完成了项目的研究，产出了严谨的研究报告和文档。",
  "Project Lead, Mocap Animator, and Researcher.": "项目组长、动捕动画师、研究员。",
  "sponsored by RIT MAGIC Spell Studios with equipment support, this project studies concrete applications of motion capture in games and film.": "本项目由罗切斯特理工的 MAGIC Spell Studios 赞助并提供设备支持，旨在研究动作捕捉在游戏和影视领域的具体应用。",
  "led team members in motion capture research, recorded mocap data with Vicon optical capture equipment in the MAGIC Spell Studios mocap room, imported assets into different engines and platforms, and documented workflow problems and solutions. Through the project, I accumulated experience in mocap production, animation production, and project management.": "在项目中，我负责领导组员开展动捕研究，并在 MAGIC Spell Studios 的动捕工作室中利用 Vicon 光学动捕设备录制素材，将资产导入不同引擎和平台，对工作流和产生的问题进行研究、记录和解决。通过这个项目，我积累了大量动捕制作、动画制作和项目管理相关经验。",
  "actively exchanged with universities and industry companies, shared mocap production experience with different teams, and improved my problem-solving approach. These exchanges helped complete the research and produce rigorous reports and documentation.": "在研究过程中，我积极与不同高校以及行业公司交流，通过和不同团队分享动捕制作经验，提升了解决问题的能力和思路。这些交流也帮助我更好地完成项目研究，产出了严谨的研究报告和文档。",
  "Need a technical artist who can make visuals work in-engine?": "需要一位能让视觉在引擎里真正跑起来的技术美术吗？",
  "Open Channel": "开放联系",
  "Email": "邮箱",
  "Status": "状态",
  "View systems": "查看系统",
  "Selected realtime experiments, tools, and production-minded visual systems.": "精选实时实验、工具和面向生产的视觉系统。",
  "Asset showcase with base color, roughness, world-space normal, AO, and final material presentation.": "展示基础色、粗糙度、世界空间法线、AO 与最终材质效果的资产展示。",
  "Presentation format for showing geometry density, texture work, and final render state in one glance.": "用一张图快速展示几何密度、贴图工作和最终渲染状态的呈现格式。",
  "Dark cinematic scene composition with character staging, material mood, and post-process direction.": "黑暗电影感场景构图，关注角色调度、材质氛围和后期方向。",
  "Environment mood pass focused on lighting hierarchy, color grading, and cinematic readability.": "环境氛围稿，聚焦灯光层级、调色和电影感可读性。",
  "Before / After": "前后对比",
  "Interaction concept for showing art-tech improvements.": "用于展示美术技术改进的交互概念。",
  "Drag the divider to compare a breakdown state against a tuned material presentation. Project pages now expand this into Steam-like media galleries.": "拖动分割线，对比拆解状态与调优后的材质展示。项目页会进一步扩展成类似 Steam 的媒体展示。",
  "Final Render": "最终渲染",
  "Breakdown": "拆解",
  "Beauty": "成品",
  "Video": "视频",
  "Key Art": "主视觉",
  "Scene": "关卡",
  "Hero": "主图",
  "Alt Shot": "备用镜头",
  "Sheet": "图集",
  "Material": "材质",
  "Playback": "播放",
  "Realtime Scene Composition": "实时场景构图",
  "A dark realtime scene study focused on mood, silhouette, environmental storytelling, and game-ready material atmosphere.": "一个黑暗实时场景研究，关注氛围、剪影、环境叙事和游戏就绪的材质气质。",
  "A game-ready prop presentation focused on worn rubber, scratched filters, AO separation, roughness response, and normal-map diagnostics.": "游戏就绪道具展示，关注磨损橡胶、划痕滤罐、AO 分离、粗糙度响应和法线诊断。",
  "A portfolio-facing breakdown format for showing topology, texture work, and final render quality in one controlled layout.": "面向作品集的拆解格式，用一个受控版面展示拓扑、贴图工作和最终渲染质量。",
  "A cinematic environment pass for a survival-game mood: fluorescent lights, tunnel greens, masked character silhouette, and restrained color grading.": "面向生存游戏氛围的电影感环境稿：荧光灯、隧道绿色、戴面具角色剪影和克制调色。",
  "Role": "职责",
  "Tools": "工具",
  "Focus": "重点",
  "Palette": "配色",
  "Technical Goal": "技术目标",
  "Art Direction": "美术方向",
  "Interactive Potential": "交互潜力",
  "Visual Language": "视觉语言",
  "Page Direction": "页面方向",
  "Show how the prop reads across base color, roughness, normal, AO, and final material response without hiding the production breakdown.": "展示该道具在基础色、粗糙度、法线、AO 和最终材质响应中的表现，同时保留生产拆解信息。",
  "Dark survival gear with worn green coating, black rubber, subtle scratches, and post-apocalyptic utility.": "黑暗生存装备，带磨损绿色涂层、黑色橡胶、细微划痕和后末日实用感。",
  "Balance cinematic lighting with readable character staging while preserving a grimy survival atmosphere.": "在保留脏旧生存氛围的同时，平衡电影感灯光和可读的角色调度。",
  "This page can later host lighting toggles, LUT comparison, and breakdown clips for fog, material passes, and camera work.": "这个页面后续可以加入灯光切换、LUT 对比，以及雾效、材质通道和镜头工作的拆解片段。",
  "Make the asset's construction legible to reviewers, separating wireframe, texture, and render into a single scan-friendly presentation.": "让评审能快速看懂资产构成，把线框、贴图和渲染分离到一个便于扫读的展示中。",
  "Cool grey diagnostics, orange material accents, and clean diagonal separators that feel closer to a production breakdown than a poster.": "冷灰诊断感、橙色材质点缀和干净的斜向分隔，让页面更像生产拆解而不是海报。",
  "Use limited practical lights and post-process contrast to keep the scene atmospheric while preserving character readability.": "使用有限的实际光源和后期对比，在保持场景氛围的同时确保角色可读性。",
  "This project leans more like a Steam page: immediate media, clear actions, specs, and room for future playable downloads or devlog links.": "这个项目页更接近 Steam 页面：直接的媒体展示、清晰操作、规格信息，并为未来可玩下载或开发日志链接留出空间。",
  "Hidden Gate / Ticket QR": "隐藏入口 / 票面二维码",
  "Hidden mini game founded!": "发现隐藏小游戏！",
  "Click, tap, or press Space to jump. Keep the tiny courier moving through the broken ticket lane.": "点击、触屏或按空格跳跃，让小信使继续穿过破碎的票道。",
  "Score": "分数",
  "Best": "最佳",
  "Click to Jump": "点击跳跃",
  "Back to Tickets": "返回车票",
  "Social Link": "社交链接",
  "Code / Tools": "代码 / 工具",
  "ArtStation Page Coming Soon": "ArtStation 页面即将完善",
  "Bilibili Page Coming Soon": "Bilibili 页面即将完善",
  "Discord Contact Coming Soon": "Discord 联系方式",
  "GitHub Page Coming Soon": "GitHub 页面即将完善",
  "This temporary page can become a curated ArtStation bridge with featured renders and portfolio links.": "这个临时页面之后可以做成 ArtStation 中转页，展示精选渲染和作品集链接。",
  "This temporary page will later redirect to your Bilibili profile, demo uploads, or making-of videos.": "这个临时页面之后可以跳转到你的 Bilibili 主页、演示上传或制作过程视频。",
  "Discord username for contact and collaboration.": "用于联系与合作的 Discord 用户名。",
  "This temporary page can later list tools, shaders, scripts, and repositories related to your technical art work.": "这个临时页面之后可以列出与你技术美术工作相关的工具、着色器、脚本和仓库。",
  "Realtime mocap / 3D art / technical pipelines": "实时动捕 / 3D 美术 / 技术管线",
  "I build playable technical art work across mocap pipelines, realtime scenes, character assets, interaction prototypes, and production-ready visual systems.": "我围绕动捕管线、实时场景、角色资产、交互原型和生产级视觉系统构建可玩的技术美术作品。",
  "Current project pages include finished media for Syneste Mocap Research and 50 Years After Nuclear War. Empty slots are clearly marked as upcoming placeholders.": "当前项目页已加入 Syneste 动捕研究和核战后50年的正式媒体内容。空位会明确标记为待补充项目。",
  "Ticket to Syneste Research": "车票前往 Syneste 动捕研究",
  "Realtime Mocap / Animation Pipeline": "实时动捕 / 动画管线",
  "Realtime Mocap Game / Animation Pipeline": "实时动捕游戏 / 动画管线",
  "Syneste Mocap Research": "Syneste 动捕研究",
  "Jan 2026 - May 2026": "2026年1月 - 2026年5月",
  "3D Art / Concept Design": "3D 美术 / 概念设计",
  "Mar 2024 - May 2024": "2024年3月 - 2024年5月",
  "Ticket Pending": "车票前往 待补充项目",
  "Placeholder / Coming Soon": "待补充 / 即将添加",
  "Project Placeholder": "项目待补充",
  "Project Placeholder 03": "项目待补充 03",
  "Project Placeholder 04": "项目待补充 04",
  "Assets to be added": "素材待添加",
  "Content to be added": "内容待添加",
  "Pending": "待补充",
  "Selected mocap research, 3D art studies, and upcoming technical art projects.": "精选动捕研究、3D 美术项目，以及后续待加入的技术美术作品。",
  "A Vicon-based mocap pipeline research project and interactive game prototype practice.": "基于 Vicon 动捕的管线研究和交互式游戏原型实践。",
  "An immersive and interactive UE5 concept art project built as a solo production study.": "一个沉浸式、可交互的 UE5 概念美术单人项目。",
  "待补充：This slot is reserved for future project media, breakdown notes, role details, and downloads.": "待补充：这里预留给后续项目媒体、拆解说明、职责细节和下载内容。",
  "待补充：This slot will be updated once the next set of official assets is ready.": "待补充：下一组正式素材准备好后会更新这个项目位。",
  "Cover": "封面",
  "Pipeline": "管线",
  "Prototype": "研究",
  "Demo Video": "演示视频",
  "Concept": "概念设计",
  "Gameplay": "资产",
  "Render Video": "渲染视频",
  "Download Demo Video": "下载演示视频",
  "Download Render Video": "下载渲染视频",
  "Turning animation problems into runnable game systems": "把动画问题转化为可运行的游戏系统",
  "From China, game design and development master's student with six years of study in the United States": "来自中国，留美6年的游戏设计与开发硕士",
  "Technical Artist": "技术美术",
  "My name is Shuyuan Ji. Friends in the United States also call me Moore. I graduated from Parsons School of Design with a BFA in Design and Technology, where I mainly studied Unity game development and game design principles. I am currently pursuing an MS in Game Design and Development at Rochester Institute of Technology.": "我叫姬舒源（Shuyuan Ji），我在美国的朋友也会叫我Moore。我本科毕业于帕森斯设计学院的BFA Design and Technology专业，主要学习Unity游戏开发和游戏设计原理。硕士就读于罗切斯特理工的MS Game Design and Development。",
  "My main direction is game technical art, with a specialization on the animation side: motion capture animation pipelines, animation tool development, and UE5 animation workflows. I have rich project implementation experience and AI Agent usage experience.": "我的主要方向是游戏技术美术，我专精于动画侧，包含动捕动画管线，动画工具开发，UE5动画管线。我拥有丰富的项目实施经验和AI Agent使用经验。",
  "I am also an experienced 3D artist, with skills and works across hard-surface modeling and character sculpting.": "同时，我也是一个经验丰富的3D艺术家，有很多硬表面建模和人物雕刻的技能和作品。",
  "View ArtStation": "我的 ArtStation",
  "Timeline": "时间",
  "Producer / Animation TA / Mocap Performer": "制作人 / 动画TA / 动捕演员",
  "Vicon / Unreal Engine 5 / Maya": "Vicon / Unreal Engine 5 / Maya",
  "Leadership / Mocap asset optimization / Mocap pipeline / Livelink": "领导力 / 动捕资产优化 / 动捕管线 / Livelink",
  "Brief Introduction": "简要介绍",
  "Led by Shuyuan Ji and sponsored by RIT Magic Spell Studio, this team project researched mocap animation and production pipelines. The outcome included research documentation and pipeline guidance so more students can benefit from motion capture animation technology. Other team members included researcher Wenpeng Liao and 3D artist Kaijie Yang.": "团队由 Shuyuan Ji 带领，由 RIT Magic Spell Studio 赞助，旨在研究动捕动画和动捕生产管线。项目产出了研究文档和管线使用指导，让更多学生能够受益于动捕动画技术。团队其他成员包括研究员 Wenpeng Liao 和 3D 美术 Kaijie Yang。",
  "Project Focus": "项目重点",
  "Based on MAGIC Spell Studio's mocap lab, we researched the Vicon pipeline, including using Livelink to retarget Vicon characters to a Metahuman skeleton in realtime and drive interaction inside UE scenes. We built a simple interactive game demo that received hundreds of views and nearly one hundred play sessions at Imagine RIT. We also explored how to convert Vicon mocap assets into production-ready assets, including improving recording quality through configuration files and scripts in Vicon and cleaning jitter through Maya's graph editor.": "我们基于 MAGIC Spell Studio 的动捕实验室，对 Vicon 动捕管线做出了一系列研究，包括利用 Livelink 将 Vicon 角色实时重定向到 Metahuman 骨骼，并在 UE 场景中实现交互。我们完成了一个简单的交互式游戏 Demo，在罗切斯特理工 Imagine RIT 大会上获得了数百次观看和近百次游玩。我们也研究了如何将 Vicon 动捕资产转换成可用生产资产，包括通过配置文件和脚本优化 Vicon 录制质量，以及在 Maya 曲线编辑器中修复抖动等流程。",
  "All work, solo project": "全部工作，单人项目",
  "UE5 / Maya / Zbrush / Marvelous Designer / Substance Painter": "UE5 / Maya / Zbrush / Marvelous Designer / Substance Painter",
  "Multi-DCC production workflow": "多 DCC 生产流程",
  "Background": "背景介绍",
  "As the only designer and artist on this project, I independently completed the main character modeling and texture work, along with several scene props. I also used Unreal Marketplace and Megascan assets such as subway modules, ground debris, shelves, pipes, and other environment props to enrich the scene and support the atmosphere.": "作为这个项目中唯一的设计师和美术，我独立完成了主角建模与贴图制作，也完成了场景中部分道具的建模与贴图。同时，我使用了 Unreal Marketplace 和 Megascan 资源，例如地铁、地面垃圾碎块、货架、管道等环境资产，用来丰富场景细节并支撑氛围。",
  "I designed the interactive task flow and created blueprint logic for the interactable objects. From turning on lights and finding a crowbar to moving through the carriage and escaping, the project provided a complete gameplay experience. It was my first time using so many different software packages in one project. The process was painful, but also genuinely fun.": "我设计了玩家交互任务流程，并使用蓝图为所有可交互物体制作逻辑。从打开灯光、寻找撬棍，到穿过车厢并最终逃离，这些元素为玩家提供了一个完整的游戏体验。这是我第一次在一个项目中尝试使用这么多不同的软件。过程很痛苦，但也很有趣。",
  "Production Learning": "生产学习",
  "This project helped me practice the full pipeline from concept to character modeling, face sculpting, clothing and prop creation, material production, and importing into the game engine. I solved many common 3D art problems, including UV layout, material blending, and asset integration, strengthening my foundation as a 3D artist.": "这个项目让我完整实践了从概念、角色模型制作、脸部雕刻、衣服/道具制作、材质制作到导入游戏引擎的完整流程。在过程中我解决了很多 3D 美术常见问题，例如 UV 拆分、材质混合和资产整合，也夯实了我作为 3D 美术的基础。",
  "Project Slot 03": "项目位 03",
  "Project Slot 04": "项目位 04",
  "This slot is reserved for an upcoming portfolio project. Assets, breakdown notes, gameplay media, and download links will be added later.": "这个位置预留给后续作品。图片、拆解说明、玩法媒体和下载链接会在之后补充。",
  "Ticket to Syneste Mocap Research": "车票前往 Syneste 动捕研究",
  "Ticket to 50 Years After Nuclear War": "车票前往 核战后五十年",
  "Ticket to Project Placeholder": "车票前往 待补充项目",
  "3D Art / Concept Design": "3D 美术 / 概念设计",
  "Research": "研究",
  "Concept Design": "概念设计",
  "Level": "关卡",
  "Asset": "资产",
  "Technical Art - bringing concepts and creative ideas into production pipelines": "技术美术 - 让概念和创意落地到生产管线",
  "I build technical art work with design, aesthetics, and creativity around mocap animation pipelines, Unreal Engine, character assets, and game design": "我围绕动捕动画管线，虚幻引擎，角色资产和游戏设计构建有设计，有审美，有创意的技术美术作品",
  "I bring animation pipelines, engine craft, and game-ready visual ideas into production.": "我把动画管线、引擎技术和游戏视觉创意落地到生产流程",
  "I work at the intersection of art, engineering, and design, with a focus on motion capture animation pipelines, Unreal Engine workflows, character assets, and playable visual systems. My goal is to turn concepts and creative ideas into production-ready technical art that can be tested, understood, and shipped.": "我的工作处在美术、工程和设计的交汇处，重点关注动捕动画管线、虚幻引擎工作流、角色资产和可玩的视觉系统。我的目标是把概念和创意转化成可以测试、可以理解、也可以交付的生产级技术美术作品。",
  "In Syneste Mocap Research, I led a team sponsored by RIT MAGIC Spell Studios to study Vicon motion capture workflows, realtime retargeting through Livelink, Metahuman integration, UE interaction, and the process of turning mocap recordings into usable production assets. The project produced research documentation, pipeline guidance, and an interactive demo shown at Imagine RIT.": "在 Syneste 动捕研究中，我带领由 RIT MAGIC Spell Studios 赞助的团队研究 Vicon 动捕工作流、通过 Livelink 进行实时重定向、Metahuman 集成、UE 交互，以及将动捕录制转换成可用生产资产的流程。项目产出了研究文档、管线指导，并完成了一个在 Imagine RIT 展示的交互式 Demo。",
  "In 50 Years After Nuclear War, I completed a solo UE5 concept art project that covered character modeling, face sculpting, clothing and prop creation, materials, scene dressing, interaction logic, and engine integration. It helped me practice the complete path from visual concept to playable game scene.": "在《核战后五十年》中，我独立完成了一个 UE5 概念美术项目，覆盖角色建模、脸部雕刻、服饰与道具制作、材质、场景搭建、交互逻辑和引擎整合。这个项目让我完整练习了从视觉概念到可玩游戏场景的流程。",
  "This portfolio is built to show not only finished images, but also the thinking behind them: research, design decisions, asset workflows, interactive prototypes, and the technical steps that make game visuals work inside an engine.": "这个作品集不仅展示最终画面，也展示背后的思考：研究过程、设计决策、资产工作流、交互原型，以及让游戏视觉真正跑进引擎里的技术步骤。"
};

const titleMap = {
  "Welcome | Game Technical Artist Portfolio": "欢迎 | 游戏技术美术作品集",
  "About Me | Game Technical Artist Portfolio": "我是谁 | 游戏技术美术作品集",
  "Projects | Game Technical Artist Portfolio": "项目 | 游戏技术美术作品集",
  "Games | Game Technical Artist Portfolio": "游戏 | 游戏技术美术作品集",
  "Career & Education | Game Technical Artist Portfolio": "经历与教育 | 游戏技术美术作品集",
  "Contact Me | Game Technical Artist Portfolio": "联系我 | 游戏技术美术作品集",
  "Secret Runner | Ticket Gate": "隐藏小游戏 | 车票入口",
  "Post-Nuclear Gas Mask | Project": "后核战防毒面具 | 项目",
  "50 Years After Nuclear War | Project": "核战后五十年 | 项目",
  "Asset Breakdown Sheet | Project": "资产拆解展示图 | 项目",
  "Subway Survival Frame | Project": "Syneste 动捕研究 | 项目",
  "Syneste Mocap Research | Project": "Syneste 动捕研究 | 项目",
  "Project Placeholder | Coming Soon": "项目待补充 | 即将添加"
};

const textOriginals = new WeakMap();
const attrOriginals = new WeakMap();

function createLanguageToggle() {
  if (document.querySelector(".language-switch")) return;
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  if (!header || !nav) return;
  const button = document.createElement("button");
  button.className = "language-switch";
  button.type = "button";
  button.setAttribute("aria-label", "Switch language");
  button.innerHTML = '<span class="language-option language-option-en">EN</span><span class="language-option language-option-zh">中文</span><span class="language-thumb"></span>';
  button.addEventListener("click", () => {
    const next = (localStorage.getItem("portfolioLang") || "en") === "zh" ? "en" : "zh";
    setLanguage(next);
  });
  nav.insertBefore(button, nav.firstElementChild);
}

function translateTextNode(node, lang) {
  const source = textOriginals.get(node) || node.textContent;
  if (!textOriginals.has(node)) textOriginals.set(node, source);
  const trimmed = source.replace(/\s+/g, " ").trim();
  if (!trimmed) return;
  const translated = lang === "zh" ? i18nMap[trimmed] : trimmed;
  if (!translated) return;
  const leading = source.match(/^\s*/)?.[0] || "";
  const trailing = source.match(/\s*$/)?.[0] || "";
  node.textContent = `${leading}${translated}${trailing}`;
}

function applyExplicitTranslations(lang) {
  document.querySelectorAll("[data-i18n-en][data-i18n-zh]").forEach((element) => {
    element.textContent = lang === "zh" ? element.dataset.i18nZh : element.dataset.i18nEn;
  });
}

function setLanguage(lang) {
  const normalized = lang === "zh" ? "zh" : "en";
  localStorage.setItem("portfolioLang", normalized);
  document.documentElement.lang = normalized === "zh" ? "zh-CN" : "en";
  document.body?.classList.toggle("lang-zh", normalized === "zh");
  document.querySelector(".language-switch")?.classList.toggle("is-zh", normalized === "zh");
  applyExplicitTranslations(normalized);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest(".home-cube, .social-icon, .ticket-qr, canvas, [data-i18n-en][data-i18n-zh]")) return NodeFilter.FILTER_REJECT;
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => translateTextNode(node, normalized));

  document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
    ["placeholder", "aria-label"].forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const attrMap = attrOriginals.get(element) || {};
      if (!attrOriginals.has(element)) attrOriginals.set(element, attrMap);
      if (!attrMap[attr]) attrMap[attr] = element.getAttribute(attr);
      const source = attrMap[attr];
      element.setAttribute(attr, normalized === "zh" ? (i18nMap[source] || source) : source);
    });
  });

  const sourceTitle = document.documentElement.dataset.originalTitle || document.title;
  document.documentElement.dataset.originalTitle = sourceTitle;
  document.title = normalized === "zh" ? (titleMap[sourceTitle] || sourceTitle) : sourceTitle;
}

createLanguageToggle();
setLanguage(localStorage.getItem("portfolioLang") || "en");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const canvas = document.querySelector("#fx-canvas");
const ctx = canvas?.getContext("2d");
const pointer = { x: 0, y: 0, active: false };
let nodes = [];
let auroras = [];
let dpr = 1;

document.querySelectorAll(".showcase-slide, .hero-reel, .scan-window, .asset-visual, .asset-compare .compare-base, .asset-compare .compare-overlay").forEach((frame) => {
  const image = frame.querySelector("img");
  if (image?.getAttribute("src")) {
    const src = image.getAttribute("src").replace(/'/g, "\\'");
    frame.style.setProperty("--media-bg", `url('${src}')`);
  }
});

document.querySelectorAll("[data-media-gallery]").forEach((gallery) => {
  const viewport = gallery.querySelector(".media-viewport");
  const items = [...gallery.querySelectorAll(".media-viewport img, .media-viewport video, .media-viewport iframe")];
  const buttons = [...gallery.querySelectorAll("[data-media-index]")];

  const setMediaBackground = (item) => {
    const src = item?.tagName === "IMG" ? item.getAttribute("src") : items.find((media) => media.tagName === "IMG")?.getAttribute("src");
    if (src) {
      viewport?.style.setProperty("--media-bg", `url('${src.replace(/'/g, "\\'")}')`);
    }
  };

  const activate = (index) => {
    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("active", isActive);
      if (item.tagName === "VIDEO") {
        if (isActive) {
          item.play().catch(() => {});
        } else {
          item.pause();
        }
      }
    });
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
    setMediaBackground(items[index]);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activate(Number(button.dataset.mediaIndex || 0));
    });
  });

  activate(0);
});

function resizeCanvas() {
  if (!canvas || !ctx) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(420, Math.max(150, Math.floor(window.innerWidth / 5)));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.05,
    r: Math.random() * 1.25 + 0.25,
    twinkle: Math.random() * Math.PI * 2,
    depth: Math.random() * 0.8 + 0.2,
    orbit: Math.random() * Math.PI * 2,
  }));

  auroras = Array.from({ length: 3 }, (_, index) => ({
    offset: Math.random() * Math.PI * 2,
    y: window.innerHeight * (0.18 + index * 0.16),
    amp: 24 + Math.random() * 42,
    alpha: 0.045 + Math.random() * 0.045,
  }));
}

function drawNetwork() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  const gradient = ctx.createRadialGradient(
    pointer.active ? pointer.x : window.innerWidth * 0.5,
    pointer.active ? pointer.y : window.innerHeight * 0.35,
    0,
    window.innerWidth * 0.5,
    window.innerHeight * 0.5,
    Math.max(window.innerWidth, window.innerHeight) * 0.8
  );
  gradient.addColorStop(0, "rgba(214,181,106,0.12)");
  gradient.addColorStop(0.34, "rgba(245,243,234,0.035)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  const time = performance.now() * 0.001;

  auroras.forEach((band, bandIndex) => {
    const auroraGradient = ctx.createLinearGradient(0, band.y - 90, 0, band.y + 120);
    auroraGradient.addColorStop(0, "rgba(255,255,255,0)");
    auroraGradient.addColorStop(0.45, `rgba(255,255,255,${band.alpha * 0.82})`);
    auroraGradient.addColorStop(0.72, `rgba(185,144,63,${band.alpha * 0.28})`);
    auroraGradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = auroraGradient;
    ctx.beginPath();
    ctx.moveTo(0, band.y);
    for (let x = 0; x <= window.innerWidth + 80; x += 80) {
      const wave = Math.sin(x * 0.006 + time * (0.45 + bandIndex * 0.1) + band.offset) * band.amp;
      ctx.lineTo(x, band.y + wave);
    }
    ctx.lineTo(window.innerWidth, band.y + 180);
    ctx.lineTo(0, band.y + 140);
    ctx.closePath();
    ctx.fill();
  });

  nodes.forEach((node, index) => {
    node.x += node.vx;
    node.y += node.vy;
    node.twinkle += 0.018 + node.depth * 0.012;
    node.orbit += 0.0018 + node.depth * 0.001;

    const centerX = pointer.active ? pointer.x : window.innerWidth * 0.52;
    const centerY = pointer.active ? pointer.y : window.innerHeight * 0.46;
    const toCenterX = node.x - centerX;
    const toCenterY = node.y - centerY;
    const centerDistance = Math.max(Math.hypot(toCenterX, toCenterY), 1);
    const swirl = pointer.active ? 0.22 : 0.055;
    node.x += (-toCenterY / centerDistance) * swirl * node.depth;
    node.y += (toCenterX / centerDistance) * swirl * node.depth;

    if (node.x < -20) node.x = window.innerWidth + 20;
    if (node.x > window.innerWidth + 20) node.x = -20;
    if (node.y < -20) node.y = window.innerHeight + 20;
    if (node.y > window.innerHeight + 20) node.y = -20;

    const dx = node.x - pointer.x;
    const dy = node.y - pointer.y;
    const distance = Math.hypot(dx, dy);
    if (pointer.active && distance < 170) {
      const force = (170 - distance) / 170;
      node.x += dx * force * 0.006;
      node.y += dy * force * 0.006;
    }

    const glow = 0.38 + Math.sin(node.twinkle) * 0.32;
    ctx.beginPath();
    ctx.fillStyle = `rgba(245,243,234,${0.08 + glow * 0.18})`;
    ctx.shadowColor = "rgba(214,181,106,0.46)";
    ctx.shadowBlur = 2 + glow * 5;
    ctx.arc(node.x, node.y, node.r * (0.75 + glow * 0.45), 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    for (let j = index + 1; j < nodes.length; j += 1) {
      const other = nodes[j];
      const lineDistance = Math.hypot(node.x - other.x, node.y - other.y);
      if (lineDistance < 62 && (index + j) % 17 === 0) {
        ctx.strokeStyle = `rgba(185,144,63,${(1 - lineDistance / 62) * 0.028})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawNetwork);
}

if (canvas && ctx) {
  resizeCanvas();
  drawNetwork();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
}

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 9}deg) translateY(-3px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll("[data-compare]").forEach((widget) => {
  const input = widget.querySelector("input");
  const overlay = widget.querySelector(".compare-overlay");
  const update = () => {
    const value = Math.max(0, Math.min(100, Number(input.value) || 0));
    const split = `${value}%`;
    const hidden = `${100 - value}%`;
    widget.style.setProperty("--split", split);
    if (overlay) {
      overlay.style.clipPath = `inset(0 ${hidden} 0 0)`;
      overlay.style.webkitClipPath = `inset(0 ${hidden} 0 0)`;
    }
  };
  ["input", "change", "pointermove", "touchmove"].forEach((eventName) => {
    input.addEventListener(eventName, update, { passive: true });
  });
  update();
});

document.querySelectorAll("[data-showcase]").forEach((showcase) => {
  const slides = [...showcase.querySelectorAll(".showcase-slide")];
  const buttons = [...showcase.querySelectorAll("[data-showcase-index]")];
  const stage = showcase.querySelector(".showcase-stage");
  const title = showcase.querySelector("[data-showcase-title]");
  const meta = showcase.querySelector("[data-showcase-meta]");
  let activeIndex = 0;
  let timer;
  let wheelSpeedTimer;

  const activate = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeIndex);
    });
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === activeIndex);
    });

    const activeSlide = slides[activeIndex];
    if (title) title.textContent = activeSlide.dataset.title || "";
    if (meta) meta.textContent = activeSlide.dataset.meta || "";
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => activate(activeIndex + 1), 4200);
  };

  buttons.forEach((button) => {
    const index = Number(button.dataset.showcaseIndex || 0);
    button.addEventListener("pointerenter", () => {
      activate(index);
      start();
    });
    button.addEventListener("click", () => {
      activate(index);
      start();
    });
  });

  stage?.addEventListener("click", () => {
    const url = buttons[activeIndex]?.dataset.projectUrl;
    if (url) {
      window.location.href = url;
    }
  });

  stage?.addEventListener("wheel", (event) => {
    event.preventDefault();
    const speed = Math.abs(event.deltaY) > 40 ? "5s" : "8s";
    stage.style.setProperty("--wheel-speed", speed);
    stage.style.setProperty("--wheel-hover-speed", "4s");
    window.clearTimeout(wheelSpeedTimer);
    wheelSpeedTimer = window.setTimeout(() => {
      stage.style.setProperty("--wheel-speed", "18s");
      stage.style.setProperty("--wheel-hover-speed", "9s");
    }, 900);
  }, { passive: false });

  showcase.addEventListener("pointerenter", () => window.clearInterval(timer));
  showcase.addEventListener("pointerleave", start);
  activate(0);
  start();
});

const runnerCanvas = document.querySelector("#runner-canvas");
const runnerCtx = runnerCanvas?.getContext("2d");
const runnerScore = document.querySelector("[data-runner-score]");
const runnerBest = document.querySelector("[data-runner-best]");
const runnerStart = document.querySelector("[data-runner-start]");
const runnerCabinet = document.querySelector(".runner-cabinet");

if (runnerCanvas && runnerCtx) {
  const world = { width: 960, height: 360, ground: 286 };
  const player = { x: 92, y: world.ground - 48, w: 36, h: 48, vy: 0, grounded: true };
  const runner = {
    active: false,
    over: false,
    speed: 5.4,
    score: 0,
    best: Number(localStorage.getItem("signalRunnerBest") || 0),
    nextSpawn: 80,
    obstacles: [],
    dust: [],
    last: 0,
  };

  const pad = (value) => String(Math.floor(value)).padStart(4, "0");
  const updateHud = () => {
    if (runnerScore) runnerScore.textContent = pad(runner.score);
    if (runnerBest) runnerBest.textContent = pad(runner.best);
  };

  const resetRunner = () => {
    player.y = world.ground - player.h;
    player.vy = 0;
    player.grounded = true;
    runner.active = true;
    runner.over = false;
    runner.speed = 5.4;
    runner.score = 0;
    runner.nextSpawn = 80;
    runner.obstacles = [];
    runner.dust = [];
    runnerStart?.classList.add("hidden");
    updateHud();
  };

  const jump = () => {
    if (!runner.active || runner.over) {
      resetRunner();
      return;
    }
    if (player.grounded) {
      player.vy = -13.2;
      player.grounded = false;
    }
  };

  const spawnObstacle = () => {
    const tall = Math.random() > 0.64;
    runner.obstacles.push({
      x: world.width + 28,
      y: tall ? world.ground - 62 : world.ground - 38,
      w: tall ? 26 : 34,
      h: tall ? 62 : 38,
      glow: Math.random() * 0.7 + 0.3,
    });
    runner.nextSpawn = 72 + Math.random() * 74;
  };

  const rectsTouch = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

  const drawRunner = () => {
    const rect = runnerCanvas.getBoundingClientRect();
    const dprScale = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.max(320, Math.floor(rect.width * dprScale));
    const targetH = Math.max(120, Math.floor(rect.height * dprScale));
    if (runnerCanvas.width !== targetW || runnerCanvas.height !== targetH) {
      runnerCanvas.width = targetW;
      runnerCanvas.height = targetH;
    }
    runnerCtx.setTransform(targetW / world.width, 0, 0, targetH / world.height, 0, 0);
    runnerCtx.clearRect(0, 0, world.width, world.height);

    const sky = runnerCtx.createLinearGradient(0, 0, 0, world.height);
    sky.addColorStop(0, "#050505");
    sky.addColorStop(0.58, "#11100d");
    sky.addColorStop(1, "#030303");
    runnerCtx.fillStyle = sky;
    runnerCtx.fillRect(0, 0, world.width, world.height);

    runnerCtx.strokeStyle = "rgba(214,181,106,0.12)";
    runnerCtx.lineWidth = 1;
    for (let x = -40; x < world.width + 40; x += 40) {
      runnerCtx.beginPath();
      runnerCtx.moveTo(x - (runner.score % 40), 0);
      runnerCtx.lineTo(x + 120 - (runner.score % 40), world.height);
      runnerCtx.stroke();
    }

    runnerCtx.fillStyle = "rgba(214,181,106,0.18)";
    runnerCtx.fillRect(0, world.ground, world.width, 2);
    runnerCtx.fillStyle = "rgba(245,243,234,0.08)";
    for (let x = 0; x < world.width; x += 42) {
      runnerCtx.fillRect((x - runner.score * 1.8) % world.width, world.ground + 18, 22, 2);
    }

    runner.dust.forEach((dot) => {
      runnerCtx.fillStyle = `rgba(214,181,106,${dot.life})`;
      runnerCtx.fillRect(dot.x, dot.y, dot.s, dot.s);
    });

    runner.obstacles.forEach((obstacle) => {
      runnerCtx.fillStyle = "rgba(10,10,10,0.92)";
      runnerCtx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
      runnerCtx.strokeStyle = `rgba(214,181,106,${0.38 + obstacle.glow * 0.28})`;
      runnerCtx.strokeRect(obstacle.x + 0.5, obstacle.y + 0.5, obstacle.w - 1, obstacle.h - 1);
      runnerCtx.fillStyle = "rgba(214,181,106,0.62)";
      runnerCtx.fillRect(obstacle.x + 6, obstacle.y + 8, obstacle.w - 12, 3);
    });

    runnerCtx.save();
    runnerCtx.translate(player.x, player.y);
    runnerCtx.fillStyle = "rgba(245,243,234,0.95)";
    runnerCtx.fillRect(4, 8, 28, 34);
    runnerCtx.fillStyle = "rgba(214,181,106,0.95)";
    runnerCtx.fillRect(9, 0, 18, 12);
    runnerCtx.fillStyle = "rgba(3,3,3,0.96)";
    runnerCtx.fillRect(13, 14, 10, 8);
    runnerCtx.fillStyle = "rgba(245,243,234,0.8)";
    runnerCtx.fillRect(4, 42, 10, 6);
    runnerCtx.fillRect(22, 42, 10, 6);
    runnerCtx.restore();

    if (!runner.active) {
      runnerCtx.fillStyle = "rgba(0,0,0,0.46)";
      runnerCtx.fillRect(0, 0, world.width, world.height);
      runnerCtx.fillStyle = "rgba(245,243,234,0.86)";
      runnerCtx.font = "800 26px Urbanist, sans-serif";
      runnerCtx.textAlign = "center";
      runnerCtx.fillText(document.documentElement.lang === "zh-CN" ? "点击开始隐藏跑酷" : "Click to start the hidden run", world.width / 2, world.height / 2);
    }

    if (runner.over) {
      runnerCtx.fillStyle = "rgba(0,0,0,0.5)";
      runnerCtx.fillRect(0, 0, world.width, world.height);
      runnerCtx.fillStyle = "rgba(214,181,106,0.95)";
      runnerCtx.font = "900 34px Urbanist, sans-serif";
      runnerCtx.textAlign = "center";
      runnerCtx.fillText(document.documentElement.lang === "zh-CN" ? "信号丢失" : "SIGNAL LOST", world.width / 2, world.height / 2 - 12);
      runnerCtx.fillStyle = "rgba(245,243,234,0.72)";
      runnerCtx.font = "700 16px Urbanist, sans-serif";
      runnerCtx.fillText(document.documentElement.lang === "zh-CN" ? "点击重启信使" : "Click to reboot the courier", world.width / 2, world.height / 2 + 24);
    }
  };

  const stepRunner = (time) => {
    const dt = Math.min((time - runner.last) / 16.67, 2);
    runner.last = time;

    if (runner.active && !runner.over) {
      runner.score += dt * runner.speed * 0.42;
      runner.speed = Math.min(11, runner.speed + dt * 0.0024);
      runner.nextSpawn -= dt;
      if (runner.nextSpawn <= 0) spawnObstacle();

      player.vy += 0.68 * dt;
      player.y += player.vy * dt;
      if (player.y >= world.ground - player.h) {
        player.y = world.ground - player.h;
        player.vy = 0;
        player.grounded = true;
      }

      runner.obstacles.forEach((obstacle) => {
        obstacle.x -= runner.speed * dt;
        if (rectsTouch(player, obstacle)) {
          runner.over = true;
          runner.active = false;
          runner.best = Math.max(runner.best, runner.score);
          localStorage.setItem("signalRunnerBest", String(Math.floor(runner.best)));
          runnerStart?.classList.remove("hidden");
        }
      });
      runner.obstacles = runner.obstacles.filter((obstacle) => obstacle.x + obstacle.w > -40);

      if (player.grounded && Math.random() > 0.45) {
        runner.dust.push({ x: player.x + 2, y: world.ground - 6, s: Math.random() * 3 + 1, life: 0.42 });
      }
      runner.dust.forEach((dot) => {
        dot.x -= runner.speed * dt * 0.8;
        dot.y += dt * 0.2;
        dot.life -= dt * 0.025;
      });
      runner.dust = runner.dust.filter((dot) => dot.life > 0);
      runner.best = Math.max(runner.best, runner.score);
      updateHud();
    }

    drawRunner();
    requestAnimationFrame(stepRunner);
  };
  runnerCanvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    jump();
  }, { passive: false });
  runnerCabinet?.addEventListener("touchstart", (event) => {
    event.preventDefault();
    jump();
  }, { passive: false });
  runnerCabinet?.addEventListener("touchmove", (event) => event.preventDefault(), { passive: false });
  runnerStart?.addEventListener("click", (event) => {
    event.preventDefault();
    jump();
  });
  window.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
      event.preventDefault();
      jump();
    }
  });

  updateHud();
  requestAnimationFrame((time) => {
    runner.last = time;
    stepRunner(time);
  });
}

