---
title: 技术随笔 - 右键打开 IDEA 和 VSCode
date: 2022-07-28 09:31:06
permalink: /right-click/idea-vscode/
sidebar: auto
categories:
  - 技术随笔
tags: 
  - 技术随笔
---

[[TOC]]

## 介绍


本内容介绍如何快速通过 VSCode、IDEA 打开指定的文件夹或者文件：

![image-20220728202435414](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/轮子使用/20220728202828.png)

本内容的目录虽然有多个，但是配置就三步：

- 配置显示的文字，如通过 IDEA 打开、通过 Code 打开，可以自定义文字
- 配置 IDEA 或者 VSCode 软件的图标
- 配置 IDEA 或者 VSCode 的软件路径，这样点击后才能打开软件

虽然目录有六种，但是只要学会一个目录的右键打开配置，那么其他的右键打开步骤配置就非常相似，只需要换个注册表的路径即可。

## VSCode 右键打开

### 右键 VSCode 打开桌面

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\Directory\Background\shell` 的 VSCode 文件夹（项）。

如果之前没有设置过路径，一般需要自己建立此文件夹（项）：

1. 对 shell 右键 -> 新建 -> 项，然后项的名字叫 VSCode

2. 单击新建的 VSCode，右边出现一个名称叫 <mark>(默认)</mark> 的字符串值，双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 Code 打开**，当然你也可以按照自己喜欢的名称填写，到时候右键的适合就会显示这个文本框内容

   ![image-20220728203405268](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203406.png)

3. 接着配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别

   - 对新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe

     如我的 VSCode 软件路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe"`

   ![image-20220728203720328](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203721.png)

4. 接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：

   - 对新建的 VSCode 右键 -> 新建 -> 项，名字叫做 command

   - 然后单击 command，右边出现一个名称叫 <mark>(默认)</mark> 的字符串值，双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写你的 VSCode 软件的路径 + `"%V"`，`"%V"` 代表打开软件

     如我的图标路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe" "%V"`

   如若 `"%V"` 失效，则改为 `"%1"`

   ![image-20220728203907543](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203910.png)

### 右键 VSCode 打开文件夹

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\Directory\shell` 并新建文件夹（项） `VSCode`。

> 下面配置和右键 VSCode 打开桌面一样，就不放图片了，包括下面所有的配置都一样，只不过换路径。

双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 Code 打开**

配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别

- 新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe

  如我的 VSCode 软件路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe"`


接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：

- 点击所建文件夹（项）鼠标右键新建项，并命名 command

- 双击右边的 <mark>(默认)</mark> 设置软件所在路径，并在后面加上 `"%V"`
- 如我的图标路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe" "%V"`
- 如若 `"%V"` 失效，则改为 `"%1"`

### 右键 VSCode 打开文件

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\*\shell` 并新建文件夹（项） `VSCode`。

> 和上面一样，配置默认、Icon 和 command 内容。
>

双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 Code 打开**

配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别

- 新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe

  如我的 VSCode 软件路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe"`

接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：

- 点击所建文件夹（项）鼠标右键新建项，并命名 command
- 双击右边的 <mark>(默认)</mark> 设置软件所在路径，并在后面加上 `"%V"`
- 如我的图标路径为 `"D:\ITArea\软件区\VSCode\Microsoft VS Code\Code.exe" "%V"`
- 如若 `"%V"` 失效，则改为 `"%1"`

## IDEA 右键打开

IDEA 右键打开和 VSCode 右键打开的配置一样，只需要更换 IDEA 的路径即可。

### 右键 IDEA 打开桌面

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\Directory\Background\shell` 的 IDEA 文件夹（项）。

如果之前没有设置过路径，一般需要自己建立此文件夹（项）：

1. 对 shell 右键 -> 新建 -> 项，然后项的名字叫 IDEA

2. 单击新建的 IDEA，右边出现一个名称叫 <mark>(默认)</mark> 的字符串值，双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 IDEA 打开**，当然你也可以按照自己喜欢的名称填写，到时候右键的适合就会显示这个文本框内容

3. 接着配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别

   - 对新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe

     如我的 IDEA 软件路径为 `"F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe"`

4. 接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：

   - 对新建的 IDEA 右键 -> 新建 -> 项，名字叫做 command

   - 然后单击 command，右边出现一个名称叫 <mark>(默认)</mark> 的字符串值，双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写你的 IDEA 软件的路径 + `"%V"`，其中 `"%V"` 代表打开软件

     如我的图标路径为 `"F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe" "%V"`

   如若 `"%V"` 失效，则改为 `"%1"`

### 右键 IDEA 打开文件夹

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\Directory\shell` 并新建文件夹（项）`IDEA`。

双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 IDEA 打开**

配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别

- 新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe

  如我的 IDEA 软件路径为 `"F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe"`


接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：

- 点击所建文件夹（项）鼠标右键新建项，并命名 command

- 双击右边的 <mark>(默认)</mark> 设置软件所在路径，并在后面加上 `"%V"`
- 如我的图标路径为 `F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe" "%V"`
- 如若 `"%V"` 失效，则改为 `"%1"`

### 右键 IDEA 打开文件

- 按 WIN + R 组合键运行命令窗口
- 输入 `regedit`，然后回车打开注册表编辑器

找到路径 `计算机\HKEY_CLASSES_ROOT\*\shell` 并新建文件夹（项）`IDEA`。

> 和上面的步骤一样，配置默认、Icon 和 command 内容。
>

双击 <mark>(默认)</mark>，然后在弹出的窗口中，数值数据的文本框写 **通过 IDEA 打开**

配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别

- 新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe

  如我的 IDEA 软件路径为 `"F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe"`

接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：

- 点击所建文件夹（项）鼠标右键新建项，并命名 command
- 双击右边的 <mark>(默认)</mark> 设置软件所在路径，并在后面加上 `"%V"`
- 如我的图标路径为 `"F:\软件区\IDEA\IntelliJ IDEA 2021.3.3\bin\idea64.exe" "%V"`
- 如若 `"%V"` 失效，则改为 `"%1"`

## 结束语

配置完后，可以在桌面、文件夹、文件夹内、文件进行鼠标右键，看看是否有配置成功。

![image-20220728202435414](https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/轮子使用/20220728202828.png)

## 建议

一般不建议 IDEA 配置桌面的右键，因为用 IDEA 打开项目，一般是右键某个文件夹项目，如果配置桌面右键，这样不常用，每次右键总看到右键的菜单很长，就很烦。