import React, { useState, useEffect, useContext, useMemo } from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import { Accordion, Icon } from "semantic-ui-react"

import Button from "../components/button"
import { getCategoryTree, getChildren } from "../utils"
import { DiGitMerge } from "react-icons/di"
import { GoKebabHorizontal } from "react-icons/go"
import { GoKebabVertical } from "react-icons/go"
import { MdSubdirectoryArrowRight } from "react-icons/md"

const Menu = props => {
  // const propsCategories = props.data.allCategoriesJson.edges
  // const categories = propsCategories.map(i => i.node)
  // const rootCategories = getChildren(categories, null)
  // const categoryTree = []
  //
  // rootCategories.forEach(i => {
  //   const allSubcategories = getCategoryTree(categories, i)
  //   categoryTree.push(...allSubcategories)
  // })
  //
  // const getCategoriesList = obj => {
  //   return (
  //     <ul className="categoryList">
  //       {obj.map(({ id, name, children }) => {
  //         const categoryList = children ? getCategoriesList(children) : null
  //
  //         return (
  //           <li key={id}>
  //             <Link to={`/${slugify(name.toLowerCase())}`}>{name}</Link>
  //             {categoryList}
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   )
  // }
  // const categoriesList = getCategoriesList(categoryTree)

  const AccordionContent = content => <div className="indent">{content}</div>

  const SubAccordion2Panels = [
    {
      content: (
        <div className="title">
          <Link to="/chiles">Chiles</Link>
        </div>
      ),
      key: "sub-accordion-l",
    },
  ]

  const SubAccordion1Panels = [
    {
      content: (
        <div className="title">
          <Link to="/">Manzanas</Link>
        </div>
      ),
      key: "sub-accordion-l",
    },
  ]

  const SubAccordion1Content = (
    <div className="indent">
      <Accordion.Accordion
        // style={{marginLeft: "20px"}}
        className="no-padding"
        panels={SubAccordion1Panels}
      />
    </div>
  )
  const SubAccordion2Content = (
    <div className="indent">
      <Accordion.Accordion
        // style={{marginLeft: "20px"}}
        className="no-padding"
        panels={SubAccordion2Panels}
      />
    </div>
  )

  const SubAccordionPanels = [
    {
      title: "Frutas",
      content: { content: SubAccordion1Content, key: "sa1-content" },
      key: "sub-accordion-1",
    },
    {
      title: "Verduras",
      content: { content: SubAccordion2Content, key: "sa1-content" },
      key: "sub-accordion-1",
    },
    {
      content: (
        <div className="title">
          <Link to="/platano-portalimon">Otras frutas</Link>
        </div>
      ),
      key: "sub-accordion-l",
    },
  ]

  const SubAccordions = (
    <div className="indent">
      <Accordion.Accordion className="no-padding" panels={SubAccordionPanels} />
    </div>
  )

  const AccordionPanels = [
    {
      title: "Frutas y Verduras",
      content: { content: SubAccordions, key: "sub-accordions" },
    },
    {
      // title: "Accordion 2",
      content: (
        <>
          <div className="title">
            <i aria-hidden="true" className="dropdown icon"></i>Frutas y
            Verduras
          </div>
          <div className="content">asds</div>
        </>
      ),
    },
    {
      content: (
        <div className="title">
          <Link to="/2">Home 2</Link>
        </div>
      ),
    },
    {
      title: "Accordion 4",
      content: { content: SubAccordions, key: "sub-accordions" },
    },
    {
      title: "Accordion 5",
      content: { content: SubAccordions, key: "sub-accordions" },
    },
  ]

  const [activeIndex, setActiveIndex] = useState()

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex)
  }

  const SetTitle = (title, index) => (
    <>
      <Accordion.Title
        active={activeIndex === index}
        index={index}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
      </Accordion.Title>
      <div className="title2">
        <Link to={`/${slugify(title.toLowerCase())}`}>{title}</Link>
      </div>
    </>
  )

  const SetTitleIcon = (title, index) => (
    <>
      <Accordion.Title
        active={activeIndex === index}
        index={index}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
      </Accordion.Title>
      <div className="title2">
        <MdSubdirectoryArrowRight className="icon" />
        <Link to={`/${slugify(title.toLowerCase())}`}>{title}</Link>
      </div>
    </>
  )

  // const SetAccordion = (title, index, content) => (
  //   <>
  //     {SetTitle(title, index)}
  //
  //     {content.map(()=>)}
  //     <Accordion.Content active={activeIndex === index}>
  //       {content}
  //     </Accordion.Content>
  //   </>
  // )

  return (
    <>
      {/*<Accordion panels={AccordionPanels} styled />*/}

      <Accordion>
        <div className="title2">
          <Link to="/">Inicio</Link>
        </div>
        {SetAccordion("Frutas y Verduras", 1, [
          { title: "Frutas" },
          { title: "Verduras" },
          { title: "Otras" },
        ])}
        {SetAccordion("Lacteos", 2, [
          { title: "Leches" },
          { title: "Quesos" },
          { title: "Mantequilla" },
        ])}
        {SetAccordion("Carnes y Huevos", 3, [
          { title: "Carne de res" },
          { title: "Carne de Pollo" },
          { title: "Carne de Cerdo" },
        ])}
      </Accordion>

      <style jsx global>{`
        .cart {
          min-width: 300px;
        }

        .content .title2 {
        padding-left: .4rem;
        }

        .content .title2 .icon {
    float: left;
    margin-top: 8px;
    margin-left: 3rem;
    color: #94b9de;
        }

        .ui.accordion .accordion {
          margin: 0;
        }

        .ui.styled.accordion,
        .ui.styled.accordion .accordion {
          box-shadow: none;
        }

        .accordion .title a {
          padding-left 1.5rem;
        }

        .ui.styled.accordion .accordion .content, .ui.styled.accordion .content {
            padding: 0;
        }

        .ui.accordion .title:not(.ui) {
          float: left;
          padding: .4rem .4rem;
          border-right: 1px solid #ddd;
        }

        .ui.accordion .title2 {
          border-bottom: 1px solid #ddd;
        }

        .ui.accordion .title2 a {
          display: block;
          padding: .4rem 0 .4rem 3.5rem;
        }

        // .ui.accordion:not(.styled) .accordion .title~.content:not(.ui), .ui.accordion:not(.styled) .title~.content:not(.ui) {
        //   padding: .4rem 0 .4rem 4.4rem;
        // }

        .ui.accordion:not(.styled) .accordion .title~.content:not(.ui), .ui.accordion:not(.styled) .title~.content:not(.ui) {
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default Menu
