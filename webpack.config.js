const path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry:`${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx?/],
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        // include: SRC_DIR,
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader'
        //     // options: {
        //     //   importLoaders: 1,
        //     //   modules: true
        //     // }
        //   }
        // ]
      }
    ]
  }
}