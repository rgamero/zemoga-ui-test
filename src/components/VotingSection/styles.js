import styled, { css } from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const VotingSectionWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 5rem 0;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.fontColor};
  margin: 0 0 5rem;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.lg};
    margin: 0 0 5rem 2rem;
    align-self: flex-start;
  `};
`;

export const VotingContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
`;
