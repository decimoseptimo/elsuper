import React from "react"
import slugify from "slugify"
import { Link, Image, graphql, navigate } from "gatsby"
import { Icon } from "semantic-ui-react"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
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

  const breadcrumbs = (
    <div className="breadcrumbs">
      <div className="breadcrumbs-wrapper">
        {allSupercategories.map(i => (
          <span class="item" key={i.id}>
            <Link to={`/${slugify(i.name.toLowerCase())}`}>{i.name}</Link>
          </span>
        ))}
      </div>
    </div>
  )

  const subcategories2 = (
    <div className="subcategories">
      {subcategories.map(i => (
        <SubcategoryLink to={`/${slugify(i.name.toLowerCase())}`} key={i.id}>
          {i.name}
        </SubcategoryLink>
      ))}
    </div>
  )

  const handlePageChange = (e, d) => {
    d.activePage == 1
      ? navigate(`/${slugify(category.name.toLowerCase())}`)
      : navigate(`/${slugify(category.name.toLowerCase())}/${d.activePage}`)
  }

  return (
    <>
      <SEO
        title={category.name}
        keywords={[`gatsby`, `application`, `react`]}
      />
      {allSupercategories.length > 0 && breadcrumbs}
      <h1>
        {category.name} ({productsCount})
      </h1>
      {subcategories2}

      <ProductGrid products={products} />
      <Pagination
        activePage={props.pageContext.humanPageNumber}
        ellipsisItem={{
          content: <Icon name="circle" />,
          icon: true,
        }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        totalPages={props.pageContext.numberOfPages}
        firstItem={null}
        lastItem={null}
        // ellipsisItem={null}
        onPageChange={handlePageChange}
      />
      <style jsx global>{`
        .breadcrumbs {
          margin-top: -2.5rem;
          margin-bottom: -0.65rem;
        }

        .breadcrumbs-wrapper {
          background: #eee;
          display: inline-block;
          padding-left: 5px;
          padding-right: 1px;
        }
        .breadcrumbs .item {
          background-color: #eee;
          color: #aaa;
        }

        .breadcrumbs .item a {
          text-transform: uppercase;
          font-size: 11px;
          color: #aaa;
          position: relative;
          top: -1px;
        }
        .breadcrumbs .item a:after {
          content: "/";
          position: relative;
          padding: 0 3px;
        }

        .subcategories {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}

export default CategoryView

export const pageQuery = graphql`
  query($allSubcategoriesIds: [String], $skip: Int!, $limit: Int!) {
    allProductsJson(
      filter: { category_id: { in: $allSubcategoriesIds } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          price
          unit
          min_quantity
          max_quantity
          slug
          images {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
