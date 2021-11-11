import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import ContextPovider from './contexts/Context'

ReactDOM.render(
  <ContextPovider>
    <App />
  </ContextPovider>,
  document.getElementById('root')
)
