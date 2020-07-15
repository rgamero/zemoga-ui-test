import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.svg`
  height: 2rem;
  width: 2rem;
  margin-left: 2.5rem;
  fill: ${(props) => props.theme.white};
`;

const SearchIcon = () => (
  <IconWrapper x="0px" y="0px" viewBox="0 0 451 451">
    <g>
      <path
        d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
        s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
        C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
        s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
      />
    </g>
  </IconWrapper>
);

export default SearchIcon;
