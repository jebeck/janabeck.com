import React from "react"
import Markdown from "react-remarkable"

import Layout from "../components/layout"
import Link from "../components/link"
import SEO from "../components/seo"

/** TODO: IPA hint [= (ˈd͡ʒæ·nə bɛk)] + audio
 * and will need Lato or another font for the IPA hint 😢
 */

/** TODO: add pics (me partial profile laughing, GitHub profile image, magnolias image) */

const AboutPage = () => (
  <Layout location="/about">
    <SEO title="about" />
    <Markdown>{`
# jana e. beck

@jebeck most places on the Internet, like [GitHub](https://github.com/jebeck) and various Slacks; [@iPancreas](https://twitter.com/iPancreas) on Twitter

you can also [electronic mail me](mailto:jana.eliz.beck@gmail.com)

## jobs

**presently**: data visualization engineer in [Stitch Fix Algorithms](https://algorithms-tour.stitchfix.com/)

**formerly**: software engineer at [Tidepool](https://www.tidepool.org/)
`}</Markdown>
    <p style={{ marginTop: "1em" }}>
      for more details about my coding experience and skills, head over to
      my&nbsp;
      <Link path="/resume">résumé</Link>
    </p>
    <Markdown>{`
## on the side

most of the time, you can spy on my coding side projects [on GitHub](https://github.com/jebeck?utf8=%E2%9C%93&tab=repositories&q=&type=source) (because they are usually public)

lately, I'm mostly experimenting with music synthesis & visualization

non-coding pursuits include ballet plus pilates and TRX to keep active

I'm also a public transportation enthusiast, a frequent traveler, a bit of a snob about coffee, and a movie nerd (but not that snobby of one)

I have [a blog-shaped space](https://blog.janabeck.com/) where I _very occasionally_ post, but I am always aspiring to post more frequently

## the background image

is from inside the Szent Gellért tér station on the M4 metro line in Budapest, Hungary
  `}</Markdown>
  </Layout>
)

export default AboutPage
