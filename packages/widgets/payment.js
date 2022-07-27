import React from 'react'
import ReactDOM from 'react-dom'

import App from '../ui/root/Payment'

class PaymentWidget {
  static instance = null

  static init(options) {
    console.log('log')

    const rootNode = document.getElementById('kfin-payment')

    if (this.instance) {
      this.instance.unmount()
    }
    this.instance = ReactDOM.createRoot(rootNode)
    this.instance.render(React.createElement(App, options))
  }
}

export default PaymentWidget
