import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { bg } from "../utils/colors"

export default function Link({ children, path }) {
  if (!path.startsWith("/")) {
    throw new Error("Path should start with `/`!")
  }

  return (
    <AniLink bg={bg} cover direction="up" to={path}>
      {children}
    </AniLink>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  path: PropTypes.string.isRequired,
}
