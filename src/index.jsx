import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Baz from './components/Baz'
import { Router, Route, Link, hashHistory } from 'react-router'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
        <Route path="/baz" component={Baz} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
