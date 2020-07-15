import styled, { css } from 'styled-components';

export const LikeButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  background-color: ${(props) => props.theme.turquoise};
  padding: 0.65rem;
  &:focus {
    outline: 2px solid white;
  }
  ${(props) =>
    props.isLiked &&
    css`
      position: absolute;
      left: 0;
      top: 1rem;
    `};
  ${(props) =>
    props.isVote &&
    css`
      cursor: pointer;
      pointer-events: all;
    `};
`;

export const DislikeButtonWrapper = styled(LikeButtonWrapper)`
  background-color: ${(props) => props.theme.ocher};
`;
