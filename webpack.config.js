var path = require('path');
var webpack = require('webpack');
module.exports = {

    context: path.join(__dirname, 'JSX/Pages'),
    
    entry: {
        client: './MovieListComponent'
    },
    output: {
        path: path.join(__dirname, 'Public/Build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
// Transform JSX in .jsx files
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
// Uncomment this if you want to use your own version of React instead of the version
// bundled with ReactJS.NET.
//{ test: require.resolve('react'), loader: 'expose?React' }
    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ],
    },
    resolve: {
// Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery: __dirname + "/node_modules/jquery/dist/jquery.js",
            materializejs: __dirname + "/node_modules/materialize-css/bin/materialize.js",
            materializecss: __dirname + "/node_modules/materialize-css/bin/materialize.css"
        }
    },
    externals: {
// Use external version of React (from CDN for client-side, or bundled with ReactJS.NET for server-side)
// Comment this out if you want to load your own version of React
        react: 'React'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
            "materializeJs": "materializejs",
            "materializeCss": "materializecss"
        })
    ]
};