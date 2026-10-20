// 社交分享功能

// 获取当前页面信息
function getPageInfo() {
    return {
        url: window.location.href,
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || 'AI工具导航 - 发现最新AI工具'
    };
}

// 分享到微博
function shareToWeibo() {
    const info = getPageInfo();
    const shareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(info.url)}&title=${encodeURIComponent(info.title)}&pic=&appkey=`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到QQ
function shareToQQ() {
    const info = getPageInfo();
    const shareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(info.url)}&title=${encodeURIComponent(info.title)}&desc=${encodeURIComponent(info.description)}&summary=${encodeURIComponent(info.description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到Twitter
function shareToTwitter() {
    const info = getPageInfo();
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(info.title)}&url=${encodeURIComponent(info.url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到Facebook
function shareToFacebook() {
    const info = getPageInfo();
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(info.url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 微信分享（显示二维码）
function shareToWechat() {
    const modal = document.getElementById('wechatQrModal');
    const qrcodeDiv = document.getElementById('qrcode');

    // 清空之前的二维码
    qrcodeDiv.innerHTML = '';

    // 生成二维码（使用第三方API）
    const info = getPageInfo();
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(info.url)}`;

    const img = document.createElement('img');
    img.src = qrUrl;
    img.alt = '微信扫码分享';
    img.style.maxWidth = '200px';
    qrcodeDiv.appendChild(img);

    // 显示弹窗
    modal.classList.add('show');
}

// 关闭微信二维码弹窗
function closeWechatQr() {
    const modal = document.getElementById('wechatQrModal');
    modal.classList.remove('show');
}

// 点击弹窗外部关闭
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('wechatQrModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeWechatQr();
            }
        });
    }
});

// 复制链接
function copyLink() {
    const info = getPageInfo();

    // 创建临时输入框
    const tempInput = document.createElement('input');
    tempInput.value = info.url;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');

        // 修改按钮文字
        const btn = event.target.closest('.share-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="icon">✓</span> 已复制';
        btn.classList.add('copied');

        // 2秒后恢复
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);

    } catch (err) {
        alert('复制失败，请手动复制：' + info.url);
    }

    document.body.removeChild(tempInput);
}

// 分享统计（可选）
function trackShare(platform) {
    console.log('用户分享到：' + platform);
    // 这里可以接入Google Analytics或其他统计工具
    // 例如：gtag('event', 'share', { method: platform });
}