import React from 'react'
import SchoolsByNeighborhoods from '~/components/SchoolsByNeighborhoods'
import Breadcrumb from '~/components/Breadcrumb'
import FilterRelevance from '~/components/FilterRelevance'
import Title from '~/components/Title'
import { Main, Content } from './styles'

export default function() {
  return (
    <Main>
      <Breadcrumb />
      <Title />
      <Content className="container">
        <aside>
          <div className="z-card">
            <div className="z-input-field">
              <span className="z-caption">Cidade</span>
              <div className="z-input">
                <input type="text" className="z-input__field" value="" placeholder="Cidade" />
              </div>
              <span className="z-caption z-caption--danger" />
            </div>
            <div className="z-input-field">
              <span className="z-caption">Bairro</span>
              <div className="z-input">
                <input type="text" className="z-input__field" value="" placeholder="Bairro" />
              </div>
              <span className="z-caption z-caption--danger" />
            </div>
            <div className="z-input-field">
              <span className="z-caption">Escola</span>
              <div className="z-input">
                <input type="text" className="z-input__field" value="" placeholder="Escola" />
              </div>
              <span className="z-caption z-caption--danger" />
            </div>
            <div className="z-dropdown-input">
              <span className="z-caption">Ano/Série</span>
              <div className="z-dropdown-input__input-wrapper">
                <select className="z-dropdown-input__input">
                  <option>Ano/Série</option>
                </select>
                <span className="z-icon z-dropdown-input__icon">
                  <i className="fa fa-chevron-down" />
                </span>
              </div>
              <span className="z-caption z-caption--danger" />
            </div>
          </div>
        </aside>
        <section>
          <FilterRelevance />
          {[1, 2, 3].forEach(() => (
            <article>
              <div className="z-card">
                <h2>Espaço Natural Varçario E Educação Infantil</h2>
              </div>
            </article>
          ))}
        </section>
      </Content>
      <SchoolsByNeighborhoods />
    </Main>
  )
}
