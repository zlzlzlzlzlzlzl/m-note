# Linux CentOS 安装 Nodejs

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。最新版本[Node 源](https://github.com/nodesource/distributions)存储库由其官方网站维护。使用本教程添加yum存储库，并使用简单命令将最新Nodejs安装到CentOS系统


![nodejs](https://tecadmin.net/wp-content/uploads/2014/05/nodejs-large-image.png)

## 第1步 - 添加Node.js Yum存储库
添加Node.js官方网站提供的[node.js yum存储库](https://deb.nodesource.com/setup_12.x)

**最新版本**
```
# yum install -y gcc-c++ make
# curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
```

**稳定版本**
```
# yum install -y gcc-c++ mak
# curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
```

## 第2步 - 安装Node.js
添加yum源之后、接下来就安装Node.js，NPM与node.js会一起安装

```
sudo yum install nodejs
```

## 第3步 - 检查Node.js和NPM版本
安装node.js后验证并检查已安装的版本
**检查node的版本**
```
# node -v 
v12.1.0
```

**检查npm的版本**
```
# npm -v 
6.9.0
```

## 参考文献
- [How To Install Latest Nodejs on CentOS/RHEL 7/6](https://tecadmin.net/install-latest-nodejs-and-npm-on-centos/)