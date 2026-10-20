// 每日推荐功能

// 工具推荐数据库
const recommendedTools = [
    {
        id: 1,
        name: 'ChatGPT',
        icon: '💬',
        category: 'AI对话',
        description: '最强大的AI对话助手，能够回答问题、写作、编程、翻译等。GPT-4模型智能程度令人惊叹，是每个人都应该尝试的AI工具。',
        features: [
            '支持中英文对话',
            '代码生成和调试',
            '文章写作和润色',
            '创意头脑风暴',
            '数据分析建议'
        ],
        price: '免费 / Plus $20/月',
        link: 'tool-chatgpt.html',
        officialLink: 'https://chat.openai.com',
        reason: '作为AI革命的先驱，ChatGPT已经成为全球数亿用户的生产力工具。无论是学习、工作还是创作，它都能提供强大的帮助。今天推荐它，是因为它真的能改变你的工作方式。'
    },
    {
        id: 2,
        name: 'Midjourney',
        icon: '🎨',
        category: 'AI绘画',
        description: '顶级AI绘画工具，只需输入描述就能生成惊艳的艺术作品。适合设计师、插画师、内容创作者使用。',
        features: [
            '超高质量画作生成',
            '多种艺术风格',
            '支持图片变体',
            '商业使用授权',
            '活跃的创作社区'
        ],
        price: '基础版 $10/月',
        link: 'tool-midjourney.html',
        officialLink: 'https://www.midjourney.com',
        reason: 'Midjourney生成的图片质量在AI绘画领域首屈一指。无论是概念设计、封面制作还是艺术创作，它都能带来惊喜。今天推荐它，是因为它能让每个人都成为艺术家。'
    },
    {
        id: 3,
        name: 'Notion AI',
        icon: '📝',
        category: 'AI写作',
        description: '在强大的笔记工具中集成AI助手，帮你整理思路、撰写文档、总结内容。工作学习的完美搭档。',
        features: [
            '智能文档生成',
            '会议纪要总结',
            '头脑风暴辅助',
            '内容翻译和优化',
            '与Notion无缝集成'
        ],
        price: 'Notion免费 / AI $10/月',
        link: 'tool-notion-ai.html',
        officialLink: 'https://www.notion.so',
        reason: 'Notion本身就是优秀的笔记工具，加上AI功能后更是如虎添翼。对于需要整理信息、撰写文档的人来说，它能大幅提升效率。'
    },
    {
        id: 4,
        name: 'Runway',
        icon: '🎬',
        category: 'AI视频',
        description: '专业的AI视频编辑工具，提供视频生成、背景替换、对象移除等强大功能。视频创作者的神器。',
        features: [
            '文字生成视频',
            'AI背景移除',
            '视频风格转换',
            '慢动作生成',
            '专业级输出'
        ],
        price: '免费试用 / $12/月起',
        link: 'tool-runway.html',
        officialLink: 'https://runwayml.com',
        reason: 'Runway将复杂的视频编辑变得简单。无论是YouTuber、短视频创作者还是专业剪辑师，都能从中受益。今天推荐它，是因为AI视频正在改变内容创作。'
    },
    {
        id: 5,
        name: 'DeepSeek',
        icon: '🧠',
        category: 'AI对话',
        description: '国产强大AI模型，完全免费使用。在数学、编程等领域表现出色，是ChatGPT的优秀替代品。',
        features: [
            '完全免费无限制',
            '编程能力强大',
            '数学推理优秀',
            '中文理解准确',
            '响应速度快'
        ],
        price: '完全免费',
        link: 'tool-deepseek.html',
        officialLink: 'https://www.deepseek.com',
        reason: 'DeepSeek是国产AI的骄傲，完全免费却性能强大。特别是在编程和数学领域，甚至超越了很多付费工具。对于预算有限的用户，这是最佳选择。'
    },
    {
        id: 6,
        name: 'Leonardo AI',
        icon: '🖼️',
        category: 'AI绘画',
        description: '专为游戏美术和概念设计打造的AI绘画工具。提供丰富的模型和风格，生成速度快。',
        features: [
            '游戏美术专用',
            '多种预设模型',
            '批量生成',
            '高清输出',
            '新用户送积分'
        ],
        price: '免费版 / $10/月起',
        link: 'tool-leonardo.html',
        officialLink: 'https://leonardo.ai',
        reason: 'Leonardo AI在游戏美术和概念设计领域表现突出。它提供的专业模型让创作更高效，新用户还有免费积分可以体验。'
    },
    {
        id: 7,
        name: '剪映',
        icon: '✂️',
        category: 'AI视频',
        description: '字节跳动出品的免费视频剪辑工具，集成强大的AI功能。适合短视频创作者和新手。',
        features: [
            '完全免费',
            'AI智能字幕',
            '一键成片',
            '丰富的模板',
            '跨平台同步'
        ],
        price: '完全免费',
        link: 'tool-jianying.html',
        officialLink: 'https://www.capcut.cn',
        reason: '剪映是最受欢迎的免费视频剪辑工具之一。AI字幕、智能配音等功能让视频制作变得简单。对于短视频创作者来说，这是必备工具。'
    }
];

// 根据日期选择每日推荐（确保每天推荐的工具相同）
function getDailyPick() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const index = dayOfYear % recommendedTools.length;
    return recommendedTools[index];
}

// 获取格式化日期
function getFormattedDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return today.toLocaleDateString('zh-CN', options);
}

// 渲染每日推荐
function renderDailyPick() {
    const container = document.getElementById('dailyPickContent');
    if (!container) return;

    const tool = getDailyPick();
    const date = getFormattedDate();

    container.innerHTML = `
        <div class="daily-pick-header">
            <div class="daily-pick-date">${date}</div>
            <h2 class="daily-pick-title">🌟 今日推荐工具</h2>
            <p class="daily-pick-subtitle">每天为你精选一款优秀的AI工具</p>
        </div>

        <div class="daily-pick-card">
            <div class="daily-pick-visual">
                <span class="daily-pick-icon">${tool.icon}</span>
                <span class="daily-pick-category">${tool.category}</span>
            </div>

            <div class="daily-pick-content">
                <h2>${tool.name}</h2>
                <p class="daily-pick-description">${tool.description}</p>

                <div class="daily-pick-features">
                    <h4>✨ 核心功能</h4>
                    <div class="feature-list">
                        ${tool.features.map(feature => `
                            <div class="feature-item">
                                <span class="icon">✓</span>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="daily-pick-price">
                    <span class="price-label">价格</span>
                    <span class="price-value">${tool.price}</span>
                </div>

                <div class="daily-pick-actions">
                    <a href="${tool.link}" class="daily-pick-btn daily-pick-btn-primary">
                        📖 查看详情
                    </a>
                    <a href="${tool.officialLink}" target="_blank" class="daily-pick-btn daily-pick-btn-secondary">
                        🚀 访问官网
                    </a>
                </div>

                <div class="daily-pick-reason">
                    <h4>💡 为什么推荐它？</h4>
                    <p>${tool.reason}</p>
                </div>
            </div>
        </div>
    `;

    // 统计
    console.log('今日推荐：' + tool.name);
}

// 页面加载时渲染
document.addEventListener('DOMContentLoaded', function() {
    renderDailyPick();
});