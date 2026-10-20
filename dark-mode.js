// 深色模式切换功能

// 初始化主题
function initTheme() {
    // 从localStorage读取用户偏好
    const savedTheme = localStorage.getItem('theme');

    // 如果有保存的主题，使用保存的；否则检测系统偏好
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // 检测系统是否使用深色模式
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

// 设置主题
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // 更新按钮图标
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
    }
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // 添加切换动画
    document.body.style.transition = 'background-color 0.3s ease';
}

// 监听系统主题变化
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // 只有在用户没有手动设置过主题时才跟随系统
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// 页面加载时初始化主题
document.addEventListener('DOMContentLoaded', initTheme);