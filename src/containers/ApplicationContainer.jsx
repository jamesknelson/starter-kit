import React from 'react'
import ApplicationLayout from '../components/ApplicationLayout'
import DocumentContainer from './DocumentContainer'
import DocumentListContainer from './DocumentListContainer'


export default function ApplicationContainer(props) {
  return (
    <ApplicationLayout location={props.state.navigation.location}>
      {selectChildContainer(props)}
    </ApplicationLayout>
  )
}


const selectChildContainer = (props) => {
  const location = props.state.navigation.location
  
  let child
  switch (location.name) {
    case 'documentEdit':        
      child = <DocumentContainer {...props} id={location.options.id} />
    case 'documentList':
      return <DocumentListContainer {...props} id={location.options.id}>{child}</DocumentListContainer>

    default:
      return "Not Found"
  }
}
