# Zemoga UI test


##    Test overview

In this test I've developed the following parts, as a front-end developer:
 - [x] Layout HTML-CSS.
 - [x] Interaction - JS

For the interaction part I choose React.js because is the Javascript library I'm more comfortable with and regarding the CSS I didn't use a framework like Bootstrap or Material UI; instead of that I preferred to use a CSS-in-JS library such Styled components. This preference relies on performance and personal preferences regarding the scoping of the styles, apart of another benefits that Styled components provides like theming, and a perfect option to work with React component to get advantage of the props handling. About the state management I created a reducer with the useReducer hook and serving the data across the app with the React Context API.

## Missing issues

I'd like to create a better UX, specially for mobile devices but I couldn't achieve that due to time constraints regarding my current job. I would like to implement a nice library to develop animations like GSAP but the lack of a detailed mockup for mobile focused me in develop with quality the part related to the voting interactions.

## How to run

For this test I used a famous server-side starter for React called Gatsby.js, specialized in build static sites.

To run this test, just run the following commands: `yarn` for install dependencies and `yarn start` to run develop mode,  or `yarn build` and `yarn serve` for production build.

Develop mode will show up in `localhost:8000` and prod in `localhost:9000`.
