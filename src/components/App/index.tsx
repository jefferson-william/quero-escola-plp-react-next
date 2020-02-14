import React from 'react'
import { hot } from 'react-hot-loader/root'
import Routers from '~/routers'
import '~/styles/global.scss'

function App() {
  return (
    <>
      <Routers />
    </>
  )
}

export default hot(App)
