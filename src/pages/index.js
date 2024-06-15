import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import IntroImageSlider from "../components/introImageSlider"
import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"

import Voda from '../components/svg/voda.js'
import Lipa from '../components/svg/lipa.js'
import Dvere from '../components/svg/dvere.js'

const IndexPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na potok" />
      <section className="landing-page">
        <IntroImageSlider
          images={['34', '43', '40intro']}
          />
      </section>

      <section className="bg-primary">
        <NarrowContainer className='text-black'>
          <AnimateIn >
            <div className="central-text-block pb-16 text-center">  
            <div className="centered-block inline-block leading-loose max-w-6xl text-center pb-24 pt-8 text-black">
              <h3 className="pt-32 pb-16 potok uppercase">
                Náš příběh
              </h3>
                
                <p className="leading-loose">
                  Jsme parta přátel, která miluje úniky do přírody, klidu a&nbsp;našich oblíbených kopců.<br />

                  Před nedávnem nám padla do oka chalupa na krásné polosamotě, jejíž atmosféru perfektně vystihuje jednoduchý popis - ticho, klid a&nbsp;hory. <br />
                  Nádherné stavení, linoucí se potůček, staleté lípy a&nbsp;přítomnost kamenných pilířů bývalé stodoly dotváří obraz, kterému jen těžko odolat. Spolu s&nbsp;pozadím, které malují kopce Jeseníků a&nbsp;Králického Sněžníku, je historická chalupa
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
               <h3 className="pt-16 pb-32 potok w-full text-center uppercase">
                Co je Na Potok?
              </h3>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-col justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  
                  <Lipa 
                    width={160}
                    className='chata-img mb-12' />
                    
                </div>
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Nádherné místo
                </span>
                <div className="text-block w-full pt-6 text-center">
                  150 let staré stavení, torzo bývalé stodoly, linoucí se potůček a&nbsp;úchvatné výhledy na kopce Jeseníků, Králického Sněžníku a&nbsp;Orlických hor.
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16 lg:mb-20">
                  <div className="h-72 w-full flex justify-center items-center">
                    
                  <Dvere 
                    width={200}
                    className='chata-img mb-16 mt-8' />
                </div>
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Pohodlné ubytování
                </span>
                <div className="text-block w-full pt-6 text-center">
                  Máme 5&nbsp;pokojů, 16&nbsp;lůžek a&nbsp;spousty místa pro relax i&nbsp;zábavu. A&nbsp;chceme, abyste se u&nbsp;nás měli jako v&nbsp;bavlnce!
                </div>
              </div>
                <div className="flex flex-col  justify-start items-center px-16">
                  <div className="h-72 w-full flex justify-center items-center">
                  <Voda 
                    width={200}
                      className='chata-img mb-12' />
                  </div>
                  <span className="text-center potok text-3xl font-bold py-8 uppercase">
                    Nekonečné vyžití
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
                  images={['62', '28', '42', '2', '19']}
                  className={''}
                  height={'780px'}
                  maxHeight={'782px'}
                />
              </AnimateIn>
            </div>

            <div className="relative w-full my-32 text-black">
              <AnimateIn>
                <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
                  <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`}>
                    </UnderlineLinkInter>
                </span>
              </AnimateIn>
            </div>
        </div>
        </WideContainer>
      </section>
    </Layout>
  )
}

export default IndexPage
