import React from "react"
import PropTypes from "prop-types"
import { MOBILE_WIDTH } from "typography-breakpoint-constants"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { bg, text } from "../utils/colors"

export default function Link({ children, path }) {
  const onMobile = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`).matches
  if (!path.startsWith("/")) {
    throw new Error("Path should start with `/`!")
  }

  return (
    <AniLink
      bg={bg}
      hex={text}
      cover={!onMobile}
      direction="up"
      paintDrip={onMobile}
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
