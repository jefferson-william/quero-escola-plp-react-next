import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Main = styled.main`
  flex: 1;
`
export const Content = styled.div`
  flex-direction: column;
  display: flex;
  margin-bottom: var(--space-extra-large);
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: var(--space-extra-large);
  }
`
