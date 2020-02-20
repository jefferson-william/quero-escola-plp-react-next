import styled from 'styled-components'

export const Breadcrumb = styled.section`
  margin: var(--space-large) 0 var(--space-extra-jumbo);
  font-size: var(--size-font-small);
  a {
    font-weight: bold;
  }
  a + a:before,
  span:before {
    display: inline-block;
    margin: 0 var(--space-small);
    content: '/';
  }
`
