/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { MOBILE_WIDTH } from "typography-breakpoint-constants"
import styled, { createGlobalStyle } from "styled-components"
import { transparentize } from "polished"
import { useStaticQuery, graphql } from "gatsby"

import "typeface-exo-2"
import "typeface-source-sans-pro"

import "semantic-ui-less/semantic.less"

import { analogous, bg, border, textBg } from "../utils/colors"
import Header from "./header"
import { rhythm } from "../utils/typography"
import { TextShadow } from "../styled"

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
    background: ${({ onMobile }) =>
      onMobile
        ? `linear-gradient(
    ${analogous[0]} 33.33%,
    ${analogous[1]} 46.67%,
    ${analogous[2]} 60%,
    ${analogous[3]} 73.33%,
    ${analogous[4]} 86.67%
  )`
        : "initial"};
  }
  :focus {
    outline-color: #F9ADA0;
  }
`

const FooterEl = styled.footer`
  font-family: "Exo 2";
  font-weight: 600;
  bottom: ${rhythm(1 / 4)};
  position: fixed;
  right: 1.125em;
`

const Layout = ({ children, location }) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
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

  const onMobile = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`).matches

  return (
    <>
      <Global onMobile={onMobile} />
      {onMobile ? (
        <main>{children}</main>
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
            <main
              style={{
                background: children
                  ? transparentize(0.05, textBg)
                  : "transparent",
                margin: rhythm(1),
                padding: rhythm(2),
              }}
            >
              {children}
            </main>
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
