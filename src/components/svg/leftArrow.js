import * as React from "react"

function LeftArrow(props) {
  return (
    // <svg width={10.561} height={19.707} viewBox="0 0 10.561 19.707" {...props}>
    //   <path
    //     data-name="Path 18"
    //     d="M10.207.353l-9.5 9.5 9.5 9.5"
    //     fill="none"
    //     stroke="#958b86"
    //   />
    // </svg>
     <svg
      width={23}
      height={39}
      viewBox="0 0 23 39"
      transform="scale(1.30435)"
      {...props}
    >
      <path
        className="prefix__slideshow-arrow"
        fill={props.fill || "#fff"}
        d="M2.005 1.479L3.5 0l18.124 18L3.497 36l-1.49-1.48L18.638 18z"
      />
    </svg>
  )
}

export default LeftArrow