const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
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