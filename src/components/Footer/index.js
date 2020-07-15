import React from 'react';
import { FooterWrapper, LinksContainer, TextLink } from './styles';
import Container from '../../utils/styledContainer';
import FacebookIcon from '../../assets/icons/facebook';
import TwitterIcon from '../../assets/icons/twitter';

const Footer = () => (
  <FooterWrapper>
    <Container footer>
      <LinksContainer>
        <TextLink>Terms and Conditions</TextLink>
        <TextLink>Privacy Policy</TextLink>
        <TextLink>Contact us</TextLink>
      </LinksContainer>
      <LinksContainer>
        <TextLink>Follow us</TextLink>
        <FacebookIcon />
        <TwitterIcon />
      </LinksContainer>
    </Container>
  </FooterWrapper>
);

export default Footer;
