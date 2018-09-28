import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './config/globalDef'
import './common/scss/index.scss'

import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import Route from './router/routes'
import { _DEV_ } from './config/config'

document.getElementById('app-load').remove()

const rootNode = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  rootNode
)
registerServiceWorker()
