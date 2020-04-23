const path=require("path");

const cleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    mode:"development",
    entry:"./src/ts/index.ts",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
        publicPath:"dist"
    },
    devtool:"inline-source-map",
    module:{
        rules: [
            {
                test:/\.ts$/,
                use:"ts-loader",
                exclude:/node_modules/,
            }
        ]
    },
    resolve:{
        extensions:[
            ".ts",
            ".js",
        ]
    },
    plugins:[
            // new cleanWebpackPlugin.CleanWebpackPlugin()
    ]
}