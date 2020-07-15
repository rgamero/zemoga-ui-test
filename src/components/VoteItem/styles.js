import styled, { css } from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const BoxItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 60rem;
  width: 100%;
  margin: 0 0 4rem;
  flex: 1 1 100%;
  background-image: ${(props) => props.bgImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${StyledComponentMedia.desktop`
    flex: 1 1 45%;
    margin: 0 2rem 4rem;
  `};
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  padding: 0 5rem 5rem;
  height: 50%;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
    to top,
    rgba(51, 51, 51, 1),
    rgba(51, 51, 51, 0.75),
    rgba(51, 51, 51, 0.6),
    rgba(255, 255, 255, 0)
  );
  ${StyledComponentMedia.tablet`
    height: 42.5%;
  `};
  ${(props) =>
    props.bigName &&
    css`
      height: 60%;
      ${StyledComponentMedia.tablet`
        height: 50%;
      `};
    `};
`;

export const ItemName = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.white};
`;

export const ItemDescription = styled(ItemName)`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.xs};
  margin: 2rem 0;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.reg};
  `};
`;

export const ItemWorkInfo = styled.span`
  font-size: ${(props) => props.theme.fontSize.micro};
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.white};
`;

export const ItemWorkInfoRegular = styled(ItemWorkInfo)`
  font-weight: 400;
`;

export const VoteSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 20rem;
`;

export const VoteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  pointer-events: all;
  border: 1px solid white;
  transition: 0.25s all;
  &:hover {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.white};
  }
`;

export const PercentageVotesBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  height: 5rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const LikesPercentBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: ${(props) => props.votesPercent};
  background-color: ${(props) => props.theme.turquoiseOpacity};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.white};
`;

export const DislikesPercentBar = styled(LikesPercentBar)`
  background-color: ${(props) => props.theme.ocherOpacity};
  justify-content: flex-end;
`;

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
