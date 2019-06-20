# nvm 安装和使用
![nvm](https://cdn-images-1.medium.com/max/800/1*0HGTGpb0bdSo_xdlptb4-A.png)

## 介绍
> nvm 是node版本管理器 - 用于管理多个活动node.js版本。[NVM官网](https://github.com/nvm-sh/nvm)
> 假如我们有两个项目所使用的nodejs版本都是不同或者尝试最新的node版本进行试验和学习。像这种情况下，我们不可能不断的卸载又安装某一个版本来做。这样来做是一件非常麻烦的事。而nvm就是解决这个问题而产生的 ，同时管理多个node版本之间切换。

## 安装
**本教程以Mac OS系统为主**

### 安装或更新nvm
**之前安装过nodejs，建议先删除**
```bash
$ sudo rm /usr/local/bin/node
```

其他命令
```
$ npm ls -g — depth=0
# check all module installed

$ sudo rm -rf /usr/local/lib/node_modules
# delete node_modules folders

$ sudo rm /usr/local/bin/node
# delete node 

$ cd /usr/local/bin && ls -l | grep “../lib/node_modules/” | awk ‘{print $9}’| xargs rm
# delete global node module alias
```

**1. 打开终端，输入以下**
cURL
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

or Wget
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

**2. 最后**
如果你使用zsh，在〜/.zshrc下面添加一行
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

执行〜/.zshrc
```
source 〜/.zshrc
```

**3. 验证**
```
➜  ~ nvm

Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.

Usage:
  nvm --help                                Show this message
  nvm --version                             Print out the installed version of nvm
  nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
    --lts                                   When installing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When installing, only select from versions for a specific LTS line
    --skip-default-packages                 When installing, skip the default-packages file if it exists
    --latest-npm                            After installing, attempt to upgrade to the latest working npm on the given node version
    --no-progress                           Disable the progress bar on any downloads
  nvm uninstall <version>                   Uninstall a version
  nvm uninstall --lts                       Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
  nvm uninstall --lts=<LTS name>            Uninstall using automatic alias for provided LTS line, if available.
  nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm current                               Display currently activated version of Node
  nvm ls                                    List installed versions
  nvm ls <version>                          List versions matching a given <version>
  nvm ls-remote                             List remote versions available for install
    --lts                                   When listing, only show LTS (long-term support) versions
  nvm ls-remote <version>                   List remote versions available for install, matching a given <version>
    --lts                                   When listing, only show LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only show versions for a specific LTS line
  nvm version <version>                     Resolve the given description to a single local version
  nvm version-remote <version>              Resolve the given description to a single remote version
    --lts                                   When listing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only select from versions for a specific LTS line
  nvm deactivate                            Undo effects of `nvm` on current shell
  nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
  nvm alias <name> <version>                Set an alias named <name> pointing to <version>
  nvm unalias <name>                        Deletes the alias named <name>
  nvm install-latest-npm                    Attempt to upgrade to the latest working `npm` on the current node version
  nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                Unload `nvm` from shell
  nvm which [current | <version>]           Display path to installed node version. Uses .nvmrc if available
  nvm cache dir                             Display path to the cache directory for nvm
  nvm cache clear                           Empty cache directory for nvm

Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)
```


## 使用
**nvm 常用命令**
```bash
nvm install stable                  # 安装最新稳定版 node，当前是node v9.5.0 (npm v5.6.0)
nvm install <version>               # 安装指定版本，可模糊安装，如：安装v4.4.0，既可nvm install v4.4.0，又可nvm install 4.4
nvm uninstall <version>             # 删除已安装的指定版本，语法与install类似
nvm use <version>                   # 切换使用指定的版本node
nvm ls                              # 列出所有安装的版本
nvm ls-remote                       # 列出所有远程服务器的版本（官方node version list）
nvm current                         # 显示当前的版本
nvm alias <name> <version>          # 给不同的版本号添加别名
nvm unalias <name>                  # 删除已定义的别名
nvm reinstall-packages <version>    # 在当前版本 node 环境下，重新全局安装指
```

```
➜  ~ nvm current
v12.1.0
➜  ~ nvm install v11.0.0
Downloading and installing node v11.0.0...
Downloading https://nodejs.org/dist/v11.0.0/node-v11.0.0-darwin-x64.tar.gz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v11.0.0 (npm v6.4.1)
➜  ~ nvm use v11.0.0
Now using node v11.0.0 (npm v6.4.1)
➜  ~ nvm current
v11.0.0
➜  ~ nvm ls
->      v11.0.0
        v12.1.0
default -> stable (-> v12.1.0)
node -> stable (-> v12.1.0) (default)
stable -> 12.1 (-> v12.1.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/dubnium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.0 (-> N/A)
lts/dubnium -> v10.15.3 (-> N/A)
```

### 参考文献
- [Best way to install and use nvm on Mac](https://medium.com/@isaacjoe/best-way-to-install-and-use-nvm-on-mac-e3a3f6bc494d)
- [nvm 官网](https://github.com/nvm-sh/nvm/blob/master/README.md)
- [Mac OS 下 NVM 的安装与使用](https://www.jianshu.com/p/622ad36ee020)
- [How to Install and Manage Node.js via NVM](https://tecadmin.net/install-nodejs-with-nvm/)