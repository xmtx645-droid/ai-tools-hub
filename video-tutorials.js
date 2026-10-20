// 视频教程链接数据库

const videoTutorials = {
    // AI写作工具
    chatgpt: {
        official: [
            {
                title: 'ChatGPT官方入门指南',
                url: 'https://www.youtube.com/watch?v=g2c4JyXfYo4',
                platform: 'YouTube',
                duration: '10:23',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'ChatGPT完整使用教程',
                url: 'https://www.bilibili.com/video/BV1BY411N7dy',
                platform: 'B站',
                duration: '15:30',
                language: '中文'
            },
            {
                title: 'ChatGPT提示词技巧',
                url: 'https://www.bilibili.com/video/BV1hM4y1X7oJ',
                platform: 'B站',
                duration: '20:15',
                language: '中文'
            }
        ]
    },

    deepseek: {
        official: [
            {
                title: 'DeepSeek使用指南',
                url: 'https://www.bilibili.com/video/BV1aS421q7FZ',
                platform: 'B站',
                duration: '8:45',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: 'DeepSeek完全教程',
                url: 'https://www.bilibili.com/video/BV1rw4m1e75u',
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
                url: 'https://www.bilibili.com/video/BV1Ru411V7KG',
                platform: 'B站',
                duration: '10:00',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '文心一言使用技巧',
                url: 'https://www.bilibili.com/video/BV1fV4y1p7gV',
                platform: 'B站',
                duration: '15:20',
                language: '中文'
            }
        ]
    },

    notion: {
        official: [
            {
                title: 'Notion AI Official Guide',
                url: 'https://www.youtube.com/watch?v=3EbRMDV7Fuw',
                platform: 'YouTube',
                duration: '5:12',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Notion AI完整教程',
                url: 'https://www.bilibili.com/video/BV1Wh4y1R7qc',
                platform: 'B站',
                duration: '18:30',
                language: '中文'
            }
        ]
    },

    jasper: {
        official: [
            {
                title: 'Jasper AI Tutorial',
                url: 'https://www.youtube.com/watch?v=CbFg6FDDnWY',
                platform: 'YouTube',
                duration: '12:45',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Jasper AI中文教程',
                url: 'https://www.bilibili.com/video/BV1KV4y1N7Sw',
                platform: 'B站',
                duration: '20:10',
                language: '中文'
            }
        ]
    },

    grammarly: {
        official: [
            {
                title: 'Grammarly官方教程',
                url: 'https://www.youtube.com/watch?v=8CTx0KbY_CI',
                platform: 'YouTube',
                duration: '7:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Grammarly使用指南',
                url: 'https://www.bilibili.com/video/BV1Uh4y1z7fN',
                platform: 'B站',
                duration: '10:25',
                language: '中文'
            }
        ]
    },

    // AI绘画工具
    midjourney: {
        official: [
            {
                title: 'Midjourney官方快速入门',
                url: 'https://www.youtube.com/watch?v=cWS8e4Zugs4',
                platform: 'YouTube',
                duration: '8:15',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Midjourney零基础教程',
                url: 'https://www.bilibili.com/video/BV1fV4y1V7op',
                platform: 'B站',
                duration: '25:40',
                language: '中文'
            },
            {
                title: 'Midjourney提示词技巧',
                url: 'https://www.bilibili.com/video/BV1YM411V7YU',
                platform: 'B站',
                duration: '30:15',
                language: '中文'
            },
            {
                title: 'Midjourney V6新功能',
                url: 'https://www.bilibili.com/video/BV1FC4y197Tt',
                platform: 'B站',
                duration: '15:30',
                language: '中文'
            }
        ]
    },

    stableDiffusion: {
        official: [
            {
                title: 'Stable Diffusion入门',
                url: 'https://www.youtube.com/watch?v=1CIpzeNxIhU',
                platform: 'YouTube',
                duration: '12:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Stable Diffusion完整教程',
                url: 'https://www.bilibili.com/video/BV1Rx4y1V7hm',
                platform: 'B站',
                duration: '40:20',
                language: '中文'
            },
            {
                title: 'SD模型使用指南',
                url: 'https://www.bilibili.com/video/BV1uV4y1p7x2',
                platform: 'B站',
                duration: '22:45',
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
                title: 'DALL-E 3使用教程',
                url: 'https://www.bilibili.com/video/BV1dN4y1J7Qy',
                platform: 'B站',
                duration: '12:15',
                language: '中文'
            }
        ]
    },

    leonardo: {
        official: [
            {
                title: 'Leonardo AI Tutorial',
                url: 'https://www.youtube.com/watch?v=YspafQdQJsE',
                platform: 'YouTube',
                duration: '15:20',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Leonardo AI中文教程',
                url: 'https://www.bilibili.com/video/BV1Ju4y1c7uZ',
                platform: 'B站',
                duration: '18:30',
                language: '中文'
            }
        ]
    },

    wenxinyige: {
        official: [
            {
                title: '文心一格官方教程',
                url: 'https://www.bilibili.com/video/BV1SV4y1p7w7',
                platform: 'B站',
                duration: '10:20',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '文心一格使用技巧',
                url: 'https://www.bilibili.com/video/BV1Ax4y1d7YG',
                platform: 'B站',
                duration: '15:40',
                language: '中文'
            }
        ]
    },

    // AI视频工具
    runway: {
        official: [
            {
                title: 'Runway官方教程',
                url: 'https://www.youtube.com/watch?v=0gdROk-mOzU',
                platform: 'YouTube',
                duration: '10:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Runway Gen-2完整教程',
                url: 'https://www.bilibili.com/video/BV1hu411B7qJ',
                platform: 'B站',
                duration: '20:15',
                language: '中文'
            }
        ]
    },

    pictory: {
        official: [
            {
                title: 'Pictory AI Tutorial',
                url: 'https://www.youtube.com/watch?v=NghPjXz-Zs4',
                platform: 'YouTube',
                duration: '12:45',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Pictory中文教程',
                url: 'https://www.bilibili.com/video/BV1KV4y1V7op',
                platform: 'B站',
                duration: '15:30',
                language: '中文'
            }
        ]
    },

    synthesia: {
        official: [
            {
                title: 'Synthesia官方指南',
                url: 'https://www.youtube.com/watch?v=9NcrJJYe0Ns',
                platform: 'YouTube',
                duration: '8:20',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: 'Synthesia虚拟人教程',
                url: 'https://www.bilibili.com/video/BV1oM411X7YU',
                platform: 'B站',
                duration: '18:45',
                language: '中文'
            }
        ]
    },

    jianying: {
        official: [
            {
                title: '剪映官方教程',
                url: 'https://www.bilibili.com/video/BV1pV4y1p7mK',
                platform: 'B站',
                duration: '15:20',
                language: '中文'
            }
        ],
        chinese: [
            {
                title: '剪映AI功能全解析',
                url: 'https://www.bilibili.com/video/BV1Yu411B7oP',
                platform: 'B站',
                duration: '25:30',
                language: '中文'
            },
            {
                title: '剪映AI字幕教程',
                url: 'https://www.bilibili.com/video/BV1Wx4y1d7JN',
                platform: 'B站',
                duration: '10:15',
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