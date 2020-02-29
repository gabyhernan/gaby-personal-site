import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
const Layout = props => {
  return (
    <div className={props.fullWidth ? layoutStyles.fullWidth : layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main>
          <p> {props.children} </p>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
