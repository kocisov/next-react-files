import React, { useReducer } from 'react'
import { GlobalContext } from './context'

function reducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, {})
  const value = { state, dispatch }

  return <GlobalContext.Provider value={value} {...props} />
}
