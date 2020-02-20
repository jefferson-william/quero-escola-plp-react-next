import styled from 'styled-components'

export const SchoolCardMobile = styled.div`
  .school-card-mobile {
    &__spotlight {
      font-size: var(--size-font-small);
      font-weight: bold;
    }
    &__header {
      justify-content: space-between;
      display: flex;
      > div:first-child {
        margin: 0 var(--space-large) var(--space-large) 0;
      }
      img {
        width: 92px;
        height: 92px;
      }
    }
    &__grade {
      margin-bottom: var(--space-large);
      i {
        margin-right: var(--space-medium);
        font-size: var(--size-icon-medium);
        color: var(--color-gray-500);
      }
      a {
        font-size: var(--size-font-small);
      }
    }
    &__discount-value {
      font-weight: bold;
      color: var(--color-green-500);
    }
    &__price {
      font-style: unset;
    }
    &__info {
      justify-content: space-between;
      display: flex;
      div {
        &:first-child {
          flex: 1;
        }
        & + div {
          text-align: right;
        }
      }
    }
    &__action {
      font-size: var(--size-font-small);
    }
    &__grade {
      a + a:before {
        content: ', ';
      }
    }
    &__action,
    &__see-more {
      width: 100%;
      margin-top: var(--space-medium);
      text-align: center;
    }
  }
`
