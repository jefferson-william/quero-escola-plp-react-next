import React from 'react'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'

export default function() {
  return (
    <div className="z-header">
      <div className="z-header__container">
        <div className="z-header__main">
          <Logo />
        </div>
      </div>
    </div>
  )
}
