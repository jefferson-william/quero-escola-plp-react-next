import React from 'react'
import { NextPageContext } from 'next'
import Link from 'next/link'

interface INextPageContext extends NextPageContext {
  statusCode: Number
}

const Error = ({ statusCode }: INextPageContext) => {
  return (
    <>
      <p>
        <Link href="/">
          <a className="z-link">← Início</a>
        </Link>
      </p>
      <h1>Error Page</h1>
      <p>{`An error ${statusCode} occurred on server`}</p>
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404

  return { statusCode }
}

export default Error
