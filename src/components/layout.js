/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import "typeface-exo-2"
import "typeface-droid-serif"

import "semantic-ui-less/semantic.less"

import { bg, text } from "../utils/colors"
import { rhythm, scale } from "../utils/typography"
import Header from "./header"

const Global = createGlobalStyle`
  :root {
    background-color: ${bg};
    color: ${text};
  }
  :focus {
    outline: none;
  }
`

const FooterEl = styled.footer`
  bottom: ${rhythm(1 / 16)};
  ${scale(-1 / 2)};
  position: fixed;
  right: ${rhythm(1 / 4)};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <FooterEl>
          © jana e. beck, 2012–{`${new Date().getFullYear()}`}
        </FooterEl>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
