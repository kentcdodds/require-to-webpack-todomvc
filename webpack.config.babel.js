import path from 'path'

export default {
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
      {test: /\.html$/, loaders: ['raw'], exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
    ],
  },
}

