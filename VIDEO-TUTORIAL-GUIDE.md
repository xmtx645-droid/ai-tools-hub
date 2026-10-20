# 📹 视频教程功能使用指南

## 🎯 功能说明

已经为网站添加了视频教程功能，包含：
- 官方教程视频
- 中文教程视频
- B站和YouTube链接
- 13个主流AI工具的教程

---

## 📂 相关文件

1. **video-tutorials.js** - 视频数据和渲染函数
2. **video-tutorials-style.css** - 视频列表样式

---

## 🚀 如何在工具详情页添加视频教程

### 方法1：在现有工具页面添加

#### 步骤1：引入CSS和JS文件

在工具详情页的 `<head>` 部分添加：

```html
<link rel="stylesheet" href="video-tutorials-style.css">
```

在 `</body>` 前添加：

```html
<script src="video-tutorials.js"></script>
```

#### 步骤2：添加视频教程区域

在工具详情页的合适位置（建议在"使用场景"后）添加：

```html
<!-- 视频教程区域 -->
<section class="video-tutorials-section">
    <h3>📹 视频教程</h3>
    <div id="videoTutorialsContainer"></div>
</section>

<script>
    // 渲染视频教程
    // 参数1: 工具ID（chatgpt, midjourney等）
    // 参数2: 容器ID
    renderVideoTutorials('chatgpt', 'videoTutorialsContainer');
</script>
```

### 方法2：创建新工具页面时包含视频

完整的HTML结构示例：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatGPT - AI工具导航</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="video-tutorials-style.css">
</head>
<body>
    <!-- 工具介绍内容 -->
    
    <!-- 视频教程区域 -->
    <section class="video-tutorials-section">
        <h3>📹 视频教程</h3>
        <div id="videoTutorialsContainer"></div>
    </section>

    <script src="video-tutorials.js"></script>
    <script>
        renderVideoTutorials('chatgpt', 'videoTutorialsContainer');
    </script>
</body>
</html>
```

---

## 🛠️ 已包含的工具ID和视频

| 工具名称 | 工具ID | 官方教程 | 中文教程 |
|---------|--------|---------|---------|
| ChatGPT | `chatgpt` | ✅ | ✅ |
| DeepSeek | `deepseek` | ✅ | ✅ |
| 文心一言 | `wenxin` | ✅ | ✅ |
| Notion AI | `notion` | ✅ | ✅ |
| Jasper | `jasper` | ✅ | ✅ |
| Grammarly | `grammarly` | ✅ | ✅ |
| Midjourney | `midjourney` | ✅ | ✅ (3个视频) |
| Stable Diffusion | `stableDiffusion` | ✅ | ✅ |
| DALL-E | `dalle` | ✅ | ✅ |
| Leonardo AI | `leonardo` | ✅ | ✅ |
| 文心一格 | `wenxinyige` | ✅ | ✅ |
| Runway | `runway` | ✅ | ✅ |
| Pictory | `pictory` | ✅ | ✅ |
| Synthesia | `synthesia` | ✅ | ✅ |
| 剪映 | `jianying` | ✅ | ✅ (3个视频) |

---

## ➕ 如何添加新的视频教程

### 步骤1：打开 video-tutorials.js

### 步骤2：在 videoTutorials 对象中添加新工具

```javascript
const videoTutorials = {
    // 已有的工具...
    
    // 添加新工具
    newtool: {
        official: [
            {
                title: '官方教程标题',
                url: 'https://www.youtube.com/watch?v=xxxxx',
                platform: 'YouTube',
                duration: '10:30',
                language: '英文'
            }
        ],
        chinese: [
            {
                title: '中文教程标题',
                url: 'https://www.bilibili.com/video/BVxxxxxxx',
                platform: 'B站',
                duration: '15:20',
                language: '中文'
            }
        ]
    }
};
```

### 步骤3：在工具详情页调用

```javascript
renderVideoTutorials('newtool', 'videoTutorialsContainer');
```

---

## 🎨 效果展示

视频教程列表会显示为：

```
📺 官方教程
┌─────────────────────────────────┐
│ ▶️  ChatGPT官方入门指南          │
│     YouTube · 10:23 · 英文       │
└─────────────────────────────────┘

🎓 中文教程
┌─────────────────────────────────┐
│ ▶️  ChatGPT完整使用教程          │
│     B站 · 15:30 · 中文           │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ ▶️  ChatGPT提示词技巧            │
│     B站 · 20:15 · 中文           │
└─────────────────────────────────┘
```

---

## 📝 完整更新流程

### 为所有工具页面添加视频教程：

1. **更新 tool-chatgpt.html**
   - 引入CSS和JS
   - 添加视频区域
   - 调用 `renderVideoTutorials('chatgpt', 'videoTutorialsContainer')`

2. **更新 tool-midjourney.html**
   - 同样步骤
   - 调用 `renderVideoTutorials('midjourney', 'videoTutorialsContainer')`

3. **更新其他13个工具页面**
   - 按照相同模式
   - 使用对应的工具ID

4. **上传到GitHub**
   - video-tutorials.js
   - video-tutorials-style.css
   - 所有更新的工具页面

---

## 💡 优化建议

### 1. 视频缩略图（可选）
如果想添加视频预览图：
```javascript
{
    title: '教程标题',
    url: 'https://...',
    platform: 'B站',
    duration: '10:30',
    language: '中文',
    thumbnail: 'https://图片地址.jpg'  // 新增
}
```

### 2. 视频播放次数（可选）
```javascript
{
    title: '教程标题',
    url: 'https://...',
    views: '100万次观看'  // 新增
}
```

### 3. 难度标签（可选）
```javascript
{
    title: '教程标题',
    url: 'https://...',
    level: '入门/进阶/高级'  // 新增
}
```

---

## ❓ 常见问题

**Q: 视频链接失效怎么办？**
A: 打开 video-tutorials.js，找到对应视频，更新URL即可

**Q: 可以添加抖音视频吗？**
A: 可以，把 platform 改为 '抖音'，URL填抖音分享链接

**Q: 视频太多，页面太长怎么办？**
A: 可以只显示2-3个精选视频，或添加"查看更多"按钮

**Q: 如何统计视频点击量？**
A: 在 video-tutorials.js 的链接点击事件中添加统计代码

---

## 🎯 下一步

你想：
- **A.** 我帮你批量更新所有工具页面（添加视频教程）
- **B.** 你自己手动更新几个试试
- **C.** 先上传这两个新文件测试效果
- **D.** 添加更多视频资源

告诉我！😊