import React from "react"
import { Search, Input } from "semantic-ui-react"
import { MdSearch } from "react-icons/md"

const inputSearch = props => {
  const propsClone = Object.assign({}, props)
  delete propsClone.onButtonClick

  return (
    <>
      <Search
        loading={false}
        minCharacters={1}
        showNoResults={false}
        noResultsMessage="Sin resultados"
        icon={null}
        input={
          <Input
            action={{
              content: <MdSearch />,
              // icon: "search",
              onClick: props.onButtonClick,
            }}
            placeholder={props.placeholder || "Buscar"}
          />
        }
        {...propsClone}
        className={`inputSearch ${props.className || ""}`}
      />
      <style jsx global>{`
        .inputSearch.ui.search > .results {
          width: 100%;
          margin-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        .inputSearch.ui.search .prompt {
          border-radius: 0.28571429rem;
        }

        .inputSearch.ui.search > .results .result {
          border-bottom: none;
        }

        .inputSearch.ui.search > .results .result .title {
          font-weight: normal;
        }

        .inputSearch.ui.search .action {
          background: none;
        }

        .inputSearch.ui.search .action:hover {
          background: none;
        }

        .inputSearch .ui.input {
          width: 100%;
          display: inline-flex;
        }

        .inputSearch .ui.input > input {
          color: darkseagreen;
          background: #393939;
          flex: 1;
          padding: 0.55rem 1rem 0.65rem;
          border: 1px solid #3a3a3a;
          background: #363636;
        }

        .inputSearch .ui.input > input:focus {
          color: darkseagreen;
          background: #3e3e3e;
          border-color: #393939;
        }

        .inputSearch .ui.input > input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .inputSearch .ui.input > input:focus::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .inputSearch .ui.input > input::-moz-placeholder {
          /* Firefox 19+ */
          color: darkseagreen;
        }
        .inputSearch .ui.input > input:-ms-input-placeholder {
          /* IE 10+ */
          color: darkseagreen;
        }
        .inputSearch .ui.input > input:-moz-placeholder {
          /* Firefox 18- */
          color: darkseagreen;
        }

        .inputSearch .ui.icon.input > i.icon {
          opacity: 0.6;
        }

        .inputSearch .ui.icon.input > input:focus ~ i.icon {
          opacity: 0.7;
        }

        .inputSearch .ui.action.input > .button {
          background: #363636;
          border: 1px solid #3e3e3e;
          border-left: none;
          font-size: 130%;
          padding: 0.55rem 0.65rem 0.65rem 0.75rem;
          color: #737373;
        }

        .inputSearch .ui.button .icon svg {
          position: relative;
          top: 1px;
          background: #393939;
          color: white;
        }

        .inputSearch .ui.active.button:active,
        .inputSearch .ui.button:active {
          background: #393939;
        }

        .inputSearch .ui.button:focus {
          background: #393939;
        }

        .inputSearch
          .ui.action.input:not([class*="left action"])
          > input:focus {
          border-right-color: #393939 !important;
          border-right: 0;
        }

        .inputSearch .ui.button:hover {
          background-color: #3e3e3e;
        }
      `}</style>
    </>
  )
}

export default inputSearch
