import { useState } from "react"
import PropTypes from "prop-types"
import queryString from "query-string"
import { navigate as reachRouterNavigate, useLocation } from "@reach/router"

/**
 * Creates routesHistory and returns getter and setter methods
 */
export const useRoutesHistory = () => {
  const [routesHistory, setRoutesHistory] = useState([])

  /**
   * Get routes from routesHistory
   * @param {string} route
   * @returns {Array<string> | undefined}
   */
  const getFromRoutesHistory = (route) => {
    const index = routesHistory.findIndex((el) => el[0] === route)
    return routesHistory?.[index]
  }

  /**
   * Add routes to routesHistory
   * @param {Array<string>} route
   */
  const setToRoutesHistory = (route) => {
    //no route, bail
    if (!route.length) return
    //if found, replace
    const index = routesHistory.findIndex((el) => el[0] === route[0])
    if (index >= 0) {
      const newArray = [...routesHistory]
      newArray[index] = route
      setRoutesHistory(newArray)
    }
    //else push
    else setRoutesHistory([...routesHistory, route])
  }

  return {
    getFromRoutesHistory,
    setToRoutesHistory,
  }
}

/**
 * @param {string} url
 * @return {Array<string>}
 */
export const getRoutesFromUrl = (url) => {
  const qs = queryString.extract(url)
  const location = { search: qs }
  return getRoutes(location)
}

/**
 * Manipulates the history object (HTML Browser API) in order to **sort of** mimic the back-button functionality
 * available in native mobile apps. By adding URLs that represent UI states. It also ignores certain URLs in order
 * to avoid adding UI states that provide no significant UX value. The following manipulations are available:
 * push - adds new state
 * replace, goback - effectively ignores state
 * @param {Object} location
 * @param {Array<string>} nextRoutes
 */
export const setRoutes = (location, nextRoutes) => {
  const prevPath = location.state?.prevPath ?? ""
  const prevRoutesFallback = getRoutesFromUrl(prevPath)
  const prevRoutes = location.state?.prevRoutes || prevRoutesFallback
  const routes = getRoutes(location)
  const deroutedUrl = getRelativeUrl(location)
  const replace = location.state?.replace
  const push = location.state?.push
  const differentOpen =
    !!routes?.length && routes.toString() !== nextRoutes.toString()
  const differentClosed =
    !routes?.length && prevRoutes.toString() !== nextRoutes.toString()
  /* console.log(`
---
  prev: ${prevRoutes}
  curr: ${routes}
  next: ${nextRoutes}
  push: ${push}
  replace: ${replace}
  differentOpen: ${differentOpen}
  differentClosed: ${differentClosed}
`) */
  // unset:
  if (!routes.length) {
    //console.log("1. unset")
    if (replace) {
      //console.log(" 1 replace")
      navigate(getRelativeUrl(location, ...nextRoutes), {
        replace: true,
        state: { replace: true, prevRoutes: routes },
      })
      // same
    } else if (push && !differentOpen && !differentClosed) {
      //console.log(" 2 goback")
      navigate(-1)
    } else {
      //console.log(" 3 push")
      navigate(getRelativeUrl(location, ...nextRoutes), {
        state: { push: true, prevRoutes: routes },
      })
    }
  }
  // same:
  else if (routes.toString() === nextRoutes.toString()) {
    //console.log("2. same")
    if (replace) {
      //console.log(" 1 replace")
      navigate(deroutedUrl, {
        replace: true,
        state: { replace: true, prevRoutes: routes },
      })
    } else if (push) {
      //console.log(" 2 goback")
      navigate(-1)
    } else {
      //console.log(" 3 push")
      navigate(deroutedUrl, {
        state: {
          push: true,
          prevRoutes: routes,
        },
      })
    }
  }
  // different:
  else {
    //console.log("3.")
    if (replace) {
      //console.log(" 1 replace")
      navigate(getRelativeUrl(location, ...nextRoutes), {
        replace: true,
        state: { replace: true, prevRoutes: routes },
      })
    } else {
      //console.log(" 2")
      //console.log(routes.length === 1 ? "replace" : "push")
      navigate(getRelativeUrl(location, ...nextRoutes), {
        replace: routes.length === 1 ? true : false,
        state: {
          replace: routes.length === 1 ? true : false,
          prevRoutes: routes,
        },
      })
    }
  }
}

/**
 * Hook version of setRoutes
 */
export const useSetRoutes = (nextRoutes) => setRoutes(useLocation(), nextRoutes)

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

/**
 * Hook version of getQueryParams
 */
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

/**
 * Hook version of getRoutes
 */
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

/**
 * Hook version of getRelativeUrl
 */
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
