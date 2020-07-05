import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
 
import MainImage1 from "../images/main_1.png"
import MainImage2 from "../images/main_2.png"
import MainImage3 from "../images/main_3.png"

import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"



const NasPribehPage = () => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <SEO title="Náš příběh" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>náš příběh</h2>
        </div>
      </section>

      <WideContainer className='text-primary'>

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
        <div className="flex w-full justify-between">
          <div className="left-col flex flex-col">
            <div className="heading-wrapper pt-12">
              <h5 className='potok uppercase'>    
                Donec tincidunt purus velit,<br />
                a tempus eros lobortis ut.
              </h5>
            </div>
            <div className="text-block inner-column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
            </div>

            <div className="images-wrapper inner-column mt-40">
              <img
                src={MainImage2} 
                />
              <div className="description description-right uppercase">
                popisek obrázku
              </div>
            </div>
          </div>

          <div className="right-col flex flex-col wider-col">
            <div 
              className={`images-wrapper self-end inner-column`}
              > 
              <div 
                className="images-container flex" 
                style={{
                  height: `120vh`,
                  maxHeight: '973px'
                }}
                >
                  <img
                    src={MainImage1} 
                    className={`slider-image active`}
                    />
              
                </div>
              </div>
                
          </div>
        </div>

        <div className="central-text-block text-center h-spacing-top h-spacing-bottom">
          <div className="centered-block quote">
            <h3 className="potok">
              "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi non facilisis"
            </h3>
          </div>
        </div>

      </WideContainer>
        <NarrowContainer>
          <div>

            <img
              className='centered-image-relative'
              src={MainImage3}
              />
            <div className={`description description-right uppercase`}>
              popisek obrázku
            </div>
          </div>
        </NarrowContainer>

      <WideContainer className='h-spacing-top h-spacing-bottom'>
        <div className="flex w-full justify-between">
          <div className="left-col flex flex-col">
            <div className="dummy-block">

            </div>
          </div>

          <div className="right-col flex flex-col wider-col text-primary">
             <div className="heading-wrapper pt-12">
              <h5 className='potok uppercase'>    
                Donec tincidunt purus velit,<br />
                a tempus eros lobortis ut.
              </h5>
            </div>
            <div className="text-block inner-column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
            </div>

          </div>
        </div>
      </WideContainer>

    </Layout>
  )
}


export default NasPribehPage
