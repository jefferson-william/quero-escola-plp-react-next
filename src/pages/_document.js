import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  constructor() {
    super()
  }

  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)

    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            body {
              background: #efefef;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
