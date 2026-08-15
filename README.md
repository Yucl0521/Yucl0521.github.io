# Chenglong Yu's Homepage — V1

这是个人主页的首个可发布版本，可直接部署到 GitHub Pages。

## 目录结构

```text
V1/
├── index.html
├── 404.html
├── favicon.svg
├── README.md
└── assets/
    ├── css/
    │   └── main.css
    ├── js/
    │   └── main.js
    └── images/
        ├── avatar.jpg
        └── publications/
            ├── dgnet-logo.png
            ├── adgnet-logo.png
            └── hdnet-logo.png
```

`V1` 中只包含网页运行所需内容，不包含原始素材、设计预览和历史备份。

## 本地预览

```bash
python3 -m http.server 8000 --directory "/home/cuixueliang/YCL/AAAI/shengao_zahuo/个人主页/V1"
```

浏览器打开：

```text
http://127.0.0.1:8000/
```

## 首次发布到 GitHub

1. 登录 GitHub，在 `Yucl0521` 账号下创建公开仓库 `Yucl0521.github.io`。
2. 创建仓库时不要添加 README、`.gitignore` 或 License，保持仓库为空。
3. 在终端执行：

```bash
cd "/home/cuixueliang/YCL/AAAI/shengao_zahuo/个人主页/V1"
git init
git branch -M main
git add .
git commit -m "Publish personal homepage V1"
git remote add origin https://github.com/Yucl0521/Yucl0521.github.io.git
git push -u origin main
```

4. 在仓库中打开 `Settings → Pages`。
5. 在 `Build and deployment` 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

6. 保存并等待 GitHub Pages 完成部署，然后访问：

```text
https://yucl0521.github.io/
```

## 后续更新

修改 V1 中的内容后执行：

```bash
git add .
git commit -m "Update homepage"
git push
```

GitHub Pages 会自动重新部署。

## 发布前检查

- 确认首页、头像和三个论文图标均可正常加载。
- 测试中英文切换和手机端菜单。
- 检查 Email、GitHub、论文和代码链接。
- 确认页面中没有手机号、详细住址或未公开成果。
- favicon 更新后若未显示，使用 `Ctrl + F5` 强制刷新。
