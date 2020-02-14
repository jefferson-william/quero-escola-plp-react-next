import React from 'react'
import Head from 'next/head'
import Container from '~/components/Container'
import Header from '~/components/Header'
import Main from '~/components/Main'
import Footer from '~/components/Footer'

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
