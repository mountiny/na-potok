import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import ListImage from "../images/list-left.png"
import MainImage2 from "../images/main_2.png"
import MainImage3 from "../images/main_3.png"

import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"



const KontaktPage = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Náš příběh" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Kontakt</h2>
        </div>
        <img 
          src={ListImage}
          className='list-top'
          />
      </section>

      <NarrowContainer className='text-primary h-spacing-bottom'>


        <div className="central-text-block text-center h-half-spacing-top">
          <div className="centered-block">
            <AnimateIn>
              <span className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam purus, euismod et tincidunt vel, alique aptent taciti sociosqu ad litorat id est.
              </span>
            </AnimateIn>
          </div>
        </div>

        <div className="kontakt-wrapper h-half-spacing-bottom">
          <div className="kontakt-block">
            <AnimateIn>
              <h5 className="uppercase potok pb-6">
                adresa
              </h5>
              <span className='phone:text-xl'>U lesa 123, Hezké město, Dolní Morava</span>
            </AnimateIn>
          </div>
          <div className="kontakt-block">
            <AnimateIn>
              <h5 className="uppercase potok pb-6">
                telefon
              </h5>
              <a className='phone:text-xl' href='tel:+420777123456'>+420 777 123 456</a>
            </AnimateIn>
          </div>
          <div className="kontakt-block">
            <AnimateIn>
              <h5 className="uppercase potok pb-6">
                e-mail
              </h5>
              <a className='phone:text-xl' href='mailto:info@napotok.cz'>info@napotok.cz</a>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
          <div className="dummy-block map-block">

          </div>
        </AnimateIn>

      </NarrowContainer>

    </Layout>
  )
}


export default KontaktPage