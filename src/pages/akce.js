import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"
import Image from '../components/image.js'

const AkcePage = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Akce" />

      {/* <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Akce a události</h2>
        </div>
      </section> */}
      <section className="top-block flex justify-center items-end content-center">
        <Image 
          filename="strecha"
          className="w-48 pb-44"
          imgStyle={{ objectFit: 'contain' }}
          />
      </section>

      <NarrowContainer className='text-primary h-half-spacing-bottom'>

        <div className="central-text-block text-center h-half-spacing-top h-half-spacing-bottom">
          <AnimateIn>
            <div className="centered-block">
              <span className='font-medium'>
              Využijte venkovní otevřené stodoly ke kreativní tvorbě, malování, cvičení…cokoliv Vás napadne. Výjimečné místo přitahuje výjimečné lidi.
              </span>
            </div>
          </AnimateIn>
        </div>
        
        <div className="flex w-full flex-wrap justify-between text-primary">
          <div className="left-col flex flex-col inner-column">
            <AnimateIn
              threshold={0.1}
              >
              <ImageSlider 
                  // images={[Svatba1, Svatba2, Svatba3, Svatba4, Svatba5]}
                  images={['svatba1', 'svatba2', 'svatba3', 'svatba4', 'svatba5']}
                  innerColumn={true}
                  className={'tall-image'}
                  // maxHeight={'462px'}
                  maxHeight={'80vh'}
                />
            </AnimateIn>
            <div className="text-wrapper pt-16">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  svatby
                </h3>
                <div className="text-block max-w-sm md:max-w-none pt-6">
                  NA POTOK může být tím místem, kde si řeknete své ano. Otevřená stodola je ideální pro venkovní svatby až pro 150 osob s přilehlou zahradou.
                </div>
              </AnimateIn>
            </div>
          </div>

          <div className="right-col flex flex-col inner-column phone:mt-20">
            <AnimateIn
              threshold={0.1}
              >
              <ImageSlider 
                  // images={[Teambuilding1, Teambuilding2]}
                  images={['teambuilding1', 'teambuilding2']}
                  innerColumn={true}
                  className={'tall-image'}
                  // maxHeight={'655px'}
                  maxHeight={'80vh'}
                />
            </AnimateIn>
            <div className="text-wrapper pt-16 phone:pt-32">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  teambuilding
                </h3>
                <div className="text-block max-w-sm md:max-w-none pt-6">
                Uspořádat můžete také sportovní soustředění, víkendovou jógu nebo nejrůznější druhy workshopů. Využijte venkovní otevřené stodoly ke kreativní tvorbě, malování, cvičení…cokoliv Vás napadne.
                </div>
              </AnimateIn>
            </div>
                
          </div>
        </div>

        <div className="w-full text-block mt-44 mb-16 font-medium text-center tracking-wide">
          <Link className="text-3xl uppercase underline" to='/rezervace/'>rezervujte si termín!</Link>
        </div>

      </NarrowContainer>

    </Layout>
  )
}


export default AkcePage
