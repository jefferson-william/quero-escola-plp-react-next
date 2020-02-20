import styled from 'styled-components'
import Range from 'react-input-range'
import 'react-input-range/lib/css/index.css'
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
    > .aside-space {
      margin: var(--space-jumbo) 0;
    }
    .filter-checkbox {
      justify-content: space-between;
      align-items: center;
      display: flex;
      margin: var(--space-medium) 0;
    }
    .filter-title {
      margin-bottom: var(--space-medium);
    }
    > .filter-card {
      > .z-dropdown-input {
        margin-bottom: 0;
      }
    }
  }
  section {
    flex: 1;
  }
  article {
    margin-top: var(--space-extra-large);
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
export const InputRange = styled(Range)``
