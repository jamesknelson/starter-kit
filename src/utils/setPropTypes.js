export default function(propTypes) {
  return Component => {
    Component.propTypes = propTypes
    return Component
  }
}
