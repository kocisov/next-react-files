import React, { ConcurrentMode } from 'react'
import { createRoot } from 'react-dom'
import Interface from './components/Interface'
import Provider from './store'

const DOMNode = document.getElementById('root')
const Root = createRoot(DOMNode)

function render(NextInterface) {
  Root.render(
    <ConcurrentMode>
      <Provider>
        <NextInterface />
      </Provider>
    </ConcurrentMode>,
  )
}

render(Interface)

if (module.hot) {
  module.hot.accept('./components/Interface', () => {
    const NextInterface = require('./components/Interface').default
    render(NextInterface)
  })
}
