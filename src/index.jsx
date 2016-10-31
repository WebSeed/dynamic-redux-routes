import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import Home from './components/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Baz from './components/Baz'
import Users from './components/Users'
import User from './components/User'
import NotFound from './components/NotFound'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { clickButton } from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk))

// function withRole (role) {
//   return (nextState, replace, callback) => {
//     console.log('Waiting...')
//     setTimeout(() => {
//       callback()
//     }, 4000)
//   }
// }

function requireAuth (store) {
  return (nextState, replace, callback) => {
    store.dispatch(clickButton())
    store.subscribe(() => {
      store.getState()
    })
  }
}

function handleError (err) {
  console.log('ERROR!')
  alert(`Oops! ${err.message}`)
}

// onEnter={withRole('admin')}

render(
  <Provider store={store}>
    <Router onError={handleError} history={browserHistory}>
      <Route path="/" component={App} onEnter={requireAuth(store)}>
        <IndexRoute component={Home} />
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
        <Route path="/baz" component={Baz} />
        <Route path="/users" component={Users}>
          <Route path="/users/:userId" component={User} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
