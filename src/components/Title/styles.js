import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Title = styled.h1`
  span {
    display: none;
  }
  @media (min-width: ${breakpoints.md}) {
    span {
      display: inline;
    }
  }
`
