import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'
import ImageSlider from "../components/imageSlider"
import WideContainer from "../components/WideContainer"
import Image from '../components/image.js'

const NasPribehPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Náš příběh" />
      <section className="top-block flex justify-center items-end content-center">
        <Image 
          filename="strecha"
          className="w-48 pb-44"
          imgStyle={{ objectFit: 'contain' }}
          />
      </section>
      <WideContainer className='text-primary'>
        <div className="text-block pt-60 phone:pt-24 h-half-spacing-bottom">
          <div className="w-full">
            <AnimateIn>
              <h2 className="potok uppercase pt-16">
                Jak to celé začalo...
              </h2>
              <div className="w-1/2 md:w-full">
                <p className="pt-28">
                Přirostla nám k srdci chalupa NA POTOK s přilehlým torzem stodoly. Většinou jsme slyšeli "je tady nádherně, ale hodně práce…to zbourejte a začněte znovu".  Stávající chalupa je dokonale přirozeně umístěná na terénu okolních luk.  Vyvolává emoce, snad nostalgii po starých časech, zemitosti a&nbsp;opravdovosti. Tyto emoce byly hlavním nástrojem zvyšující atraktivitu a&nbsp;cenu zachovat chalupu. 
                Současně jevem nejcitlivějším k&nbsp;jakýmkoli novým zásahům či zbourání. Pustili jsme se do kompletní rekonstrukce, začali jsme snít a&nbsp;psát další kapitolu, kterou si tohle místo zaslouží…
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
        <div className="w-full relative h-half-spacing-bottom">
          <Image 
            filename="nas_pribeh1"
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
                    images={['nas_pribeh2_1', 'nas_pribeh2_2', 'nas_pribeh2_3']}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'80vh'}
                  />
                </div>
              </AnimateIn>
            </div>
            <div className="w-5/12 md:w-full flex flex-col pt-32 min-w-xs">
              <AnimateIn >
                <div className="images-wrapper inner-column self-end mt-16 phone:mt-16">
                  <ImageSlider 
                    images={['nas_pribeh3_1', 'nas_pribeh3_2', 'nas_pribeh3_3']}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'80vh'}
                  />
              </div>
              </AnimateIn>
            </div>
          </div>
        </div>
        <div className="w-full text-block h-half-spacing-bottom font-medium text-center tracking-wide">
          Celý příběh rekonstrukce chalupy i fotky z akcí najdete na <a href="https://www.instagram.com/na_potok/" target="_blank" className="underline">instagramu</a>.
        </div>
        <div className="w-full text-block mb-44 mt-16 font-medium text-center tracking-wide">
          <Link className="text-3xl uppercase underline" to='/rezervace/'>rezervujte si termín!</Link>
        </div>
      </WideContainer>
    </Layout>
  )
}

export default NasPribehPage
