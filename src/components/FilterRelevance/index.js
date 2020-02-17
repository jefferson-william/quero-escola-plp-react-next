import React from 'react'
import { FilterRelevance } from './styles'

export default function() {
  return (
    <FilterRelevance>
      <div className="filter-relevance">
        <div className="filter-relevance__info">
          Encontramos <strong>535 escolas</strong>
        </div>
        <div className="z-dropdown-input filter-relevance__order">
          <span>Ordenar por:</span>
          <div className="z-dropdown-input__input-wrapper">
            <select className="filter-relevance__select z-dropdown-input__input">
              <option>Relevância:</option>
            </select>
            <span className="z-icon z-dropdown-input__icon">
              <i className="fa fa-chevron-down" />
            </span>
          </div>
          <span className="z-caption z-caption--danger" />
        </div>
      </div>
    </FilterRelevance>
  )
}
