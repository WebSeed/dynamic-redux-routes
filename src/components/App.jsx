import React from 'react'
import { Link } from 'react-router'

const App = (props) => (
  <div>
    <h1>App</h1>
    <h3>Navigation</h3>
    <ul role="nav">
      <li><Link to="/foo" activeClassName="active">Foo</Link></li>
      <li><Link to="/bar" activeClassName="active">Bar</Link></li>
      <li><Link to="/baz" activeClassName="active">Baz</Link></li>
    </ul>
    {props.children}
  </div>
)

export default App
