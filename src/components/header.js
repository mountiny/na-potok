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
    window.addEventListener('scroll', handleScroll, {passive: true});

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

  if (!location) return (<></>)
  return (
    <header className={`fixed w-full flex justify-center opacity-100 transition-all ${!visible  && "h-out"} ${location.pathname === "/" ? (prevScrollPos > height  && "h-primary-bg") : (prevScrollPos > (height*0.4)  && "h-primary-bg")}`}>
      <div className='inner-header flex justify-between items-center z-50'>
        <div className="logo uppercase potok flex items-center">
          <Link
            to="/"
          >
            na potok
          </Link>
        </div>
        <nav className="flex justify-end items-center phone:hidden">
          <Link
            to="/chalupa/"
            className={`nav-link ${location.pathname === '/chalupa/' && 'active-link'}`}
          >
            chalupa na potok
          </Link>
          <Link
              to="/nas-pribeh/"
              className={`nav-link ${location.pathname === '/nas-pribeh/' && 'active-link'}`}
            >
            náš příběh
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
          className={`menu-trigger potok tracking-wide px-4 py-6 hidden phone:block ${menu ? 'menu-open z-50' : ''} cursor-pointer`}
          onClick={() => setMenu(!menu)}
          >
            <div id="menu">
              <div id="pencet">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
        <div 
          className={`
          mobile-menu 
          transition duration-500 transform-gpu
          ${menu ? 'transform-x-0 opacity-100' : 'translate-x-full opacity-50'} 
          phonemin:hidden
          block z-40
          fixed 
          top-0 
          h-full
          left-0 
          pb-8
          w-full 
          potok`}
          style={{
            backgroundColor: 'hsl(20, 7%, 55%)'
          }}>
          <nav className="flex flex-col justify-start items-left w-full pt-32 landscape:pt-8 landscape:pb-8 landscape:overflow-auto">
            <Link
              to="/"
              className='mobile-nav-link landscape:text-xl'
              onClick={() => {
                if (location.pathname === '/') {
                  setMenu(!menu)
                }
              }}
            >
              na potok
            </Link>

            <Link
              to="/chalupa/"
              className='mobile-nav-link landscape:text-xl'
              onClick={() => {
                if (location.pathname === '/chalupa/') {
                  setMenu(!menu)
                }
              }}
            >
              chalupa na potok
            </Link>
            <Link
              to="/nas-pribeh/"
              className='mobile-nav-link landscape:text-xl'
              onClick={() => {
                if (location.pathname === '/nas-pribeh/') {
                  setMenu(!menu)
                }
              }}
            >
              náš příběh
            </Link>
            <Link
              to="/akce/"
              className='mobile-nav-link landscape:text-xl'
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
              className='mobile-nav-link landscape:text-xl'
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
              className='mobile-nav-link landscape:text-xl'
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
