import React from "react"
import { Link } from "gatsby"

import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"

import Image from '../components/image.js'
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// stupid hack so that leaflet's images work after going through webpack
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

if (typeof window !== `undefined`) {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: marker2x,
      iconUrl: marker,
      shadowUrl: markerShadow
  });
}


const KontaktPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Kontakt" />

      {/* <section className="top-block flex justify-center items-end content-center">
        <Image 
          filename="strecha"
          className="w-48 pb-44"
          imgStyle={{ objectFit: 'contain' }}
          />
      </section> */}
       <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-normal text-center max-w-7xl text-black px-4">
              <h4 className="potok uppercase">
                Potkáme se na chalupě.<br/>
                Těšíme se na Vás!
              </h4>
            </div>
          </div>
        </AnimateIn>
      </section>

      <NarrowContainer className='text-primary h-half-spacing-bottom'>
        <div className="relative w-full mt-32 text-black">
          <AnimateIn>
            <div className="grid grid-cols-3 lg:grid-cols-1 justify-center content-center">
              <div className="flex flex-col justify-start items-center justify-self-center px-8 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Telefon
                </span>
                <div className="text-block w-full pt-6 text-center h-40">
                  Volejte kdykoliv. Pokud nás nezastihnete, určitě se Vám co nejdříve ozveme.
                </div>
                <a href="tel:+420777441876" className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                  +420 777 441 876
                </a>
              </div>
              <div className="flex flex-col  justify-start items-center justify-self-center px-8 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Adresa
                </span>
                <div className="text-block w-full pt-6 text-center h-40">
                  Cest k&nbsp;nám vede několik, tak pro jistotu nesledujte jen navigaci, ale i&nbsp;šipky, které Vás k&nbsp;nám navedou!
                </div>
                <a target="_blank" href="https://en.mapy.cz/zakladni?x=16.8486096&y=50.0858129&z=17&source=addr&id=9666105" className="text-center helvetica leading-relaxed text-3xl font-bold pt-16 pb-8">
                  Vysoký Potok 33,<br />
                  Malá Morava, 788 33
                </a>
              </div>
                <div className="flex flex-col  justify-start items-center justify-self-center px-8 max-w-lg px-20">
                  <span className="text-center potok text-3xl font-bold py-8 uppercase">
                    Email
                  </span>
                  <div className="text-block w-full pt-6 text-center h-40">
                    Na emaily odepisujeme hned jak je to možné a&nbsp;těšíme se, až se spojíme.
                  </div>
                <a href="mailto:chalupa@napotok.cz" className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                  chalupa@napotok.cz
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>

         {/* <div className="w-full relative flex justify-center">
            <AnimateIn className={`w-full`}>
              <Image
                filename={"kontakt1"}
                className={`mb-10 w-full`}
                />
              <span className="kontakt-name">Karel Hrušovský</span>
            </AnimateIn>
          </div> */}
{/*         
        <div className="w-full text-block pt-28 pb-12 font-medium text-center tracking-wide flex justify-center items-center">
          <Link className="text-2xl text-black font-normal border border-black px-5 py-4 hover:text-primary hover:bg-black transition-colors duration-200" to='/cenik/'>Chci přijet!</Link>
        </div> */}
         <div className="relative w-full mt-32 mb-16 text-black">
          <AnimateIn>
            <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
              <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`} />
            </span>
          </AnimateIn>
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
            scrollWheelZoom={false}
            tap={false}
            style={{
              height: "100%"
            }}
            >
              <TileLayer
                  attribution='&copy; <a href="https://en.mapy.cz/">Mapy.cz</a>'
                  url="https://mapserver.mapy.cz/winter-m/{z}-{x}-{y}"
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
