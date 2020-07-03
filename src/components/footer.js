

import React from "react"
import PropTypes from "prop-types"
import ChataImg from './svg/chata.js'

const Footer = ({ children }) => {

  return (
    <footer className=''>
      <div className='container footer relative mx-auto'>
        <div className='flex md:flex-row sm:flex-col justify-between relative'>
          <div className='footer-text flex relative justify-start'>
            <div className='flex flex-col justify-between mr-32 md:mr-16'>
              <div className='potok'>
                <h4 className='potok kontakt-heading'>zůstaňte v kontaktu</h4>
              </div>
              <div className='social leading-normal pb-8'>
                <a className='social-link underline-link mr-24' href='#'>instagram</a>
                <a className='social-link underline-link' href='#'>facebook</a>
              </div>

              <div className='address leading-normal'>
                <span>u lesa 123, hezké město</span><br />
                <span>Dolní morava</span>
              </div>
            </div>
            <div className='contact-block flex items-end leading-normal'>
              <div>
                <span><a href='tel:+420777123456'>+420 777 123 456</a></span><br />
                <span>mail : <a href='mailto:rezervace@napotok.cz'>rezervace@napotok.cz</a></span>
              </div>
            </div>
          </div>

          <ChataImg width={163.01} height={156.7} viewBox="0 0 163.01 156.7" className='chata-img mb-8 md:mt-0 sm:mt-8' />
        </div>
        
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
