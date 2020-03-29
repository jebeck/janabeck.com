import React from "react"
import styled from "styled-components"

import { bg, text } from "../utils/colors"
import Layout from "../components/layout"
import { MOBILE_WIDTH } from "typography-breakpoint-constants"
import { rhythm } from "../utils/typography"
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

const MobileNameHeader = styled(NameHeader)`
  left: 0;
  text-align: center;
  width: 100%;
`

const IndexPage = () => {
  const onMobile = window.matchMedia(`(max-width: ${MOBILE_WIDTH})`).matches
  const HeaderComponent = onMobile ? MobileNameHeader : NameHeader

  return (
    <>
      <HeaderComponent>
        <TextShadow>jana e. beck</TextShadow>
      </HeaderComponent>
      <Layout location="/"></Layout>
    </>
  )
}

export default IndexPage
