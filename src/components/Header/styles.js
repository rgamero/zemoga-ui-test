import styled from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  background-color: transparent;
  height: 6rem;
  width: 100%;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.white};
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.md};
  `};
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`;

export const Menu = styled.ul`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  list-style: none;
  ${StyledComponentMedia.tablet`
    display: flex;
  `};
`;

export const MenuItem = styled.li`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.white};
  margin: 0 1rem;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.reg};
    margin: 0 2rem;
  `};
`;
