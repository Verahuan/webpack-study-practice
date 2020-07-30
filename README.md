# webpack-study-practice
## 关于webpack的学习记录和对应的功能实现和案例
## 什么是webpack
	webpack是一个模块打包工具（把不同的模块打包到一起）
	可以识别多种模块打包方式
	webpack可以帮助浏览器识别当前代码
## webpack全局安装的问题
	不同的项目的webpack版本不一样
	采用项目内安装的方法比较好
	node_modules：webpackd的相关文件
	npx webpack  可以在当前目录下找webpack //不同的目录下的安装情况不一样 
## webpack的性能优化相关点
打包模式改为：mode:"production"
## 目前的运行方式
 webpack index.js(全局)
 npm run bundle(局部/在scripts对象中配置)
 npx webpack index.js
 
 webpack-cli的作用：使我们可以在命令行中实行webpack
 
## 模块规范
什么是模块：将一个大工程拆分为互相依赖的小文件，并且通过简单的方法将其拼接，这种方式就是模块化，这些小文件就是模块，简单的方法就是打包工具
```
	ES6 Moudle
	ES Moudles模块引入方式
		import  模块 from 	
	commonjs
	AMD
	CMD
	```
## loader是什么？
一种打包的方案，当webpack遇到非js文件就需要加载loader
静态文件打包：
	file-loader:打包成文件格式
	url-loader：对图片打包的时候。默认转为base_64格式，可以通过设置limit配置，将大于limit大小的文件转为文件格式（同file-loader）

	css文件 css-loader style-loader (css-loader可以帮助我们加载css文件之间的依赖关系)
	sass/less ：sass-loader
	自动添加前缀：postcss-loader(在配置的时候添加autoProfixer 插件)
## css打包的模块化
由于有时候css文件中也会引入sass文件等，可以在option部分添加 importantLoaders:2
同时，有时候共同添加的样式，并不想要所有的js文件都使用，那么就可以添加module：true 使得每个对象独立

## 打包字体
 当引入外部字体的时候，webpack没办法识别，同样需要用file-loder进行配置（文件后缀还是要改的哈==）

## 附带的git知识
Git命令_git fetch、git merge、git pull、FETCH_HEAD、HEAD