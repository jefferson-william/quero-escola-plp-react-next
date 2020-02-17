import React from 'react'
import { FilterRelevance } from './styles'

export default function() {
  return (
    <FilterRelevance>
      <div className="container">
        <div className="filter-relevance">
          <div className="filter-relevance__info">
            Encontramos <strong>535 escolas</strong>
          </div>
          <div className="filter-relevance__order">
            <span>Ordenar por:</span>
            <div className="z-dropdown-input__input-wrapper">
              <select className="filter-relevance__select z-dropdown-input__input js-order-input">
                <option>Relevância</option>
              </select>
              <span className="z-icon z-dropdown-input__icon">
                <i className="fa fa-chevron-down" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </FilterRelevance>
  )
}
