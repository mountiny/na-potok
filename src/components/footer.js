

import React from "react"
import PropTypes from "prop-types"
import ChataImg from './svg/chata.js'
import Instagram from './svg/instagram.js'
import Facebook from './svg/facebook.js'

const Footer = ({ children }) => {

  return (
    <footer className=''>
      <div className='container footer relative mx-auto'>
        <div className='flex flex-wrap flex-col md-m:flex-row justify-between relative'>
          <div className='footer-text flex relative justify-start'>
            <div className='flex flex-col justify-between mr-32 md:mr-16'>
              <div className='potok'>
                <h4 className='potok kontakt-heading'>zůstaňte v kontaktu</h4>
              </div>
              <div className='flex items-center leading-normal pb-8'>
                <a className='social-link mr-12' target="_blank" href='https://www.facebook.com/ChalupaNapotok'>
                  <Facebook 
                    className='w-10 h-10' />
                </a>
                <a className='social-link' target="_blank" href='https://www.instagram.com/na_potok/'>
                  <Instagram 
                    className='w-16 h-16' />
                </a>
              </div>

              <div className='address leading-normal'>
                <span>vysoký potok 33</span><br />
                <span>788 33 Malá morava</span>
              </div>
            </div>
            <div className='contact-block flex items-end leading-normal'>
              <div>
                <span><a href='tel:+420777123456'>+420 777 441 876</a></span><br />
                <span>mail : <a href='mailto:chalupa@napotok.cz'>chalupa@napotok.cz</a></span>
              </div>
            </div>
          </div>

          <ChataImg 
            width={240.006}
            height={231.879}
            viewBox="0 0 240.006 231.879"
            className='chata-img md:mt-16 md:self-center' />
        </div>
        
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
