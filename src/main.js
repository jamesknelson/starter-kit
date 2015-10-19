import { createStore, applyMiddleware, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxMulti from 'redux-multi'
import * as navigation from './actions/navigation'
import actors from './actors'
import rootReducer from './reducers'


// Set up a Redux store with our reducers and middleware
const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  reduxMulti,
)(createStore)
const store = createStoreWithMiddleware(rootReducer)


// TODO: check that redux doesn't check for doubling up of subscribe
// handlers itself
let acting = false
store.subscribe(function() {
  // Ensure that any action dispatched by actors do not result in a new
  // actor run, allowing actors to dispatch with impunity.
  if (!acting) {
    acting = true

    for (let actor of actors) {
      actor(store.getState(), store.dispatch.bind(store))
    }

    acting = false
  }
})


function onHashChange() {
  store.dispatch(navigation.complete())
}

// Handle browser navigation events
window.addEventListener('hashchange', onHashChange, false)

// Set the initial route and render the app
onHashChange()
