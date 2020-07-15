import React, { useContext } from 'react';
import { store } from '../../context';
import { VotingSectionWrapper, VotingContent, Title } from './styles';
import VoteItem from '../VoteItem';
import Container from '../../utils/styledContainer';

const VotingSection = () => {
  const { state, dispatch } = useContext(store);

  return (
    <VotingSectionWrapper>
      <Container main>
        <Title>Votes</Title>
        <VotingContent>
          {state.map((item) => {
            return (
              <VoteItem
                item={item}
                storeDispatch={dispatch}
                index={item.id}
                key={item.id}
              />
            );
          })}
        </VotingContent>
      </Container>
    </VotingSectionWrapper>
  );
};

export default VotingSection;
