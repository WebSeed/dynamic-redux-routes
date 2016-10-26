import React from 'react'
import { connect } from 'react-redux'
import { clickButton } from '../actions'
import Dumb from './Dumb'

const mapStateToProps = ({ toggled }) => ({
  toggled
})

// const mapDispatchToProps = (dispatch) => ({
//   onClick: () => {
//     dispatch(clickButton())
//   }
// })

const mapDispatchToProps = {
  onClick: clickButton
}

export default connect(mapStateToProps, mapDispatchToProps)(Dumb)
