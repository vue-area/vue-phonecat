# vue-phonecat

本项目是算是用 Vue编写的 [angular-phonecat](https://github.com/angular/angular-phonecat) 的一个移植版本，
angular-phonecat 是 angular 官方编写一步一步的教初学者完成一个完整项目的教程。

本项目算是 Vue 的一个入门教程，重点是让初学者掌握有关 Vue 的知识，所以不会用到 webpack, es6, sass 等技术， 甚至你不需要有 node 环境，只要有一个支持静态文件的本地服务器即可。

线上Demo: http://v2ee.com/vue-phonecat/app/

## 开始

1. 下载代码到本地，命令：`git clone https://github.com/yangjunjun/vue-phonecat.git` 
2. 安装`http-server`, 命令： `npm install -g http-server` （http-server 是一个轻量级的 http server) 
3. 进入到项目目录，执行 `npm start` 来启动应用，打开：`http://localhost:8088/`

如果你没有 npm, 你可以把 app 这个目录添加到你的本地服务器的运行目录来查看

## 分步骤学习：

本教程暂时分为10个步骤，使用 `git checkout -f step-n` 来检出每个步骤的代码，n 是步骤的编号。

**0. 环境搭建 Bootstrapping** 

进入 vue-phonecat 目录，执行 `git checkout -f step-0`

这个步骤主要建立一个基本的环境，加入css, js 和资源文件。

index.html 的内容如下：

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />  
  <title>Vue phonecat</title>
  <link href="css/bootstrap.css">
  <link href="css/app.css">
  <script src="js/lib/jquery.js"></script>
  <script src="js/lib/vue.js"></script>
  <script src="js/lib/vue-router.js"></script>
</head>
<body>
  <p>Nothing here {{'yet' + '!'}}</p>
<script src="js/app.js"></script>
</body>
</html>
```  
app.js 如下：

```
new Vue({
  el:'body'
});
```

更多步骤说明请参考: [wiki](https://github.com/yangjunjun/vue-phonecat/wiki)