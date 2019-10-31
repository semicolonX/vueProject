module.exports = (isDev) => {
    return {
        preserveWhitepace: true, //去掉template内 最后的空格
        // extractCSS: !isDev,
        cssModules: {
            localIdentName: '[path]-[name]-[hash:base64:5]',
            camelCase: true
        },
        // hotReload: true,    //热重载 根据环境变量生成
    }
}