module.exports = {
  context: __dirname + '/example',
  entry: './app.js',
  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
    ],
  },

  devServer: {
    contentBase: './example',
  },

  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/example',
  },
};
