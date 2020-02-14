import styled from 'styled-components'
import { breakpoints } from '~/styles/metrics'

export const Footer = styled.footer`
  width: 100%;
  background: var(--color-blue-500);
  padding: var(--space-jumbo) var(--size-medium);
  font-size: var(--size-medium);
  color: #fff;
  .footer {
    &,
    & .footer__content {
      > div {
        & + div {
          margin-top: var(--space-extra-jumbo);
        }
      }
    }
    &__title {
      margin-bottom: var(--size-large);
      font-family: 'Proxima Nova Bold';
      font-size: 16px;
    }
    &__find-scholarships {
      padding-bottom: var(--space-medium);
      border-bottom: 2px solid #fff;
      > div {
        margin: var(--space-large) 0;
      }
      &__examples {
        > div {
          display: block;
          line-height: 8px;
        }
        span {
          & + span:before {
            display: inline-block;
            margin: var(--size-small);
            content: '-';
          }
        }
      }
    }
    &__images {
      align-items: center;
      display: flex;
      > svg {
        & + svg {
          margin-left: var(--space-medium);
        }
      }
    }
    &__social-media .footer__images {
      align-items: center;
      display: flex;
      > .footer__icon {
        & + .footer__icon {
          margin-left: var(--space-medium);
        }
      }
    }
    &__icon {
      justify-content: center;
      align-items: center;
      display: flex;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      line-height: 36px;
      text-align: center;
      background: #fff;
      > i {
        font-size: 20px;
      }
    }
    &__epoca {
      width: 77px;
      height: 74px;
    }
    &__melhor-escola {
      width: 120px;
      height: 40px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .footer {
      &__find-scholarships__examples {
        flex-direction: row;
        justify-content: space-between;
        display: flex;
      }
      div.footer__content {
        justify-content: space-between;
        align-items: flex-start;
        display: flex;
        margin-top: 0;
        > div {
          margin-top: var(--space-extra-jumbo);
        }
      }
    }
  }
`
