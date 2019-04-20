# Linux Centos 7安装Mongodb

> 本安装教程系统版本为Linux Centos 7，使用Yum源安装MongoDB

## Yum源
**安装**
如果之前安装过了yum源，则跳过此步骤

**使用**
概括几个常用的： 
```js
// 1 安装 
yum install package  // 安装指定的安装包package 

// 2 更新和升级 
yum update  // 全部更新 
yum update package  // 更新指定程序包package
yum check-update  // 检查可更新的程序 
yum upgrade package  // 升级指定程序包package 

// 3 查找和显示 
yum info // 列出所有可以安装或更新的包的信息
yum info package //显示安装包信息package 
yum list // 显示所有已经安装和可以安装的程序包 
yum list package  // 显示指定程序包安装情况package
yum search package // 搜索匹配特定字符的package的详细信息

// 4 删除程序 
yum remove | erase package  // 删除程序包package
yum groupremove group1 删除程序组group1 
yum deplist package  // 查看程序package依赖情况

// 5 清除缓存 
yum clean packages  // 清除缓存目录下的软件包 
yum clean headers // 清除缓存目录下的 headers 
yum clean oldheaders // 清除缓存目录下旧的 headers 
yum clean, yum clean all  // (= yum clean packages; yum clean oldheaders) 清除缓存目录下的软件包及旧的headers
```

## 安装Mongodb
### 配置系统yum源
1. 创建一个/etc/yum.repos.d/mongodb-org-4.0.repo文件，生成mongodb的源
```
vi /etc/yum.repos.d/mongodb-org-4.0.repo
```

2. 添加以下配置信息：
```
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/#releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

**详解：**
```
name         #名称
baseurl      #获得下载的路径
gpkcheck=1   #表示对从这个源下载的rpm包进行校验；
enable=1     #表示启用这个源。
gpgkey       #gpg验证
```

3. 保存退出

### 使用yum安装MongoDB
1. 安装MongoDB
```
# sudo yum install -y mongodb-org
```
<!-- ![配图]() -->

2. 验证安装结果
```
rpm -qa |grep mongodb
```
```
rpm -ql mongodb-org-server
```

3. 启动MongoDB
```
systemctl start mongod.service
```
*MongoDB 默认端口是27017，查看是否开启*
```
netstat -natp | grep 27017
```

### 验证服务开启
```
mongo
```

检查数据库是否安装成功
```
ps -aux | grep mongod    # 查看数据库的进程是否存在
```

### 常用命令清单
```js
// 1、开启MongoDB
sudo service mongod start  或者 systemctl start mongod.service  # 开启MongoDB
sudo chkconfig mongod on      # 加入开机启动
sudo service mongod restart   # 重启MongoDB

// 2、关闭MongoDB
sudo service mongod stop      # 关闭防火墙

// 3、卸载MongoDB
sudo yum erase $(rpm -qa | grep mongodb-org)    # 卸载MongoDB
sudo rm -r /var/log/mongodb    # 删除日志文件
sudo rm -r /var/lib/mongo      # 删除数据文件
```

## 远程连接Mongodb
### 1. 修改配置文件mongodb.conf
```
vi /etc/mongodb.conf
```

### 2. 重启mongodb服务
```
sudo service mongod restart 
```

### 3. 关闭防火墙或者开放端口
**关闭防火墙或者开放端口**
```
systemctl stop firewalld  #关闭防火墙
```
**开放端口号**
```
iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT

// 或者
firewall-cmd --zone=public --add-port=27017/tcp  # mongodb默认端口号
firewall-cmd --reload  # 重新加载防火墙
```

### 4. 远程连接
**默认连接**
```
mongo 10.108.218.14:27017
```
**连接到自定义的用户××**
1. 增加
```
>use admin
switched to db admin
>db.addUser('username','password')
```

2. 连接
```
mongo 10.108.218.14:27017:27017/admin -uusername -p
```


# 参考文献
[yum使用详解](https://blog.csdn.net/u011305680/article/details/52767230)
[Install MongoDB Community Edition on Red Hat Enterprise or CentOS Linux](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)
[CentOS 7上MongoDB数据库安装和卸载](https://www.linuxidc.com/Linux/2017-11/148495.htm)
[ubuntu mongodb远程连接配置](https://www.jianshu.com/p/03aff57dfe46)