import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Image from './image.js'

const IntroImageSlider = ({ images }) => {

  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {

      setActive(active => {
        if (active === images.length-1) {
          setLeaving(active)
          return 0
        } else {
          setLeaving(active)
          return active+1
        }

      })
      setTimeout(() => {
        setLeaving(null)
      }, 500)
   
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const switchClicked = (position) => {
    if (position === active) return
    setLeaving(active)
    setActive(position)
    setTimeout(() => {
      setLeaving(null)
    }, 500)
  }

  return (
    <div 
      className={`intro-images-wrapper`}
      > 
      <div 
        className="intro-images-container" 
        >
        {
          images.map((image, key) => {
            return (
              <Image 
                filename={image} 
                onLoad={() => !loaded && setLoaded(true)}
                // placeholderStyle={{ backgroundColor: `black` }}
                backgroundColor="lightgray"
                loading="eager"
                style={{
                  position: "absolute",
                  maxHeight: "100vh !important"
                }}
                className={`intro-slider-image ${active === key ? 'active' : ''} ${leaving === key ? 'leaving' : ''}`}
                data-position={key}
                key={key}
              />
              // <img
              //   src={image} 
              //   onLoad={() => !loaded && setLoaded(true)}
              //   className={`intro-slider-image ${active === key ? 'active' : ''} ${leaving === key ? 'leaving' : ''}`}
              //   data-position={key}
              //   key={key}
              //   />
            )
          })
        }
      </div>
      <div className="intro-container">
        <div className="intro-controls-wrapper flex justify-end">
          {
            images.map((control, key) => {

              return (
                <div 
                  key={key} 
                  className="intro-switch-wrapper"
                  onClick={() => switchClicked(key)}
                  >
                  <div 
                    className={`intro-switch ${active === key ? 'active' : ''}`}
                    >
                    </div>
                </div>
              )
            })
          }
          {/* <div className="intro-image-indicator">
            {active > 8 
              ? `${active+1}` 
              : `0${active+1}` 
            }
          </div> */}
        </div>
      </div>
    </div>
  )
}

IntroImageSlider.propTypes = {
  images: PropTypes.array
}

IntroImageSlider.defaultProps = {
}

export default IntroImageSlider
