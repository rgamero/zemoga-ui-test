import styled from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

export const BannerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-bottom: 5rem;
`;

export const BannerContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 4rem;
  background-image: url('images/PeopleBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  &::before {
    background-color: rgba(255, 255, 255, 0.85);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
  ${StyledComponentMedia.desktop`
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 2rem 4rem;
  `};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  z-index: 1;
  margin-bottom: 4rem;
  ${StyledComponentMedia.desktop`
    text-align: left;
    margin-bottom: 0;
  `};
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  pointer-events: all;
  border: 1px solid ${(props) => props.theme.fontColor};
  transition: 0.25s all;
  z-index: 1;
  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.fontColor};
  }
`;
