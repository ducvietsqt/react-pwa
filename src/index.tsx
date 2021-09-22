import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages"
import { Provider } from "./services/store"

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
