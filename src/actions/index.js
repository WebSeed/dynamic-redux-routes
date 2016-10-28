function getThing () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve('Good')
        : reject(new Error('Bad'))
      },
      2000
    )
  })
}

function requestGetThing () {
  return {
    type: 'REQUEST_GET_THING'
  }
}

function successGetThing () {
  return {
    type: 'SUCCESS_GET_THING'
  }
}

function errorGetThing () {
  return {
    type: 'ERROR_GET_THING'
  }
}

export const clickButton = () => {
  return (dispatch) => {
    dispatch(requestGetThing())
    return getThing()
      .then((response) => {
        dispatch(successGetThing())
      })
      .catch((err) => {
        dispatch(errorGetThing())
      })
  }

  return {
    type: 'CLICK_BUTTON',
    payload: {}
  }
}
