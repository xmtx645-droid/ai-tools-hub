// 优惠码数据和功能

// 优惠码数据库
const coupons = [
    {
        id: 1,
        logo: '💬',
        name: 'ChatGPT Plus',
        description: '升级Plus会员，体验GPT-4',
        discount: '首月8折',
        code: 'AITOOLS20',
        link: 'https://chat.openai.com',
        expiry: '2024-12-31',
        badge: '热门'
    },
    {
        id: 2,
        logo: '🎨',
        name: 'Midjourney',
        description: '年度订阅享受特别优惠',
        discount: '年付9折',
        code: 'MJ2024',
        link: 'https://www.midjourney.com',
        expiry: '2024-06-30',
        badge: '限时'
    },
    {
        id: 3,
        logo: '📝',
        name: 'Jasper AI',
        description: '专业AI写作工具，营销文案首选',
        discount: '7天免费试用',
        code: 'JASPER7FREE',
        link: 'https://www.jasper.ai',
        expiry: '长期有效',
        badge: '推荐'
    },
    {
        id: 4,
        logo: '🖼️',
        name: 'Leonardo AI',
        description: '游戏美术AI生成工具',
        discount: '新用户送150积分',
        code: 'WELCOME150',
        link: 'https://leonardo.ai',
        expiry: '2024-12-31',
        badge: '新用户'
    },
    {
        id: 5,
        logo: '🎬',
        name: 'Runway',
        description: 'AI视频编辑神器',
        discount: '首月5折',
        code: 'RUNWAY50',
        link: 'https://runwayml.com',
        expiry: '2024-08-31',
        badge: '限时'
    },
    {
        id: 6,
        logo: '📊',
        name: 'Notion AI',
        description: '笔记+AI助手组合',
        discount: '免费试用1个月',
        code: 'NOTIONFREE',
        link: 'https://www.notion.so',
        expiry: '长期有效',
        badge: '热门'
    }
];

// 复制优惠码
function copyCouponCode(code, buttonId) {
    // 创建临时输入框
    const tempInput = document.createElement('input');
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');

        // 修改按钮状态
        const btn = document.getElementById(buttonId);
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ 已复制';
        btn.classList.add('copied');

        // 2秒后恢复
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);

        // 统计
        trackCouponCopy(code);

    } catch (err) {
        alert('复制失败，请手动复制：' + code);
    }

    document.body.removeChild(tempInput);
}

// 跳转到工具官网
function goToCoupon(link, couponName) {
    // 统计点击
    trackCouponClick(couponName);

    // 打开新窗口
    window.open(link, '_blank');
}

// 统计优惠码复制
function trackCouponCopy(code) {
    console.log('优惠码已复制：' + code);
    // 这里可以接入Google Analytics
    // gtag('event', 'coupon_copy', { coupon_code: code });
}

// 统计优惠码点击
function trackCouponClick(name) {
    console.log('优惠码点击：' + name);
    // 这里可以接入Google Analytics
    // gtag('event', 'coupon_click', { coupon_name: name });
}

// 检查优惠码是否即将过期
function isExpiringSoon(expiryDate) {
    if (expiryDate === '长期有效') return false;

    const expiry = new Date(expiryDate);
    const today = new Date();
    const daysLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

    return daysLeft <= 7 && daysLeft > 0;
}

// 渲染优惠码列表
function renderCoupons() {
    const container = document.getElementById('couponGrid');
    if (!container) return;

    container.innerHTML = coupons.map(coupon => {
        const urgent = isExpiringSoon(coupon.expiry);

        return `
            <div class="coupon-card">
                <div class="coupon-badge">${coupon.badge}</div>
                <div class="coupon-card-header">
                    <div class="coupon-logo">${coupon.logo}</div>
                    <div class="coupon-info">
                        <h3>${coupon.name}</h3>
                        <p>${coupon.description}</p>
                    </div>
                </div>
                <div class="coupon-discount">${coupon.discount}</div>
                <div class="coupon-code-box">
                    <div class="coupon-code-label">优惠码</div>
                    <div class="coupon-code">${coupon.code}</div>
                </div>
                <div class="coupon-actions">
                    <button id="copyBtn${coupon.id}" class="coupon-copy-btn" onclick="copyCouponCode('${coupon.code}', 'copyBtn${coupon.id}')">
                        📋 复制优惠码
                    </button>
                    <a href="${coupon.link}" target="_blank" class="coupon-go-btn" onclick="trackCouponClick('${coupon.name}')">
                        🚀 立即使用
                    </a>
                </div>
                <div class="coupon-expiry ${urgent ? 'urgent' : ''}">
                    ${urgent ? '⚠️ 即将过期！' : ''} 有效期至：${coupon.expiry}
                </div>
            </div>
        `;
    }).join('');
}

// 页面加载时渲染优惠码
document.addEventListener('DOMContentLoaded', function() {
    renderCoupons();
});