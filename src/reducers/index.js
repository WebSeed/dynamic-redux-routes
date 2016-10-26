const reducer = (state = { toggled: false }, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return Object.assign({}, state, { toggled: !state.toggled })
    default:
      return state
  }
}

export default reducer
