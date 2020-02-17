import React, { useState, useCallback } from 'react'
import YEAR_SCHOOL_GRADE from '~/data/YearSchoolGrade.json'
import TYPE_OF_LEARN from '~/data/TypeOfLearn.json'
import PERIOD from '~/data/Period.json'
import SchoolsByNeighborhoods from '~/components/SchoolsByNeighborhoods'
import Breadcrumb from '~/components/Breadcrumb'
import FilterRelevance from '~/components/FilterRelevance'
import Title from '~/components/Title'
import SchoolCardMobile from '~/components/SchoolCardMobile'
import { Main, Content, InputRange } from './styles'

export default function() {
  const [data, UseData] = useState({
    range: 3000,
  })

  const UseAllData = useCallback((key, value) => () => UseData({ ...data, [key]: value }), [])

  return (
    <Main>
      <Breadcrumb />
      <Title />
      <Content className="container">
        <aside>
          <div className="z-card filter-card">
            <div className="z-input-field">
              <span className="z-caption">Cidade</span>
              <div className="z-input">
                <input
                  type="text"
                  className="z-input__field"
                  placeholder="Cidade"
                  value={data.city}
                  onChange={event => UseAllData('city', event.target.value)}
                />
              </div>
            </div>
            <div className="z-input-field">
              <span className="z-caption">Bairro</span>
              <div className="z-input">
                <input
                  type="text"
                  className="z-input__field"
                  placeholder="Bairro"
                  value={data.neighborhood}
                  onChange={event => UseAllData('neighborhood', event.target.value)}
                />
              </div>
            </div>
            <div className="z-input-field">
              <span className="z-caption">Escola</span>
              <div className="z-input">
                <input
                  type="text"
                  className="z-input__field"
                  placeholder="Escola"
                  value={data.school}
                  onChange={event => UseAllData('school', event.target.value)}
                />
              </div>
            </div>
            <div className="z-dropdown-input">
              <span className="z-caption">Ano/Série</span>
              <div className="z-dropdown-input__input-wrapper">
                <select
                  className="z-dropdown-input__input"
                  value={data.yearSchoolGrade}
                  onChange={event => UseAllData('yearSchoolGrade', event.target.value)}>
                  <option>Ano/Série</option>
                  {YEAR_SCHOOL_GRADE.map(({ value, text }) => (
                    <option key={value} value={value}>
                      {text}
                    </option>
                  ))}
                </select>
                <span className="z-icon z-dropdown-input__icon">
                  <i className="fa fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
          <h3 className="aside-space z-title z-title--micro">Filtrar por</h3>
          <div className="aside-space">
            <h4 className="z-caption z-caption--strong">Preço da mensalidade</h4>
            <p className="z-text">
              Posso pagar até <span>R$ 3.000</span>
            </p>
          </div>
          <div className="aside-space">
            <InputRange
              minValue={0}
              maxValue={3000}
              formatLabel={() => ''}
              value={data.range}
              onChange={value => UseAllData(value)}
            />
          </div>
          <div className="aside-space">
            <h4 className="filter-title z-caption z-caption--strong">Turno</h4>
            {PERIOD.map(({ value, text, number }) => (
              <div key={value} className="filter-checkbox">
                <label htmlFor={`turno-${value}`} className="z-checkbox z-checkbox--light">
                  <input type="checkbox" name={`turno-${value}`} id={`turno-${value}`} className="z-checkbox__input" />
                  <span className="z-checkbox__check-wrapper">
                    <i className="fa fa-check z-checkbox__check" />
                  </span>
                  <span className="z-text">{text}</span>
                </label>
                <span className="z-text--medium z-text--strong">({number})</span>
              </div>
            ))}
          </div>
          <div className="aside-space">
            <h4 className="filter-title z-caption z-caption--strong">Tipo de rede</h4>
            {TYPE_OF_LEARN.map(({ value, text, number }) => (
              <div key={value} className="filter-checkbox">
                <label htmlFor={`tipo-de-rede${value}`} className="z-checkbox z-checkbox--light">
                  <input
                    type="checkbox"
                    name={`tipo-de-rede${value}`}
                    id={`tipo-de-rede${value}`}
                    className="z-checkbox__input"
                  />
                  <span className="z-checkbox__check-wrapper">
                    <i className="fa fa-check z-checkbox__check" />
                  </span>
                  <span className="z-text">{text}</span>
                </label>
                <span className="z-text--medium z-text--strong">({number})</span>
              </div>
            ))}
          </div>
        </aside>
        <section>
          <FilterRelevance />
          {[1, 2, 3].map(num => (
            <article key={num}>
              <SchoolCardMobile />
            </article>
          ))}
        </section>
      </Content>
      <SchoolsByNeighborhoods />
    </Main>
  )
}
