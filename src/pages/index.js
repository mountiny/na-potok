import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import IntroImageSlider from "../components/introImageSlider"
import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"

import ChataImg from '../components/svg/chataGrey.js'
import Piano from '../components/svg/piano.js'
import Kameny from '../components/svg/kameny.js'

// import ChataImg from '../components/svg/chataGrey.js'

import Image from '../components/image.js'

/**
 * založky
 * chalupa
 * pokoje
 * radosti
 * kontakt
 * ceník
 * 
 * 
 */

const IndexPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na potok" />

      {/* INTRO PAGE START */}

      <section className="landing-page">
        {/* <div className="title absolute flex justify-center items-center content-center">
          <h1 className='potok text-center uppercase'>na chalupu</h1>
        </div> */}
        <IntroImageSlider
          images={['intro1', 'intro2', 'intro3']}
          />
      </section>

      {/* INTRO PAGE END */}
      <section className="bg-primary">
        <NarrowContainer className='text-black'>

          <AnimateIn >
            <div className="central-text-block pb-16 text-center">  
            <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-24 pt-8 text-black">
              <h3 className="pt-32 pb-16 potok">
                Náš příběh
              </h3>
                
                <p className="leading-loose">
                  Jsme parta přátel, která miluje úniky do přírody, klidu a&nbsp;našich oblíbených kopců.<br />

                  Před nedávnem nám padla do oka chalupa na krásné polosamotě, jejíž atmosféru perfektně vystihuje jednoduchý popis - ticho, klid a&nbsp;hory. <br />
                  Nádherné stavení, linoucí se potůček, staleté lípy a&nbsp;přítomnost kamenných pilířů bývalé stodoly dotváří obraz, kterému jen těžko odolat. Spolu s&nbsp;pozadím, které malují kopce Jeseníků a&nbsp;Králického sněžníku, je historická chalupa
                  jen posledním dílkem skládačky, který jsme hledali... a&nbsp;pustili se do rekonstrukce...<br />

                  Po tisících odvezených a&nbsp;přivezených kolečkách, stovkách hodin práce, měsících ladění, vymýšlení a&nbsp;přemýšlení, nekonečné trpělivosti všech zúčastněných a&nbsp;nezměrné ochoty pomocníků a&nbsp;kamarádů jsme chalupě vdechli nový život, náboj a&nbsp;atmosféru, o&nbsp;kterou bychom se s&nbsp;Vámi chtěli podělit...
            </p>   
              </div>
            </div>
          </AnimateIn>
        </NarrowContainer>
      </section>
      <section>
        <WideContainer className="text-black">
           <div className="relative w-full mt-32 text-black">
            <AnimateIn>
               <h3 className="pt-16 pb-32 potok w-full text-center">
                Co je Na Potok?
              </h3>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-col justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <ChataImg 
                    width={206.87}
                    height={200.05}
                    viewBox="0 0 289.87 280.05"
                    className='chata-img mb-12' />
                </div>
                <span className="text-center potok text-3xl font-bold py-8">
                  Nádherné místo
                </span>
                <div className="text-block w-full pt-6 text-center">
                  150 let staré stavení, torzo bývalé stodoly, linoucí se potůček a&nbsp;úchvatné výhledy na kopce Jeseníků a&nbsp;Králického sněžníku.
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <Piano 
                    width={238.68}
                    height={160.25}
                    viewBox="0 0 263.68 202.25"
                    className='chata-img mb-16 mt-8' />
                </div>
                <span className="text-center potok text-3xl font-bold py-8">
                  Pohodlné ubytování
                </span>
                <div className="text-block w-full pt-6 text-center">
                  Chceme, abyste se u&nbsp;nás měli jako v&nbsp;bavlnce! Máme 5&nbsp;apartmánů, 16&nbsp;lůžek a&nbsp;spousty místa pro relax i&nbsp;zábavu.
                </div>
              </div>
                <div className="flex flex-col  justify-start items-center px-16">
                  <div className="h-72 w-full flex justify-center items-center">
                  <Kameny 
                    width={90}
                    height={200}
                    viewBox="0 0 186.38 412.32"
                    className='chata-img mb-12' />
                  </div>
                  <span className="text-center potok text-3xl font-bold py-8">
                    Nekonečné vyžité
                  </span>
                  <div className="text-block w-full pt-6 text-center">
                    Jaro - léto - podzim - zima... Na ročním období nezáleží. Na naší chalupě je pořád co dělat a&nbsp;kam v&nbsp;okolí se vydat.
                  </div>
              </div>
            </div>
            </AnimateIn>
            
            <div className="relative flex justify-center items-center mt-48">
              <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "1200px"}}>
              
                <ImageSlider 
                  images={['uvodni1', 'uvodni2', 'uvodni3', 'uvodni4', 'uvodni5', 'uvodni6', 'uvodni7', 'uvodni8']}
                  className={''}
                  height={'780px'}
                  maxHeight={'782px'}
                />
              </AnimateIn>
            </div>

            <div className="relative w-full mt-32 text-black">
              <AnimateIn>
                <h3 className="pt-16 pb-0 potok w-full text-center">
                    Zarezervujte si u&nbsp;nás termín!
                </h3>
              </AnimateIn>
            </div>
          

            <div className="w-full text-block pt-28 pb-44 font-medium text-center tracking-wide flex justify-center items-center">
              <Link className="text-2xl text-black font-normal border border-black px-5 py-4 mr-12 hover:text-primary hover:bg-black transition-colors duration-200" to='/cenik/'>Chci přijet!</Link>
              <Link className="text-2xl text-black font-normal border border-black px-5 py-4 ml-12 hover:text-primary hover:bg-black transition-colors duration-200" to='/kontakt/'>Kontakt</Link>
          </div>
        </div>
        </WideContainer>
      </section>

    </Layout>
  )
}


export default IndexPage
