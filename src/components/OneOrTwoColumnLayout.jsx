import './OneOrTwoColumnLayout.less'

import React, {PropTypes} from 'react'
import setPropTypes from '../utils/setPropTypes'


export default setPropTypes({
  left: PropTypes.element,
  right: PropTypes.element,
})(function OneOrTwoColumnLayout({
  left,
  right,
}) {
  return (
    <div className='app-OneOrTwoColumnLayout'>
      <div 
        className={`
          app-OneOrTwoColumnLayout-left
          ${left ? 'app-OneOrTwoColumnLayout-left-open' : ''}
        `}
      >
        {left}
      </div>
      <div 
        className={`
          app-OneOrTwoColumnLayout-right
          ${right ? 'app-OneOrTwoColumnLayout-right-open' : ''}
        `}
      >
        {right}
      </div>
    </div>
  )
})
