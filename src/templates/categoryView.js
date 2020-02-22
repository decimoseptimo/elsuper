import React from "react"
import slugify from "slugify"
import { graphql, navigate } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Breadcrumbs from "../components/breadcrumbs"
import Pagination from "../components/pagination"
import SubcategoryLink from "../components/subcategoryLink"

const CategoryView = props => {
  const products = props.data.allProductsJson.edges
  const {
    category,
    subcategories,
    allSupercategories,
    productsCount,
  } = props.pageContext

  const subcategories2 = (
    <div className="subcategories">
      {subcategories.map(i => (
        <SubcategoryLink to={`/${slugify(i.name.toLowerCase())}`} key={i._id}>
          {i.name}
        </SubcategoryLink>
      ))}
    </div>
  )

  const handlePageChange = (e, d) => {
    d.activePage === 1
      ? navigate(`/${slugify(category.name.toLowerCase())}`)
      : navigate(`/${slugify(category.name.toLowerCase())}/${d.activePage}`)
  }

  return (
    <>
      <SEO
        title={category.name}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Breadcrumbs data={allSupercategories} />
      <h1 className="categoryViewTitle">
        {category.name} ({productsCount})
      </h1>
      {subcategories2}

      <ProductGrid products={products} />
      <Pagination
        current={props.pageContext.humanPageNumber}
        total={props.pageContext.numberOfPages}
        pageSize={1}
        onChange={handlePageChange}
      />
      <style jsx global>{`
        .subcategories {
          margin-bottom: 1rem;
        }

        .categoryViewTitle {
          margin-top: 0;
        }
      `}</style>
    </>
  )
}

export default CategoryView

export const pageQuery = graphql`
  query($allSubcategoriesIds: [String], $skip: Int!, $limit: Int!) {
    allProductsJson(
      filter: { parent_id: { in: $allSubcategoriesIds } }
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
              fluid(maxWidth: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
