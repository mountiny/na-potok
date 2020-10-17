import React from "react"
import PropTypes from "prop-types"

const UnderlineLink = ({ link, classNameLink, classNameSpan, text }) => {
  return (
    <a href={link} className={`link-wrapper ${classNameLink && classNameLink}`}>
      <span className={`uppercase underline-link ${classNameSpan && classNameSpan}`}>
        {text}
      </span>
    </a>
  )
}

UnderlineLink.propTypes = {
  classNameLink: PropTypes.string,
  classNameSpan: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default UnderlineLink
