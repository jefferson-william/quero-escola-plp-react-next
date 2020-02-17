import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const FilterRelevance = styled.div`
  width: 100%;
  .filter-relevance {
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    padding: var(--space-medium) 0;
    border-top: 1px solid var(--color-gray-100);
    border-bottom: 1px solid var(--color-gray-100);
    margin: var(--space-medium) 0;
    &__order {
      display: flex;
      align-items: center;
      margin-top: var(--space-medium);
      > span {
        margin-right: var(--space-medium);
      }
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .filter-relevance {
      flex-direction: row;
      align-items: center;
      &__order {
        margin-top: 0;
      }
    }
  }
`
