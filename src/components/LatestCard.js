import Card from "./Card"
import React from "react"

const LatestCard = ({ item, to, image, title }) => (
  <div className="col-12 col-md-3 col-lg-4">
    <h2>Latest read</h2>
    <Card
      to={`/reading/${item.frontmatter.slug}`}
      image={item.frontmatter.bookCover.childImageSharp.gatsbyImageData}
      title={item.frontmatter.title}
    />
    <Link to="/reading">All speaking &rarr;</Link>
  </div>
)

export default LatestCard
