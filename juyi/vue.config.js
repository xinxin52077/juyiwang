module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    // 把请求路径改为请求/json文件夹下的json数据
                    '^/api': '/data'
                }
            }
        },
    },
    // 把px替换成rem
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 50, // 1rem的值
                        minPixelValue: 2, // 可以被替换的最小像素
                        propList: ['*'], // 需要转化的属性 *表示所有属性
                        unitPrecision: 3 // rem单位小数的位数上限
                    })
                ]
            }
        }
    }
};