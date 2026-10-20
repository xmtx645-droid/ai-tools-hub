// Newsletter邮件订阅功能（Mailchimp集成版）

// Mailchimp配置
const MAILCHIMP_CONFIG = {
    // 替换为你的Mailchimp数据中心（从API密钥看，比如us1, us2等）
    datacenter: 'us1', // 例如：如果API密钥是 xxxxx-us1，这里就填 us1

    // 替换为你的Audience ID
    audienceId: 'YOUR_AUDIENCE_ID', // 从Audience设置中获取

    // 替换为你的API密钥
    apiKey: 'YOUR_API_KEY' // 从Account > API keys 获取
};

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

    // 如果还没配置Mailchimp，使用本地存储
    if (MAILCHIMP_CONFIG.apiKey === 'YOUR_API_KEY') {
        // 本地存储模式（临时方案）
        saveSubscriptionLocal(email);
        showSuccess();
        return;
    }

    // 使用Mailchimp API订阅
    subscribeToMailchimp(email)
        .then(() => {
            showSuccess();
        })
        .catch(error => {
            console.error('订阅失败：', error);
            alert('订阅失败，请稍后重试');
            resetButton();
        });
}

// 订阅到Mailchimp
async function subscribeToMailchimp(email) {
    // 注意：直接在前端调用Mailchimp API有安全风险（暴露API密钥）
    // 生产环境应该通过后端服务器调用

    // 临时方案：使用第三方服务或本地存储
    // 推荐使用Mailchimp的嵌入式表单或Zapier连接

    // 这里先保存到localStorage
    saveSubscriptionLocal(email);

    // TODO: 实际项目中应该：
    // 1. 搭建简单的后端API（Vercel/Netlify Functions）
    // 2. 后端调用Mailchimp API添加订阅者
    // 3. 前端只发送邮箱到后端

    return Promise.resolve();
}

// 保存订阅到本地（临时方案）
function saveSubscriptionLocal(email) {
    let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');

    if (!subscribers.includes(email)) {
        subscribers.push({
            email: email,
            subscribedAt: new Date().toISOString()
        });
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        console.log('新订阅者已保存：', email);
    }
}

// 显示成功消息
function showSuccess() {
    const emailInput = document.getElementById('newsletterEmail');
    const submitButton = document.getElementById('newsletterButton');
    const successMessage = document.getElementById('newsletterSuccess');

    successMessage.classList.add('show');
    emailInput.value = '';

    submitButton.classList.remove('loading');
    submitButton.innerHTML = '✓ 订阅成功';

    setTimeout(() => {
        submitButton.innerHTML = '立即订阅';
        submitButton.disabled = false;
    }, 2000);

    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// 重置按钮
function resetButton() {
    const submitButton = document.getElementById('newsletterButton');
    submitButton.classList.remove('loading');
    submitButton.innerHTML = '立即订阅';
    submitButton.disabled = false;
}

// 验证邮箱格式
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 导出订阅者列表（用于手动导入Mailchimp）
function exportSubscribers() {
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    console.log('=== 订阅者列表 ===');
    console.log('总数：', subscribers.length);
    console.log('列表：');

    // 生成CSV格式
    let csv = 'Email Address,Subscribed Date\n';
    subscribers.forEach(sub => {
        if (typeof sub === 'string') {
            csv += `${sub},\n`;
        } else {
            csv += `${sub.email},${sub.subscribedAt}\n`;
        }
    });

    console.log(csv);

    // 下载CSV文件
    downloadCSV(csv, 'subscribers.csv');

    return subscribers;
}

// 下载CSV文件
function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('✅ CSV文件已下载，可以直接导入Mailchimp！');
}

/*
 * ==========================================
 * 📖 Mailchimp集成完整方案（推荐）
 * ==========================================
 *
 * 方案1：使用Mailchimp嵌入式表单（最简单）
 * ----------------------------------------
 * 1. 在Mailchimp创建Embedded Form
 * 2. 复制生成的表单代码
 * 3. 替换我们现在的表单
 * 4. 自动同步到Mailchimp
 *
 * 方案2：使用Zapier连接（无需代码）
 * ----------------------------------------
 * 1. 注册Zapier（免费100次/月）
 * 2. 创建Zap：Webhook → Mailchimp
 * 3. 前端发送到Webhook
 * 4. Zapier自动添加到Mailchimp
 *
 * 方案3：使用后端API（最专业）
 * ----------------------------------------
 * 1. 使用Vercel/Netlify Functions
 * 2. 后端调用Mailchimp API
 * 3. 前端只发送邮箱到后端
 * 4. API密钥更安全
 *
 * 方案4：手动导入（当前方案）
 * ----------------------------------------
 * 1. 用户订阅保存到localStorage
 * 2. 定期运行 exportSubscribers()
 * 3. 下载CSV文件
 * 4. 在Mailchimp手动导入
 *
 * ==========================================
 * 💡 我的建议：先用方案4（手动导入）
 * - 不需要额外配置
 * - 网站立即可用
 * - 等订阅者多了再升级到方案2（Zapier）
 * ==========================================
 */