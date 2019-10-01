import React from "react"
import { Link } from "gatsby"

const SubcategoryLink = props => {
  // const propsClone = Object.assign({}, props)
  // delete propsClone.backgroundColor

  return (
    <>
      <div className="subCatLink">
        <Link {...props}>{props.children}</Link>
      </div>
      <style jsx>{`
        .subCatLink {
          display: inline-block;
          margin-right: 1rem;
          -webkit-text-decoration: none;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          // background-color: #ededed;
          cursor: pointer;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
        }
      `}</style>
      <style jsx global>{`
        .subCatLink a {
          display: inline-block;
          // padding: 0.9rem 1.5rem;
          // color: #96588ae0;
          // color: #613458;
          color: #96588a;
        }
      `}</style>
    </>
  )
}

export default SubcategoryLink
