import React from "react"
import Layout from "./components/layout"

const ContactPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default ContactPage
