import React from 'react';
import './App.css';
import Rio from './Rio'

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import store from './store'
import { Provider } from 'react-redux';
import firebase from 'firebase/app'

import File from './testfiles/File'

function App() {
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>

        <div className='body'>
          <Router>
            <Rio />
          </Router>

        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
/*

    */