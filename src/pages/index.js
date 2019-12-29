import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import { bg, text } from "../utils/colors"
import { TextShadow } from "../styled"

const NameHeader = styled.h1`
  color: ${text};
  font-weight: 900;
  left: 0.625em;
  position: fixed;
  top: ${rhythm(1 / 4)};
  z-index: 2;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${bg};
`

const IndexPage = () => (
  <>
    <NameHeader>
      <TextShadow>jana e. beck</TextShadow>
    </NameHeader>
    <Layout location="/"></Layout>
  </>
)

export default IndexPage
