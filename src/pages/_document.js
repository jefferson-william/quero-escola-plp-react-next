import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)

    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="fragment" content="!" />
          <meta name="description" content="PoC" />
        </Head>
        <body data-theme="default">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
