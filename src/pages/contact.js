import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1> Let's Talk</h1>
      <p>
        {" "}
        Any questions, want to collaborate , share puppy videos,
        <a
          href="https://www.linkedin.com/in/gabyhernan/"
          target="_blank"
          rel="noopener
               noreferrer"
        >
          {" "}
          email me.{" "}
        </a>{" "}
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
