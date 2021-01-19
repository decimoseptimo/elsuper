import PropTypes from "prop-types"
import queryString from "query-string"
import { useLocation } from "@reach/router"

/**
 * Parses the querystring and gets the "route" (the 'i' query param) as an array of strings
 * @param {Object} location
 * @returns {string[]} the parsed route
 */
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

/**
 * Clones the current relative url, but replacing the given route (the 'i' query param)
 * @param {Object} location
 * @param {...string} routes multiple non-empty strings. "" or else is ignored
 * @returns {string} the updated url
 */
export const getRelativeUrl = (location, ...routes) => {
  const { pathname, search, hash } = location

  let searchAsObj = queryString.parse(search, {
    arrayFormat: "comma",
    sort: false,
  })

  //filter-in non empty strings
  searchAsObj.i = routes.filter((route) => route && typeof route === "string")

  const newSearch = queryString.stringify(searchAsObj, {
    arrayFormat: "comma",
    sort: false,
  })

  return pathname + (newSearch.length ? `?${newSearch}` : "") + hash
}

//hook version
export const useGetRelativeUrl = (...routes) =>
  getRelativeUrl(useLocation(), ...routes)

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
