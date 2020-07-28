import styled, { css } from 'styled-components'

interface IProps {
  active: boolean
}

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 20;
  `}
`

export const HeaderBar = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  height: 5px;
  width: 100%;

  -webkit-animation: headerbar 15s ease infinite;
  -moz-animation: headerbar 15s ease infinite;
  animation: headerbar 15s ease infinite;
  /* background-color: #4aa1f3; */

  @-webkit-keyframes headerbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes headerbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes headerbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const HeaderNavBar = styled.div`
  display: grid;
  color: #9aa9bb;
  grid-template: 'link . . menu search';
  grid-template-columns: max-content 1fr 1fr max-content max-content;
  height: 50px;
`
export const HeaderImgContainer = styled.div`
  grid-area: link;
  height: 170px;
  margin-left: 2.5rem;
  margin-top: -0.5rem;
  width: 170px;
`
export const HeaderImg = styled.img``

export const HeaderMenuToggle = styled.div<IProps>`
  display: none;
  grid-area: menu;
  justify-self: end;
  margin-right: 2.5rem;

  &:hover {
    cursor: pointer;
  }

  span {
    background-color: #3f3f3f;
    height: 3px;
    margin: 0.5rem auto;
    width: 25px;

    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 720px) {
      cursor: pointer;
      display: block;
    }
  }

  @media only screen and (max-width: 720px) {
    cursor: pointer;
    display: block;
    margin-top: 1rem;
  }

  /* Menu active state */
  ${({ active }) =>
    active &&
    css`
      span {
        &:nth-child(1) {
          -webkit-transform: translateY(8px) rotate(45deg);
          -ms-transform: translateY(8px) rotate(45deg);
          -o-transform: translateY(8px) rotate(45deg);
          transform: translateY(8px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          -webkit-transform: translateY(-8px) rotate(-45deg);
          -ms-transform: translateY(-8px) rotate(-45deg);
          -o-transform: translateY(-8px) rotate(-45deg);
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    `}
`

export const HeaderNav = styled.ul<IProps>`
  grid-area: menu;
  margin-right: 2.5rem;

  @media only screen and (max-width: 720px) {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    overflow: hidden;
    position: fixed;
    text-align: justify;
    top: 55px;
    transform: translate(-101%);
    width: 100%;
    z-index: 10;
  }

  ${({ active }) =>
    active &&
    css`
      transform: translate(0%) !important;
    `}
`
export const HeaderNavItem = styled.li`
  span {
    padding-right: 0.5rem;
  }

  display: inline-block;
  list-style: none;
  padding-right: 1.5rem;

  @media only screen and (max-width: 720px) {
    list-style: none;

    &:first-child {
      margin-top: 5rem;
    }
  }
`
export const HeaderListItemName = styled.span`
  span {
    i {
    }
  }

  @media only screen and (max-width: 720px) {
    font-size: 1rem;
  }
`
export const HeaderSearchInput = styled.input`
  border: 1px solid #9aa9bb;
  border-radius: 5px;
  color: #9dbfaf;
  grid-area: search;
  height: 36px;
  margin-top: 0.75rem;
  outline: none;
  padding: 5px;
  width: auto;

  @media only screen and (max-width: 720px) {
    margin-right: 1.5rem;
  }
`
