import React from 'react'
import { Breadcrumb } from './styles'

export default function() {
  return (
    <Breadcrumb>
      <div className="breadcrumb container">
        <a className="z-link">Página Inicial</a>
        <span>Busca de escolas</span>
      </div>
    </Breadcrumb>
  )
}
