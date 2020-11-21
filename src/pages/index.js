import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import LandingImage1 from "../images/intro1.png"
import LandingImage2 from "../images/intro2.png"

import LandUvod1 from "../images/land_uvod_1.png"
import LandUvod2 from "../images/land_uvod_2.png"
import LandUvod3 from "../images/land_uvod_3.png"
import LandUvod4 from "../images/land_uvod_4.png"
import LandUvod5 from "../images/land_uvod_5.png"

import NasPribeh from "../images/nas_pribeh.png"

import NasPribeh1 from "../images/intro_pribeh1_1.png"
import NasPribeh2 from "../images/intro_pribeh1_2.png"
import NasPribeh3 from "../images/intro_pribeh1_3.png"
import NasPribeh4 from "../images/intro_pribeh2_1.png"
import NasPribeh5 from "../images/intro_pribeh2_2.png"
import NasPribeh6 from "../images/intro_pribeh2_3.png"

import Svatba1 from "../images/svatba1.png"
import Svatba2 from "../images/svatba2.png"
import Svatba3 from "../images/svatba3.png"
import Svatba4 from "../images/svatba4.png"
import Svatba5 from "../images/svatba5.png"

import Teambuilding1 from "../images/teambuilding1.png"
import Teambuilding2 from "../images/teambuilding2.png"

import ImageSlider from "../components/imageSlider"
import IntroImageSlider from "../components/introImageSlider"
import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"

import ChataImg from '../components/svg/chataGrey.js'


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
          images={[LandingImage1, LandingImage2]}
          />
      </section>

      {/* INTRO PAGE END */}

      <WideContainer className='text-primary'>
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
              <div className="text-block inner-column phone:mb-16">
              Přirozené kontury dnešního terénu okolo chalupy jsou nepozměněné a&nbsp;byl by hřích do nich výrazně zasahovat. Na místě v&nbsp;Jeseníkách s&nbsp;perfektními výhledy se malé potůčky vlévají do řeky Moravy pod Hanušovickou vrchovinou a&nbsp;Králickým Sněžníkem. Poznáte zde divokou horskou přírodu, a&nbsp;přitom se budete cítit v&nbsp;pohodlí jako doma ve svých bačkorách.

              </div>
            </AnimateIn>
           
            <AnimateIn >
              <div className="images-wrapper inner-column mt-40 phone:mt-20">
                <img
                  src={LandUvod1} 
                  />
              </div>
            </AnimateIn>
          </div>

          <div className="right-col flex flex-col wider-col phone:mt-20">
            <AnimateIn >
              <ImageSlider 
                images={[LandUvod2, LandUvod3, LandUvod4]}
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
            <img
              className='centered-image'
              src={LandUvod5}
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
            {/* <div className="left-col flex flex-col">
            <AnimateIn >
              <div className="images-wrapper inner-column mt-40 phone:mt-12 with-text-overlap">
                <div className="image-text">
                  <h3 className="potok uppercase">
                    svatby
                  </h3>
                  <div className="image-description text-block phone:mb-16">
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit.<br />
                  Praesent aliquam ante nibh, nec lacinia.
                  </div>
                  <UnderlineLink 
                    link={'#'}
                    text={'Zjistit více'}
                  />
                </div>
                <img
                  src={MainImage4} 
                  />
                <div className="description description-left uppercase text-white">
                  popisek obrázku
                </div>
              </div>
              </AnimateIn>
            </div> */}
            <div className="w-5/12 md:w-full min-w-xs phone:min-w-full flex flex-col inner-column">
            <AnimateIn>
              <ImageSlider 
                  images={[Svatba1, Svatba2, Svatba3, Svatba4, Svatba5]}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'462px'}
                  theme="dark"
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


          <div className="w-5/12 md:w-full mr-20 lg:mr-0 min-w-xs phone:min-w-full flex flex-col inner-column phone:mt-20 pt-64 phone:pt-0">
            <AnimateIn>
              <ImageSlider 
                  images={[Teambuilding1, Teambuilding2]}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'655px'}
                  theme="dark"
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

            {/* <div className="right-col flex flex-col">
              <div className="chata-wrapper self-center pr-12 phone:hidden">
                <AnimateIn >
                  <ChataGrey 
                    width={289.866}
                    height={280.05}
                    viewBox="0 0 289.866 280.05"
                    className='chata-img mb-8 md:mt-0 sm:mt-8' />
                </AnimateIn>
              </div>
              <AnimateIn >
                <div className="images-wrapper inner-column self-end mt-40 phone:mt-16 with-text-overlap overlap-right">
                  <div className="image-text">
                    <h3 className="potok uppercase">
                      teambuilding
                    </h3>
                    <div className="image-description text-block phone:mb-16">
                    Lorem ipsum dolor sit amet,<br />
                    consectetur adipiscing elit.<br />
                    Praesent aliquam ante nibh, nec lacinia.
                    </div>
                    <a href="" className="link-wrapper">
                      <span  className='uppercase underline-link'>
                        Zjistit více
                      </span>
                    </a>
                  </div>
                  <img
                    src={MainImage5} 
                    />
                  <div className="description description-right uppercase text-white">
                    popisek obrázku
                  </div>
              </div>
              </AnimateIn>
            </div> */}
          </div>
        </NarrowContainer>

      </section>

      {/* FEATURES CONTAINER END */}

      <section className="page-block">
{/* 
        <NarrowContainer className=''>
          <div className="block-heading">
            <div className="color-block phone:hidden"></div>
            <AnimateIn 
               
              style={{
                position: 'relative',
                zIndex: '105'
                }}>
              <h3 className='block-heading-text potok uppercase'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tincidunt mauris sit amet molestie.
              </h3>
            </AnimateIn>
          </div>

          <div className="flex w-full flex-wrap justify-between h-spacing-top h-spacing-bottom">
            <div className="left-col flex flex-col">
              <AnimateIn >
                <ImageSlider 
                  images={[MainImage1, MainImage6, MainImage1]}
                  descriptionSide={'description-left'}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'903px'}
                />
              </AnimateIn>
            </div>

            <div className="right-col flex flex-col pt-56 phone:pt-32">
              <AnimateIn >
                <ImageSlider 
                  images={[MainImage6, MainImage1]}
                  descriptionSide={'description-right'}
                  selfEnd={true}
                  innerColumn={true}
                  className={'tall-image'}
                  maxHeight={'903px'}
                />
              </AnimateIn>
             
            </div>
          </div>
        </NarrowContainer> */}


      <WideContainer className='text-primary'>

        <div className="text-block h-half-spacing-bottom">
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
              src={NasPribeh}
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

      </WideContainer>

      </section>

    </Layout>
  )
}


export default IndexPage
