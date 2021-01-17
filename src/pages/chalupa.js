import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import WideContainer from "../components/WideContainer"

import ChataImg from '../components/svg/chataGrey.js'
import Piano from '../components/svg/piano.js'
import Kameny from '../components/svg/kameny.js'

import Image from '../components/image.js'

const Chalupa = ({location}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>chalupa</h2>
        </div>
      </section>

      <WideContainer className='text-primary'>

        <div className="central-text-block pb-16 text-center h-half-spacing-top">  
          <AnimateIn >
            <div className="w-full flex justify-center items-center pb-16">
              <ChataImg 
                width={289.87}
                height={280.05}
                viewBox="0 0 289.87 280.05"
                className='chata-img phone:mt-16' />
            </div>
            <div className="heading-wrapper pt-16 pb-32">
              <h3 className='potok uppercase'>
                vysoký potok č.p. 33
              </h3>
            </div>
          </AnimateIn>

          <div className="centered-block inline-block leading-normal max-w-md pb-32">
            <AnimateIn >
              Chalupa NA POTOK se těší na nejmenší až po ty života znalé, kteří hledají odpočinek 
              od každodenních povinností, klid, pohodu a&nbsp;kteří chtějí znovu a&nbsp;znovu 
              objevovat Jesenickou přírodu. NA POTOK může být tím místem, kde si připomenete, 
              jak důležité je zpomalit, načerpat energii, jen tak zahálet nebo čas strávit 
              aktivně a&nbsp;dobrodružně. Nebo se jen prostě začtěte ve své oblíbené knize
              a&nbsp;vychutnávejte krbovou vůni ohně a&nbsp;praskajícího dřeva.
            </AnimateIn>
          </div>
        <AnimateIn className='w-full'>
          <Image
            filename={"land_uvod_5"}
            />
        </AnimateIn>
        </div>

        <div className="flex w-full flex-wrap justify-between pt-32 pb-56 phone:pb-32">
           
            <div className="w-7/15 md:w-full min-w-xs phone:min-w-full flex flex-col">
            <AnimateIn>
              <Image
                filename={"chalupa_pokoje"}
                />
            </AnimateIn>
            <div className="text-wrapper pt-20 mb-60 phone:mb-0">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  Pokoje
                </h3>
                <div className="text-block w-full pt-12">
                  5&nbsp;pokojů Vám nabízí ideální řešení pro společné chvíle více rodin, kde si na samotě a&nbsp;v&nbsp;poklidném tempu každého dne vychutnáte Vaše zážitky, za kterými se budete rádi a&nbsp;třeba opakovaně vracet.
                </div>
              </AnimateIn>
            </div>

            <AnimateIn className="mt-48 phone:mt-24">
              <ImageSlider 
                  // images={[Stodola1, Stodola2, Stodola3, Stodola4]}
                  images={['chalupa_stodola1', 'chalupa_stodola2', 'chalupa_stodola3', 'chalupa_stodola4']}
                  innerColumn={true}
                  className={''}
                  height={'562px'}
                  // maxHeight={'562px'}
                  maxHeight={'80vh'}
                />

            </AnimateIn>
            <div className="text-wrapper pt-24">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  Stará stodola
                </h3>
                <div className="text-block w-full pt-12">
                  Otevřená stodola je ideální pro venkovní svatby až pro 150 osob s&nbsp;přilehlou zahradou.
                </div>
              </AnimateIn>
            </div>

            <div className="chata-wrapper self-center pt-40 pb-20 phone:pt-36 phone:pb-12">
              <AnimateIn >
                <Kameny 
                  width={186.38}
                  height={412.32}
                  viewBox="0 0 186.38 412.32"
                  className='chata-img mb-8 md:mt-0 sm:mt-8' />
              </AnimateIn>
            </div>

            <AnimateIn className="mt-32">
              <ImageSlider 
                  // images={[Krajina1, Krajina2, Krajina3]}
                  images={['chalupa_krajina1', 'chalupa_krajina2', 'chalupa_krajina3']}
                  innerColumn={true}
                  className={''}
                  height={'976px'}
                  // maxHeight={'976px'}
                  maxHeight={'80vh'}
                />

            </AnimateIn>
            <div className="text-wrapper pt-20">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  Krajina
                </h3>
                <div className="text-block w-full pt-12">
                  Přirozené kontury dnešního terénu okolo chalupy jsou nepozměněné a&nbsp;byl by hřích do nich výrazně zasahovat. Na místě v&nbsp;Jeseníkách s&nbsp;perfektními výhledy se malé potůčky vlévají do řeky Moravy  pod Hanušovickou vrchovinou a&nbsp;Králickým Sněžníkem. Poznáte zde divokou horskou přírodu, a&nbsp;přitom se budete cítit v&nbsp;pohodlí jako doma ve svých bačkorách.
                </div>
              </AnimateIn>
            </div>

          </div>


          <div className="w-7/15 md:w-full lg:mr-0 min-w-xs phone:min-w-full flex flex-col">
            <div className="chata-wrapper self-center py-20">
              <AnimateIn >
                <Piano 
                  width={263.68}
                  height={202.25}
                  viewBox="0 0 263.68 202.25"
                  className='chata-img mb-8 md:mt-0 sm:mt-8' />
              </AnimateIn>
            </div>
            <AnimateIn>
              <Image
                filename={"chalupa_spolecenska"}
                />
            </AnimateIn>
            <div className="text-wrapper pt-20 phone:pt-32 mb-60 phone:mb-0">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  Společenská místnost
                </h3>
                <div className="text-block w-full pt-12">
                Není venku vlídné počasí nebo si chcete poklidně vychutnat dobrou snídani? Prostorná společenská místnost s&nbsp;krbem a&nbsp;propojenou kuchyní Vám nabízí komfort pro všechny ubytované najednou. Potkejte se po celodenních výletech či jiných zážitcích a&nbsp;vše si společně večer vyprávějte a&nbsp;užívejte výjimečné okamžiky.
                </div>
              </AnimateIn>
            </div>

            <AnimateIn className="mt-16">
              <ImageSlider 
                  // images={[Voda1, Voda2, Voda3, Voda4, Voda5]}
                  images={['chalupa_voda1', 'chalupa_voda2', 'chalupa_voda3', 'chalupa_voda4', 'chalupa_voda5']}
                  innerColumn={true}
                  className={''}
                  height={'562px'}
                  // maxHeight={'562px'}
                  maxHeight={'80vh'}
                />

            </AnimateIn>
            <div className="text-wrapper pt-20">
              <AnimateIn>
                <h3 className='potok uppercase'>    
                  Voda
                </h3>
                <div className="text-block w-full pt-12">
                Voda v rozlehlé krajině, ale tak i&nbsp;na pozemku je využita v&nbsp;maximální míře.Promyšleným způsobem je hrazena a&nbsp;na pozemku zadržována. Ochlazující účinek vody protékající pozemkem bude využit pro osvěžení v&nbsp;horkých letních dnech i&nbsp;během zimního saunování. Zrcadla vodních hladin, které vzniknou hrazením bystřiny, doplní scenérii
                domu a&nbsp;výhledy do údolí. Nově ztvárněná voda je současně doslovnou interpretací „chalupa NA POTOK“.

                </div>
              </AnimateIn>
            </div>
                
          </div>

        </div> 

      </WideContainer>

    </Layout>
  )
}


export default Chalupa
