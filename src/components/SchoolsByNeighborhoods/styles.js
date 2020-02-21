import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const SchoolsByNeighborhoods = styled.section`
  h2 {
    margin-bottom: var(--space-medium);
    font-family: 'proxima-nova-bold';
    font-size: var(--size-font-large);
  }
  span {
    display: block;
    width: 100%;
    padding: var(--space-small) var(--space-extra-large) var(--space-small) 0;
    margin: var(--space-small) 0;
    font-family: 'proxima-nova-bold';
    font-size: var(--size-font-medium);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--color-blue-500);
  }
  @media (min-width: ${breakpoints.md}) {
    span {
      display: inline-block;
      width: 33.33%;
    }
    .schools-by-neightborhoods {
      div {
        display: flex;
      }
    }
  }
`
