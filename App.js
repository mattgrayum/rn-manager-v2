import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/Router'
import { firebaseInit } from './src/FireStore'

class App extends React.Component {

  componentWillMount() {
    firebaseInit()
  }

  render() {
    // First arg: all of our reducers
    // Second arg: any state initialization 
    // Third arg: store 'enhancers' - in this case, we are applying redux-thunk
    //            as middleware.
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default App
