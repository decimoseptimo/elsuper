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
        .ui.input {
          width: 100%;
        }

        .ui.input > input {
          color: darkseagreen;
          background: #393939;
          // font-style: italic;
          // width: 100%;
          flex: 1;
          padding: 0.55rem 1rem 0.65rem;
          border: 1px solid #3a3a3a;
          background: #363636;
        }

        .ui.input > input:focus {
          color: darkseagreen;
          background: #3e3e3e;
          border-color: #393939;
        }

        .ui.input > input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .ui.input > input:focus::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .ui.input > input::-moz-placeholder {
          /* Firefox 19+ */
          color: darkseagreen;
        }
        .ui.input > input:-ms-input-placeholder {
          /* IE 10+ */
          color: darkseagreen;
        }
        .ui.input > input:-moz-placeholder {
          /* Firefox 18- */
          color: darkseagreen;
        }

        .ui.icon.input > i.icon {
          opacity: 0.6;
        }

        .ui.icon.input > input:focus ~ i.icon {
          opacity: 0.7;
        }

        .ui.search > .results {
          width: 100%;
          margin-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        .ui.search .prompt {
          border-radius: 0.28571429rem;
        }

        .ui.search > .results .result {
          border-bottom: none;
        }

        .ui.search > .results .result .title {
          font-weight: normal;
        }

        .ui.search .action {
          background: none;
        }

        .ui.search .action:hover {
          // background: #393939;
          background: none;
        }

        .ui.action.input > .button {
          // background: #393939;
          background: #363636;
          border: 1px solid #3e3e3e;
          border-left: none;
          font-size: 130%;
          padding: 0.55rem 0.65rem 0.65rem 0.75rem;
          // color: white;
          color: #737373;
        }

        .ui.button .icon svg {
          position: relative;
          top: 1px;
          background: #393939;
          // color: #111;
          // color: #666;
          color: white;
        }

        .ui.active.button:active,
        .ui.button:active {
          background: #393939;
        }

        .ui.button:focus {
          background: #393939;
        }

        .ui.action.input:not([class*="left action"]) > input:focus {
          border-right-color: #393939 !important;
          border-right: 0;
        }

        .ui.button:hover {
          background-color: #3e3e3e;
        }
      `}</style>
    </>
  )
}

export default inputSearch
