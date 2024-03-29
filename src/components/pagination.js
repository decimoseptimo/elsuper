import React from "react"
import { default as RcPagination } from "rc-pagination"
import "rc-pagination/assets/index.css"
import es_ES from "rc-pagination/lib/locale/es_ES"

const Pagination = (props) => {
  return (
    <div className="paginationWrapper">
      <RcPagination locale={es_ES} {...props} />

      <style jsx global>{`
        .paginationWrapper {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .rc-pagination {
          font-size: 1rem;
        }

        .rc-pagination-item {
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
        }

        .rc-pagination li {
          overflow: hidden;
        }

        .rc-pagination-prev,
        .rc-pagination-next {
          border: none;
          // outline: none;
        }
        .rc-pagination-prev:hover:not(.rc-pagination-disabled),
        .rc-pagination-next:hover:not(.rc-pagination-disabled) {
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 0;
          transition: background 0.1s ease;
        }

        .rc-pagination-prev .rc-pagination-item-link,
        .rc-pagination-next .rc-pagination-item-link {
          border: 0;
          background: none;
        }

        .rc-pagination-disabled,
        .rc-pagination-disabled:hover,
        .rc-pagination-disabled:focus {
          cursor: default;
        }

        .rc-pagination-prev:focus .rc-pagination-item-link,
        .rc-pagination-next:focus .rc-pagination-item-link,
        .rc-pagination-prev:hover .rc-pagination-item-link,
        .rc-pagination-next:hover .rc-pagination-item-link {
          color: #96588a;
          border-color: none;
        }

        .rc-pagination-disabled .rc-pagination-item-link,
        .rc-pagination-disabled:hover .rc-pagination-item-link,
        .rc-pagination-disabled:focus .rc-pagination-item-link {
          cursor: default;
          color: #ccc;
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
          min-width: 3rem;
          height: 3rem;
          line-height: 3rem;
        }

        .rc-pagination-prev button:after {
          content: ${`"\\2039"`};
          display: block;
        }
        .rc-pagination-next button:after {
          content: ${`"\\203A"`};
          display: block;
        }

        .rc-pagination-prev button,
        .rc-pagination-next button {
          color: #96588a;
          border: 0;
          background: 0;
          width: 100%;
          height: 100%;
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
        }
        .rc-pagination-prev button:after,
        .rc-pagination-next button:after {
          margin-top: -7px;
          font-size: 2.3rem;
        }

        .rc-pagination-disabled button {
          color: #ccc;
        }

        .rc-pagination-item {
          min-width: 3rem;
          height: 3rem;
          line-height: 3rem;
          background: none;
          border: none;
          border-radius: 0;
          margin-right: 0;
          transition: background 0.1s ease;
          // outline: none;
        }
        .rc-pagination-item:hover {
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 0;
        }

        .rc-pagination-item:focus a,
        .rc-pagination-item:hover a {
          color: #96588a;
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
