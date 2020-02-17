import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Main = styled.main`
  flex: 1;
`
export const Content = styled.div`
  flex-direction: column;
  display: flex;
  padding-top: var(--space-jumbo);
  margin-bottom: var(--space-extra-large);
  aside {
    margin-bottom: var(--space-large);
  }
  section {
    flex: 1;
  }
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    aside {
      margin-bottom: 0;
      margin-right: var(--space-extra-large);
    }
  }
`
