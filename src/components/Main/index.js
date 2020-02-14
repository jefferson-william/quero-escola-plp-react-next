import React from 'react'
import SchoolsByNeighborhoods from '~/components/SchoolsByNeighborhoods'
import Breadcrumb from '~/components/Breadcrumb'
import FilterRelevance from '~/components/FilterRelevance'
import { Main } from './styles'

export default function() {
  return (
    <Main>
      <Breadcrumb />
      <FilterRelevance />
      <SchoolsByNeighborhoods />
    </Main>
  )
}
