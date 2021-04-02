module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    // extend: {
      screens: {
        'sm-m': {'min': '640px'},

        'md-m': {'min': '768px'},
        
        'phonemin': {'min': '901px'},

        'lg-m': {'min': '1024px'},

        'xl-m': {'min': '1300px'},

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'phone': {'max': '900px'},
        
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    // },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary2': 'var(--primary-2)'
      },
      width: {
        '1/15': '6.666%',
        '2/15': '13.333%',
        '3/15': '20%',
        '4/15': '26.666%',
        '5/15': '33.333%',
        '6/15': '40%',
        '7/15': '46.666%',
        '8/15': '53.333%',
      },
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
        // => @media (orientation: portrait) { ... }
      }
     }
  },
  variants: {},
  plugins: [],
}