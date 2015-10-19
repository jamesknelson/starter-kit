import React, {PropTypes} from 'react'
import * as actions from '../actions/documentView'
import compose from '../utils/compose'
import DocumentForm from '../components/DocumentForm'


export default function DocumentContainer({state, dispatch, id}) {
  const errors = state.view.document.saveErrors[id]
  const viewData = state.view.document.unsavedChanges[id]
  const data =
    viewData ||
    state.data.document[id] ||
    (id == 'new' && {})
  const props = {
    data, 
    errors,
    onUpdate: compose(dispatch, actions.updateChanges.bind(null, id)),
    onCancel: compose(dispatch, actions.cancelChanges.bind(null, id)),
    onSubmit:
      viewData && !errors
      ? compose(dispatch, actions.submitChanges.bind(null, id, data))
      : null,
  }

  return !data ? <div>Not Found</div> : <DocumentForm {...props} />
}
