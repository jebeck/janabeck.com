import { Link } from "gatsby"
import React, { useRef } from "react"
import PropTypes from "prop-types"
import { lighten } from "polished"
import { Menu } from "semantic-ui-react"
import { MOBILE_WIDTH } from "typography-breakpoint-constants"
import styled, { createGlobalStyle } from "styled-components"
import useComponentSize from "@rehooks/component-size"

import { border, text } from "../utils/colors"

const LINKS = [
  {
    path: "/about",
    text: "about",
  },
  {
    href: "https://blog.janabeck.com",
    text: "blog",
  },
  {
    path: "/resume",
    text: "résumé",
  },
  {
    path: "/speaking",
    text: "speaking",
  },
]

const GlobalLinkStyle = createGlobalStyle`
  a {
    &:active,
    &:hover,
    &:focus {
      background-color: ${lighten(0.125, border)};
      color: ${lighten(0.2, text)};
      text-decoration: underline;
    }
  }
`

const NavList = styled.nav`
  align-items: center;
  display: flex;
  a {
    padding: 0.5rem 1rem;
  }
`

export default function Header({ siteTitle }) {
  let siteTitleRef = useRef(null)
  let { height } = useComponentSize(siteTitleRef)

  const onMobile = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`).matches

  return (
    <>
      <GlobalLinkStyle />
      <Menu borderless={onMobile ? true : false} fixed="top">
        <Link to="/" ref={siteTitleRef}>
          <Menu.Item style={{ fontWeight: "bold" }}>{siteTitle}</Menu.Item>
        </Link>
        {onMobile ? (
          <Menu.Menu position="right">
            <button
              onClick={() => {}}
              style={{
                backgroundColor: "transparent",
                border: "none",
                height,
                padding: "0.25em 0.75em",
                width: `calc(${height}px + 1.5em)`,
              }}
            >
              <svg
                display="block"
                height="100%"
                style={{ pointerEvents: "none" }}
                viewBox={`0 0 100 100`}
                width="100%"
              >
                {/* <rect fill="gray" height={100} width={100} x={0} y={0} /> */}
                <line
                  stroke={text}
                  strokeWidth={6}
                  x1={10}
                  x2={90}
                  y1={25}
                  y2={25}
                />
                <line
                  stroke={text}
                  strokeWidth={6}
                  x1={0}
                  x2={100}
                  y1={50}
                  y2={50}
                />
                <line
                  stroke={text}
                  strokeWidth={6}
                  x1={10}
                  x2={90}
                  y1={75}
                  y2={75}
                />
              </svg>
            </button>
          </Menu.Menu>
        ) : (
          <Menu.Menu as={NavList} position="right">
            {LINKS.map(({ href, path, text }) => {
              if (path) {
                return (
                  <Link key={path} to={path}>
                    {text}
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
                    {text}
                  </a>
                )
              } else {
                return null
              }
            })}
          </Menu.Menu>
        )}
      </Menu>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
