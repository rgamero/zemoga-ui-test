import React, { useState } from 'react';
import { like, dislike, voteAgain } from '../../context/actions';
import {
  BoxItemWrapper,
  BoxContent,
  ItemName,
  ItemWorkInfo,
  ItemWorkInfoRegular,
  ItemDescription,
  VoteSection,
  VoteButton,
  PercentageVotesBar,
  LikesPercentBar,
  DislikesPercentBar
} from './styles';
import { LikeButton, DislikeButton } from '../VoteButtons';
import ThumbIcon from '../../assets/icons/thumb';

const VoteItem = ({ item, storeDispatch, index }) => {
  const totalVotes = item.likes + item.dislikes;
  const likesPercent = (item.likes / totalVotes) * 100;
  const dislikesPercent = (item.dislikes / totalVotes) * 100;
  const [vote, setVote] = useState(0);

  const onVoteAgain = () => {
    storeDispatch(voteAgain(index));
  };

  const onVote = () => {
    if (vote > 0) {
      storeDispatch(like(index));
      setVote(0);
    } else if (vote < 0) {
      storeDispatch(dislike(index));
      setVote(0);
    }
  };

  return (
    <BoxItemWrapper bgImage={`url(${item.bgImageUrl})`}>
      <BoxContent bigName={item.name.length > 20}>
        {item.likes > item.dislikes ? (
          <LikeButton isLiked />
        ) : (
          <DislikeButton isLiked />
        )}
        <ItemName>{item.name}</ItemName>
        <ItemWorkInfo>
          {`${item.startingDate} ago `}
          <ItemWorkInfoRegular>{`in ${item.workingArea}`}</ItemWorkInfoRegular>
        </ItemWorkInfo>
        {!item.hasVoted ? (
          <>
            <ItemDescription>{item.description}</ItemDescription>
            <VoteSection>
              <LikeButton
                isVote={vote > 0}
                clickHandler={() => {
                  setVote(1);
                }}
              />
              <DislikeButton
                isVote={vote < 0}
                clickHandler={() => {
                  setVote(-1);
                }}
              />
              <VoteButton disabled={vote === 0} onClick={onVote}>
                Vote now
              </VoteButton>
            </VoteSection>
          </>
        ) : (
          <>
            <ItemDescription>Thank you for voting!</ItemDescription>
            <VoteSection>
              <VoteButton onClick={onVoteAgain}>Vote again</VoteButton>
            </VoteSection>
          </>
        )}
      </BoxContent>
      <PercentageVotesBar>
        <LikesPercentBar votesPercent={`${likesPercent.toFixed(0)}%`}>
          <ThumbIcon isMarginSides />
          {`${likesPercent.toFixed(0)}%`}
        </LikesPercentBar>
        <DislikesPercentBar votesPercent={`${dislikesPercent.toFixed(0)}%`}>
          {`${dislikesPercent.toFixed(0)}%`}
          <ThumbIcon isMarginSides isThumbDown />
        </DislikesPercentBar>
      </PercentageVotesBar>
    </BoxItemWrapper>
  );
};

export default VoteItem;
