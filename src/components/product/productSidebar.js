import React from "react"

const ProductSidebar = (props) => {
  return (
    <div className="product-sidebar">
      <div className="block">
        <h3>Sidebar #1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid,
        animi dicta dolores eaque facere in.</p>
      </div>

      <div className="block">
        <h3>Sidebar #2</h3>
      <p>Iure nemo pariatur possimus quaerat quam quidem ratione reiciendis
        repellendus? Corporis incidunt perspiciatis quae?</p>
      </div>

      <style jsx>{`
        .product-sidebar {

        }

        .block {
          margin-bottom: 1rem;
          padding: 1rem;
          background-color: #eee;
          // box-shadow: 0 1px 2px #dfdfdf;
          color: #666;
        }

        h3 {
          margin-bottom: 1rem;
          font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
          color: #333;
        }
        
        p {
         margin: 0;
        }

        .shop-item .button {
          margin-bottom: 0.3rem;
        }

        @media screen and (min-width: 500px) {
          .col-thumbs {
            display: block;
          }

      `}</style>
    </div>
  )
}

export default ProductSidebar
