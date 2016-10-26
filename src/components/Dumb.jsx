import React, { PropTypes } from 'react'

const Dumb = ({ toggled, onClick }) => (
  <button onClick={() => onClick()}>
    Toggled {toggled ? 'ON' : 'OFF'}
  </button>
)

export default Dumb
