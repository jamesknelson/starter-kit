import uuid from '../utils/uuid'
import documentValidator from '../validators/documentValidator'
import T from '../constants/ACTION_TYPES'
import * as navigation from './navigation'


export function updateChanges(id, data) {
  return [
    {
      type: T.DOCUMENT_VIEW.UPDATE_DATA,
      id,
      data,
    },
    {
      type: T.DOCUMENT_VIEW.REMOVE_STALE_ERRORS,
      id,
      errors: documentValidator(data),
    },
  ]
}

export function cancelChanges(id) {
  return [
    {
      type: T.DOCUMENT_VIEW.CLEAR,
      id,
    },
    navigation.start('documentList')
  ]
}

export function submitChanges(id, data) {
  const errors = documentValidator(data)

  if (errors) {
    return {
      type: T.DOCUMENT_VIEW.SET_ERRORS,
      id,
      errors,
    }
  }
  else {
    return [
      cancelChanges(id),
      {
        type: T.DOCUMENT_DATA.UPDATE,
        id: id == 'new' ? uuid() : id,
        data,
      }
    ]
  }
}
