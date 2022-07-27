const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/'
    }
  },
  entry: {
    k_pay_register: {
      import: path.resolve(__dirname, './packages/widgets/register.js'),
      library: {
        name: 'KPAY_REGISTER',
        type: 'umd',
        export: 'default',
      }
    },
    k_pay_checkout: {
      import:  path.resolve(__dirname, './packages/widgets/payment.js'),
      library: {
        name: 'KPAY_CHECKOUT',
        type: 'umd',
        export: 'default',
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
    modules: [
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/payment.html'),
      template: path.resolve(__dirname, './packages/webviews/payment.html'),
      chunks: [
        'k_pay_checkout'
      ],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/register.html'),
      template: path.resolve(__dirname, './packages/webviews/register.html'),
      chunks: [
        'k_pay_register'
      ],
    })
  ]
}