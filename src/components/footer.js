

import React from "react"
import PropTypes from "prop-types"

import ChataImg from './svg/chata.js'

const Footer = ({ children }) => {
  return (
    <footer className=''>
      <div className='container footer relative mx-auto'>
        <div className='flex justify-between relative'>
          <div className='flex relative justify-start'>
            <div className='flex flex-col justify-center'>
              <div className='potok'>
                <h4 className='potok kontakt-heading'>zůstaňte v kontaktu</h4>
              </div>
              <div className='social'>
                <a href='#'>instagram</a>
                <a href='#'>facebook</a>
              </div>

              <div className='address'>
                <span>u lesa 123, hezké město</span><br />
                <span>Dolní morava</span>
              </div>
            </div>
            <div className='align-bottom'>
              <span><a href='tel:+420777123456'>+420 777 123 456</a></span><br />
              <span>mail: <a href='mailto:rezervace@napotok.cz'>rezervace@napotok.cz</a></span>
            </div>
          </div>

          <ChataImg />
        </div>
        
      </div>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
