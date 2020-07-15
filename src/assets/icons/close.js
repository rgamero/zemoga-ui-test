import React from 'react';
import styled from 'styled-components';
import StyledComponentMedia from '../../utils/mediaQueriesUtils';

const IconWrapper = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 1rem;
  width: 1rem;
  margin: 0;
  cursor: pointer;
  pointer-events: all;
  ${StyledComponentMedia.desktop`
    position: static;
    top: unset;
    right: unset;
    flex-flow: row nowrap;
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 2.5rem;
  `};
`;

const CloseIcon = ({ clickHandler }) => (
  <IconWrapper
    x="0px"
    y="0px"
    viewBox="0 0 512.001 512.001"
    onClick={clickHandler}
  >
    <g>
      <path
        d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
        L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
        c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
        l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
        L284.286,256.002z"
      />
    </g>
  </IconWrapper>
);

export default CloseIcon;
