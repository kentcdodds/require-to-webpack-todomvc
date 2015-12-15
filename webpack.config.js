var path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'js'),
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {test: /\.html$/, loaders: ['text'], exclude: /node_modules/},
    ],
  },
}

