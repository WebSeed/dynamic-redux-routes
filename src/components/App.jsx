import React from 'react'
import NavLink from './NavLink'

const App = (props) => (
  <div>
    <h1>App</h1>
    <h3>Navigation</h3>
    <ul role="nav">
      <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
      <li><NavLink to="/foo">Foo</NavLink></li>
      <li><NavLink to="/bar">Bar</NavLink></li>
      <li><NavLink to="/baz">Baz</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
      <ul>
        <li><NavLink to="/users/tom">User Tom</NavLink></li>
        <li><NavLink to="/users/harry">User Harry</NavLink></li>
      </ul>
    </ul>
    {props.children}
  </div>
)

export default App
