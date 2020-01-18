import React from "react"
import { Pagination as SuiPagination } from "semantic-ui-react"

const Pagination = props => {
  return (
    <div className="paginationWrapper">
      <SuiPagination {...props} />
      <style jsx global>{`
      .paginationWrapper {
        display: flex;
      }

      .ui.pagination.menu {
        margin: 0 auto;
        margin-top: 3rem;
      }

      .ui.menu {
        background: none;
        box-shadow: none;
        border: none;
      }

      .ui.pagination.menu .item {
          font-weight: bold;
          color: #96588a;
      }

      .ui.pagination.menu .active.item {
        color: #96588a;
      }

      .ui.menu .item:before {
        width: 0;
      }

      .ui.pagination.menu .item[type = "ellipsisItem"] {
        padding: 0 !important;
        min-width: auto;
        opacity: .5;
      }

      .ui.menu a.item[type = "ellipsisItem"]:hover {
        cursor: normal;
        color: inherit;
      }

      .ui.pagination.menu .item[type = "ellipsisItem"]:hover {
        background: none;
        color: #96588a;
        cursor: default;
      }

      .ui.pagination.menu .icon.item[type = "ellipsisItem"] i.icon {
        font-size: .3rem;
      }

      a.active.item::after {
        // content: "_";
        // position: absolute;
        // top: 1.5rem;
        // left: 1.2rem;
        // font-size: 1.4rem;
      `}</style>
    </div>
  )
}

export default Pagination
