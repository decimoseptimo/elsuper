import React from "react"

// import AutoComplete from 'antd/es/auto-complete'
// import Input from 'antd/es/input'
// import Button from 'antd/es/button'
// import Icon from 'antd/es/icon'
import { AutoComplete, Button, Input, Icon } from "antd/es"
import "antd/es/auto-complete/style/css"
import "antd/es/input/style/css"
import "antd/es/button/style/css"
import "antd/es/icon/style/css"

const SearchBox = props => {
  return (
    <>
      <AutoComplete
        className="global-search"
        size="large"
        style={{ width: "100%" }}
        // dataSource={dataSource.map(renderOption)}
        // onSelect={onSelect}
        // onSearch={this.handleSearch}
        placeholder="input here"
        optionLabelProp="text"
      >
        <Input
          suffix={
            <Button
              className="search-btn"
              style={{ marginRight: -12 }}
              size="large"
              type="primary"
            >
              <Icon type="search" />
            </Button>
          }
        />
      </AutoComplete>
      <style jsx global>{`
        button {
        }
      `}</style>
    </>
  )
}

export default SearchBox
