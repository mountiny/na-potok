import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef, createRef } from "react"
import { useSwipeable } from 'react-swipeable'

const ImageSlider = ({ images, descriptionSide }) => {

  const [count, setCount] = useState(images.length)

  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [contStyle, setContStyle] = useState({})

  const swipeConfig = {
    delta: 20,
    trackMouse: true,
    preventDefaultTouchmoveEvent: false,
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

      const imageHeight = container.current.children[0].height
      setContStyle({
        height: `${imageHeight}px`
      })

    } 

  }, [loaded])

  const onSwipeLeft = (e) => {
    setLeaving(active)
    setActive(active === (count - 1) ? 0 : active + 1)
    setTimeout(() => {
      setLeaving(null)
    }, 300)
  }

  const onSwipeRight = (e) => {
    setLeaving(active)
    setActive(active === 0 ? count - 1 : active - 1)
    setTimeout(() => {
      setLeaving(null)
    }, 300)
  }

  const switchClicked = (position) => {
    if (position === active) return
    setLeaving(active)
    setActive(position)
    setTimeout(() => {
      setLeaving(null)
    }, 300)
  }

  return (
    <div 
      className="images-wrapper inner-column self-end cursor-pointer"
      {...handlers}
      > 
      <div 
        className="images-container flex" 
        ref={container}
        style={contStyle}
        >
        {
          images.map((image, key) => {
            return (
              <img
                src={image} 
                onLoad={() => !loaded && setLoaded(true)}
                className={`slider-image ${active === key ? 'active' : ''} ${leaving === key ? 'leaving' : ''}`}
                data-position={key}
                key={key}
                />
            )
          })
        }
      </div>
      <div className={`description ${descriptionSide} uppercase`}>
        popisek obrázku
      </div>
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
                  className={`switch ${active === key ? 'active' : ''}`}
                  >
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

ImageSlider.propTypes = {
}

ImageSlider.defaultProps = {
}

export default ImageSlider
