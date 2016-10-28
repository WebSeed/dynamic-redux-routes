function reducer (state = { enableButton: true, message: 'Press me!' }, action) {
  console.log('STATE', state)
  switch (action.type) {
    case 'REQUEST_GET_THING':
      return { ...state, enableButton: false, message: 'Getting thing...' }
    case 'SUCCESS_GET_THING':
      return { ...state, enableButton: true, message: 'Successfully got thing' }
    case 'ERROR_GET_THING':
      return { ...state, enableButton: true, message: 'Error getting thing' }
    default:
      return state
  }
}

export default reducer
