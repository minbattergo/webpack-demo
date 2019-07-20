//CommonJS 스펙의 모듈 배포하기

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //파스칼 케이스

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/, // predicate if(*.css) true/false
                use: ['style-loader', 'css-loader'] // 모든 css 하나로 뭉친다 css-loader, 스타일 적용은 style-loader
            },
            {
                test: /\.scss$/, // predicate if(*.scss) true/false
                use: ['style-loader', 'css-loader', 'sass-loader'] // sass-loader를 가지고 css로 컴파일 먼저, 모든 css 하나로 뭉친다 css-loader, 스타일 적용은 style-loader
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};