import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import WideContainer from "../components/WideContainer"

import ChataImg from '../components/svg/chataGrey.js'
import Piano from '../components/svg/piano.js'
import Kameny from '../components/svg/kameny.js'

import Image from '../components/image.js'
import NarrowContainer from "../components/NarrowContainer"

const Radosti = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok - Pokoje" />
      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-normal text-center max-w-7xl text-black px-4">
              <h3 className="potok">
                Na Potok není jen chalupa k&nbsp;pronájmu...<br/>
                Je to místo setkávání, zážitků a&nbsp;radosti!
              </h3>
            </div>
          </div>
        </AnimateIn>
      </section>

      <NarrowContainer className='text-black'>
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-loose text-center max-w-5xl py-32 text-black">
              <p className="leading-loose">
                Naše chalupa neslouží jen jako místo oddechu od hektického života ve městech, jako cíl dovolených a&nbsp;prodloužených víkendů, nebo rodinných rekreací.<br />
                Díky členitému pozemku s&nbsp;mnohými zákoutími, prostoru bývalé stodoly a&nbsp;perfektnímu zázemí může chalupa Na Potok hostit všechny možné příležitosti setkávání, zážitků a&nbsp;radostí, které Vás jen napadnou!<br />
               </p>   
            </div>
          </div>
        </AnimateIn>


         
        <div className="relative flex justify-center items-center">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
          
            <ImageSlider 
              images={['radosti1', 'radosti2', 'radosti3', 'radosti4', 'radosti5']}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
        </div>


          <AnimateIn >
            <div className="central-text-block pt-16 text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h3 className="pt-16 pb-16 potok">
                  Svatební veselí
                </h3>
              
                <p className="leading-loose">
                  Chalupa Na Potok je díky nádhernému okolí a&nbsp;nekončícím výhledům vyhledávaným místem pro trávení speciálních okamžiků... a&nbsp;svatební dny jsou jedněmi z&nbsp;nich.<br />
                  Rádi bychom vyhověli všem nevěstám a&nbsp;ženichům, ale bohužel je počet svateb i&nbsp;svatebních hostů omezen tak, abychom nerušili příjemnou ospalou atmosféru zdejších kopců.<br />
                  Pokud je Vaším snem menší svatba (cca 40 hostů), dejte nám vědět a&nbsp;určitě se nějak domluvíme.<br />
                  Dlouhodobě spolupracujeme s&nbsp;osvědčenými svatebními koordinátory a&nbsp;květinovými studii, které Vám rádi doporučíme a&nbsp;zajistíme hladký průběh výjimečného dne.<br />
                </p>   
              </div>
            </div>
          </AnimateIn>

          <AnimateIn >
            <div className="central-text-block text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h3 className="pt-16 pb-16 potok">
                  Teambuildingy a&nbsp;workshopy
                </h3>
              
                <p className="leading-loose">
                  Prostředí naší chalupy je jako stvořené pro odpočinek i&nbsp;soustředění. Díky různým zákoutím a&nbsp;kapacitě prostor je zde možné pořádat workshopy, přednášky, školení, nebo soustředění a&nbsp;teambuildingy.<br />
Pokud chcete Vašim kolegům, zaměstnancům nebo spolupracovníkům dopřát pár dní úlevy od hektického pracovního života, utužit kolektiv nebo si jen tak odpočinout a&nbsp;zadovádět, dejte nám vědět! Budeme se snažit najít ideální termní i&nbsp;prostředí pro veškeré Vaše aktivit.
                 </p>   
              </div>
            </div>
          </AnimateIn>

          <AnimateIn >
            <div className="central-text-block text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h3 className="pt-16 pb-16 potok">
                  Oslavy a&nbsp;jiná mecheche
                </h3>
              
                <p className="leading-loose">
                  Nejen svatby si zaslouží malebné prostředí jesenické přírody. Chalupa Na Potok je připravena i&nbsp;pro další druhy oslav a&nbsp;veselí.<br />
Přijeďte k nám oslavit výročí, narozeniny, nebo si jen tak užít s&nbsp;přáteli nebo rodinou pár dní volna. K dispozici budete mít vinný sklípek, pípu a&nbsp;můžeme Vám zajistit pivo od místních dodavatelů dle libosti.<br />
K&nbsp;posezení či tanci Vám bude sloužit jak posezení u&nbsp;chalupy, tak terasa na místě bývalé stodoly... Jak si to užijete je už na Vás.
                 </p>   
              </div>
            </div>
          </AnimateIn>
          <AnimateIn >
            <div className="central-text-block text-center">  
              <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-12 pt-8 text-black">
                <h3 className="pt-16 pb-16 potok">
                  Homeoffice a&nbsp;co-work
                </h3>
              
                <p className="leading-loose">
                Dnešní doba má svá specifika... Práce z&nbsp;domova může být náročná a&nbsp;ne každému vyhovuje. Díky naší chalupě, jejímu zázemí a&nbsp;místům, které se dají snadno proměnit v&nbsp;pracovní kout, zasedací místnost nebo klidné kreativní prostředí, si můžete homeoffice užít a&nbsp;spojit ho s&nbsp;příjemným a&nbsp;inspirativním prostředím zdejších kopců.<br />
Podporujeme podnikání a&nbsp;veškerým kreativním počinům, které dělají náš svět lepším, fandíme! Takže pokud hledáte ideální místo pro práci v malebné přírodě, dejte nám vědět!
                  </p>   
              </div>
            </div>
          </AnimateIn>
          
            <div className="w-full text-block pt-20 pb-40 font-medium text-center tracking-wide flex justify-center items-center">
              <Link className="text-2xl text-black font-normal border border-black px-5 py-4 mr-12 hover:text-primary hover:bg-black transition-colors duration-200" to='/cenik/'>Chci přijet!</Link>
            </div>

      </NarrowContainer>

    </Layout>
  )
}


export default Radosti
