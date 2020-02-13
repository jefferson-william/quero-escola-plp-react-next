import React from 'react'

const App = ({ Component, pageProps, router, err }) => {
  return <Component {...pageProps} {...router} {...err} />
}

export default App
