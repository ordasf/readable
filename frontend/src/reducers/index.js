export function dispatchAction(state = {}, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {}
    default:
      return state;
  }
}