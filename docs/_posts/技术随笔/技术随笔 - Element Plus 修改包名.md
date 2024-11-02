---
title: 技术随笔 - Element Plus 修改包名
date: 2024-11-02 15:58:23
permalink: /ep/magic-change/
titleTag: 原创
sidebar: auto
categories: 
  - 技术随笔
tags: 
  - 技术随笔
---

[[TOC]]

## 介绍

本内容介绍如何基于 Element Plus 源码进行封装为自己的 UI 名。当发布 NPM 后，通过 `npm install xx` 下封装后的 UI 名。

> 如果需要对 EP（Element Plus）进行封装，基于 EP 二次拓展自己的组件，可以参考本文档。

建议使用 VS Code，只需要按照大纲顺序执行全局替换或者增改删一些内容即可得到一个和 EP 一样的功能，但是 UI 项目名是个人的 UI 库。

假设我的项目名字是 `kbt-ui`、组件前缀为 `k`。

## 删除部分配置

把一些不需要的配置去掉

必须删除：

- **pnpm-lock.yaml**

可选：

- .github 文件夹
- .circleci 文件夹
- breakings 文件夹
- CHANGELOG.en-US.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md

README.md 清空内容。

## 全局替换（匹配大小写）

- element-plus -> kbt-ui
- elementPlus -> kbtUI
- ElementPlus -> KbtUI
- Element Plus -> Kbt UI
- El -> K（大写）

## 全局替换（匹配大小写 & 全词匹配）

- `el-` -> `k-`
- `</el-` -> `</k-`
- `'el'` -> `'k'`（注意 `packages/hooks/locale/lang/el.ts` 的 `'el'` 不需要替换，位于第二行左右）

## 文件夹命名

- `packages/element-plus` -> kbt-ui
- `internal/build/src/plugins/element-plus-alias` -> kbt-ui-alias

## 图片命名

`docs/public/images` 带有 element-plus 的图片换成 kbt-ui（3 个图片）

## 最后执行

### 全局替换（匹配大小写）

- @kbt-ui/icons-vue -> @element-plus/icons-vue
- unplugin-kbt-ui -> unplugin-element-plus
- Kement -> Element
- KemeFE -> ElemeFE

### 局部修改

- `docs/examples/button/loading.vue` 里的 Keme 改为 Eleme
- `docs/examples/text/mixed.vue` 里的 ElementPlus 改为 KbtUi

## 安装

- 将项目里所有 package.json 的 `"vue": "^3.2.37"` 改为 `"vue": "3.2.47"`（建议全局替换），这里是为了解决构建问题，具体看下面
- 执行 `pnpm install` 安装依赖

## 可选

- 所有 package.json 的 version 由 0.0.5 改为 0.0.1
- 格式化项目代码：`pnpm format`

## 解决构建问题

拉下项目后，执行 `pnpm install` 后，执行 `pnpm build` 进行构建时会报错：

```typescript
ReferenceError: __name is not defined
```

因为 Vue 最新版不兼容问题，因此将 Vue 版本回退到 3.3.0 以下的版本即可。

将项目里所有 package.json 的 `"vue": "^3.2.37"` 改为 `"vue": "3.2.47"`（建议全局替换）。

> 说明：项目默认的 Vue 依赖为 `"vue": "^3.2.37"`，看起来好像是 3.3.0 以下版本，但是注意版本号前面有一个 `^`，说明直接使用 3.x.x 版本，这里的 3.x.x 就是 3 以内的最新版，如 3.4.21。而 3.2.37 只是说明第一次项目安装 Vue 的时候，是 3.2.37 版本，因此去掉 `^` 就是精确匹配版本号。
>
> 番外：除了 `^` 还有 `~`，如果是 `~3.2.37`，则代表使用 3.2.x，x 就是最新版。

## 本地文档编译启动

如果你想本地启动文档看效果，那么执行 `pnpm docs:dev` 即可。

但是 docs 下 `package.json` 里 kbt-ui 版本引用的是 npm 仓库的版本，不是本地的版本，那么需要修改版本号为 `workspace:*`。

```json
"kbt-ui": "workspace:*",
```

如果发布到了 npm 仓库，则可以改为具体的线上版本号。

然后在 `packages/kbt-ui/package.json` 替换为如下内容（注意先备份好原来 `package.json` 的内容，发版时需要修改回来，这只是本地文档启动的 `package.json`）：

```json
{
  "name": "kbt-ui",
  "version": "0.0.1",
  "description": "A Component Library for Vue 3",
  "publishConfig": {
    "access": "public"
  },
  "peerDependencies": {
    "vue": "^3.2.0"
  },
  "dependencies": {
    "@ctrl/tinycolor": "^3.4.1",
    "@element-plus/icons-vue": "^2.3.1",
    "@floating-ui/dom": "^1.0.1",
    "@popperjs/core": "npm:@sxzz/popperjs-es@^2.11.7",
    "@types/lodash": "^4.14.182",
    "@types/lodash-es": "^4.17.6",
    "@vueuse/core": "^9.1.0",
    "async-validator": "^4.2.5",
    "dayjs": "^1.11.3",
    "escape-html": "^1.0.3",
    "lodash": "^4.17.21",
    "lodash-es": "^4.17.21",
    "lodash-unified": "^1.0.2",
    "memoize-one": "^6.0.0",
    "normalize-wheel-es": "^1.2.0"
  },
  "devDependencies": {
    "@types/node": "*",
    "csstype": "^2.6.20",
    "vue": "~3.2.47",
    "vue-router": "^4.0.16"
  },
  "vetur": {
    "tags": "tags.json",
    "attributes": "attributes.json"
  },
  "web-types": "web-types.json",
  "browserslist": [
    "> 1%",
    "not ie 11",
    "not op_mini all"
  ]
}
```

> 注意：文档执行 build 前必须本地编译一次。

