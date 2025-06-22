# Colinx-Reading

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Wiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Colin-XKL/Colinx-Reading)

The **Colinx-Reading** repository implements a personal reading dashboard that transforms a user's Pocket reading list into a beautifully presented static website with Progressive Web App (PWA) capabilities. This Gatsby-based application fetches articles from the Pocket API during build time and generates a curated, offline-accessible reading interface.

Colinx-Reading 是一个个人阅读仪表盘项目，将用户的 Pocket 阅读列表转换为一个美观的静态网站，并支持渐进式网页应用（PWA）功能。该项目基于 Gatsby 构建，在构建时从 Pocket API 获取文章数据，并生成一个可离线访问的阅读界面。

项目开发背景及介绍 [JAMStack 初体验 - 基于 Pocket 和 Gatsby 构建你的「网络日志」](https://blog.colinx.one/posts/jamstack%E5%88%9D%E4%BD%93%E9%AA%8C-%E5%9F%BA%E4%BA%8Epocket-%E5%92%8C-gatsby-%E6%9E%84%E5%BB%BA%E4%BD%A0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%97%A5%E5%BF%97/)

> **Note**:
> 
> Due to the discontinuation of Pocket, this project has been archived.  
> 由于 Pocket 即将关停服务, 本项目已经归档.

## Features

- **Pocket Integration**: Fetches articles from your Pocket account using the Pocket API.
- **Static Website**: Generates a static website using Gatsby, ensuring fast load times and offline accessibility.
- **Progressive Web App (PWA)**: Provides PWA capabilities, including a service worker for offline access and a manifest file for installation.
- **Responsive Design**: Displays articles in a responsive, card-based layout with optional images.
- **Image Handling**: Includes a fallback mechanism to handle broken images gracefully.
- **Customizable**: Easily configure the number of articles fetched, filtering options, and more.

## System Architecture

The application follows a **JAMstack** architecture pattern, where content is fetched at build time and served as static files:

- **Build Time Process**: Articles are fetched from the Pocket API using the `gatsby-source-pocket` plugin during the build process.
- **Data Layer**: Data is queried using GraphQL and processed by Gatsby.
- **Static Output**: The build process generates static HTML, CSS, and JavaScript files, along with a PWA manifest and service worker for offline access.



## Core Functionality

The application implements a reading list interface that displays articles fetched from a user's Pocket account. The main functionality centers around the `index.js` page component, which:

1. **Queries Article Data**: Uses GraphQL to fetch articles from the Pocket API, filtering for articles (`is_article: true`) and sorting by ID in descending order.
2. **Renders Article Cards**: Displays article cards with title, excerpt, word count, domain information, and optional images.
3. **Handles Image Errors**: Provides a fallback mechanism to hide broken images.
4. **Direct Links**: Includes direct links to the original articles for reading.

## Key Technologies and Dependencies

- **Core Framework**: [Gatsby v3](https://www.gatsbyjs.com/)
- **Data Source**: [Pocket API](https://getpocket.com/developer/)
- **PWA Features**: Gatsby plugins for PWA support
- **Image Processing**: Gatsby image plugins
- **Dependency Management**: [Yarn](https://yarnpkg.com/) with lockfile-based reproducible builds

## Development Background

### Why JAMStack?

JAMStack stands for **JavaScript, APIs, and Markup**. It is a modern web development architecture that emphasizes:

- **Performance**: Static pages with low Time To First Byte (TTFB).
- **Security**: Reduced server-side risks due to static content.
- **SEO**: Better search engine optimization compared to client-side rendering.
- **Dynamic Content**: Easy updates and modifications.

### Why Gatsby?

Gatsby is a powerful static site generator that offers:

- **Flexibility**: High customization with JavaScript (or TypeScript).
- **React Ecosystem**: Rich React-based plugins and components.
- **GraphQL Integration**: Efficient data querying and management.

### Workflow

1. **Collect Articles**: Save interesting articles to Pocket.
2. **Fetch Data**: Use a scheduled task to fetch articles from the Pocket API.
3. **Generate Site**: Use Gatsby to generate the static site.
4. **Deploy**: Automatically deploy the static files to a CDN.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Gatsby](https://www.gatsbyjs.com/) for the static site generator.
- [Pocket](https://getpocket.com/) for the API and reading list service.
- [Yarn](https://yarnpkg.com/) for dependency management.


---

# Colinx-Reading


**Colinx-Reading** 是一个个人阅读仪表盘项目，它将用户的 Pocket 阅读列表转换为一个美观的静态网站，并支持渐进式网页应用（PWA）功能。该项目基于 Gatsby 构建，在构建时从 Pocket API 获取文章数据，并生成一个可离线访问的阅读界面。

## 功能特点

- **Pocket 集成**：通过 Pocket API 从你的 Pocket 账户获取文章。
- **静态网站**：使用 Gatsby 生成静态网站，确保快速加载和离线访问。
- **渐进式网页应用（PWA）**：支持 PWA 功能，包括服务工作者（Service Worker）和安装清单（Manifest）。
- **响应式设计**：以卡片形式展示文章，支持响应式布局和可选图片。
- **图片处理**：提供图片加载错误的回退机制。
- **高度可定制**：可配置获取文章的数量、过滤选项等。

## 系统架构

该项目采用 **JAMstack** 架构，内容在构建时获取并以静态文件形式提供：

- **构建过程**：通过 `gatsby-source-pocket` 插件从 Pocket API 获取文章数据。
- **数据层**：使用 GraphQL 查询数据，并由 Gatsby 处理。
- **静态输出**：构建过程生成静态 HTML、CSS 和 JavaScript 文件，同时生成 PWA 清单和服务工作者以实现离线访问。


## 核心功能

该应用实现了一个阅读列表界面，展示从 Pocket 账户获取的文章。核心功能集中在 `index.js` 页面组件中，具体包括：

1. **查询文章数据**：使用 GraphQL 从 Pocket API 获取文章，过滤文章（`is_article: true`）并按 ID 降序排序。
2. **渲染文章卡片**：展示文章卡片，包括标题、摘要、字数、域名信息和可选图片。
3. **处理图片错误**：提供图片加载错误的回退机制。
4. **直接链接**：提供文章原文的直接链接。


## 关键技术及依赖

- **核心框架**：[Gatsby v3](https://www.gatsbyjs.com/)
- **数据源**：[Pocket API](https://getpocket.com/developer/)
- **PWA 功能**：Gatsby PWA 插件
- **图片处理**：Gatsby 图片插件
- **依赖管理**：[Yarn](https://yarnpkg.com/) 基于锁文件的依赖管理

## 开发背景

### 为什么选择 JAMstack？

JAMstack 代表 **JavaScript、API 和 Markup**，是一种现代 Web 开发架构，具有以下优势：

- **性能**：静态页面，首次字节时间（TTFB）极低。
- **安全性**：静态内容减少了服务器端的安全风险。
- **SEO**：相比客户端渲染，对搜索引擎更友好。
- **动态内容**：方便更新和修改。

### 为什么选择 Gatsby？

Gatsby 是一个强大的静态网站生成器，具有以下特点：

- **灵活性**：使用 JavaScript（或 TypeScript）实现高度定制。
- **React 生态**：丰富的 React 插件和组件。
- **GraphQL 集成**：高效的数据查询和管理。

### 工作流程

1. **收集文章**：将感兴趣的文章保存到 Pocket。
2. **获取数据**：通过定时任务从 Pocket API 获取文章数据。
3. **生成网站**：使用 Gatsby 生成静态网站。
4. **部署**：将静态文件自动部署到 CDN。



## 许可证

本项目采用 MIT 许可证，详情请参阅 [LICENSE](LICENSE) 文件。

## 致谢

- [Gatsby](https://www.gatsbyjs.com/) 提供静态网站生成器。
- [Pocket](https://getpocket.com/) 提供 API 和阅读列表服务。
- [Yarn](https://yarnpkg.com/) 提供依赖管理工具。

