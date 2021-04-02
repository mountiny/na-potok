import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef, createRef } from "react"
import { useSwipeable } from 'react-swipeable'

import RightArrow from "./svg/rightArrow"
import LeftArrow from "./svg/leftArrow"

import Image from './image.js'

const ImageSlider = ({ images, descriptionSide, selfEnd, innerColumn, maxHeight, className = '', theme = "light", height = null }) => {

  const [count, setCount] = useState(images.length)

  const transitionDuration = 500

  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [contStyle, setContStyle] = useState({})

  const swipeConfig = {
    delta: 20,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  }

  const handlers = useSwipeable({ 
    onSwipedLeft: (e) => onSwipeLeft(e),
    onSwipedRight: (e) => onSwipeRight(e),
     ...swipeConfig 
    })

  const container = useRef()

  useEffect(() => {

    // Set height of the container based on height of the images
    if (loaded) {

      setContStyle({
        maxHeight: maxHeight
      })

    } 

  }, [loaded])

  const onSwipeLeft = (e) => {
    setLeaving(active)
    setActive(active === (count - 1) ? 0 : active + 1)
    setTimeout(() => {
      setLeaving(null)
    }, transitionDuration)
  }

  const onSwipeRight = (e) => {
    setLeaving(active)
    setActive(active === 0 ? count - 1 : active - 1)
    setTimeout(() => {
      setLeaving(null)
    }, transitionDuration)
  }

  const switchClicked = (position) => {
    if (position === active) return
    setLeaving(active)
    setActive(position)
    setTimeout(() => {
      setLeaving(null)
    }, transitionDuration)
  }

  return (
    <div 
      className={`images-wrapper grabbable ${className} ${selfEnd && 'self-end'} ${innerColumn && 'inner-column'}`}
      style={{
        height: height && height,
        maxHeight: maxHeight
      }}
      {...handlers}
      > 
      <div 
        className="images-container flex" 
        ref={container}
        style={{
          height: '100%'
        }}
        >
        {
          images.map((image, key) => {
            return (
                <Image 
                  filename={image} 
                  onLoad={() => !loaded && setLoaded(true)}
                  style={{
                    position: "absolute"
                  }}
                  className={`slider-image ${active === key ? 'active' : ''} ${active > key && 'past'} ${active < key && 'before'} ${leaving === key ? 'leaving' : ''}`}
                  data-position={key}
                  key={key}
                />
            )
          })
        }
      </div>
      {
        active !== 0 && (
          <div 
            className="h-full absolute flex justify-center items-center w-28 bg-transparent z-50 left-0 top-0 cursor-pointer" 
            style={{zIndex:"10000"}}
            onClick={() => switchClicked(active-1)}
            >
            <RightArrow />
          </div>
        ) 
      }
      {
        active !== count - 1 && (
          <div 
            className="h-full absolute flex justify-center items-center w-28 bg-transparent z-50 right-0 top-0 cursor-pointer" 
            style={{zIndex:"10000"}}
            onClick={() => switchClicked(active+1)}
            >
            <LeftArrow />
          </div>
        )
      }
      {
        descriptionSide &&
        (
          <div className={`description ${descriptionSide} uppercase`}>
            popisek obrázku
          </div>
        )
      }
      {
        images.length > 1 &&
        (
          <div className="controls-wrapper flex justify-end">
            {
              images.map((control, key) => {

                return (
                  <div 
                    key={key} 
                    className="switch-wrapper"
                    onClick={() => switchClicked(key)}
                    >
                    <div 
                      className={`switch ${theme === 'dark' ? 'dark-bg' : ''} ${active === key ? 'active' : ''}`}
                      >
                      </div>
                  </div>
                )
              })
            }
          </div>
        ) 
      }
      
    </div>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  maxHeight: PropTypes.string.isRequired,
  descriptionSide: PropTypes.string, 
  selfEnd: PropTypes.bool, 
  innerColumn: PropTypes.bool,
}

ImageSlider.defaultProps = {
  selfEnd: false, 
  innerColumn: false
}

export default ImageSlider
