import React from "react"
import slugify from "slugify"
import { graphql, Link, navigate } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Breadcrumbs from "../components/breadcrumbs"
import Pagination from "../components/pagination"
import SubcategoryLink from "../components/subcategoryLink"

const CategoryView = (props) => {
  const products = props.data.allProductsJson.edges
  const {
    category,
    subcategories,
    allSupercategories,
    productsCount,
  } = props.pageContext

  const subcategories2 = (
    <div className="subcategories">
      {subcategories.map((i) => (
        <SubcategoryLink to={`/${slugify(i.name.toLowerCase())}`} key={i._id}>
          {i.name}
        </SubcategoryLink>
      ))}
    </div>
  )

  const handlePageChange = (current) => {
    current === 1
      ? navigate(`/${slugify(category.name.toLowerCase())}`)
      : navigate(`/${slugify(category.name.toLowerCase())}/${current}`)
  }

  const itemRender = (current, type, element) => {
    if (type === "page") {
      if (current === 1)
        return (
          <Link to={`/${slugify(category.name.toLowerCase())}`}>{current}</Link>
        )
      return (
        <Link to={`/${slugify(category.name.toLowerCase())}/${current}`}>
          {current}
        </Link>
      )
    }
    return element
  }

  return (
    <>
      <SEO
        title={category.name}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Breadcrumbs data={allSupercategories} />
      <h1 className="categoryViewTitle">
        {category.name} <span className="productsCount">{productsCount}</span>
      </h1>
      {subcategories2}

      <ProductGrid products={products} />
      <Pagination
        current={props.pageContext.humanPageNumber}
        total={props.pageContext.numberOfPages}
        pageSize={1}
        itemRender={itemRender}
        onChange={handlePageChange}
      />
      <style jsx global>{`
        .subcategories {
          margin-bottom: 1rem;
        }

        .categoryViewTitle {
          margin-top: 0;
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
          color: #222;
        }

        .productsCount {
          font-weight: 300;
          font-size: 1.7rem;
        }
      `}</style>
    </>
  )
}

export default CategoryView

export const pageQuery = graphql`query ($allSubcategoriesIds: [String], $skip: Int!, $limit: Int!) {
  allProductsJson(
    filter: {parent_id: {in: $allSubcategoriesIds}}
    skip: $skip
    limit: $limit
  ) {
    edges {
      node {
        _id
        title
        price
        unit
        min_quantity
        max_quantity
        slug
        images {
          childImageSharp {
            gatsbyImageData(width: 550, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`
