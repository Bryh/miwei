
const { injectBabelPlugin } = require('react-app-rewired');

const Path = require("path")

function resolve(url){
    return Path.resolve(__dirname, "src/", url)
}


module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );

    config.resolve.alias = {
        ...config.resolve.alias,
        "@libs": resolve("libs"),
        "@store": resolve("store"),
        "@views": resolve("views"),
        "@assets": resolve("assets"),
        "@com": resolve("components")
    }

    return config;
};