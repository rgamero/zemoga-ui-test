import React from 'react';
import {
  BannerWrapper,
  BannerContent,
  TitleBox,
  MessageBox,
  Text,
  SmallText,
  BoldText
} from './styles';
import Container from '../../utils/styledContainer';
import CloseIcon from '../../assets/icons/close';

const BeCountedBanner = () => (
  <BannerWrapper>
    <Container header>
      <BannerContent>
        <TitleBox>
          <Text>Speak out. Be heard. </Text>
          <BoldText>Be counted</BoldText>
        </TitleBox>
        <MessageBox>
          <SmallText>
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. It’s easy: You
            opinion, we analyze and put the data in a public report.
          </SmallText>
        </MessageBox>
        <CloseIcon />
      </BannerContent>
    </Container>
  </BannerWrapper>
);

export default BeCountedBanner;
