import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='absolute w-full flex justify-center'>
    <div className='inner-header flex justify-between items-center'>
      <div className="logo uppercase potok flex items-center">
        <Link
          to="/"
        >
          na potok
        </Link>
      </div>
      <nav className="flex justify-end items-center">
       <Link
          to="/"
          className='nav-link'
        >
            náš příběh
        </Link>
        <Link
          to="/"
          className='nav-link'
        >
          chata na potok
        </Link>
        <Link
          to="/"
          className='nav-link'
        >
          akce
        </Link>
        <Link
          to="/"
          className='nav-link'
        >
          kontakt
        </Link>
        <Link
          to="/rezervace/"
          className='nav-link'
        >
          ceník a rezervace
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
