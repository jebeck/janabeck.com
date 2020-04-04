import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>wat</h1>
    <p>
      you just navigated to a page that does not exist...in <em>this</em>{" "}
      dimension
    </p>
  </Layout>
)

export default NotFoundPage
