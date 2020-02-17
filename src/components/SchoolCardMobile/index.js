import React from 'react'
import { SchoolCardMobile } from './styles'

export default function() {
  return (
    <SchoolCardMobile className="z-card school-card-mobile">
      <div className="school-card-mobile__header">
        <div>
          <img src="//static-melhorescola.s3.us-east-2.amazonaws.com/20191023140349884.jpg" alt="Logo da escola" />
        </div>
        <div>
          <h2>Instituto IDEIA</h2>
          <a className="school-card-mobile__spotlight">
            Rua Maria Palmira Ferreira Ivo, 15 - Bosque Dos Eucaliatos, São José dos Campos - São Paulo
          </a>
        </div>
      </div>
      <div className="school-card-mobile__grade">
        <i className="fal fa-user-graduate" />
        <a className="school-card-mobile__spotlight">Ensino Fundamental II</a>
        <a className="school-card-mobile__spotlight">Ensino Médio</a>
      </div>
      <div className="school-card-mobile__info">
        <div>
          <p className="z-text">Mensalidade a partir de</p>
          <span className="z-text z-text--small school-card-mobile__price">R$ 1.020,00</span>
          <span className="z-text z-text--large school-card-mobile__value">R$ 612,00</span>
        </div>
        <div>
          <p className="z-text">Desconto de até</p>
          <span className="z-text school-card-mobile__discount-value">40%</span>
        </div>
      </div>
      <button type="button" className="z-button z-button--success school-card-mobile__action">
        Quero esta bolsa
      </button>
      <a className="school-card-mobile__see-more school-card-mobile__spotlight">Veja mais detalhes</a>
    </SchoolCardMobile>
  )
}
