import React from 'react'
import { FilterRelevance } from './styles'

export default function() {
  return (
    <FilterRelevance>
      <div className="filter-relevance container">
        <div>
          Encontramos <strong>535 escolas</strong>
        </div>
        <div>
          <span>Ordenar por:</span>
          <div className="z-dropdown-input__input-wrapper">
            <select className="z-dropdown-input__input js-order-input">
              <option>Relevância</option>
            </select>
            <span className="z-icon z-dropdown-input__icon">
              <i className="fa fa-chevron-down" />
            </span>
          </div>
        </div>
      </div>
    </FilterRelevance>
  )
}
