import styled from 'styled-components'

export const Breadcrumb = styled.section`
  margin: var(--space-large) 0 var(--space-extra-jumbo);
  a {
    font-family: 'Proxima Nova Bold';
  }
  a + a:before,
  span:before {
    display: inline-block;
    margin: 0 var(--space-small);
    content: '/';
  }
`
