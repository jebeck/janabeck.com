import React from "react"
import Markdown from "react-remarkable"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SpeakingPage = () => (
  <Layout location="/speaking">
    <SEO title="speaking" />
    <Markdown options={{ linkTarget: "_blank" }}>{`
# speaking

one of the things I've enjoyed most in my career switch from academia into tech is the vibrant _collaborative_ culture in tech, expressed in a high concentration at meetups and conferences where knowledge is freely (and often entertainingly!) shared.

over the years, I've been deeply impressed, humbled, and inspired by all the speakers who put extensive amounts of time into communicating subtle or difficult or often-overlooked concepts for the benefit of all.

## my speaking

I too love sharing what I've learned on the job or on the side—feel free to [get in touch](mailto:jana.eliz.beck@gmail.com) if you'd like to book me for your conference.

I've had the honor of taking the stage at the following events:

on **December 5th, 2019**, I presented [escaping flatland: a romance of data science in the browser (video)](https://www.youtube.com/watch?v=SSZmQ_mEK4I) in Paris, France; the [slides](http://janabeck.com/flatland/) are also online.

on **June 20th, 2019**, I presented "Data science in the browser: DX & UX" at [DinosaurJS](https://dinosaurjs.org/) in Denver, Colorado

on **June 8th, 2019**, I presented "Developers, go the f*ck to sleep" at [self.conference](https://selfconference.org/) in Detroit, Michigan

on **October 3rd, 2018**, I presented [better living through components (slides)](http://janabeck.com/better-living-thru-components/ 'better living through components slides') at the inaugural [Framework Summit](https://frameworksummit.com/ 'Framework Summit') in Park City, Utah

on **May 23rd, 2018**, I presented [escaping the diving bell (slides)](http://janabeck.com/diving-bell-talk/codemania/ 'escaping the diving bell slides') at [Codemania](https://codemania.io/ 'Codemania') in Auckland, New Zealand

on **October 24th, 2017**, I presented [Conversing with ES2015 and generators (slides)](http://janabeck.com/javascript-therapy/fsto2017/ 'Conversing with ES2015 and generators slides') at [Full Stack Toronto](https://www.fsto.co/ 'Full Stack Toronto')

on **September 8th, 2017**, I presented [Generating therapy in JavaScript (slides)](http://janabeck.com/javascript-therapy/ 'Generating therapy in JavaScript slides') at [Refresh](http://refresh.rocks/ 'Refresh') in Tallinn, Estonia(!)

on **September 1st, 2017**, I presented [Escaping the diving bell (slides)](http://janabeck.com/diving-bell-talk/nightly-build/ 'Escaping the diving bell slides') at [NightlyBuild](https://nightlybuild.io/ 'NightlyBuild') in Cologne, Germany

in **August 2017**, I presented [React-ing htmlFor=empathy (video)](https://www.youtube.com/watch?v=RMItRyEHcdo 'YouTube: React-ing htmlFor=empathy') at [React Rally](http://www.reactrally.com/ 'React Rally') in Salt Lake City, Utah, a stellar React conference that I've attended every year it's been run; the [slides for this talk](http://janabeck.com/diving-bell-talk/ 'React-ing htmlFor=empathy') are also available online

in **June 2017**, I presented [JavaScript therapy (video)](https://youtu.be/acIOV8wtkOo?t=5h16m00s 'YouTube: JavaScript therapy at Web Rebels') at [Web Rebels](https://www.webrebels.org/ 'Web Rebels') in Oslo, Norway

in **October 2016**, I presented [High-stakes React (slides)](http://janabeck.com/high-stakes-react/#/?_k=1u1qb0 'High-stakes React slides') at [ReactNL](http://reactnl.org/ 'React NL') in Amsterdam

in **August 2015**, I presented [Flux for Data Visualization: A Preliminary Manifesto (slides)](http://janabeck.com/flux-for-dataviz/ 'Flux for Data Visualization slides') at [React Rally](http://www.reactrally.com/ 'React Rally'); the [video of this talk](https://youtu.be/Fb8QB4FoKrI 'Video of Flux for Data Visualization talk') is available on YouTube

in **July 2015**, I presented [Power Tools for Powerful Visualization](http://janabeck.com/dataviz-power-tools/ 'Power Tools for Powerful Visualization slides') at [CascadiaFest 2015](http://2015.cascadiajs.com/ 'CascadiaFest 2015'); the [video and a transcript of this talk](http://2015.cascadiajs.com/speakers/jana-beck "Jana Beck's CascadiaFest 2015 talk") are available on the CascadiaFest website

in **December 2014**, I presented ["tideline (and zipline)"](http://janabeck.com/d3-meetup-talk/, 'tideline (and zipline) slides') at the monthly Oakland meetup for the [Bay Area D3 User Group](https://www.meetup.com/Bay-Area-d3-User-Group/ 'Meetup: Bay Area D3 User Group')
`}</Markdown>
  </Layout>
)

export default SpeakingPage
