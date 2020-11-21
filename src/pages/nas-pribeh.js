import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import Uvodni from "../images/nas_pribeh1.png"

import NasPribeh1 from "../images/nas_pribeh2_1.png"
import NasPribeh2 from "../images/nas_pribeh2_2.png"
import NasPribeh3 from "../images/nas_pribeh2_3.png"
import NasPribeh4 from "../images/nas_pribeh3_1.png"
import NasPribeh5 from "../images/nas_pribeh3_2.png"
import NasPribeh6 from "../images/nas_pribeh3_3.png"

import ImageSlider from "../components/imageSlider"
import WideContainer from "../components/WideContainer"



const NasPribehPage = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Náš příběh" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>náš příběh</h2>
        </div>
      </section>

      <WideContainer className='text-primary'>

        <div className="text-block h-spacing-top h-half-spacing-bottom">
          <div className="w-full">
            <AnimateIn>
              <h2 className="potok uppercase">
                Jak to celé začalo...
              </h2>
              <div className="w-1/2 md:w-full">
                <p className="pt-20">
                Přirostla nám k srdci chalupa NA POTOK s přilehlým torzem stodoly. Většinou jsme slyšeli "je tady nádherně, ale hodně práce…to zbourejte a začněte znovu".  Stávající chalupa je dokonale přirozeně umístěná na terénu okolních luk.  Vyvolává emoce, snad nostalgii po starých časech, zemitosti a&nbsp;opravdovosti. Tyto emoce byly hlavním nástrojem zvyšující atraktivitu a&nbsp;cenu zachovat chalupu. 
                Současně jevem nejcitlivějším k&nbsp;jakýmkoli novým zásahům či zbourání. Pustili jsme se do kompletní rekonstrukce, začali jsme snít a&nbsp;psát další kapitolu, kterou si tohle místo zaslouží…
                </p>
              </div>
              
            </AnimateIn>
          </div>
        </div>
        <div className="w-full relative h-half-spacing-bottom">
          <img
              className=''
              src={Uvodni}
              />
        </div>

        <div className="w-full relative">
          <h2 className="potok uppercase">
            Příběh chalupy
          </h2>

          <div className="flex w-full flex-wrap justify-between pb-56 phone:pb-32">
            <div className="w-5/12 md:w-full flex flex-col min-w-xs">
              <AnimateIn >
                <div className="images-wrapper inner-column mt-16 phone:mt-12">
                  <ImageSlider 
                    images={[NasPribeh1, NasPribeh2, NasPribeh3]}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'655px'}
                  />
                </div>
              </AnimateIn>
            </div>

            <div className="w-5/12 md:w-full flex flex-col pt-32 min-w-xs">
              <AnimateIn >
                <div className="images-wrapper inner-column self-end mt-16 phone:mt-16">
                  <ImageSlider 
                    images={[NasPribeh4, NasPribeh5, NasPribeh6]}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'655px'}
                  />
              </div>
              </AnimateIn>
            </div>
          </div>
        </div>


        <div className="w-full text-block h-half-spacing-bottom font-medium text-center tracking-wide">
          Celý příběh rekonstrukce chalupy i fotky z akcí najdete na <a href="https://www.instagram.com/na_potok/" target="_blank" className="underline">instagramu</a>.
        </div>

      </WideContainer>

    </Layout>
  )
}


export default NasPribehPage
