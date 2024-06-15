import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'
import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"

const Pokoje = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok - Pokoje" />
      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
          <AnimateIn >
            <div className="central-text-block text-center">  
              <div className="centered-block inline-block leading-loose text-center max-w-6xl text-black">
                <h4 className="potok uppercase">
                  Jak si ustelete, tak si lehnete...<br/>
                  a&nbsp;kde usnete?
                </h4>
              </div>
            </div>
          </AnimateIn>
      </section>
      <NarrowContainer className='text-primary'>
        <div className="relative flex flex-col justify-center items-center text-black">
          <AnimateIn className='my-16' >
            <div className="flex flex-col justify-start items-center px-12 md:px-4 lg:mb-20">
              <span className="text-center potok text-3xl font-bold py-8 uppercase">
                Společné prostory
              </span>
              <div className="text-block w-full pt-6 text-center">
                Velká společenská místnost s&nbsp;kuchyní a&nbsp;jídelnou.<br />
                Krb pro zahřátí, atmosféru i&nbsp;domácí pohodu.<br />
                Herna pro nejmenší a&nbsp;sklípek pro ty větší.<br />
                Sauna pro uvolnění a&nbsp;jezírko pro otužení.<br />
                Terasa na pohodu a&nbsp;bývalá stodola na párty.
              </div>
            </div>
         </AnimateIn>

          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>

            <ImageSlider 
              images={['113', '109', '107', '100', '103', '105', '102', '110', '84', '26', '27', '24',]}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
          <AnimateIn className='my-20' >
              <div className="flex flex-col justify-start items-center px-12 md:px-4 lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Pokoje
                </span>
                <div className="text-block w-full pt-6 text-center">
                  16 míst na osmi postelích.<br />
                  Dva pokoje máme dvoulůžkové<br />
                  a tři pokoje jsou čtyřlůžkové (2+2).<br />
                  V každém z nich pak sociální zázemí, wc, sprcha,<br />
                  kniha a&nbsp;výhled, který neomrzí.
                </div>
              </div>
          </AnimateIn>
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
            <ImageSlider 
              images={['81', '79', '80', '77', '75', '83', 'KOUPELNA']}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
        </div>
            <div className="relative w-full mt-24 text-black">
              <AnimateIn>
                <h4 className="pt-16 pb-0 potok w-full text-center uppercase">
                    5 pokojů / 16 míst / nekonečno zážitků
                </h4>
              </AnimateIn>
        </div>
           <div className="relative flex justify-center items-center mt-4">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>   
            <ImageSlider 
              images={['pudorys1', 'pudorys2']}
              className={''}
              height={'780px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
        </div>
        <div className="relative w-full my-32 text-black">
          <AnimateIn>
            <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
              <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`} />
            </span>
          </AnimateIn>
        </div>
      </NarrowContainer>
    </Layout>
  )
}

export default Pokoje
