import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const UnderlineLinkInter = ({ link, classNameLink, classNameSpan, text }) => {
  return (
    <Link to={link} className={`link-wrapper ${classNameLink && classNameLink}`}>
      <span className={`uppercase underline-link ${classNameSpan && classNameSpan}`}>
        {text}
      </span>
    </Link>
  )
}

UnderlineLinkInter.propTypes = {
  classNameLink: PropTypes.string,
  classNameSpan: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default UnderlineLinkInter
