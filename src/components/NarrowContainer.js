import React from "react"
import PropTypes from "prop-types"

const NarrowContainer = ({ children, className}) => {
  return (
    <section className={`cont mx-auto relative ${className}`}>
        {children}
    </section>
  )
}

NarrowContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default NarrowContainer
