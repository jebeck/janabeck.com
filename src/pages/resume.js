import React from "react"
import Markdown from "react-remarkable"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { scale } from "../utils/typography"

const StyledResume = styled.div`
  ${scale(-1 / 8)};
`

const StyledTable = styled.table`
  margin-top: 1em;
  ${scale(-1 / 8)};
`

const ResumePage = () => (
  <Layout location="/resume">
    <SEO title="resume" />
    <StyledResume>
      <Markdown options={{ linkTarget: "_blank" }}>
        {`
# jana e. beck

front-end focused web application & data visualization engineer

test-driven, CI approved

## technical skills

### highest proficiency

_the vast majority of my work and side project time employs these skills_

#### JavaScript

- single-page apps with React and related tools (React/Reach Router, w/ & w/o Redux, Gatsby, Next.js &c)
- interactive data visualization with D3 (and preferably also React), rendering in SVG or Canvas
- UI and data visualization animation with CSS3, D3 transitions, various React animation libraries, and/or GreenSock (GSAP)
- unit testing (Jest or Karma + Mocha + Chai; Travis and Circle CI)
- real-time apps on a BaaS (e.g., Firebase)
- interactive Node.js CLI tools using Inquirer.js
- publishing libraries with Webpack or rollup

#### HTML5 & CSS3

- compliance with web standards and WCAG 2.0 for accessibility
- experience with major CSS preprocessors (Less, Sass, PostCSS)
- modularity and componentization with CSS modules, 💅 styled components, or 👩‍🎤 emotion

#### other

- version control with git & GitHub
- building project pages & documentation with Jekyll, GitBook, Storybook, or Styleguidist

### other areas of experience

_skills I practice only occasionally or practiced in the past_

#### JavaScript

- WebGL visualization via Three.js and/or Pixi.js
- end-to-end testing with Nightwatch.js
- static typing in JavaScript with TypeScript or Flow

#### Python

- scientific computing with SciPy, pandas, &c
- natural language processing with NLTK

#### R

- statistical data analysis
- data visualization with ggplot2

## (as of yet undeveloped) interests

_I am curious about..._

- native iOS/iPadOS/watchOS app development with Swift(UI)
- functional languages (likely elm or Clojure and/or ClojureScript)
- ReactiveX, most likely RxJS

## noteworthy projects

### internal-use React component library at Stitch Fix

designed and led development of a library of React components for internal use within Stitch Fix’s [Algorithms department](https://multithreaded.stitchfix.com/algorithms/). the components handle data fetching and storage from and to Algo's shared data warehouse and other internal services and allow for fast and newbie-friendly app development across the department, where our "full stack" data scientists and other data platform engineers are, for the most part, not proficient with web development or React.

### \`rappstar\` and other CLI tools at Stitch Fix

designed and led development of a wizard-style CLI wrapper around create-react-app (CRA) to facilitate quick and beginner-friendly app development by data scientists and fellow data platform engineers. the tool customizes the output of CRA to include internal dependencies and configuration. other CLI tools include a script for building a CRA app and pushing the result to an S3 bucket set up for static web hosting.

### data visualization at Tidepool

led initial development of Tidepool’s data visualization libraries [tideline](https://github.com/tidepool-org/tideline) and [@tidepool/viz](https://github.com/tidepool-org/viz). both libraries employ React and D3 to implement UI components for interactive data visualizations in Tidepool’s main web application ["blip"](https://github.com/tidepool-org/blip) as well as utilities for data (pre-)processing and on-the-fly calculation of a variety of statistical measures.

### Redux migrations at Tidepool

led the migration of Tidepool’s uploader (a Chrome app) and blip (a web application) to use Redux for state management, vastly increasing test coverage for both applications in the process.

### “bootstrapping” to UTC at Tidepool

designed and implemented (in the Tidepool [uploader](https://github.com/tidepool-org/uploader)) an algorithm—dubbed “bootstrapping to UTC.” the algorithm infers the UTC timestamp from device-relative display timestamps on diabetes devices. for more information, refer to [the technical documentation](https://developer.tidepool.org/uploader/docs/BootstrappingToUTC.html) or [the less technical blog post](https://www.tidepool.org/blog/its-a-matter-of-time) explaining the feature.

### PHL+ to Work for the 2013 apps for Philly transit hackathon

member of the winning team at [the 2013 Apps for Philly Transit Hackathon](https://technical.ly/philly/2013/10/02/apps-philly-transit-hackathon-winners/). our project [‘PHL+ to Work’](http://janabeck.com/PHLWork/) ([code on GitHub](https://github.com/jebeck/PHLWork)) provides a visual interface (built with D3 and Leaflet) for searching American Community Survey data connecting locations (specifically census tracts) where residents of the greater Philadelphia area live to the locations where those residents commute to work.

### Annotald at the University of Pennsylvania

contributed to [Annotald](http://annotald.github.io/), a WebKit browser-based GUI annotation tool for constructing large corpora of syntactically annotated sentences in the Penn [Treebank](https://en.wikipedia.org/wiki/Treebank) format used by researchers in the University of Pennsylvania’s linguistics department as well as at the University of Iceland, Newcastle University, and the University of York. my contributions included a refactoring of the CSS to allow users to define a customized color theme as well as helping to design and implement [the limited display mode](http://annotald.github.io/user.html#limiteddisplay).

## employment history
`}
      </Markdown>
      <StyledTable>
        <tbody>
          <tr>
            <td>2017–present</td>
            <td>
              Data Visualization Engineer, Stitch Fix Algorithms (San Francisco,
              CA)
            </td>
          </tr>
          <tr>
            <td>2013–2017</td>
            <td>Software Engineer, Tidepool Project (San Francisco, CA)</td>
          </tr>
          <tr>
            <td>2010–2011</td>
            <td>
              Teaching Assistant, Linguistics Department, University of
              Pennsylvania (Philadelphia, PA)
            </td>
          </tr>
          <tr>
            <td>2008</td>
            <td>
              Development Assistant, Foundation for Individual Rights in
              Education (Philadelphia, PA)
            </td>
          </tr>
          <tr>
            <td>2007–2008</td>
            <td>
              Collection Development Assistant, Van Pelt Library, University of
              Pennsylvania (Philadelphia, PA)
            </td>
          </tr>
          <tr>
            <td>2006</td>
            <td>
              E-Tutor, Computer Science Department, New York University (New
              York, NY)
            </td>
          </tr>
          <tr>
            <td>2005–2007</td>
            <td>Sales Associate, The Scholastic Store (New York, NY)</td>
          </tr>
          <tr>
            <td>2004–2005</td>
            <td>Book Review Intern, Library Journal (New York, NY)</td>
          </tr>
        </tbody>
      </StyledTable>
      <Markdown>
        {`
## education

M.A. in Linguistics. School of Arts & Sciences, University of Pennsylvania, 2013.

B.A. in Individualized Study, _summa cum laude_. Gallatin School, New York University, 2007.
`}
      </Markdown>
    </StyledResume>
  </Layout>
)

export default ResumePage
