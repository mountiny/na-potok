import React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"

const Radosti = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok - Pokoje" />
      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-normal text-center max-w-7xl text-black px-4">
              <h4 className="potok uppercase">
                Na Potok není jen chalupa k&nbsp;pronájmu...
                Je to místo setkávání, zážitků a&nbsp;radosti!
              </h4>
            </div>
          </div>
        </AnimateIn>
      </section>

      <NarrowContainer className='text-black'>
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-loose text-center max-w-5xl py-32 text-black">
              <p className="leading-loose">
                Díky členitému pozemku s&nbsp;mnohými zákoutími, bývalou stodolou a&nbsp;perfektnímu zázemí, může chalupa Na Potok hostit všechny možné příležitosti setkávání, zážitků a&nbsp;radostí, které Vás jen napadnou!
               </p>   
            </div>
          </div>
        </AnimateIn>
          <AnimateIn >
            <div className="central-text-block py-4 text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 text-black">
                <h4 className="pt-16 pb-16 potok uppercase">
                  Svatební veselí
                </h4>
              
              <p className="leading-loose">
                Chalupa Na Potok je díky nádhernému okolí a&nbsp;nekončícím výhledům oblíbeným místem pro trávení speciálních okamžiků jako je svatba.<br />
                Dejte nám vědět, jakou představu o&nbsp;svatebním dni máte a&nbsp;budeme se snažit najít ideální řešení.
                </p>   
              </div>
            </div>
          </AnimateIn>

        <div className="relative flex justify-center items-center my-12">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
          
            <ImageSlider 
              images={['radosti1', 'radosti5', 'radosti2', 'radosti4']}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
        </div>

          <AnimateIn >
            <div className="central-text-block py-8 text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h4 className="pt-16 pb-16 potok uppercase">
                  Teambuildingy a&nbsp;workshopy
                </h4>
              
                <p className="leading-loose">
                  Prostředí naší chalupy je jako stvořené pro odpočinek i&nbsp;soustředění. Díky různým zákoutím a&nbsp;kapacitě prostor je zde možné pořádat workshopy, přednášky, školení, nebo soustředění a&nbsp;teambuildingy.<br />
                  Pokud chcete Vašim kolegům, zaměstnancům nebo spolupracovníkům dopřát pár dní úlevy od hektického pracovního života, utužit kolektiv nebo si jen tak odpočinout a&nbsp;zadovádět, dejte nám vědět! Budeme se snažit najít ideální termín i&nbsp;prostředí pro veškeré Vaše aktivity.
                 </p>   
              </div>
            </div>
        </AnimateIn>
          <AnimateIn >
            <div className="central-text-block py-8 text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h4 className="pt-16 pb-16 potok uppercase">
                  Oslavy a&nbsp;jiná mecheche
                </h4>
              
              <p className="leading-loose">
                Přijeďte k&nbsp;nám oslavit výročí, narozeniny, nebo si jen tak užít pár dní volna. K&nbsp;dispozici budete mít vinný sklípek nebo skvělé pivo od místních dodavatelů.<br />
                K&nbsp;tanci Vám může sloužit dřevěný parket v&nbsp;místě bývalé stodoly a&nbsp;k&nbsp;posezení prostorná terasa před chalupou. Jak si to užijete je už jen a&nbsp;jen na Vás.
                 </p>   
              </div>
            </div>
        </AnimateIn>
          <AnimateIn >
            <div className="central-text-block py-8 text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h4 className="pt-16 pb-16 potok uppercase">
                  Homeoffice a&nbsp;co-work
                </h4>
              
              <p className="leading-loose">
                Dnešní doba má svá specifika... Práce z&nbsp;domova může být náročná a&nbsp;ne každému vyhovuje. Díky zázemí a&nbsp;místům, které se dají snadno proměnit v&nbsp;pracovní kout, zasedací místnost nebo klidné kreativní prostředí, je naše chalupa pro homeoffice jako stvořená. Ve spojení s&nbsp;příjemným a&nbsp;inspirativním prostředím zdejších kopců si to opravdu užijete.<br />
Podporujeme podnikání a&nbsp;veškerým kreativním počinům, které dělají náš svět lepším, fandíme! Takže pokud hledáte ideální místo pro práci v&nbsp;malebné přírodě, dejte nám vědět!
             </p>   
              </div>
            </div>
          </AnimateIn>
        <div className="relative flex justify-center items-center mt-20">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
            <ImageSlider 
              images={['45', '58', '46', '37', '54', '59']}
              className={''}
              height={'600px'}
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

export default Radosti
