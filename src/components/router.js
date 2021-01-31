import PropTypes from "prop-types"
import queryString from "query-string"
import { navigate as reachRouterNavigate, useLocation } from "@reach/router"

/**
 * Navigate with custom state to preserve scroll position. See:
 * https://www.joshwcomeau.com/gatsby/the-worlds-sneakiest-route-change/#preserving-scroll-position
 * NOTE: These types are incomplete. reachRouterNavigate is an overloaded function in typescript,
 * but function overloading isn't supported in JSDoc. See:
 * https://github.com/microsoft/TypeScript/issues/25590
 * @param {string} to
 * @param {*=} options
 */
export const navigate = (to, options) => {
  if (options) {
    options.state.disableScrollUpdate = true
    return reachRouterNavigate(to, options)
  }
  return reachRouterNavigate(to, { state: { disableScrollUpdate: true } })
}

/**
 * Get queryParams from location.search (querystring)
 * @param {Object} location
 * @returns {Object} queryParams
 */
export const getQueryParams = (location) => {
  return queryString.parse(location.search, {
    arrayFormat: "comma",
    sort: false,
  })
}

//hook version
export const useGetQueryParams = () => getQueryParams(useLocation())

/**
 * Get routes from queryParams
 * @param {Object} location
 * @returns {Array<string>} routes
 */
export const getRoutes = (location) => {
  const queryParams = getQueryParams(location)?.i ?? []
  return !Array.isArray(queryParams) ? [queryParams] : queryParams
}

//hook version
export const useGetRoutes = () => getRoutes(useLocation())

/**
 * Converts queryParams to querystring
 * @param {Object} queryParams
 * @return {string} querystring
 */
export const queryParamsAsString = (queryParams) => {
  return queryString.stringify(queryParams, {
    arrayFormat: "comma",
    sort: false,
  })
}

/**
 * Clones the current relative url, but replacing the given routes
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

//** Receives multiple children and renders the one whose routes matches the activeRoute */
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
