/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { StateProvider } from './src/context';

export const wrapRootElement = ({ element }) => (
 <StateProvider>{element}</StateProvider>
);
