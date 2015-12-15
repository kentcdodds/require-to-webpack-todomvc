import path from 'path'
import process from 'process'

const env = process.env.NODE_ENV

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
      {test: /\.css$/, loaders: ['style', 'css'], include: /node_modules/},
      {test: /\.css$/, loaders: ['style', 'css?modules'], exclude: /node_modules/},
      ...getJSLoaders(),
    ],
  },
}

function getJSLoaders() {
  const loaders = []
  if (env === 'test') {
    loaders.push(
      {test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/},
      {test: /\.js$/, loaders: ['isparta', 'eslint'], exclude: /node_modules|\.test\.js/}
    )
  } else {
    loaders.push({test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/})
  }
  return loaders
}

