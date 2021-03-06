import styled from 'styled-components'

import {Container} from '@components/global'

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${(props) => props.theme.color.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  ul li a {
    padding: 2px 0px;
    position: relative;
    line-height: 37px;
  }

  ul li:last-child {
    a {
      border: 2px solid ${(props) => props.theme.color.secondary};
      color: ${(props) => props.theme.color.secondary};
      padding: 0px 20px 5px 20px;
    }

    a:hover:after {
      z-index: -10;
      animation: fill 0.5s forwards;
      -webkit-animation: fill 0.5s forwards;
      -moz-animation: fill 0.5s forwards;
      opacity: 1;
    }

    a:hover {
      color: #fff;
    }
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({mobile}) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 1em;
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => props.theme.font_size.small};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.white.primary};
  }

  &.active {
    a {
      &:after {
        content: '.';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: ${(props) => props.theme.color.secondary};
        z-index: 1;
        animation: stroke 0.5s forwards;
        -webkit-animation: stroke 0.5s forwards;
        -moz-animation: stroke 0.5s forwards;
        opacity: 1;
      }
    }

    &:last-child {
      a {
        color: #fff;
        padding: 0px 20px 5px 20px;
      }

      a:after {
        z-index: -1;
        animation: fill 0.5s forwards;
        -webkit-animation: fill 0.5s forwards;
        -moz-animation: fill 0.5s forwards;
        opacity: 1;
      }
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.primary};
`

export const Brand = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => props.theme.font_size.large};
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
  }

  ${(props) =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`
