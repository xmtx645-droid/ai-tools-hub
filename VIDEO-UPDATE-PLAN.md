# 视频教程功能批量更新说明

## 📋 需要更新的文件清单

所有工具详情页都需要添加视频教程功能：

### 已更新：
- ✅ tool-chatgpt.html (已完成)

### 待更新：
- tool-midjourney.html (已添加CSS，还需添加JS)
- tool-deepseek.html
- tool-notion-ai.html
- tool-jasper.html
- tool-grammarly.html
- tool-stable-diffusion.html
- tool-dalle.html
- tool-leonardo.html
- tool-wenxinyige.html
- tool-runway.html
- tool-pictory.html
- tool-synthesia.html
- tool-jianying.html

---

## 🔧 每个页面需要的3处修改

### 1. 在 `<head>` 中添加CSS引用
找到：
```html
<link rel="stylesheet" href="style.css">
```
改为：
```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="video-tutorials-style.css">
```

### 2. 在合适位置添加视频教程区域
在"使用技巧"后、"立即开始使用"前添加：
```html
<!-- 视频教程区域 -->
<div class="section">
    <section class="video-tutorials-section">
        <h3>📹 视频教程</h3>
        <div id="videoTutorialsContainer"></div>
    </section>
</div>
```

### 3. 在 `</body>` 前添加JS
找到：
```html
</body>
</html>
```
改为：
```html
    <script src="video-tutorials.js"></script>
    <script>
        renderVideoTutorials('工具ID', 'videoTutorialsContainer');
    </script>
</body>
</html>
```

---

## 🆔 各工具的ID对照表

| 文件名 | 工具ID | 调用代码 |
|--------|--------|----------|
| tool-chatgpt.html | chatgpt | `renderVideoTutorials('chatgpt', 'videoTutorialsContainer');` |
| tool-midjourney.html | midjourney | `renderVideoTutorials('midjourney', 'videoTutorialsContainer');` |
| tool-deepseek.html | deepseek | `renderVideoTutorials('deepseek', 'videoTutorialsContainer');` |
| tool-notion-ai.html | notion | `renderVideoTutorials('notion', 'videoTutorialsContainer');` |
| tool-jasper.html | jasper | `renderVideoTutorials('jasper', 'videoTutorialsContainer');` |
| tool-grammarly.html | grammarly | `renderVideoTutorials('grammarly', 'videoTutorialsContainer');` |
| tool-stable-diffusion.html | stableDiffusion | `renderVideoTutorials('stableDiffusion', 'videoTutorialsContainer');` |
| tool-dalle.html | dalle | `renderVideoTutorials('dalle', 'videoTutorialsContainer');` |
| tool-leonardo.html | leonardo | `renderVideoTutorials('leonardo', 'videoTutorialsContainer');` |
| tool-wenxinyige.html | wenxinyige | `renderVideoTutorials('wenxinyige', 'videoTutorialsContainer');` |
| tool-runway.html | runway | `renderVideoTutorials('runway', 'videoTutorialsContainer');` |
| tool-pictory.html | pictory | `renderVideoTutorials('pictory', 'videoTutorialsContainer');` |
| tool-synthesia.html | synthesia | `renderVideoTutorials('synthesia', 'videoTutorialsContainer');` |
| tool-jianying.html | jianying | `renderVideoTutorials('jianying', 'videoTutorialsContainer');` |

---

## ✅ 需要上传的文件（共16个）

### 新文件（3个）：
1. video-tutorials.js
2. video-tutorials-style.css
3. VIDEO-TUTORIAL-GUIDE.md

### 更新的文件（13个）：
1. tool-chatgpt.html ✅
2. tool-midjourney.html（需完成）
3-13. 其他11个工具页面

---

## 🚀 两种选择

### 选项A：我帮你全部更新（推荐）
- 我逐个更新所有页面
- 你只需要上传到GitHub
- 耗时：5-10分钟

### 选项B：你想先测试效果
- 只更新1-2个页面
- 先上传测试
- 看效果再决定是否全部更新

---

你想选哪个？😊