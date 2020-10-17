import React from "react"
import PropTypes from "prop-types"

const WideContainer = ({ children, className}) => {
  return (
    <section className={`container mx-auto relative ${className}`}>
        {children}
    </section>
  )
}

WideContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default WideContainer
