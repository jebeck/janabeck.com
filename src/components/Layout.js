/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { grayscale } from "polished"
import styled, { createGlobalStyle } from "styled-components"
import { transparentize } from "polished"
import { useStaticQuery, graphql } from "gatsby"

import { analogous, bg, border, text, textBg } from "../utils/colors"
import Header from "./Header"
import Link from "./Link"
import { isOnMobile } from "../utils/mobileMediaQuery"
import { rhythm } from "../utils/typography"
import { TextShadow } from "../styled"

const BackLink = styled(TextShadow)`
  ::before {
    content: "< ";
  }
  color: ${grayscale(text)};
  font-weight: 900;
`

function BackgroundImg({ className, image }) {
  return image ? (
    <BackgroundImage
      aria-label="background image"
      backgroundColor={bg}
      className={className}
      fluid={image.childImageSharp.fluid}
      role="img"
    />
  ) : null
}

BackgroundImg.propTypes = {
  className: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }),
}

const StyledBackgroundImg = styled(BackgroundImg)`
  background-attachment: fixed;
  background-position: bottom right;
  border-bottom: 10px solid ${border};
  height: 100vh;
  width: 100vw;
`

const Global = createGlobalStyle`
  body {
    background: ${({ isOnMobile }) =>
      isOnMobile
        ? `linear-gradient(
    ${analogous[0]} 33.33%,
    ${analogous[1]} 46.67%,
    ${analogous[2]} 60%,
    ${analogous[3]} 73.33%,
    ${analogous[4]} 86.67%
  )`
        : bg};
    background-color: ${bg};
    background-size: ${({ isOnMobile }) => (isOnMobile ? "125%" : "100%")};
    height: ${({ isOnMobile }) => (isOnMobile ? "125%" : "100%")};
  }
  :focus {
    outline-color: #F9ADA0;
  }
`

const Main = styled.main`
  background: ${({ hasChildren }) =>
    hasChildren ? transparentize(0.05, textBg) : "transparent"};
  li {
    line-height: 1.4285em;
  }
  margin: ${({ isOnMobile }) => (isOnMobile ? rhythm(1 / 4) : rhythm(1))};
  padding: ${({ isOnMobile }) =>
    isOnMobile ? `${rhythm(1.5)} ${rhythm(1 / 2)}` : rhythm(1)};
`

const FooterEl = styled.footer`
  font-family: "Exo 2";
  font-weight: 600;
  bottom: ${rhythm(1 / 4)};
  position: fixed;
  right: 1.125em;
`

function setVhVar() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

const Layout = ({ children, location }) => {
  useEffect(() => {
    setVhVar()

    if (isOnMobile) {
      window.addEventListener("resize", setVhVar)

      return window.removeEventListener("resive", setVhVar)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "SGt.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1680) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Global isOnMobile={isOnMobile} />
      {isOnMobile ? (
        <>
          {location === "/" ? null : (
            <nav
              style={{
                right: rhythm(2 / 3),
                position: "fixed",
                top: rhythm(3 / 8),
              }}
            >
              <Link path="/" style={{ textDecoration: "none" }}>
                <BackLink>back</BackLink>
              </Link>
            </nav>
          )}
          <Main hasChildren={!!children} isOnMobile>
            {children}
          </Main>
        </>
      ) : (
        <>
          <StyledBackgroundImg image={data.bgImage} />
          <Header location={location} />
          <div
            style={{
              left: 0,
              position: "absolute",
              top: 0,
              width: `calc(100vw - 15rem)`,
            }}
          >
            <Main hasChildren={!!children} isOnMobile={false}>
              {children}
            </Main>
            <FooterEl>
              <TextShadow>
                © jana e. beck, 2012–{`${new Date().getFullYear()}`}
              </TextShadow>
            </FooterEl>
          </div>
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string.isRequired,
}

export default Layout
