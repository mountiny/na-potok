import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import useWindowDimensions from '../hooks/useWindowDimensions.js';  

const Header = ({ siteTitle, location }) => {

  const [menu, setMenu] = useState(false)

  const { height, width } = useWindowDimensions()

  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  
  useEffect(() => {
    if (document){
      if (menu) {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('html')[0].style.overflow = 'initial'
      }
    }
  }, [menu])
console.log('Location: ', location)
  return (
    <header className={`fixed w-full flex justify-center opacity-100 transition-all ${!visible  && "h-out"} ${location.pathname === "/" ? (prevScrollPos > height  && "h-primary-bg") : (prevScrollPos > (height*0.4)  && "h-primary-bg")}`}>
      <div className='inner-header flex justify-between items-center'>
        <div className="logo uppercase potok flex items-center">
          <Link
            to="/"
          >
            na potok
          </Link>
        </div>
        <nav className="flex justify-end items-center phone:hidden">
        <Link
            to="/nas-pribeh/"
            className={`nav-link ${location.pathname === '/nas-pribeh/' && 'active-link'}`}
          >
              náš příběh
          </Link>
          <Link
            to="/chalupa/"
            className={`nav-link ${location.pathname === '/chalupa/' && 'active-link'}`}
          >
            chalupa na potok
          </Link>
          <Link
            to="/akce/"
            className={`nav-link ${location.pathname === '/akce/' && 'active-link'}`}
          >
            akce
          </Link>
          <Link
            to="/kontakt/"
            className={`nav-link ${location.pathname === '/kontakt/' && 'active-link'}`}
          >
            kontakt
          </Link>
          <Link
            to="/rezervace/"
            className={`nav-link ${location.pathname === '/rezervace/' && 'active-link'}`}
          >
            ceník a rezervace
          </Link>
        </nav>
        <div 
          className={`menu-trigger potok tracking-wide hidden phone:block ${menu ? 'z-50' : ''} cursor-pointer`}
          onClick={() => setMenu(!menu)}
          >
          {menu ? "ZAVŘÍT" : "MENU"}
        </div>
        <div 
          className={`
          mobile-menu 
          ${menu ? 'block z-40' : 'hidden'} 
          phonemin:hidden
          fixed 
          top-0 
          left-0 
          w-full 
          h-full
          potok`}
          style={{
            backgroundColor: 'hsl(20, 7%, 55%)'
          }}>
          <nav className="flex flex-col justify-start items-left w-full pt-32">
            <Link
              to="/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/') {
                  setMenu(!menu)
                }
              }}
            >
              na potok
            </Link>

            <Link
              to="/nas-pribeh/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/nas-pribeh/') {
                  setMenu(!menu)
                }
              }}
            >
              náš příběh
            </Link>
            <Link
              to="/chalupa/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/chalupa/') {
                  setMenu(!menu)
                }
              }}
            >
              chalupa na potok
            </Link>
            <Link
              to="/akce/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/akce/') {
                  setMenu(!menu)
                }
              }}
            >
              akce
            </Link>
            <Link
              to="/kontakt/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/kontakt/') {
                  setMenu(!menu)
                }
              }}
            >
              kontakt
            </Link>
            <Link
              to="/rezervace/"
              className='mobile-nav-link'
              onClick={() => {
                if (location.pathname === '/rezervace/') {
                  setMenu(!menu)
                }
              }}
            >
              ceník a rezervace
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
