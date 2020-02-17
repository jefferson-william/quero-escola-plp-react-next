import React from 'react'
import { Header } from './styles'
import { ReactComponent as Logo } from '~/assets/images/logo.svg'

export default function() {
  return (
    <Header className="z-header">
      <div className="z-header__container">
        <div className="z-header__main">
          <div className="z-header__logo-container">
            <Logo />
          </div>
          <hr className="z-divider z-header__divider z-header__divider--only-desktop" />
          <a className="z-header__contact z-link">
            <div className="z-icon z-icon--success z-icon--extra-large z-header__contact-icon">
              <i className="fab fa-whatsapp" />
            </div>
            <span className="z-title z-title--extra-small">Fale com a gente</span>
            <span className="z-text z-text--major z-text--small">Envie um WhatsApp para 0800 123 2222</span>
          </a>
        </div>
        <div className="z-header__menu">
          <i className="fal fa-question-circle" />
        </div>
      </div>
    </Header>
  )
}
