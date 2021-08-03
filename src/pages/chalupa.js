import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
import UnderlineLinkInter from "../components/UnderlineLinkInter"

import ImageSlider from "../components/imageSlider"

import ChataImg from '../components/svg/chata.js'
import Piano from '../components/svg/piano.js'
import Kameny from '../components/svg/kameny.js'

import NarrowContainer from "../components/NarrowContainer"

const Chalupa = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok" />
      <section className="bg-primary flex justify-center items-end content-center pt-16">
   
         <div className="w-full flex justify-center items-center pb-32 pt-40">
              <ChataImg 
                width={289.87}
                height={280.05}
                // viewBox="0 0 289.87 280.05"
                className='chata-img phone:mt-16' />
            </div>
      </section>

      <NarrowContainer className='text-primary'>

        <div className="central-text-block pb-16 text-center h-half-spacing-top">  
        
          <div className="centered-block inline-block leading-loose max-w-4xl pb-40 pt-8 text-black">
            <AnimateIn >
              Chalupa Na Potok je skvělé místo pro všechny, kteří hledají odpočinek od každodenních povinností, klid a&nbsp;pohodu. Pro ty, kteří chtějí znovu a&nbsp;znovu objevovat jesenickou přírodu i&nbsp;zákoutí Králického Sněžníku nebo Orlických hor. Na Potok může být tím místem, kde si připomenete, jak důležité je zpomalit, načerpat energii a&nbsp;odpočívat. Ať už fandíte spíše zahálce s&nbsp;knihou v&nbsp;ruce nebo se svůj čas rozhodnete strávit aktivně, naše chalupa je Vám plně k&nbsp;dispozici.
            </AnimateIn>
          </div>
          <div className="relative flex justify-center items-center">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "1200px"}}>

              <ImageSlider 
                  images={['35', '32', 'uvodni2', '56', '42', '57', '39']}
                  className={''}
                  height={'780px'}
                  maxHeight={'782px'}
                />
              </AnimateIn>
            </div>
        </div>
        <div className="relative w-full mt-32 text-black">
          <AnimateIn>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-col justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <ChataImg 
                  width={206.87}
                  height={200.05}
                  // viewBox="0 0 289.87 280.05"
                    className='chata-img' />
                </div>
                <span className="text-center potok text-3xl font-bold py-16 uppercase">
                  150 let historie
                </span>
                <div className="text-block w-full text-center">
                  Chalupa Na Potok byla postavena před více než 150 lety. Po dlouhých a&nbsp;dlouhých letech chátrání se opět snažíme přivést na toto kouzelné místo život a&nbsp;dětský smích. Věříme, že nám v&nbsp;tom pomůžete!
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16 lg:mb-20">
                <div className="h-72 w-full flex justify-center items-center">
                  <Piano 
                    width={238.68}
                    height={160.25}
                    // viewBox="0 0 263.68 202.25"
                    className='chata-img mt-8' />
                </div>
                <span className="text-center potok text-3xl font-bold py-16 uppercase">
                  Respekt
                </span>
                <div className="text-block w-full text-center">
                  Interiér chalupy září životem. Není to muzeum ani skanzen. Moderní prvky se snoubí s&nbsp;těmi klasickými a&nbsp;řemeslo s&nbsp;technologií. Vše ještě není doladěno, ale blížíme se cíli!
                </div>
              </div>
                <div className="flex flex-col  justify-start items-center px-16">
                  <div className="h-72 w-full flex justify-center items-center">
                    <Kameny 
                      width={90}
                      height={200}
                      // viewBox="0 0 186.38 412.32"
                      className='chata-img' />
                  </div>
                  <span className="text-center potok text-3xl font-bold py-16 uppercase">
                    Materiály
                  </span>
                  <div className="text-block w-full text-center">
                    Na pozemek chalupy jsme nedovezli jediný kámen. Všechny ty nádherné kusy skal zde již byly a&nbsp;my se je snažili znovu využít jak nejlépe to šlo. Stejně jako prostor bývalé stodoly, který čeká na další kapitolu.
                  </div>
                </div>
            </div>
          </AnimateIn>
          
          <div className="relative w-full my-32 text-black">
            <AnimateIn>
              <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
                <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`} />
              </span>
            </AnimateIn>
          </div>
        </div>
{/* 
        <div className="flex w-full flex-wrap justify-between pt-32 pb-44 phone:pb-32">
           
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
                    height={'606px'}
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

              <AnimateIn className="mt-16" >
                <ImageSlider 

                    images={['chalupa_voda1', 'chalupa_voda2', 'chalupa_voda3', 'chalupa_voda4', 'chalupa_voda5']}
                    innerColumn={true}
                    className={''}
                  height={'562px'}
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

          <div className="w-full text-block mt-44 font-medium text-center tracking-wide">
            <Link className="text-3xl uppercase underline" to='/rezervace/'>rezervujte si termín!</Link>
          </div>

        </div>  */}

      </NarrowContainer>

    </Layout>
  )
}


export default Chalupa
