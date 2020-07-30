const path=require("path")//引入path
// webpack的默认打包文件
module.exports={
	mode:"production",//development:不压缩
	entry:"./src/index.js" ,//入口文件
	output:{
		filename:"bundles.js",//目标文件名
		path:path.resolve(__dirname,"dist")
	}
	
}