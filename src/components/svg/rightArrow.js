import * as React from "react"

// function RightArrow(props) {
//   return (
//     <svg width={10.561} height={19.707} viewBox="0 0 10.561 19.707" {...props}>
//       <path
//         data-name="Path 17"
//         d="M.354 19.354l9.5-9.5-9.5-9.5"
//         fill="none"
//         stroke="#958b86"
//       />
//     </svg>
//   )
// }

function RightArrow(props) {
  return (
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
        d="M21.994 34.522L20.477 36 2.006 18 20.479 0l1.519 1.48L5.044 18z"
      />
    </svg>
  )
}



export default RightArrow