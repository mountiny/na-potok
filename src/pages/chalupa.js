import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'
import UnderlineLinkInter from "../components/UnderlineLinkInter"
import ImageSlider from "../components/imageSlider"

import ChataImg from '../components/svg/chata.js'
import Piano from '../components/svg/piano.js'
import Kameny from '../components/svg/kameny.js'

import NarrowContainer from "../components/NarrowContainer"

const Chalupa = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok" />
      <section className="bg-primary flex justify-center items-end content-center pt-16">
         <div className="w-full flex justify-center items-center pb-32 pt-40">
            <ChataImg 
              width={289.87}
              height={280.05}
              className='chata-img phone:mt-16' />
          </div>
      </section>
      <NarrowContainer className='text-primary'>
        <div className="central-text-block pb-16 text-center h-half-spacing-top">  
          <div className="centered-block inline-block leading-loose max-w-4xl pb-40 pt-8 text-black">
            <AnimateIn >
              Chalupa Na Potok je skvělé místo pro všechny, kteří hledají odpočinek od každodenních povinností, klid a&nbsp;pohodu. Pro ty, kteří chtějí znovu a&nbsp;znovu objevovat jesenickou přírodu i&nbsp;zákoutí Králického Sněžníku nebo Orlických hor. Na Potok může být tím místem, kde si připomenete, jak důležité je zpomalit, načerpat energii a&nbsp;odpočívat. Ať už fandíte spíše zahálce s&nbsp;knihou v&nbsp;ruce nebo se svůj čas rozhodnete strávit aktivně, naše chalupa je Vám plně k&nbsp;dispozici.
            </AnimateIn>
          </div>
          <div className="relative flex justify-center items-center">
            <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "1200px"}}>
              <ImageSlider 
                  images={['35', '32', 'uvodni2', '56', '42', '57', '39']}
                  className={''}
                  height={'780px'}
                  maxHeight={'782px'}
                />
            </AnimateIn>
          </div>
        </div>
        <div className="relative w-full mt-32 text-black">
          <AnimateIn>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-col justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <ChataImg 
                  width={206.87}
                  height={200.05}
                    className='chata-img' />
                </div>
                <span className="text-center potok text-3xl font-bold py-16 uppercase">
                  150 let historie
                </span>
                <div className="text-block w-full text-center">
                  Chalupa Na Potok byla postavena před více než 150 lety. Po dlouhých a&nbsp;dlouhých letech chátrání se opět snažíme přivést na toto kouzelné místo život a&nbsp;dětský smích. Věříme, že nám v&nbsp;tom pomůžete!
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <Piano 
                    width={238.68}
                    height={160.25}
                    className='chata-img mt-8' />
                </div>
                <span className="text-center potok text-3xl font-bold py-16 uppercase">
                  Respekt
                </span>
                <div className="text-block w-full text-center">
                  Interiér chalupy září životem. Není to muzeum ani skanzen. Moderní prvky se snoubí s&nbsp;těmi klasickými a&nbsp;řemeslo s&nbsp;technologií. Vše ještě není doladěno, ale blížíme se cíli!
                </div>
              </div>
                <div className="flex flex-col  justify-start items-center px-16">
                  <div className="h-72 w-full flex justify-center items-center">
                    <Kameny 
                      width={90}
                      height={200}
                      className='chata-img' />
                  </div>
                  <span className="text-center potok text-3xl font-bold py-16 uppercase">
                    Materiály
                  </span>
                  <div className="text-block w-full text-center">
                    Na pozemek chalupy jsme nedovezli jediný kámen. Všechny ty nádherné kusy skal zde již byly a&nbsp;my se je snažili znovu využít jak nejlépe to šlo. Stejně jako prostor bývalé stodoly, který čeká na další kapitolu.
                  </div>
                </div>
            </div>
          </AnimateIn>
          
          <div className="relative w-full my-32 text-black">
            <AnimateIn>
              <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
                <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`} />
              </span>
            </AnimateIn>
          </div>
        </div>
      </NarrowContainer>
    </Layout>
  )
}

export default Chalupa
