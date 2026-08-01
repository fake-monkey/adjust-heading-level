# 结构感知的 Markdown 标题层级调整

简体中文 | [English](README.md)

## 概述

**这是一个为 Markdown 文档合并与拆分流程设计的 Visual Studio Code 插件。** 当你把一篇 Markdown 文档合并到另一篇文档中，或者将某个章节拆分为独立文档时，原有标题通常需要整体调整层级，才能适应它们在新文档结构中的位置。这个插件会将选区内的标题统一移动相同的层级，同时保持标题之间的相对层级关系不变。

插件只负责调整标题层级，不会直接合并、拆分或创建文件。

主要特点：

- 对选区内的所有标题应用相同的层级偏移，保持标题之间的相对层级关系。
- 使用 Visual Studio Code 提供的 Markdown 文档结构识别标题，而不是依赖作用于全文的正则表达式。
- 不会把围栏代码块等正文内容中的 `#` 符号误认为标题。
- 如果任何受影响的标题将超出 Markdown 的 1 至 6 级范围，则拒绝执行整次调整，避免只修改部分标题。

## 快速开始

1. 从 Visual Studio Code 插件市场安装本插件。
2. 选中需要调整标题层级的文本。
3. 打开命令面板（Windows 和 Linux 使用 `Ctrl+Shift+P`，macOS 使用 `Cmd+Shift+P`），然后搜索以下命令之一：
   - `Increase Heading Level`：提升选中文本中的标题层级。
   - `Decrease Heading Level`：降低选中文本中的标题层级。
   - `Batch Adjust Heading Level`：输入指定的偏移量，批量调整选中文本中的标题层级。

## 开发指南

1. 克隆本仓库，并使用 Visual Studio Code 打开项目。
2. 运行 `npm install` 安装所需依赖。
3. 打开 `.vscode/launch.json` 文件，确认其中包含以下配置：
   - 名为 `extensionHost` 的启动任务。
   - `args` 数组中包含 `--disable-extensions`。
   - `preLaunchTask` 设置为 `npm: compile`。
4. 按 `F5`，或在“运行”菜单中选择“启动调试”，以开发模式运行插件。
5. 如需运行测试，请打开命令面板并搜索 `Tasks: Run Test Task`，然后选择 `npm: test`。

## 致谢

> **说明：本项目派生自 [Heading Level Adjuster](https://github.com/kevinslin/adjust-heading-level)，并针对基于文档结构的标题层级调整进行了大幅改进。**

[![原项目](https://img.shields.io/badge/Original-Project-blue?style=flat)](https://github.com/kevinslin/adjust-heading-level)
[![增强版本](https://img.shields.io/badge/Fork-Enhanced-green?style=flat)](https://github.com/fake-monkey/adjust-heading-level)
