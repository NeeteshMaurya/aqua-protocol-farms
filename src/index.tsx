import React from 'react'
import ReactDOM from 'react-dom'
import Header from 'components/Header/header'
import App from './App'
import Providers from './Providers'


ReactDOM.render(
  <React.StrictMode>
     <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
