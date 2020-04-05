import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { bg, text } from "../utils/colors"
import { isOnMobile } from "../utils/mobileMediaQuery"

export default function Link({ children, path }) {
  if (!path.startsWith("/")) {
    throw new Error("Path should start with `/`!")
  }

  return (
    <AniLink
      bg={bg}
      hex={text}
      cover={!isOnMobile}
      direction="up"
      paintDrip={isOnMobile}
      to={path}
    >
      {children}
    </AniLink>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  path: PropTypes.string.isRequired,
}
