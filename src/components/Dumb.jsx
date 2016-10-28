import React, { PropTypes } from 'react'

const Dumb = ({ enableButton, message, onClick }) => (
  <button onClick={() => onClick()} disabled={!enableButton}>
    {message}
  </button>
)

export default Dumb
