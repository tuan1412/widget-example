import React from 'react'
import ReactDOM from 'react-dom'
import App from '../ui/root/Register'

class RegisterWidget {
  static instance = null

  static init(options) {

    const rootNode = document.getElementById('kfin-register')

    ReactDOM.unmountComponentAtNode(rootNode)
    ReactDOM.render(React.createElement(App, options), rootNode);
  }
} 

export default RegisterWidget
