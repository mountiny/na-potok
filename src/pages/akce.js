import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
import { Link } from "gatsby"
 
import Svatba1 from "../images/svatba1.png"
import Svatba2 from "../images/svatba2.png"
import Svatba3 from "../images/svatba3.png"
import Svatba4 from "../images/svatba4.png"
import Svatba5 from "../images/svatba5.png"
import Teambuilding1 from "../images/teambuilding1.png"
import Teambuilding2 from "../images/teambuilding2.png"
import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"

const AkcePage = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Akce" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Akce a události</h2>
        </div>
        
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
                  images={[Svatba1, Svatba2, Svatba3, Svatba4, Svatba5]}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'462px'}
                />
            </AnimateIn>
            <div className="text-wrapper pt-20">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  svatby
                </h3>
                <div className="text-block max-w-sm md:max-w-none pt-12">
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
                  images={[Teambuilding1, Teambuilding2]}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'655px'}
                />
            </AnimateIn>
            <div className="text-wrapper pt-20 phone:pt-32">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  teambuilding
                </h3>
                <div className="text-block max-w-sm md:max-w-none pt-12">
                Uspořádat můžete také sportovní soustředění, víkendovou jógu nebo nejrůznější druhy workshopů. Využijte venkovní otevřené stodoly ke kreativní tvorbě, malování, cvičení…cokoliv Vás napadne.
                </div>
              </AnimateIn>
            </div>
                
          </div>
        </div>

        <div className="w-full text-block h-half-spacing-top font-medium text-center tracking-wide">
            <Link
              to="/rezervace"
              className="underline uppercase"
              >
              rezervujte si termín
            </Link>
        </div>

      </NarrowContainer>

    </Layout>
  )
}


export default AkcePage
