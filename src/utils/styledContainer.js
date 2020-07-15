import styled, { css } from 'styled-components';
import StyledComponentMedia from './mediaQueriesUtils';

export default styled.div`
  display: flex;
  max-width: 140rem;
  width: calc(100% - 4rem);
  margin: auto;
  ${StyledComponentMedia.tablet`
    width: calc(100% - 8rem);
  `};
  ${StyledComponentMedia.giant`
    width: calc(100% - 16rem);
  `};

  ${(props) =>
    props.header &&
    css`
      align-items: flex-start;
      margin: 0 auto;
      padding: 1rem 0;
      ${StyledComponentMedia.tablet`
        padding: 0 4rem;
      `};
      ${StyledComponentMedia.desktop`
        padding: 0 6rem;
      `};
    `};

  ${(props) =>
    props.main &&
    css`
      position: relative;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      ${StyledComponentMedia.tablet`
        padding: 0 4rem;
      `};
      ${StyledComponentMedia.desktop`
        padding: 0 4rem;
      `};
    `};

  ${(props) =>
    props.footer &&
    css`
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 2rem 0;
      ${StyledComponentMedia.tablet`
        justify-content: space-between;
        flex-flow: row nowrap;
        padding: 0 2rem;
      `};
    `};
`;
