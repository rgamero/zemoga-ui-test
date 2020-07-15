import styled from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const BannerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 5rem 0;
`;

export const BannerContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.gray};
  padding: 2rem;
  ${StyledComponentMedia.desktop`
    flex-flow: row nowrap;
  `};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1 1 25%;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 1 1 75%;
  margin: 2rem 0;
  ${StyledComponentMedia.desktop`
    margin: 0;
  `};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.fontColor};
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.xs};
`;

export const BoldText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  letter-spacing: -1px;
`;
