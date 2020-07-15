import React from 'react';
import { BannerWrapper, BannerContent, Text, SubmitButton } from './styles';
import Container from '../../utils/styledContainer';

const SubmitBanner = () => (
  <BannerWrapper>
    <Container header>
      <BannerContent>
        <Text>Is there anyone else you would want us to add?</Text>
        <SubmitButton>Submit a Name</SubmitButton>
      </BannerContent>
    </Container>
  </BannerWrapper>
);

export default SubmitBanner;
