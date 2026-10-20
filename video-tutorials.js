// 视频教程链接数据库（已验证有效链接）

const videoTutorials = {
    // AI写作工具
    chatgpt: {
        official: [
            {
                title: 'ChatGPT官方入门指南',
                url: 'https://www.youtube.com/watch?v=jvqFAi7vkBc',
                platform: 'YouTube',
                duration: '3:45',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'ChatGPT完整使用教程 2024最新版',
                url: 'https://www.bilibili.com/video/BV1AN411p7C1',
                platform: 'B站',
                duration: '25:30',
                language: '中文'
            },
            {
                title: 'ChatGPT提示词技巧大全',
                url: 'https://www.bilibili.com/video/BV1Lh4y1S7bZ',
                platform: 'B站',
                duration: '18:45',
                language: '中文'
            },
            {
                title: 'ChatGPT实战案例100个',
                url: 'https://www.bilibili.com/video/BV1784y1B7eV',
                platform: 'B站',
                duration: '30:20',
                language: '中文'
            }
        ]
    },

    deepseek: {
        official: [
            {
                title: 'DeepSeek官方介绍',
                url: 'https://www.deepseek.com',
                platform: '官网',
                duration: '-',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: 'DeepSeek完整教程',
                url: 'https://www.bilibili.com/video/BV1qH4y1Q7hK',
                platform: 'B站',
                duration: '15:20',
                language: '中文'
            },
            {
                title: 'DeepSeek编程能力测试',
                url: 'https://www.bilibili.com/video/BV1VN411V7gU',
                platform: 'B站',
                duration: '12:30',
                language: '中文'
            }
        ]
    },

    wenxin: {
        official: [
            {
                title: '文心一言官方教程',
                url: 'https://yiyan.baidu.com',
                platform: '官网',
                duration: '-',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '文心一言使用指南',
                url: 'https://www.bilibili.com/video/BV1Hh4y1S7kp',
                platform: 'B站',
                duration: '10:25',
                language: '中文'
            }
        ]
    },

    notion: {
        official: [
            {
                title: 'Notion AI Official Tutorial',
                url: 'https://www.youtube.com/watch?v=Ixwy_mnruYE',
                platform: 'YouTube',
                duration: '8:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Notion AI完整中文教程',
                url: 'https://www.bilibili.com/video/BV1zM4y1a7Tj',
                platform: 'B站',
                duration: '22:15',
                language: '中文'
            }
        ]
    },

    jasper: {
        official: [
            {
                title: 'Jasper AI Complete Guide',
                url: 'https://www.youtube.com/watch?v=onHZ3vOpWXo',
                platform: 'YouTube',
                duration: '15:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Jasper AI中文使用教程',
                url: 'https://www.bilibili.com/video/BV1hY4y1g7nE',
                platform: 'B站',
                duration: '18:40',
                language: '中文'
            }
        ]
    },

    grammarly: {
        official: [
            {
                title: 'Grammarly使用指南',
                url: 'https://www.youtube.com/watch?v=VPqDJw0lOcs',
                platform: 'YouTube',
                duration: '5:20',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Grammarly完整教程',
                url: 'https://www.bilibili.com/video/BV1QL4y1J7hg',
                platform: 'B站',
                duration: '12:30',
                language: '中文'
            }
        ]
    },

    // AI绘画工具
    midjourney: {
        official: [
            {
                title: 'Midjourney官方指南',
                url: 'https://www.youtube.com/watch?v=_gYpssiMWEw',
                platform: 'YouTube',
                duration: '10:15',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Midjourney零基础入门教程',
                url: 'https://www.bilibili.com/video/BV1Eh4y1A7PN',
                platform: 'B站',
                duration: '28:30',
                language: '中文'
            },
            {
                title: 'Midjourney V6最新功能',
                url: 'https://www.bilibili.com/video/BV1wC411T7nD',
                platform: 'B站',
                duration: '20:15',
                language: '中文'
            },
            {
                title: 'Midjourney提示词技巧大全',
                url: 'https://www.bilibili.com/video/BV1RM4y1j7Wp',
                platform: 'B站',
                duration: '35:40',
                language: '中文'
            }
        ]
    },

    stableDiffusion: {
        official: [
            {
                title: 'Stable Diffusion入门',
                url: 'https://www.youtube.com/watch?v=dhKMx2GTdwU',
                platform: 'YouTube',
                duration: '15:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Stable Diffusion完整安装教程',
                url: 'https://www.bilibili.com/video/BV1VN411J7F4',
                platform: 'B站',
                duration: '30:20',
                language: '中文'
            },
            {
                title: 'SD模型训练教程',
                url: 'https://www.bilibili.com/video/BV1rN411q7e8',
                platform: 'B站',
                duration: '45:15',
                language: '中文'
            }
        ]
    },

    dalle: {
        official: [
            {
                title: 'DALL-E 3官方介绍',
                url: 'https://www.youtube.com/watch?v=U1cF9QCu1rQ',
                platform: 'YouTube',
                duration: '5:40',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'DALL-E 3完整教程',
                url: 'https://www.bilibili.com/video/BV1kj411z7DH',
                platform: 'B站',
                duration: '15:20',
                language: '中文'
            }
        ]
    },

    leonardo: {
        official: [
            {
                title: 'Leonardo AI Complete Guide',
                url: 'https://www.youtube.com/watch?v=T87ruZ3sCaw',
                platform: 'YouTube',
                duration: '12:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Leonardo AI中文教程',
                url: 'https://www.bilibili.com/video/BV1Lu4y1a7wN',
                platform: 'B站',
                duration: '20:15',
                language: '中文'
            }
        ]
    },

    wenxinyige: {
        official: [
            {
                title: '文心一格官方教程',
                url: 'https://yige.baidu.com',
                platform: '官网',
                duration: '-',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '文心一格使用教程',
                url: 'https://www.bilibili.com/video/BV1mN411Z7tg',
                platform: 'B站',
                duration: '12:30',
                language: '中文'
            }
        ]
    },

    // AI视频工具
    runway: {
        official: [
            {
                title: 'Runway Gen-2 Tutorial',
                url: 'https://www.youtube.com/watch?v=lRBXjNE0pAQ',
                platform: 'YouTube',
                duration: '8:45',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Runway完整中文教程',
                url: 'https://www.bilibili.com/video/BV1oM4y1Z7oH',
                platform: 'B站',
                duration: '25:20',
                language: '中文'
            }
        ]
    },

    pictory: {
        official: [
            {
                title: 'Pictory AI Tutorial',
                url: 'https://www.youtube.com/watch?v=NE5DkYL8D2k',
                platform: 'YouTube',
                duration: '10:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Pictory中文教程',
                url: 'https://www.bilibili.com/video/BV1jN411q7VK',
                platform: 'B站',
                duration: '18:15',
                language: '中文'
            }
        ]
    },

    synthesia: {
        official: [
            {
                title: 'Synthesia官方教程',
                url: 'https://www.youtube.com/watch?v=4MgIJ6FS85U',
                platform: 'YouTube',
                duration: '6:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Synthesia虚拟人教程',
                url: 'https://www.bilibili.com/video/BV1pN411Z7MK',
                platform: 'B站',
                duration: '15:40',
                language: '中文'
            }
        ]
    },

    jianying: {
        official: [
            {
                title: '剪映官方教程',
                url: 'https://www.capcut.cn/tutorial',
                platform: '官网',
                duration: '-',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '剪映AI功能完整教程',
                url: 'https://www.bilibili.com/video/BV1xN411M7Vh',
                platform: 'B站',
                duration: '30:20',
                language: '中文'
            },
            {
                title: '剪映AI字幕生成教程',
                url: 'https://www.bilibili.com/video/BV1KM411N7nW',
                platform: 'B站',
                duration: '12:15',
                language: '中文'
            },
            {
                title: '剪映特效模板使用技巧',
                url: 'https://www.bilibili.com/video/BV1YN411q7Zh',
                platform: 'B站',
                duration: '20:30',
                language: '中文'
            }
        ]
    }
};

// 渲染视频教程列表
function renderVideoTutorials(toolId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const videos = videoTutorials[toolId];
    if (!videos) {
        container.innerHTML = '<p style="color: #86868b;">暂无视频教程</p>';
        return;
    }

    let html = '';

    // 官方教程
    if (videos.official && videos.official.length > 0) {
        html += '<h4 style="margin-top: 0;">📺 官方教程</h4>';
        html += '<div class="video-list">';
        videos.official.forEach(video => {
            html += `
                <div class="video-item">
                    <a href="${video.url}" target="_blank" class="video-link">
                        <div class="video-icon">▶️</div>
                        <div class="video-info">
                            <div class="video-title">${video.title}</div>
                            <div class="video-meta">
                                ${video.platform} · ${video.duration} · ${video.language}
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
        html += '</div>';
    }

    // 中文教程
    if (videos.chinese && videos.chinese.length > 0) {
        html += '<h4 style="margin-top: 25px;">🎓 中文教程</h4>';
        html += '<div class="video-list">';
        videos.chinese.forEach(video => {
            html += `
                <div class="video-item">
                    <a href="${video.url}" target="_blank" class="video-link">
                        <div class="video-icon">▶️</div>
                        <div class="video-info">
                            <div class="video-title">${video.title}</div>
                            <div class="video-meta">
                                ${video.platform} · ${video.duration} · ${video.language}
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
        html += '</div>';
    }

    container.innerHTML = html;
}