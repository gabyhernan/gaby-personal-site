import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1> Gaby Hernandez logo </h1>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/contact"> Contact</Link>
      </nav>
    </header>
  )
}

export default Header
