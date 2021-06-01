import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Jean-Louis Mbaka</h1>
          <p>
            I'm a Co-Founder at{" "}
            <a href="https://kinshasadigital.com" target="__blank">
              Kinshasa Digital
            </a>{" "}
            and Managing Director of{" "}
            <a href="https://kinshasadigital.academy" target="__blank">
              Kinshasa Digital Academy
            </a>
          </p>
          <Link className={styles.btn} to="/contacts">
            Contact Me
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
