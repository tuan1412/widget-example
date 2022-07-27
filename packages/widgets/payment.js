import React from 'react'
import ReactDOM from 'react-dom'
import App from '../ui/root/Payment'

class PaymentWidget {
  static instance = null

  static init(options) {
    console.log('log')

    const rootNode = document.getElementById('kfin-payment')

    ReactDOM.render(React.createElement(App, options), rootNode);
  }

  static destroy() {
    const rootNode = document.getElementById('kfin-payment')
    ReactDOM.unmountComponentAtNode(rootNode)
  }
} 

export default PaymentWidget
