import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'

const Home = lazy(() => import('../pages/Home'))

export default function Interface() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Home path="/" />
        </Router>
      </Suspense>
    </>
  )
}
