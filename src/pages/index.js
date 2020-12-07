import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import IntroImageSlider from "../components/introImageSlider"
import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"

import ChataImg from '../components/svg/chataGrey.js'

import Image from '../components/image.js'


const IndexPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na potok" />

      {/* INTRO PAGE START */}

      <section className="landing-page">
        <div className="title absolute flex justify-center items-center content-center">
          <h1 className='potok text-center uppercase'>na chalupu</h1>
        </div>
        <IntroImageSlider
          // images={[LandingImage1, LandingImage2]}
          images={['intro1', 'intro2']}
          />
      </section>

      {/* INTRO PAGE END */}

      <WideContainer className='text-primary'>
        {/* <Image filename="cenik"></Image> */}
        <div className="flex w-full flex-wrap justify-between pt-32 phone:pt-8">
          <div className="left-col flex flex-col">
            <AnimateIn >
              <div className="heading-wrapper pt-16">
                <h3 className='potok uppercase'>
                  Nejkrásnější<br />
                  výhledy na<br />
                  dolní moravě
                </h3>
              </div>
            </AnimateIn>
            <AnimateIn >
              <div className="text-block inner-column pt-16 phone:mb-16">
              Přirozené kontury dnešního terénu okolo chalupy jsou nepozměněné a&nbsp;byl by hřích do nich výrazně zasahovat. Na místě v&nbsp;Jeseníkách s&nbsp;perfektními výhledy se malé potůčky vlévají do řeky Moravy pod Hanušovickou vrchovinou a&nbsp;Králickým Sněžníkem. Poznáte zde divokou horskou přírodu, a&nbsp;přitom se budete cítit v&nbsp;pohodlí jako doma ve svých bačkorách.

              </div>
            </AnimateIn>
           
            <AnimateIn >
              <div className="images-wrapper inner-column mt-40 phone:mt-20">
                <Image filename="land_uvod_1"></Image>
              </div>
            </AnimateIn>
          </div>

          <div className="right-col flex flex-col wider-col phone:mt-20">
            <AnimateIn >
              <ImageSlider 
                // images={[LandUvod2, LandUvod3, LandUvod4]}
                images={['land_uvod_2', 'land_uvod_3', 'land_uvod_4']}
                selfEnd={true}
                className={'tall-image'}
                maxHeight={'1082px'}
                />
            </AnimateIn>
          </div>

        </div>

        <div className="central-text-block pb-48 md-m:pb-64 lg-m:pb-64 xl-m:pb-80 text-center h-half-spacing-top">  
          <div className="w-full flex justify-center items-center pb-24">
            <ChataImg 
              width={289.87}
              height={280.05}
              viewBox="0 0 289.87 280.05"
              className='chata-img phone:mt-16' />
          </div>
          <div className="centered-block pb-0 sm-m:pb-32 md-m:pb-40 lg-m:pb-64 xl-m:pb-80">
            <AnimateIn >
              Chalupa NA POTOK se těší na nejmenší až po ty života znalé, kteří hledají odpočinek 
              od každodenních povinností, klid, pohodu a&nbsp;kteří chtějí znovu a&nbsp;znovu 
              objevovat Jesenickou přírodu. NA POTOK může být tím místem, kde si připomenete, 
              jak důležité je zpomalit, načerpat energii, jen tak zahálet nebo čas strávit 
              aktivně a&nbsp;dobrodružně. Nebo se jen prostě začtěte ve své oblíbené knize
              a&nbsp;vychutnávejte krbovou vůni ohně a&nbsp;praskajícího dřeva.
            </AnimateIn>
          </div>
          <AnimateIn  className='centered-image' translateX={'-50'} threshold={0.1}>
            <Image 
              filename={"land_uvod_5"}
              className={"centered-image"}
              />
          </AnimateIn>
        </div>
      </WideContainer>

      {/* FEATURES CONTAINER START */}

      <section className="features-cont">

        <div className="central-text-block text-center h-half-spacing-top h-half-spacing-botzom">
          <div className="w-4/5 max-w-6xl pt-0 phone:pt-32 inline-block tracking-wide potok text-white text-5xl">
            <AnimateIn threshold={0.1}>
              <div className="text-5xl text-left leading-normal">
                Načerpáte enegrii v&nbsp;útulných <span className="opacity-50 cursor-pointer">pokojích</span> s&nbsp;krásnými <span className="opacity-50 cursor-pointer">výhledy</span>, vyrazíte na výlet do lesů a&nbsp;když se k večeru vrátíte čeká na vás <span className="opacity-50 cursor-pointer">sauna</span> s&nbsp;ochlazovacím <span className="opacity-50 cursor-pointer">bazénkem</span>. připravíte si večeři na <span className="opacity-50 cursor-pointer">grilu</span> nebo na <span className="opacity-50 cursor-pointer">ohništi</span>, v&nbsp;noci se pak sejdete u&nbsp;velkého stolu ve <span className="opacity-50 cursor-pointer">společné místnosti</span>.
              </div>
            </AnimateIn>
          </div>
          
        </div>

        <NarrowContainer className='text-white'> 
          <div className="flex w-full flex-wrap justify-between pt-32 pb-56 phone:pb-32">
            <div className="w-5/12 md:w-full min-w-xs phone:min-w-full flex flex-col inner-column">
              <AnimateIn>
                <ImageSlider 
                    // images={[Svatba1, Svatba2, Svatba3, Svatba4, Svatba5]}
                    images={['svatba1', 'svatba2', 'svatba3', 'svatba4', 'svatba5']}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'462px'}
                    theme="dark"
                  />
              </AnimateIn>
              <div className="text-wrapper pt-16">
                <AnimateIn>
                  <h3 className='potok uppercase'>    
                    svatby
                  </h3>
                  <div className="text-block max-w-lg md:max-w-none pt-6">
                    NA POTOK může být tím místem, kde si řeknete své ano. Otevřená stodola je ideální pro venkovní svatby až pro 150 osob s přilehlou zahradou.
                  </div>
                </AnimateIn>
              </div>
            </div>


            <div className="w-5/12 md:w-full mr-20 lg:mr-0 min-w-xs phone:min-w-full flex flex-col inner-column phone:mt-20 pt-64 phone:pt-0">
              <AnimateIn>
                <ImageSlider 
                    // images={[Teambuilding1, Teambuilding2]}
                    images={['teambuilding1', 'teambuilding2']}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'655px'}
                    theme="dark"
                  />
              </AnimateIn>
              <div className="text-wrapper pt-16 phone:pt-32">
                <AnimateIn>
                  <h3 className='potok uppercase'>    
                    teambuilding
                  </h3>
                  <div className="text-block max-w-lg md:max-w-none pt-6">
                  Uspořádat můžete také sportovní soustředění, víkendovou jógu nebo nejrůznější druhy workshopů. Využijte venkovní otevřené stodoly ke kreativní tvorbě, malování, cvičení…cokoliv Vás napadne.
                  </div>
                </AnimateIn>
              </div>
                  
            </div>
          </div>
        </NarrowContainer>

      </section>

      {/* FEATURES CONTAINER END */}

      <section className="pt-64 phone:pt-16">
      <WideContainer className='text-primary'>

        <div className="text-block h-half-spacing-bottom">
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
            filename={"nas_pribeh"}
            className={"w-full"}
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
                    // images={[NasPribeh1, NasPribeh2, NasPribeh3]}
                    images={['intro_pribeh1_1', 'intro_pribeh1_2', 'intro_pribeh1_3']}
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
                    // images={[NasPribeh4, NasPribeh5, NasPribeh6]}
                    images={['intro_pribeh2_1', 'intro_pribeh2_2', 'intro_pribeh2_3']}
                    innerColumn={true}
                    className={'tall-image'}
                    maxHeight={'655px'}
                  />
              </div>
              </AnimateIn>
            </div>
          </div>
        </div>

      </WideContainer>

      </section>

    </Layout>
  )
}


export default IndexPage
