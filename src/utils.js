exports.round = (value, decimals = 2) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
    decimals
  )
}

exports.capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const getParent = (arr, _id) => {
  const arrayIndex = arr.findIndex(i => i._id === _id)
  // if (arrayIndex >= 0) return arr[arrayIndex]
  // return null
  return arr[arrayIndex]
}
exports.getParent = getParent

const getChildren = (arr, _id) => {
  return arr.filter(i => i.parent_id === _id)
}
exports.getChildren = getChildren

exports.getParentRecursively = (arr, el) => {
  let parents = []

  while (el && el.parent_id != null) {
    el = getParent(arr, el.parent_id)
    if (el) parents.push(el)
    // console.log(el2)
  }

  return parents
}

exports.getCategoryTree = (arr, el) => {
  el = [el]

  const recurse = el => {
    el.forEach((v, i) => {
      let temp = getChildren(arr, v._id)
      if (temp.length > 0) {
        el[i].children = temp
        recurse(temp)
      }
      return temp
    })
    // console.log(el)
  }
  recurse(el)

  // console.log(el)
  return el
}

exports.getChildrenRecursively = (arr, el) => {
  el = [el]
  let children = []

  const recurse = el => {
    el.forEach((v, i) => {
      let temp = getChildren(arr, v._id)
      if (temp.length > 0) {
        children.push(...temp)
        recurse(temp)
      }
      return temp
    })
    // console.log(el)
  }
  recurse(el)

  // console.log(el)
  return children
}
