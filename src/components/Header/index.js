import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { HeaderWrapper, NavBar, Title, Menu, MenuItem } from './styles';
import Container from '../../utils/styledContainer';
import SearchIcon from '../../assets/icons/search';

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container header>
      <NavBar>
        <Title>{siteTitle}</Title>
        <Menu>
          <MenuItem>
            <Link to="/page-2/">Past Trials</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page-2/">How it Works</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/page-2/">Log In / Sign Up</Link>
          </MenuItem>
          <SearchIcon />
        </Menu>
      </NavBar>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
