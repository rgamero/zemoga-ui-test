import React from 'react';
import {
  SectionWrapper,
  InfoBox,
  InfoContent,
  Text,
  SmallText,
  BigText,
  BoldText,
  UnderlinedText,
  VotingBox,
  Like,
  Dislike,
  ProgressBar,
  PastTime,
  PastTimeText,
  RemainingTime,
  RemainingTimeText
} from './styles';
import Container from '../../utils/styledContainer';
import WikipediaIcon from '../../assets/icons/wikipedia';
import ThumbIcon from '../../assets/icons/thumb';

const MainSection = () => (
  <SectionWrapper>
    <Container header>
      <InfoBox>
        <InfoContent>
          <SmallText>What’s your opinion on</SmallText>
          <BigText>Pope Francis?</BigText>
          <Text>
            He’s talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </Text>
          <UnderlinedText>
            <WikipediaIcon />
            More information
          </UnderlinedText>
          <BoldText>What’s Your Verdict?</BoldText>
        </InfoContent>
        <VotingBox>
          <Like>
            <ThumbIcon />
          </Like>
          <Dislike>
            <ThumbIcon isThumbDown />
          </Dislike>
        </VotingBox>
      </InfoBox>
    </Container>
    <ProgressBar>
      <PastTime>
        <PastTimeText>Closing in</PastTimeText>
      </PastTime>
      <RemainingTime>
        <RemainingTimeText>22 days</RemainingTimeText>
      </RemainingTime>
    </ProgressBar>
  </SectionWrapper>
);

export default MainSection;
