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
	ES6 Moudle
	ES Moudles模块引入方式
		import  模块 from 	
	commonjs
	AMD
	CMD
## 附带的git知识
Git命令_git fetch、git merge、git pull、FETCH_HEAD、HEAD