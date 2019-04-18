# Mac 指南
## 开发工具
- [Vscode](https://code.visualstudio.com/), 之前用的是 [Sublime Text](https://www.sublimetext.com/)，编辑器选择主要看个人喜好
- [Robo 3T](https://robomongo.org) 是MongoDB数据库的免费轻量级GUI
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 小程序开发编辑器
- [Chrome]()、[Firefox]()

## 开发辅助
- [SourceTree](https://www.sourcetreeapp.com/) 是免费的Git客户端,拥有可视化界面,容易上手操作
- [Postman](https://www.getpostman.com/products) 是一个很强大的 API调试、Http请求的工具
- [Sip](http://sipapp.io/) 一个很好的屏幕取色工具

## 效率
- [Alfred](https://www.alfredapp.com/) 是一款很赞的效率神器
- [Dash](https://kapeli.com/dash) 是一款开发者API文档 + 代码片段神器

## 其他
- [XMind ZEN](https://www.xmind.cn/zen/) 超赞！一款全新的思维导图软件
- [Axure RP 8](https://www.axure.com/) 交互原型设计软件
- [Sketch](https://www.sketch.com/) 一款不错的用于设计是移动界面UI的软件
- [Mounty](https://mounty.app/) 是一款让你的mac系统支持NTFS硬盘/u盘读写操作的驱动程序
- [iStat Menus](https://bjango.com/mac/istatmenus/) 是一款系统与硬件监控软件
- [Dr.Unarchiver](https://dr-unarchiver.en.softonic.com/mac) 解压缩软件

## 个人
- [微信](https://weixin.qq.com/)
- [QQ](https://itunes.apple.com/cn/app/qq/id451108668?mt=12)
- [网易云音乐](https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id944848654?l=en)
- [QQ音乐](https://y.qq.com/download/mac.html)
- [百度网盘](https://pan.baidu.com/)
- [有道云笔记](http://note.youdao.com/)
- [网易有道词典](https://itunes.apple.com/cn/app/you-dao-ci-dian/id491854842?mt=12)
- [搜狗输入法](https://pinyin.sogou.com/mac/)
- [迅雷下载](https://www.xunlei.com/)

## Chrome 插件
- [Google 翻译](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb) 谷歌出品必是精品
- [掘金](https://chrome.google.com/webstore/detail/%E6%8E%98%E9%87%91/lecdifefmmfjnjjinhaennhdlmcaeeeb) 为程序员、设计师、产品经理每日发现优质内容。
- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 浏览器devtools扩展用于调试Vue.js应用程序。
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 浏览器devtools扩展用于调试React.js应用程序。
- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) JSON数据格式化工具
- [Axure RP Extension for Chrome](https://chrome.google.com/webstore/detail/axure-rp-extension-for-ch/dogkpdfcklifaemcdfbildhcofnopogp) Axure RP原型扩展

## Terminal
- Terminal 用 [iTerm2](https://www.iterm2.com/) + [zsh](https://en.wikipedia.org/wiki/Z_shell) + [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) 的组合，主题是 [robbyrussell](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme)
- zsh插件装了git、[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)自动提示历史命令补全、[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)语法高亮、[autojump](https://github.com/wting/autojump)快速跳到指定目录

## 编辑器
### [Vscode](https://code.visualstudio.com/)
**主题**
[One Dark Pro](https://github.com/Binaryify/OneDark-Pro) + [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

**插件**

- [Chinese (Simplified) Language Pack for Visual Studio Code]() 适用于VS Code 的中文（简体）语言包 
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) 自动添加HTML / XML关闭标记
- [EditorConfig for VS Code](https://editorconfig.org/) 统一的编码样式
- [ESLint](https://eslint.org/) javascript代码检测工具
- [Vetur](https://vuejs.github.io/vetur/) 开发vue必备插件
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) Markdown预览，[详情](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 静态服务器

**配置**
```json
{
  "workbench.colorTheme": "One Dark Pro",
   "workbench.iconTheme": "material-icon-theme",
  // 编辑器设置
  "editor.wordWrap": "on",
  "editor.accessibilitySupport": "off",
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.tabSize": 2,
  "editor.hideCursorInOverviewRuler": true,
  "editor.lineHeight": 28,
  "editor.matchBrackets": false,
  "editor.occurrencesHighlight": false,
  "editor.overviewRulerBorder": false,
  "editor.renderIndentGuides": false,
  "editor.renderLineHighlight": "none",
  "editor.snippetSuggestions": "top",
  "editor.minimap.enabled": false,
  "editor.lineNumbers": "on",
  // Set the default
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // eslint设置
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true, //  启用保存时自动修复,默认只支持.js文件
  "eslint.validate": [
    "javascript",
    "javascriptreact", //  用eslint的规则检测js文件
    {
      "language": "vue", // 检测vue文件
      "autoFix": true //  为vue文件开启保存自动修复的功能
    },
    {
      "language": "html",
      "autoFix": true
    }
  ],
  // 文件支持
  "files.associations": {
    "*.wpy": "vue",
    "*.css": "postcss",
    "*.vue": "vue",
    "*.wxss": "css"
  },
  // 用来忽略工程打开的文件夹
  "files.exclude": {
    "**/.vscode": true,
    "**/.DS_Store": true,
    "**/.history": true,
    "**/nbproject": true
  },
  // 用来忽略搜索的文件夹
  "search.exclude": {
    "**/node_modules/**": true,
    "**/bower_components/**": true,
    "**/image/**": true,
    "**/*.xml": true,
    "**/.history/**": true,
    "**/nbproject/**": true,
    "**/vscode/**": true
  },
  "vetur.validation.template": false,
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatter.ts": "prettier",
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "search.followSymlinks": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "window.zoomLevel": 0,
  "terminal.integrated.rendererType": "dom",
  "editor.autoIndent": false,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
}

```
