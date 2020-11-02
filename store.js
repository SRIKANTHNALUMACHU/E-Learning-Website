
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
    reactReduxFirebase,
    firebaseReducer
} from 'react-redux-firebase'

import { reduxFirestore, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyDG-3Z_eYDqJdhaQHOf3tEUP1c_cE0Fnu0",
    authDomain: "reactelectronlearn.firebaseapp.com",
    databaseURL: "https://reactelectronlearn.firebaseio.com",
    projectId: "reactelectronlearn",
    storageBucket: "reactelectronlearn.appspot.com",
    messagingSenderId: "68435211902",
    appId: "1:68435211902:web:2c4b401f520085e6be0a2f"
}


// Initialize firebase instance
firebase.initializeApp(fbConfig)
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state reactReduxFirebase(firebase),
const initialState = {}



const store = createStore(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;