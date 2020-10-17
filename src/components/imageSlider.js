import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useRef, createRef } from "react"
import { useSwipeable } from 'react-swipeable'

const ImageSlider = ({ images, descriptionSide, selfEnd, innerColumn, maxHeight }) => {

  const [count, setCount] = useState(images.length)

  const transitionDuration = 500

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

      // const imageHeight = container.current.children[0].height
      // setContStyle({
      //   height: `${imageHeight}px`
      // })
      setContStyle({
        height: `120vh`,
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
      className={`images-wrapper cursor-pointer ${selfEnd && 'self-end'} ${innerColumn && 'inner-column'}`}
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
                className={`slider-image ${active === key ? 'active' : ''} ${active > key && 'past'} ${active < key && 'before'} ${leaving === key ? 'leaving' : ''}`}
                data-position={key}
                key={key}
                />
            )
          })
        }
      </div>
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
                      className={`switch ${active === key ? 'active' : ''}`}
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