import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
 
import ListImage from "../images/list-left.png"
import MainImage1 from "../images/main_1.png"
import MainImage6 from "../images/main_6.png"
import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"



const AkcePage = () => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <SEO title="Náš příběh" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Akce a události</h2>
        </div>
        <img 
          src={ListImage}
          className='list-top'
          />
      </section>

      <NarrowContainer className='text-primary h-half-spacing-bottom'>

        <div className="central-text-block text-center h-half-spacing-top h-half-spacing-bottom">
          <div className="centered-block">
            <span className='font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam purus, euismod et tincidunt vel, alique aptent taciti sociosqu ad litorat id est.
            </span>
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus lectus. Aenean et est et ipsum commodo dapibus non et purus. Praesent neque erat, euismod venenatis magna non, congue rhoncus libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean . 
          </div>
        </div>
        <div className="flex w-full justify-between text-primary">
          <div className="left-col flex flex-col inner-column">

            <ImageSlider 
                images={[MainImage1, MainImage6]}
                innerColumn={true}
                maxHeight={'462px'}
              />
            <div className="text-wrapper pt-20">
              <h5 className='potok uppercase'>    
                svatby
              </h5>
              <div className="text-block inner-column pt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
              </div>
            </div>
          </div>

          <div className="right-col flex flex-col inner-column">
            <ImageSlider 
                images={[MainImage6, MainImage1]}
                innerColumn={true}
                maxHeight={'655px'}
              />
            <div className="text-wrapper pt-20">
              <h5 className='potok uppercase'>    
                teambuilding
              </h5>
              <div className="text-block inner-colum pt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
              </div>
            </div>
                
          </div>
        </div>

      </NarrowContainer>

    </Layout>
  )
}


export default AkcePage
