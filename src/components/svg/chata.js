import * as React from "react"

function Chata(props) {
  return (
    // <svg
    //   {...props}
    // >
    //   <g data-name="Group 7" fill="#79736f">
    //     <path
    //       data-name="Path 19"
    //       d="M82.231 82.591v45.63h20.695v-45.63H82.231z"
    //     />
    //     <path
    //       data-name="Path 20"
    //       d="M102.927 35.072l-4.241 5.447v40.829h4.241z"
    //     />
    //     <path data-name="Path 21" d="M91.957 49.16l-4.241 5.447v26.74h4.241z" />
    //     <path
    //       data-name="Path 22"
    //       d="M130.35 26.43l-4.241-5.447V128.22h4.241z"
    //     />
    //     <path
    //       data-name="Path 23"
    //       d="M108.411 28.028l-4.241 5.447v94.746h4.241z"
    //     />
    //     <path
    //       data-name="Path 24"
    //       d="M82.231 81.346h4.241v-25.14l-4.93 6.332h.689z"
    //     />
    //     <path
    //       data-name="Path 25"
    //       d="M124.866 19.39l-4.241-5.447v114.282h4.241z"
    //     />
    //     <path
    //       data-name="Path 26"
    //       d="M113.896 20.983l-4.241 5.447v101.791h4.241z"
    //     />
    //     <path
    //       data-name="Path 27"
    //       d="M119.381 13.939l-4.241 5.447v108.835h4.241z"
    //     />
    //     <path
    //       data-name="Path 28"
    //       d="M44.59 128.224h4.241v-27.672l-4.653 4.857h.413z"
    //     />
    //     <path
    //       data-name="Path 29"
    //       d="M55.558 128.221h3.865V89.492l-4.14 4.322h.275z"
    //     />
    //     <path
    //       data-name="Path 30"
    //       d="M80.987 81.347v-18.1l-4.241 5.447v59.524h4.241z"
    //     />
    //     <path
    //       data-name="Path 31"
    //       d="M43.345 106.274l-4.241 4.427v17.519h4.241z"
    //     />
    //     <path data-name="Path 32" d="M54.314 94.823l-4.24 4.427v28.97h4.24z" />
    //     <path
    //       data-name="Path 33"
    //       d="M33.619 128.221h4.241V112l-4.753 4.962h.512z"
    //     />
    //     <path
    //       data-name="Path 34"
    //       d="M75.502 70.293l-4.241 5.447v52.48h4.241z"
    //     />
    //     <path
    //       data-name="Path 35"
    //       d="M70.019 77.337l-4.241 5.447v45.436h4.241z"
    //     />
    //     <path
    //       data-name="Path 36"
    //       d="M64.532 84.157l-3.865 4.035v40.029h3.865z"
    //     />
    //     <path
    //       data-name="Path 37"
    //       d="M179.714 88.582l-4.241-4.428v44.069h4.241z"
    //     />
    //     <path
    //       data-name="Path 38"
    //       d="M196.167 105.758l-4.241-4.427v26.89h4.241z"
    //     />
    //     <path
    //       data-name="Path 39"
    //       d="M185.198 94.306l-4.24-4.428v38.343h4.24z"
    //     />
    //     <path
    //       data-name="Path 40"
    //       d="M201.652 111.484l-4.241-4.428v21.165h4.241z"
    //     />
    //     <path
    //       data-name="Path 41"
    //       d="M190.683 100.032l-4.241-4.427v32.612h4.241z"
    //     />
    //     <path
    //       data-name="Path 42"
    //       d="M19.917 209.078l-3.271 22.8h208.261l-3.272-22.8z"
    //     />
    //     <path
    //       data-name="Path 43"
    //       d="M207.137 117.21l-4.241-4.428v15.438h4.241z"
    //     />
    //     <path data-name="Path 44" d="M213.241 123.584v4.637h4.441z" />
    //     <path
    //       data-name="Path 45"
    //       d="M211.997 122.285l-3.616-3.776v9.711h3.616z"
    //     />
    //     <path
    //       data-name="Path 46"
    //       d="M168.744 75.741l-4.241-5.447v57.927h4.241z"
    //     />
    //     <path
    //       data-name="Path 47"
    //       d="M141.32 40.519l-4.241-5.447v46.276h4.241z"
    //     />
    //     <path
    //       data-name="Path 48"
    //       d="M146.805 47.563l-4.241-5.447v39.23h4.241z"
    //     />
    //     <path
    //       data-name="Path 49"
    //       d="M142.564 128.22h15.21V82.59h-20.7v45.63h5.485z"
    //     />
    //     <path
    //       data-name="Path 50"
    //       d="M152.289 54.607l-4.241-5.447v32.187h4.241z"
    //     />
    //     <path
    //       data-name="Path 51"
    //       d="M163.255 68.692l-4.241-5.447v64.972h4.241z"
    //     />
    //     <path
    //       data-name="Path 52"
    //       d="M135.835 81.346V33.474l-4.241-5.447V128.22h4.241z"
    //     />
    //     <path
    //       data-name="Path 53"
    //       d="M157.774 61.652l-4.241-5.447v25.142h4.241z"
    //     />
    //     <path
    //       data-name="Path 54"
    //       d="M174.228 82.785l-4.241-5.447v50.883h4.241z"
    //     />
    //     <path
    //       data-name="Path 55"
    //       d="M97.442 42.116l-4.241 5.447v33.784h4.241z"
    //     />
    //     <path
    //       data-name="Rectangle 597"
    //       d="M183.641 170.31h8.433v6.307h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 598"
    //       d="M122.578 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 599"
    //       d="M183.641 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 600"
    //       d="M183.641 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Path 56"
    //       d="M111.656 184.34h-.727v1.4h22.339v-1.4h-21.613z"
    //     />
    //     <path
    //       data-name="Rectangle 601"
    //       d="M112.901 170.31h8.433v6.307h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 602"
    //       d="M112.901 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 603"
    //       d="M112.901 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 604"
    //       d="M112.901 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Path 57"
    //       d="M220.637 142.605H20.915v57.03h199.722zm-149.33 44.38H46.48v-3.889h1.971v-28.044h20.6v28.041h2.258zm63.207 0h-24.827v-3.889h1.972v-28.044h20.6v28.041h2.258zm61.063 0H170.75v-3.889h1.971v-28.044h20.6v28.041h2.258z"
    //     />
    //     <path
    //       data-name="Rectangle 605"
    //       d="M173.964 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Path 58"
    //       d="M172.72 184.34h-.727v1.4h22.339v-1.4H172.72z"
    //     />
    //     <path
    //       data-name="Path 59"
    //       d="M20.915 202.129v5.706h199.722v-5.706l-.18-1.25H21.094z"
    //     />
    //     <path
    //       data-name="Rectangle 606"
    //       d="M173.964 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 607"
    //       d="M173.964 170.31h8.433v6.307h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 608"
    //       d="M183.641 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 609"
    //       d="M173.964 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 610"
    //       d="M59.371 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 611"
    //       d="M59.371 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path
    //       data-name="Path 60"
    //       d="M32.376 117.726l-3.888 4.06v6.436h3.888z"
    //     />
    //     <path
    //       data-name="Rectangle 612"
    //       d="M59.371 170.31h8.433v6.307h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 613"
    //       d="M59.371 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 614"
    //       d="M49.694 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path data-name="Path 61" d="M27.243 128.221v-5.137l-4.921 5.137z" />
    //     <path
    //       data-name="Path 62"
    //       d="M234.064 135.159l-47.165-49.24-66.9-85.918-66.917 85.943-.022.023-47.115 49.192zM48.83 98.638h.108l15.59-16.275v-.394h.3l55.167-70.854 55.167 70.854h.3v.394l26.908 28.088h.512v.535l17.7 18.479H19.393l29.422-30.714z"
    //     />
    //     <path data-name="Path 63" d="M0 141.361h240.006l-4.75-4.958H4.746z" />
    //     <path
    //       data-name="Rectangle 615"
    //       d="M122.578 156.299h8.433v5.565h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 616"
    //       d="M122.578 170.31h8.433v6.307h-8.433z"
    //     />
    //     <path
    //       data-name="Path 64"
    //       d="M48.45 184.34h-.727v1.4h22.339v-1.4H48.45z"
    //     />
    //     <path
    //       data-name="Rectangle 617"
    //       d="M49.694 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 618"
    //       d="M49.694 177.861h8.433v5.235h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 619"
    //       d="M122.578 163.108h8.433v5.958h-8.433z"
    //     />
    //     <path
    //       data-name="Rectangle 620"
    //       d="M49.694 170.31h8.433v6.307h-8.433z"
    //     />
    //   </g>
    // </svg>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 482.39 466.05"
      {...props}
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M165.28 166v91.71h41.59V166H165.28zM206.87 70.49l-8.52 10.95v82.06h8.52V70.49zM184.82 98.81l-8.52 10.94v53.75h8.52V98.81zM261.99 53.12l-8.52-10.95v215.54h8.52V53.12zM217.9 56.33l-8.53 10.95v190.43h8.53V56.33zM165.28 163.5h8.52v-50.53l-9.91 12.72h1.39v37.81zM250.97 38.96l-8.53-10.94v229.69h8.53V38.96zM228.92 42.17l-8.52 10.95v204.59h8.52V42.17zM239.94 28.02l-8.52 10.94v218.75h8.52V28.02zM89.62 257.71h8.52v-55.62l-9.35 9.76h.83v45.86zM111.67 257.71h7.77v-77.84l-8.33 8.68h.56v69.16zM162.78 163.5v-36.38l-8.53 10.95v119.64h8.53V163.5zM87.12 213.6l-8.52 8.9v35.21h8.52V213.6zM109.17 190.58l-8.53 8.9v58.23h8.53v-67.13zM67.57 257.71h8.53v-32.6l-9.56 9.97h1.03v22.63zM151.75 141.28l-8.52 10.95v105.48h8.52V141.28zM140.73 155.44l-8.52 10.95v91.32h8.52V155.44zM129.71 169.15l-7.77 8.1v80.46h7.77v-88.56zM361.2 178.03l-8.52-8.89v88.57h8.52v-79.68zM394.28 212.56l-8.53-8.9v54.05h8.53v-45.15zM372.23 189.54l-8.53-8.89v77.06h8.53v-68.17zM405.3 224.07l-8.52-8.9v42.54h8.52v-33.64zM383.25 201.05l-8.52-8.89v65.55h8.52v-56.66zM40.03 420.22l-6.57 45.83h418.58l-6.58-45.83H40.03zM416.32 235.58l-8.52-8.9v31.03h8.52v-22.13zM428.59 248.39v9.32h8.93l-8.93-9.32zM426.09 245.78l-7.27-7.59v19.52h7.27v-11.93zM339.16 152.23l-8.53-10.95v116.43h8.53V152.23zM284.04 81.44l-8.53-10.95v93.01h8.53V81.44zM295.06 95.6l-8.52-10.95v78.85h8.52V95.6zM286.54 257.71h30.57V166H275.51v91.71h11.03zM306.08 109.75l-8.52-10.94v64.69h8.52v-53.75zM328.13 138.07l-8.52-10.95v130.59h8.52V138.07zM273.01 163.5V67.28l-8.52-10.95v201.38h8.52V163.5zM317.11 123.91l-8.53-10.94v50.53h8.53v-39.59zM350.18 166.39l-8.52-10.95v102.27h8.52v-91.32zM195.85 84.65l-8.53 10.95v67.9h8.53V84.65zM369.1 342.3h16.95v12.68H369.1zM246.37 357.48h16.95V368h-16.95zM369.1 314.14h16.95v11.19H369.1zM369.1 327.83h16.95v11.97H369.1zM224.42 370.5h-1.46v2.82h44.9v-2.82h-43.44zM226.92 342.3h16.95v12.68h-16.95zM226.92 314.14h16.95v11.19h-16.95zM226.92 327.83h16.95v11.97h-16.95zM226.92 357.48h16.95V368h-16.95z" />
          <path d="M443.46 286.62H42v114.62h401.46zm-300.14 89.2h-49.9V368h4v-56.36h41.4V368h4.54zm127 0h-49.9V368h4v-56.36h41.4V368h4.54zm122.73 0h-49.9V368h4v-56.36h41.4V368h4.54z" />
          <path d="M349.65 357.48h16.95V368h-16.95zM347.15 370.5h-1.46v2.82h44.9v-2.82h-43.44zM42.04 406.26v11.46h401.42v-11.46l-.36-2.51H42.4l-.36 2.51zM349.65 314.14h16.95v11.19h-16.95zM349.65 342.3h16.95v12.68h-16.95zM369.1 357.48h16.95V368H369.1zM349.65 327.83h16.95v11.97h-16.95zM119.33 327.83h16.95v11.97h-16.95zM119.33 314.14h16.95v11.19h-16.95zM65.07 236.62l-7.81 8.16v12.93h7.81v-21.09zM119.33 342.3h16.95v12.68h-16.95zM119.33 357.48h16.95V368h-16.95zM99.88 314.14h16.95v11.19H99.88zM54.76 257.71v-10.33l-9.89 10.33h9.89z" />
          <path d="M470.44 271.65l-94.79-99L241.19 0 106.7 172.74l-94.76 98.91zm-372.3-73.4h.22l31.34-32.71v-.78h.61L241.19 22.34l110.88 142.41h.61v.78L406.77 222h1v1.07l35.58 37.14H39l59.13-61.73zM0 284.12H482.38l-9.54-9.97H9.55L0 284.12zM246.37 314.14h16.95v11.19h-16.95zM246.37 342.3h16.95v12.68h-16.95zM97.38 370.5h-1.46v2.82h44.9v-2.82H97.38zM99.88 327.83h16.95v11.97H99.88zM99.88 357.48h16.95V368H99.88zM246.37 327.83h16.95v11.97h-16.95zM99.88 342.3h16.95v12.68H99.88z" />
        </g>
      </g>
    </svg>
  )
  // return (
  //   <svg {...props}>
  //     <g data-name="Group 4">
  //       <g data-name="Group 1" fill="none" stroke="#fff">
  //         <path
  //           data-name="Path 3"
  //           d="M126.074 58.056L81.504.813l-44.57 57.243L1.166 95.389h160.672z"
  //           strokeMiterlimit={10}
  //         />
  //         <path data-name="Path 8" d="M15.556 95.39h132.919v39.484H15.556z" />
  //         <path
  //           data-name="Path 4"
  //           d="M152.564 156.2H11.466l3.1-21.326h134.9z"
  //           strokeMiterlimit={10}
  //         />
  //         <path
  //           data-name="Rectangle 17"
  //           strokeMiterlimit={10}
  //           d="M34.591 106.296h12.801v18.546H34.591z"
  //         />
  //         <path
  //           data-name="Line 15"
  //           strokeMiterlimit={10}
  //           d="M40.992 106.296v18.546"
  //         />
  //         <path
  //           data-name="Line 16"
  //           strokeMiterlimit={10}
  //           d="M34.591 110.337h12.801"
  //         />
  //         <path
  //           data-name="Line 17"
  //           strokeMiterlimit={10}
  //           d="M34.591 96.244h12.801"
  //         />
  //         <path
  //           data-name="Line 18"
  //           strokeMiterlimit={10}
  //           d="M34.591 115.1h12.801"
  //         />
  //         <path
  //           data-name="Rectangle 18"
  //           strokeMiterlimit={10}
  //           d="M33.287 101.222h15.598v1.75H33.287z"
  //         />
  //         <path
  //           data-name="Rectangle 19"
  //           strokeMiterlimit={10}
  //           d="M76.396 106.296h12.801v18.546H76.396z"
  //         />
  //         <path
  //           data-name="Line 19"
  //           strokeMiterlimit={10}
  //           d="M82.797 106.296v18.546"
  //         />
  //         <path
  //           data-name="Line 20"
  //           strokeMiterlimit={10}
  //           d="M76.396 110.337h12.801"
  //         />
  //         <path
  //           data-name="Line 21"
  //           strokeMiterlimit={10}
  //           d="M76.396 96.244h12.801"
  //         />
  //         <path
  //           data-name="Line 22"
  //           strokeMiterlimit={10}
  //           d="M76.396 115.1h12.801"
  //         />
  //         <path
  //           data-name="Rectangle 20"
  //           strokeMiterlimit={10}
  //           d="M75.092 101.222H90.69v1.75H75.092z"
  //         />
  //         <path
  //           data-name="Rectangle 21"
  //           strokeMiterlimit={10}
  //           d="M116.783 106.296h12.801v18.546h-12.801z"
  //         />
  //         <path
  //           data-name="Line 23"
  //           strokeMiterlimit={10}
  //           d="M123.183 106.296v18.546"
  //         />
  //         <path
  //           data-name="Line 24"
  //           strokeMiterlimit={10}
  //           d="M116.783 110.337h12.801"
  //         />
  //         <path
  //           data-name="Line 25"
  //           strokeMiterlimit={10}
  //           d="M116.783 96.244h12.801"
  //         />
  //         <path
  //           data-name="Line 26"
  //           strokeMiterlimit={10}
  //           d="M116.783 115.1h12.801"
  //         />
  //         <path
  //           data-name="Rectangle 22"
  //           strokeMiterlimit={10}
  //           d="M115.479 101.222h15.598v1.75h-15.598z"
  //         />
  //         <path
  //           data-name="Line 27"
  //           strokeMiterlimit={10}
  //           d="M5.101 91.287h152.807"
  //         />
  //         <path
  //           data-name="Path 6"
  //           d="M117.883 56.224L81.504 9.501 45.125 56.224 15.936 86.699h131.137z"
  //           strokeMiterlimit={10}
  //         />
  //         <path
  //           data-name="Line 28"
  //           strokeMiterlimit={10}
  //           d="M81.504 9.504v77.195"
  //         />
  //         <path
  //           data-name="Line 29"
  //           strokeMiterlimit={10}
  //           d="M52.483 46.745v39.954"
  //         />
  //         <path
  //           data-name="Line 30"
  //           strokeMiterlimit={10}
  //           d="M45.228 55.697v31.002"
  //         />
  //         <path
  //           data-name="Line 31"
  //           strokeMiterlimit={10}
  //           d="M59.739 37.457v49.242"
  //         />
  //         <path
  //           data-name="Line 32"
  //           strokeMiterlimit={10}
  //           d="M66.994 28.085v58.614"
  //         />
  //         <path
  //           data-name="Line 33"
  //           strokeMiterlimit={10}
  //           d="M74.249 18.883v67.816"
  //         />
  //         <path
  //           data-name="Line 34"
  //           strokeMiterlimit={10}
  //           d="M52.483 46.745v39.954"
  //         />
  //         <path
  //           data-name="Line 35"
  //           strokeMiterlimit={10}
  //           d="M45.228 55.697v31.002"
  //         />
  //         <path
  //           data-name="Line 36"
  //           strokeMiterlimit={10}
  //           d="M59.739 37.457v49.242"
  //         />
  //         <path
  //           data-name="Line 37"
  //           strokeMiterlimit={10}
  //           d="M66.994 28.085v58.614"
  //         />
  //         <path
  //           data-name="Line 38"
  //           strokeMiterlimit={10}
  //           d="M74.249 18.883v67.816"
  //         />
  //         <path
  //           data-name="Line 39"
  //           strokeMiterlimit={10}
  //           d="M139.546 78.841v7.858"
  //         />
  //         <path
  //           data-name="Line 40"
  //           strokeMiterlimit={10}
  //           d="M110.525 46.745v39.954"
  //         />
  //         <path
  //           data-name="Line 41"
  //           strokeMiterlimit={10}
  //           d="M117.781 55.697v31.002"
  //         />
  //         <path
  //           data-name="Line 42"
  //           strokeMiterlimit={10}
  //           d="M103.27 37.457v49.242"
  //         />
  //         <path
  //           data-name="Line 43"
  //           strokeMiterlimit={10}
  //           d="M125.036 63.53v23.169"
  //         />
  //         <path
  //           data-name="Line 44"
  //           strokeMiterlimit={10}
  //           d="M132.291 71.198v15.501"
  //         />
  //         <path
  //           data-name="Line 45"
  //           strokeMiterlimit={10}
  //           d="M96.015 28.085v58.614"
  //         />
  //         <path
  //           data-name="Line 46"
  //           strokeMiterlimit={10}
  //           d="M88.76 18.883v67.816"
  //         />
  //       </g>
  //     </g>
  //   </svg>
  // )
}

export default Chata