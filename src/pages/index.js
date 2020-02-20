import Head from 'next/head'
import React from 'react'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Main from '~/components/Main'

export default function() {
  return (
    <div>
      <Head>
        <title>PLP</title>
      </Head>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  )
}
