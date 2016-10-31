import React from 'react'
import { Link } from 'react-router'

const User = (props) => (
  <div>
    <h2>User {props.params.userId}</h2>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
)

export default User
