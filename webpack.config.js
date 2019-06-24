module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  }
}
