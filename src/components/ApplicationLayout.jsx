import './ApplicationLayout.less'

import React, {PropTypes} from 'react'
import Link from './Link'
import setPropTypes from '../utils/setPropTypes'


export default setPropTypes({
  children: PropTypes.element.isRequired,
  locationName: PropTypes.string,
})(function ApplicationLayout({
  children,
  locationName,
}) {
  return (
    <div className='app-ApplicationLayout'>
      <nav className='app-ApplicationLayout-navbar'>
        <Link
          name='documentList'
          className={`
            app-ApplicationLayout-link
            ${locationName == 'documentList' || locationName == 'documentEdit'
              ? 'app-ApplicationLayout-link-active'
              : ''}
          `}
        >
          Documents
        </Link>
      </nav>
      <main className='app-ApplicationLayout-content'>
        {children}
      </main>
    </div>
  )
})
