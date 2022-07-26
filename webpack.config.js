const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      import:  path.resolve(__dirname, './packages/widgets/register.js'),
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
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}