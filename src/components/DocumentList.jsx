import './DocumentList.less'

import React, {PropTypes} from 'react'
import * as actions from '../actions/documentListView'
import setPropTypes from '../utils/setPropTypes'
import Link from './Link'


function mapValue(fn) {
  return e => fn(e.target.value)
}


export default setPropTypes({
  id: PropTypes.string,
  query: PropTypes.string,
  documents: PropTypes.array.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
})(function DocumentList({
  id,
  query,
  documents,
  onChangeQuery,
}) {
  return (
    <div>
      <header className='app-DocumentList-header'>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={mapValue(onChangeQuery)}
        />
      </header>
      <ul className='app-DocumentList-list'>
        {documents.map(([id, data]) =>
          <li className='app-DocumentList-document-item'>
            <Link
              className='app-DocumentList-document-link'
              name='documentEdit'
              options={{id}}
            >
              {data.title}
            </Link>
          </li>
        )}
        <li className='app-DocumentList-add-item'>
          <Link
            className='app-DocumentList-add-link'
            name='documentEdit'
            options={{id: 'new'}}
          >
            Add Document
          </Link>
        </li>
      </ul>
    </div>
  )
})
