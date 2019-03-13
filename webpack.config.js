module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: (__dirname + '/client/dist')
  },
  module: {
    rules: [
      {
        test: [/\.m?jsx$/, /\.m?js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};