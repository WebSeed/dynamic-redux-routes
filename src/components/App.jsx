import React from 'react'
import { connect } from 'react-redux'

const App = ({ dispatch }) => {

  console.log('Creating the app...')
  console.log(dispatch)

  return (
    <div>
      This is the app!
    </div>
  )
}

const mapStateToProps = (state) => ({
  hello: 'world!'
})

export default connect(mapStateToProps)(App)
