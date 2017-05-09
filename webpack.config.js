const path = require('path');

module.exports = {
  cache: true,
  context: path.resolve(__dirname, 'client'),
  entry: path.resolve(__dirname, 'client', 'index.js'),
  devtool: '#inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'helloworld'),
    filename: 'bundle.js',
    publicPath: '/helloworld/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap=inline', 'sass-loader?sourceMap'],
        test: /\.scss$/,
        include: path.join(__dirname, 'client/stylesheets'),
      },
      {
        loader: 'babel-loader?cacheDirectory',
        test: /\.jsx?$/,
        include: [path.join(__dirname, 'client')],
      },
      {
        loader: 'json-loader',
        test: /\.(json)$/,
        include: [path.join(__dirname, 'client')],
      },
      {
        loader: 'url-loader',
        test: /\.svg$/,
        include: [
          path.join(__dirname, 'node_modules', 'transcend-react', 'stylesheets'),
        ],
      },
      {
        loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react-loader',
        test: /\.svg$/,
        include: [
          path.join(__dirname, 'node_modules', 'transcend-react', 'lib'),
          path.join(__dirname, 'client', 'images'),
        ],
      },
      {
        loader: 'url-loader',
        test: /\.(woff2?|png|jpg|gif)$/,
        include: [path.join(__dirname, 'node_modules/transcend-react/')],
      },
    ],
  },
  plugins: [],
};