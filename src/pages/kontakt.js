import React from "react"

import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import Kontakt1 from "../images/kontakt1.png"
import Kontakt2 from "../images/kontakt2.png"
import Kontakt3 from "../images/kontakt3.png"

import NarrowContainer from "../components/NarrowContainer"


const KontaktPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Kontakt" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Kontakt</h2>
        </div>
      </section>

      <NarrowContainer className='text-primary h-half-spacing-bottom'>


        <div className="central-text-block text-center h-half-spacing-top">
          <div className="centered-block">
            <AnimateIn>
              <span className='font-medium'>
              Zavolejte a&nbsp;zeptejte se, napište nám <a href='mailto:info@napotok.cz' className='text-black'>mail</a>, nebo si rovnou rezervujte termín a&nbsp;my se s&nbsp;vámi spojíme.
              <br />
              Potkáme se na chalupě.
              </span>
            </AnimateIn>
          </div>
        </div>

        <div className="kontakt-wrapper">
          <div className="kontakt-block">
            <AnimateIn>
              <h5 className="uppercase potok pb-6">
                adresa
              </h5>
              <span className='phone:text-xl'>Vysoký potok 33<br />Malá Morava 788 33</span>
            </AnimateIn>
          </div>
          <div className="kontakt-block">
            <AnimateIn>
              <h5 className="uppercase potok pb-6">
                telefon
              </h5>
              <a className='phone:text-xl' href='tel:+420777123456'>+420 777 441 876</a>
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

        <div className="kontakt-wrapper mb-40 phone:mb-0">
          <div className="kontakt-block kontakt-block-image flex justify-center">
            <AnimateIn>
              <img
                src={Kontakt1} 
                className={`mb-16`}
                />
              <span className="kontakt-name">Karel Hrušovský</span>
            </AnimateIn>
          </div>
          <div className="kontakt-block kontakt-block-image flex justify-center">
            <AnimateIn>
              <img
                src={Kontakt2} 
                className={`mb-16`}
                />
                <span className="kontakt-name">Jan Skoumal</span>
            </AnimateIn>
          </div>
          <div className="kontakt-block kontakt-block-image flex justify-center">
            <AnimateIn>
              <img
                src={Kontakt3} 
                className={`mb-16`}
                />
                <span className="kontakt-name">Jiří Gonda</span>
            </AnimateIn>
          </div>
        </div>
      </NarrowContainer>
    
    <section className="mapa">
      {
        typeof window !== 'undefined' &&
        (
          <Map 
            center={[50.085786, 16.848588]}
            zoom={8}
            minZoom={6}
            maxZoom={18}
            attributionControl={true}
            zoomControl={true}
            style={{
              height: "100%"
            }}
            >
              <TileLayer
                  attribution='&copy; <a href="https://en.mapy.cz/">Mapy.cz</a>'
                  url="https://mapserver.mapy.cz/base-m/{z}-{x}-{y}"
                />

              <Marker position={[50.085786, 16.848588]}>
                <Popup>
                  Chalupa Na Potok.
                </Popup>
              </Marker>

              
          </Map>

        )

      } 
  
      
    </section>

    </Layout>
  )
}


export default KontaktPage
