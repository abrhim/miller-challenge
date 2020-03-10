import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/Grid.css"
// import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <div className="menu-grid">
      <div className="menu-item">
        <div className="menu-item-header">Some special Header stuff</div>
      </div>
      <div className="menu-item">
        <Link to="page-2">
          <div className="menu-item-content">💩</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="page-3">
          <div className="menu-item-content">👀</div>
        </Link>
      </div>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
