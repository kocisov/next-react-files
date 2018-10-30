import React, { ConcurrentMode } from 'react'
import { createRoot } from 'react-dom'
import Interface from './components/Interface'

const DOMNode = document.getElementById('root')
const Root = createRoot(DOMNode)

function render(Interface) {
  Root.render(
    <ConcurrentMode>
      <Interface />
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
