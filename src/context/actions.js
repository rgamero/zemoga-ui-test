export const actions = {
  like: 'LIKE',
  dislike: 'DISLIKE',
  voteAgain: 'AGAIN'
};

export const like = (index) => ({
  type: actions.like,
  index
});

export const dislike = (index) => ({
  type: actions.dislike,
  index
});

export const voteAgain = (index) => ({
  type: actions.again,
  index
});
