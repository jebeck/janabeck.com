import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
import styled from "styled-components"
import { transparentize } from "polished"

import { textBg } from "../utils/colors"
import Link from "./link"

export const LINKS = [
  {
    path: "/",
    text: "home",
  },
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

const LinkText = styled.span`
  background-color: ${transparentize(0.4, textBg)};
  font-family: "Exo 2";
  font-weight: ${props => (props.active ? 800 : 400)};
  padding: 0.225rem 0.75rem;
`

export default function Header({ location }) {
  return (
    <>
      <Menu
        borderless
        fixed="right"
        style={{ backgroundColor: "transparent" }}
        vertical
      >
        {LINKS.map(({ href, path, text }) => {
          const isActive = path ? location === path : false
          if (path) {
            return (
              <Menu.Item
                active={isActive}
                key={path}
                style={{ textAlign: isActive ? "left" : "right" }}
              >
                <Link path={path}>
                  <LinkText active={isActive}>{text}</LinkText>
                </Link>
              </Menu.Item>
            )
          } else if (href) {
            return (
              <Menu.Item
                key={href}
                style={{ textAlign: isActive ? "left" : "right" }}
              >
                <a href={href} rel="noopener noreferrer" target="_blank">
                  <LinkText active={isActive}>{text}</LinkText>
                </a>
              </Menu.Item>
            )
          } else {
            return null
          }
        })}
      </Menu>
    </>
  )
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
}
