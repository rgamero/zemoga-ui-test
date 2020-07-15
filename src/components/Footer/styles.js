import styled from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const FooterWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 5rem;
  background-image: linear-gradient(
    to right,
    black 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  ${StyledComponentMedia.desktop`
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 2rem 4rem;
  `};
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  ${StyledComponentMedia.tablet`
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-bottom: 0;
  `};
`;

export const TextLink = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  ${StyledComponentMedia.desktop`
    text-align: left;
    margin: 0 2rem 0;
  `};
`;
