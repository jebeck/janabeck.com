/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { MOBILE_WIDTH } from "typography-breakpoint-constants"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "typeface-exo-2"
import "typeface-droid-serif"

import "semantic-ui-less/semantic.less"

import { bg, text } from "../utils/colors"
import Header from "./header"
import { rhythm, scale } from "../utils/typography"
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
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`

const Global = createGlobalStyle`
  :root {
    color: ${text};
  }
  :focus {
    outline: none;
  }
`

const FooterEl = styled.footer`
  ${scale(1 / 8)};
  font-family: "Exo 2";
  font-weight: 800;
  bottom: ${rhythm(1 / 4)};
  position: fixed;
  right: ${rhythm(1 / 4)};
`

const Layout = ({ children, location }) => {
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

  return onMobile ? null : (
    <>
      <Global />
      <StyledBackgroundImg image={data.bgImage} />
      <Header location={location} />
      <div>
        <main>{children}</main>
        <FooterEl>
          <TextShadow>
            © jana e. beck, 2012–{`${new Date().getFullYear()}`}
          </TextShadow>
        </FooterEl>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}

export default Layout
