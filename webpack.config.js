var webpack = require('webpack'); 
module.exports = { 
    //页面入口文件配置  
    entry: {
        index : './src/index.js' 
    }, 
    //入口文件输出配置  
    output: {
        path: './dist',
        filename: 'build.js' 
    },
    devServer: {
        devtool: 'eval-source-map',
        port: 8888
    },
    watch: true,
    module: { 
    //加载器配置  
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, 
                query:{
                    presets:'es2015'
                }
            },
            { test: /\.less$/, loader: 'style!css!less'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000'},
            { test: /\.vue$/, loader: 'vue'},
            {test: /\.json$/, loader: 'json'}
        ]
    }, 
    //其它解决方案配置  
    resolve: {
        extensions: ['', '.js']
    }
};
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}