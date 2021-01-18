import PropTypes from "prop-types"
import queryString from "query-string"
import { useLocation } from "@reach/router"

//returns routes stored in the 'i' query param as an array of strings (e.g. [sidebar,component])
export const getRoute = (location) => {
  const searchAsObj = queryString.parse(location.search, {
    arrayFormat: "comma",
    sort: false,
  })
  //remove invalid values, these options aren't available in parse() see:
  //https://github.com/sindresorhus/query-string/issues/258
  const i =
    queryString.parse(
      queryString.stringify(searchAsObj, {
        skipNull: true,
        skipEmptyString: true,
      })
    )?.i ?? []

  return typeof i === "string" ? [i] : i
}

//hook version
export const useGetRoute = () => getRoute(useLocation())

// Accepts up to 2 non-empty strings, else is ignored [e.g. getRelativeUrl("route1","route2")],
// Returns the current relative url with updated routes (the 'i' query param) [e.g. /&i=route1,route2#hash]
// But if route1 is falsy, returns the current relative url with no routes [e.g. /?#hash]
export const getRelativeUrl = (location, route1 = null, route2 = null) => {
  const { pathname, search, hash } = location

  let searchAsObj = queryString.parse(search, {
    arrayFormat: "comma",
    sort: false,
  })

  searchAsObj.i = []

  if (route1 && typeof route1 === "string") searchAsObj.i[0] = route1
  if (route2 && typeof route2 === "string") searchAsObj.i[1] = route2

  if (!route1) delete searchAsObj.i

  console.log(searchAsObj.i)

  const newSearch = queryString.stringify(searchAsObj, {
    arrayFormat: "comma",
    sort: false,
  })

  return pathname + (newSearch.length ? `?${newSearch}` : "") + hash
}

// export const getRelativeUrl = (location, route1 = null, route2 = null) => {
//   const { pathname, search, hash } = location

//   let searchAsObj = queryString.parse(search, {
//     arrayFormat: "comma",
//     sort: false,
//   })

//   const getRoutes = (i) => {
//     if (!i) return []
//     if (!Array.isArray(i)) return [i]
//     return i
//   }
//   let routes = getRoutes(searchAsObj?.i)

//   if (route1 && typeof route1 === "string") routes[0] = route1
//   if (route2 && typeof route2 === "string") routes[1] = route2

//   searchAsObj.i = routes

//   if (!route1) delete searchAsObj.i

//   console.log(searchAsObj.i)

//   const newSearch = queryString.stringify(searchAsObj, {
//     arrayFormat: "comma",
//     sort: false,
//   })

//   console.log(newSearch)

//   return newSearch.length ? pathname + "?" + newSearch + hash : pathname + hash
// }

//hook version
export const useGetRelativeUrl = (route1 = null, route2 = null) =>
  getRelativeUrl(useLocation(), route1, route2)

//
export default function Router({ activeRoute, children }) {
  let el
  if (!activeRoute) {
    if ((el = children.find((el) => el.props.default))) return el
  } else {
    if ((el = children.find((el) => el.props.route === activeRoute))) return el
    if ((el = children.find((el) => el.props.default))) return el
  }

  return null
}

Router.propTypes = {
  activeRoute: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}
