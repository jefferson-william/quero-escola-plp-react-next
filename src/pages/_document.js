import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)

    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body data-theme="default">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
