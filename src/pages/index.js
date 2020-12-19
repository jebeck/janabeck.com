import React from "react"
import { grayscale } from "polished"
import styled from "styled-components"

import { bg, text } from "../utils/colors"
import { isOnMobile } from "../utils/mobileMediaQuery"
import Layout from "../components/Layout"
import Link from "../components/Link"
import { LINKS } from "../components/Header"
import { rhythm } from "../utils/typography"
import SEO from "../components/SEO"
import { TextShadow } from "../styled"

const NameHeader = styled.h1`
  color: ${text};
  font-weight: 900;
  left: 0.625em;
  position: fixed;
  top: ${rhythm(1 / 4)};
  z-index: 2;
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${bg}; */
`

const MobileNameHeader = styled(NameHeader)`
  color: ${grayscale(text)};
  left: 0;
  text-align: center;
  width: 100%;
`

const MobileNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 75);
  justify-content: space-around;
  position: fixed;
  text-align: center;
  top: calc(var(--vh, 1vh) * 20);
  width: 100%;

  a {
    color: ${grayscale(text)};
    font-weight: 900;
  }
`

const IndexPage = () => {
  const HeaderComponent = isOnMobile ? MobileNameHeader : NameHeader

  return (
    <>
      <HeaderComponent>
        <TextShadow>jana e. beck</TextShadow>
      </HeaderComponent>
      {isOnMobile ? (
        <MobileNav>
          {LINKS.slice(1).map(({ href, path, text }) => {
            if (path) {
              return (
                <Link key={path} path={path}>
                  <TextShadow>{text}</TextShadow>
                </Link>
              )
            } else if (href) {
              return (
                <a
                  href={href}
                  key={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TextShadow>{text}</TextShadow>
                </a>
              )
            } else {
              return null
            }
          })}
        </MobileNav>
      ) : null}
      <SEO title="🏠" />
      <Layout location="/"></Layout>
    </>
  )
}

export default IndexPage
