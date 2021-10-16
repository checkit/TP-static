import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main className="px-5">{children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
