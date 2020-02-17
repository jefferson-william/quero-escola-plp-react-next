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
        <FilterRelevance />
      </Content>
      <SchoolsByNeighborhoods />
    </Main>
  )
}
