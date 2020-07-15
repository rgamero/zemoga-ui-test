import React from 'react';
import ThumbIcon from '../../assets/icons/thumb';
import { LikeButtonWrapper, DislikeButtonWrapper } from './styles';

const LikeButton = ({ clickHandler, isLiked, isVote }) => {
  return (
    <LikeButtonWrapper isLiked={isLiked} isVote={isVote} onClick={clickHandler}>
      <ThumbIcon />
    </LikeButtonWrapper>
  );
};

const DislikeButton = ({ clickHandler, isLiked, isVote }) => {
  return (
    <DislikeButtonWrapper
      isLiked={isLiked}
      isVote={isVote}
      onClick={clickHandler}
    >
      <ThumbIcon isThumbDown />
    </DislikeButtonWrapper>
  );
};

export { LikeButton, DislikeButton };
