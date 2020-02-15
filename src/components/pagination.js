import React from "react"
import { default as RcPagination } from "rc-pagination"
import "rc-pagination/assets/index.css"

const Pagination = props => {
  return (
    <div className="paginationWrapper">
      <RcPagination {...props} />
      <style jsx global>{`
        .rc-pagination {
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
          font-size: 1rem;
        }

        .rc-pagination-prev,
        .rc-pagination-next {
          border: none;
        }

        .rc-pagination-prev,
        .rc-pagination-jump-prev,
        .rc-pagination-jump-next {
          margin-right: 0;
        }
        
        .rc-pagination-prev,
        .rc-pagination-next,
        .rc-pagination-jump-prev,
        .rc-pagination-jump-next {
          min-width: 2.5rem;
          height: 2.5rem;
          line-height: 2.5rem;
        }

        .rc-pagination-prev a,
        .rc-pagination-next a {
          color: #96588a;
        }
        .rc-pagination-prev a:after,
        .rc-pagination-next a:after {
          margin-top: -3px;
        }
        .rc-pagination-prev a:after {
          font-size: 2.5rem;
        }
        .rc-pagination-next a:after {
          font-size: 2.5rem;
        }

        .rc-pagination-disabled a {
          color: #ccc;
        }

        .rc-pagination-item {
          min-width: 2.5rem;
          height: 2.5rem;
          line-height: 2.5rem;
          background: none;
          border: none;
          margin-right: 0;
        }
        .rc-pagination-item:hover {
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 0;
        }

        .rc-pagination-item a {
          color: #96588a;
          font-weight: bold;
        }
        .rc-pagination-item:hover a {
          color: #2db7f5;
          color: #96588a;
        }

        .rc-pagination-item-active {
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 0;
        }

        .rc-pagination-item-active a {
          color: #96588a;
        }
      `}</style>
    </div>
  )
}

export default Pagination
