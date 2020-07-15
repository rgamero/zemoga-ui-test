import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

const BackgroundHeader = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        popeFrancis: file(relativePath: { eq: "PopeFrancis.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const backgroundFluidImageStack = [
        data.popeFrancis.childImageSharp.fluid,
        `linear-gradient(rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.25), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))`
      ].reverse();

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={backgroundFluidImageStack}
          backgroundColor="#333333"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export const SectionWrapper = styled(BackgroundHeader)`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: 100vh;
  min-height: 70rem;
  width: 100%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 20rem;
  ${StyledComponentMedia.tablet`
    padding-top: 25rem;
  `};
  ${StyledComponentMedia.desktop`
    height: 95vh;
    padding-top: 15rem;
  `};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
  max-width: 55rem;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 3rem 4rem;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background-color: ${(props) => props.theme.backdrop};
`;

export const VotingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
`;

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 50%;
  background-color: ${(props) => props.theme.turquoiseOpacity};
`;

export const Dislike = styled(Like)`
  background-color: ${(props) => props.theme.ocherOpacity};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.white};
  margin-bottom: 2rem;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.reg};
  `};
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-bottom: 0.5rem;
`;

export const BigText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 400;
  ${StyledComponentMedia.desktop`
    font-size: ${(props) => props.theme.fontSize.lg};
  `};
`;

export const BoldText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.reg};
  font-weight: 700;
  margin: 3rem 0 2rem;
`;

export const UnderlinedText = styled.a`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.white};
  text-decoration: underline;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 7rem;
`;

export const PastTime = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 35%;
  background-color: ${(props) => props.theme.blackOpacity};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 7.5px solid transparent;
    border-left-color: ${(props) => props.theme.blackOpacity};
    border-right: 0;
    margin-top: -7.5px;
    margin-right: -7.5px;
  }
`;

export const PastTimeText = styled(SmallText)`
  text-transform: uppercase;
  margin: 0 1rem 0 0;
`;

export const RemainingTime = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 65%;
  background-color: ${(props) => props.theme.whiteOpacity};
`;

export const RemainingTimeText = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: 0 0 0 2rem;
  ${StyledComponentMedia.tablet`
    font-size: ${(props) => props.theme.fontSize.md};
  `};
`;
