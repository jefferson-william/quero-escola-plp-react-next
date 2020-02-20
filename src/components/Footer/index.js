import React from 'react'
import { ReactComponent as LogoGlobo } from '~/assets/images/icon-globo.svg'
import { ReactComponent as LogoFolha } from '~/assets/images/icon-folha.svg'
import { ReactComponent as LogoVeja } from '~/assets/images/icon-veja.svg'
import { ReactComponent as LogoMelhorEscola } from '~/assets/images/logo-melhor-escola.svg'
import LogoEpoca from '~/assets/images/icon-epoca.png'
import { Footer } from './styles'

export default function() {
  return (
    <Footer>
      <div className="footer container">
        <div className="footer__find-scholarships">
          <h3 className="footer__title">Encontre bolsas</h3>
          <div className="footer__find-scholarships__examples">
            <div>
              <span>Ensino Infantil</span>
              <span>Ensino Fundamental 1</span>
              <span>Ensino Fundamental 2</span>
              <span>Ensino Médio</span>
            </div>
            <div>
              <span>Lista por estado</span>
              <span>Escolas do Brasil</span>
            </div>
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__midia">
            <h3 className="footer__title">Somos destaque na imprensa</h3>
            <div className="footer__images">
              <LogoGlobo />
              <LogoFolha />
              <LogoVeja />
            </div>
          </div>
          <div className="footer__social-media">
            <h3 className="footer__title">Curta nossos canais</h3>
            <div className="footer__images">
              <div className="footer__icon">
                <i className="fab fa-youtube" />
              </div>
              <div className="footer__icon">
                <i className="fab fa-instagram" />
              </div>
              <div className="footer__icon">
                <i className="fab fa-twitter" />
              </div>
              <div className="footer__icon">
                <i className="fab fa-facebook" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer__title">Atendimento de excelência</h3>
            <div className="footer__images">
              <img src={LogoEpoca} alt="" className="footer__epoca" />
            </div>
          </div>
          <div>
            <h3 className="footer__title">Parceiro exclusivo</h3>
            <div className="footer__images">
              <LogoMelhorEscola className="footer__melhor-escola" />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}
