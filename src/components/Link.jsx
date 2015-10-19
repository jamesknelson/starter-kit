import React, {PropTypes} from 'react'
import ROUTES from '../constants/ROUTES'
import setPropTypes from '../utils/setPropTypes'


export default setPropTypes({
  name: PropTypes.string.isRequired,
  options: PropTypes.object,
  children: PropTypes.node.isRequired,
})(function Link({
  name,
  options,
  children,
  ...props
}) {
  return <a {...props} href={'#'+ROUTES.generate(name, options)}>{children}</a>
})
