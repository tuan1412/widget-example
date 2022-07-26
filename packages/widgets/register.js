import React from 'react'
import ReactDOM from 'react-dom'
import App from '../ui/root/Register'

class RegisterWidget {
  static instance = null

  static init(options) {
    console.log('log')

    const rootNode = document.getElementById('kfin-register')

    if (this.instance) {
      this.instance.unmount()
    }
    this.instance = ReactDOM.createRoot(rootNode); 
    this.instance.render(React.createElement(App, options));
  }
} 

export default RegisterWidget
