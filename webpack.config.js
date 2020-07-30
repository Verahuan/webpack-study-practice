const path=require("path")//引入path
// webpack的默认打包文件
module.exports={
	mode:"production",//development:不压缩
	entry:"./src/index.js" ,//入口文件
	module:{
		rules:[{
			test:/\.(jpg|png|gif)$/,
			use:{
				loader:"url-loader",
				options:{
					name:"[name]_[hash].[ext]",
					outputPath:"images/",
					esModule: false,
					limit:2048
				}//2048 2kb
			}
		},
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		}]		
	},//模块的规范 //file-loader  如果有文件格式,将文件转移到打包文件目录下,将文件的地址返回给index.js中的变量
	output:{
		filename:"bundles.js",//目标文件名
		path:path.resolve(__dirname,"dist")
	}
	
}