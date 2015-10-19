import './DocumentForm.less'

import React, {PropTypes} from 'react'
import * as actions from '../actions/documentView'
import setPropTypes from '../utils/setPropTypes'


function updater(original, prop, fn) {
  return e => fn(Object.assign({}, original, {[prop]: e.target.value}))
}

function preventDefault(fn) {
  return e => {
    e.preventDefault()
    fn && fn(e)
  }
}


export default setPropTypes({
  data: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
})(function DocumentForm({
  data,
  errors,
  onUpdate,
  onSubmit,
  onCancel,
}) {
  return (
    <form
      onSubmit={preventDefault(onSubmit)}
      className='app-DocumentForm'
      noValidate={true}
    >
      <input
        type='text'
        className='app-DocumentForm-title'
        placeholder='Title'
        onChange={updater(data, 'title', onUpdate)}
        value={data.title || ''}
        autoFocus
      />
      <textarea
        type='text'
        className='app-DocumentForm-content'
        onChange={updater(data, 'content', onUpdate)}
        value={data.content || ''}
      />
      <footer className='app-DocumentForm-buttons'>
        <button
          type='button'
          className='app-DocumentForm-cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='app-DocumentForm-submit'
          disabled={!onSubmit}
        >
          Save
        </button>
      </footer>
    </form>
  )
})
