// Newsletter邮件订阅功能

// 订阅处理函数
function subscribeNewsletter(event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletterEmail');
    const submitButton = document.getElementById('newsletterButton');
    const successMessage = document.getElementById('newsletterSuccess');
    const email = emailInput.value.trim();

    // 验证邮箱
    if (!isValidEmail(email)) {
        alert('请输入有效的邮箱地址');
        return;
    }

    // 显示加载状态
    submitButton.classList.add('loading');
    submitButton.innerHTML = '订阅中...';
    submitButton.disabled = true;

    // 这里使用本地存储模拟订阅（实际项目中应该连接邮件服务）
    // 可以使用：Mailchimp、SendGrid、EmailJS等服务
    setTimeout(() => {
        // 保存订阅邮箱到localStorage
        saveSubscription(email);

        // 显示成功消息
        successMessage.classList.add('show');
        emailInput.value = '';

        // 恢复按钮状态
        submitButton.classList.remove('loading');
        submitButton.innerHTML = '✓ 订阅成功';

        // 2秒后恢复按钮文字
        setTimeout(() => {
            submitButton.innerHTML = '立即订阅';
            submitButton.disabled = false;
        }, 2000);

        // 5秒后隐藏成功消息
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

        // 发送统计
        console.log('新订阅：' + email);
        // 这里可以接入Google Analytics
        // gtag('event', 'newsletter_subscribe', { email: email });

    }, 1000);
}

// 验证邮箱格式
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 保存订阅信息
function saveSubscription(email) {
    let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');

    // 检查是否已订阅
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
    }
}

// 获取所有订阅者（管理用）
function getAllSubscribers() {
    return JSON.parse(localStorage.getItem('subscribers') || '[]');
}

// 导出订阅者列表
function exportSubscribers() {
    const subscribers = getAllSubscribers();
    console.log('订阅者列表：', subscribers);
    console.log('总数：', subscribers.length);
    return subscribers;
}

/*
 * 集成真实邮件服务的方法：
 *
 * 1. EmailJS（最简单，免费）
 * - 注册 https://www.emailjs.com
 * - 获取API密钥
 * - 替换上面的setTimeout为EmailJS发送代码
 *
 * 2. Mailchimp（专业，免费2000订阅者）
 * - 注册 https://mailchimp.com
 * - 创建邮件列表
 * - 使用Mailchimp API添加订阅者
 *
 * 3. ConvertKit（内容创作者专用）
 * - 注册 https://convertkit.com
 * - 免费1000订阅者
 *
 * 4. Buttondown（开发者友好）
 * - 注册 https://buttondown.email
 * - 免费100订阅者
 */