import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/Router'
import firebase from 'firebase'

class App extends React.Component {

  componentWillMount() {

    const config = {
      apiKey: 'AIzaSyDxGeAdGYZLpyuJqL-ueaYLY_GqVnk_vrk',
      authDomain: 'manager-9522b.firebaseapp.com',
      databaseURL: 'https://manager-9522b.firebaseio.com',
      projectId: 'manager-9522b',
      storageBucket: 'manager-9522b.appspot.com',
      messagingSenderId: '830271348290',
      appId: '1:830271348290:web:1f6ed9f2c09e292a'
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

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
