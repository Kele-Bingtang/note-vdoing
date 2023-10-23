---
title: Github - 好看的主页
date: 2022-01-09 17:35:33
permalink: /github/index/
titleTag: 原创
sidebar: auto
categories: 
  - 随笔
tags: 
  - 
---

::: note

介绍我的 GitHub 个人首页的简单卡片设计。

::: right

2022-01-09 @Young Kbt

:::

[[TOC]]



## 图片

## 效果

这是我目前 GitHub 的个人首页，多了一些内容，如卡片统计，仓库的语言统计等。

![image-20220109174056830](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/github/20220109174059.png)

你也可以直接去我的主页查看效果：<https://github.com/Kele-Bingtang>

## 如何使用

首先你需要创建一个仓库，而仓库名 <mark>必须</mark> 是你的用户名，如我的 GitHub 叫做 `Kele-Bingtang`，则我的仓库名就叫 `Kele-Bingtang`。

创建仓库的时候，记得公开仓库和创建 README 文件，如图：

![image-20220109174430315](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/github/20220109174431.png)

创建好仓库后，不需要克隆仓库到本地，我们直接在仓库里修改 README 文件即可。

这里说明一下：两个卡片内容是第三方提供的，并且第三方提供了很多主题颜色，官方地址：<https://github.com/anuraghazra/github-readme-stats>。

我的 README 文件内容：

```md
<a href="https://github.com/Kele-Bingtang/">
  <img align="right" src="https://github-readme-stats.vercel.app/api?username=Kele-Bingtang&theme=algolia&count_private=true&show_icons=true" />
</a>

<a href="https://github.com/Kele-Bingtang/">
  <img align="right" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kele-Bingtang&layout=compact" />
</a>

## Hello World 👋

- 🔭 I’m currently working on Beijing
- 💬 You can ask me about java
- 📫 How to reach me: <https://youngkbt.cn?contact=1>
- 😄 Pronouns: youngkbt
- ⚡ Fun fact: 🏀 & 🏃‍ & 💻
- :meat_on_bone: Meat lover

## My Website

💻：<https://youngkbt.cn>
  
## My Blog Websites

- 1️⃣ Main(fast)：<https://notes.youngkbt.cn/>
- 2️⃣ GitHub Pages(fast)：<https://github.notes.youngkbt.cn/>
- 3️⃣ Gitee Pages(fast)：<http://gitee.notes.youngkbt.cn/>
- 4️⃣ My Server(slow)：<https://server.notes.youngkbt.cn/>
```

其中 `a` 标签和 `img` 标签的 `src` 就是第三方提供的路径，如果你想直接使用我的效果卡片，那么只需要把第 2 行的 `https://github-readme-stats.vercel.app/api?username=Kele-Bingtang&theme=algolia&count_private=true&show_icons=true` 的 `username` 改成你自己的 GitHub 用户名，包括第 6 行的 `username`。其他不变。

当然，`a` 标签的 `src` 也改成你想要跳转的地址。



填好 README 文件后，点击保存，然后去首页刷新，就会看到效果。