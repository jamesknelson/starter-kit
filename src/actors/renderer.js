import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationContainer from '../containers/ApplicationContainer'


// Store a reference to our application's root DOM node to prevent repeating
// this on every state update
const APP_NODE = document.getElementById('react-app')

export default function renderer(state, dispatch) {
  // Don't re-render if we're in the process of navigating to a new page
  if (!state.navigation.transitioning) {
    ReactDOM.render(
      <ApplicationContainer state={state} dispatch={dispatch} />,
      APP_NODE
    )
  }
}
