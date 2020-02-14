import React from 'react'
import '~/styles/global.scss'

const App = ({ Component, pageProps, router, err }) => {
  return <Component {...pageProps} {...router} {...err} />
}

export default App
