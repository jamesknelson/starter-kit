import './ApplicationLayout.less'

import React, {PropTypes} from 'react'
import Link from './Link'
import setPropTypes from '../utils/setPropTypes'


export default setPropTypes({
  children: PropTypes.element.isRequired,
})(function ApplicationLayout({
  children
}) {
  return (
    <div className='app-ApplicationLayout'>
      <nav className='app-ApplicationLayout-navbar'>
        <Link name='documentList' className='app-ApplicationLayout-link'>Documents</Link>
      </nav>
      <main className='app-ApplicationLayout-content'>
        {children}
      </main>
    </div>
  )
})
