const ADD_CATEGORY = 'ADD_CATEGORY'

export addCategory = (name, path) => ({
  type: ADD_CATEGORY,
  name,
  path
})