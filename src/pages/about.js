import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"
import Footer from "./components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1> About Gaby</h1>
      <h2>
        {" "}
        Front End Software Engineer dedicated to creating user-focused
        experiences. Always eager to learn, my thirst for knowledge is as strong
        as my adoration for puppies. Have excelled in both client-facing and
        internal roles and have thrived and enjoyed working in various
        industries.
      </h2>

      <p>
        {" "}
        For inquiries please
        <Link to="/contact"> contact me </Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
