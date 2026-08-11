# 开发指南

## 本地开发

1. 克隆本仓库，并使用 Visual Studio Code 打开项目。
2. 运行 `pnpm install --frozen-lockfile` 安装所需依赖。
3. 打开 `.vscode/launch.json` 文件，确认其中包含以下配置：
   - 名为 `extensionHost` 的启动任务。
   - `args` 数组中包含 `--disable-extensions`。
   - `preLaunchTask` 设置为 `pnpm: compile`。
4. 按 `F5`，或在“运行”菜单中选择“启动调试”，以开发模式运行插件。

## 测试

当前项目没有单独的自动化测试脚本。修改后运行 `pnpm run compile`，确认 TypeScript 编译通过。

## 发布

1. 运行 `pnpm version patch --no-git-tag-version` 将补丁版本号加一。该命令会同步更新 `package.json` 和 `pnpm-lock.yaml`，但不会创建 Git 提交或标签。
2. 运行 `pnpm run package:vsix` 安装锁定版本的依赖、编译插件并生成 VSIX 发布包。
3. 将生成的 `.vsix` 文件手动上传到 Visual Studio Marketplace。
