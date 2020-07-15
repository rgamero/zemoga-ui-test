import { css } from 'styled-components';

const mediaQuery = (...query) => (...rules) => css`
  @media ${css(...query)} {
    ${css(...rules)};
  }
`;

const sizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  giant: 1369
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const StyledComponentMedia = {
  mobile: mediaQuery`(min-width: ${(sizes.mobile + 1) / 16}em)`,
  tablet: mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
  desktop: mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
  giant: mediaQuery`(min-width: ${sizes.giant / 16}em)`
};

export default StyledComponentMedia;
