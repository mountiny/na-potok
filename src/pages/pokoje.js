import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import ImageSlider from "../components/imageSlider"
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"
import Image from '../components/image'

const Pokoje = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Chalupa Na Potok - Pokoje" />

      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
          <AnimateIn >
            <div className="central-text-block text-center">  
              <div className="centered-block inline-block leading-loose text-center max-w-6xl text-black">
                <h4 className="potok uppercase">
                  Jak si ustelete, tak si lehnete...<br/>
                  a&nbsp;kde usnete?
                </h4>
              </div>
            </div>
          </AnimateIn>
      </section>

      <NarrowContainer className='text-primary'>


         
        <div className="relative flex flex-col justify-center items-center text-black">

          <AnimateIn className='my-16' >

              <div className="flex flex-col justify-start items-center px-12 md:px-4 lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Společné prostory
                </span>
                <div className="text-block w-full pt-6 text-center">
                  Velká společenská místnost s&nbsp;kuchyní a&nbsp;jídelnou.<br />
                  Krb pro zahřátí, atmosféru i&nbsp;domácí pohodu.<br />
                  Herna pro nejmenší a&nbsp;sklípek pro ty větší.<br />
                  Sauna pro uvolnění a&nbsp;jezírko pro otužení.<br />
                  Terasa na pohodu a&nbsp;bývalá stodola na párty.
                </div>
              </div>
        </AnimateIn>
        
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
          
            <ImageSlider 
              images={['113', '109', '107', '100', '103', '105', '102', '110', '84', '26', '27', '24',]}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>


          <AnimateIn className='my-20' >

              <div className="flex flex-col justify-start items-center px-12 md:px-4 lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Pokoje
                </span>
                <div className="text-block w-full pt-6 text-center">
                  16 míst na osmi postelích.<br />
                  Dva pokoje máme dvoulůžkové<br />
                  a tři pokoje jsou čtyřlůžkové (2+2).<br />
                  V každém z nich pak sociální zázemí, wc, sprcha,<br />
                  kniha a&nbsp;výhled, který neomrzí.
                </div>
              </div>
        </AnimateIn>
        
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
          
            <ImageSlider 
              images={['81', '79', '80', '77', '75', '83', 'KOUPELNA']}
              className={''}
              height={'600px'}
              maxHeight={'782px'}
            />
          </AnimateIn>

        </div>

        {/* <div className="relative w-full mt-32 max-w-7xl mx-auto text-black">
          <AnimateIn>
            <div className="grid leading-loose grid-cols-2 lg:grid-cols-1">
              <div className="flex flex-col justify-start items-center px-12 md:px-4 lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Společné prostory
                </span>
                <div className="text-block w-full pt-6 text-center">
                  Velká společenská místnost s&nbsp;kuchyní a&nbsp;jídelnou.<br />
                  Krb pro zahřátí, atmosféru i&nbsp;domácí pohodu.<br />
                  Herna pro nejmenší a&nbsp;sklípek pro ty větší.<br />
                  Sauna pro uvolnění a&nbsp;jezírko pro otužení.<br />
                  Terasa na pohodu a&nbsp;bývalá stodola na párty.
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-12 md:px-4 lg:mb-20">
                <span className="text-center potok text-3xl font-bold py-8 uppercase">
                  Pokoje
                </span>
                <div className="text-block w-full pt-6 text-center">
                  16 míst na osmi postelích.<br />
                  Dva pokoje máme dvoulůžkové<br />
                  a tři pokoje jsou čtyřlůžkové (2+2).<br />
                  V každém z nich pak sociální zázemí, wc, sprcha,<br />
                  kniha a&nbsp;výhled, který neomrzí.
                 
                </div>
              </div>
            </div>
          </AnimateIn>
        </div> */}

         
        {/* <div className="relative flex justify-center items-center mt-48">
          <AnimateIn className='w-full flex justify-between flex-wrap mx-auto relative' style={ {maxWidth: "1400px"}}>
            <Image 
              filename={'pudorys1'}
              className="lg:w-full w-1/2"
            />
            <Image 
              filename={'pudorys2'}
              className="lg:w-full w-1/2"
                />
          </AnimateIn>
        </div> */}

            <div className="relative w-full mt-24 text-black">
              <AnimateIn>
                <h4 className="pt-16 pb-0 potok w-full text-center uppercase">
                    5 pokojů / 16 míst / nekonečno zážitků
                </h4>
              </AnimateIn>
        </div>
        
           <div className="relative flex justify-center items-center mt-4">
          <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "900px"}}>
          
            <ImageSlider 
              images={['pudorys1', 'pudorys2']}
              className={''}
              height={'780px'}
              maxHeight={'782px'}
            />
          </AnimateIn>
        </div>
        
          
            {/* <div className="w-full text-block pt-20 pb-40 font-medium text-center tracking-wide flex justify-center items-center">
              <Link className="text-2xl text-black font-normal border border-black px-5 py-4 mr-12 hover:text-primary hover:bg-black transition-colors duration-200" to='/cenik/'>Chci přijet!</Link>
          </div> */}
        <div className="relative w-full my-32 text-black">
          <AnimateIn>
            <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
              <UnderlineLinkInter link="/cenik/" text={`Zarezervujte si u nás termín`} />
            </span>
          </AnimateIn>
        </div>
{/* 
        <div className="central-text-block pb-16 text-center h-half-spacing-top">  
          <div className="centered-block inline-block leading-normal max-w-md pb-32">
            <AnimateIn >
              Chalupa Na Potok je skvělé místo pro všechny, kteří hledají odpočinek od každodenních povinností, klid, pohodu a&nbsp;chtějí znovu a&nbsp;znovu objevovat Jesenickou přírodu i&nbsp;zákoutí Králického sněžníku. Na Potok může být tím místem, kde si, stejně jako my, připomenete, jak důležité je zpomalit, načerpat energii a&nbsp;odpočívat. Ať už fandíte spíše zahálce s&nbsp;knihou v&nbsp;ruce nebo se svůj čas rozhodnete strávit aktivně a&nbsp;dobrodružně, chalupa, její perfektní zázemí a&nbsp;nekonečné okolní vyžití je Vám plně k dispozici.
            </AnimateIn>
          </div>
          <div className="relative flex justify-center items-center">
            <AnimateIn className='w-full mx-auto relative' style={ {maxWidth: "1200px"}}>
              <ImageSlider 
                images={['chalupa1', 'chalupa2', 'chalupa3', 'chalupa4']}
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
              <div className="flex flex-col justify-start items-center px-16">
                <ChataImg 
                width={206.87}
                height={200.05}
                viewBox="0 0 289.87 280.05"
                  className='chata-img mb-12' />
                <span className="text-center text-3xl font-bold py-4">
                  150 let historie
                </span>
                <div className="text-block w-full pt-12 text-center">
                  Chalupa Na Potok byla postavena takřka před 150 lety. Po dlouhých letech chátrání a nevyužívání jejího potenciálu se opět snažíme dostat do stavení život a dětský smích. Věříme, že nám v tom pomůžete!
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16">
               <Piano 
                  width={238.68}
                  height={160.25}
                  viewBox="0 0 263.68 202.25"
                  className='chata-img mb-16 mt-8' />
                <span className="text-center text-3xl font-bold pt-6 pb-4">
                  Respect
                </span>
                <div className="text-block w-full pt-12 text-center">
                  Interiér chalupy září životem. Není to muzeum ani skanzen. Moderní prvky se snoubí s těmi klasickými a řemeslo s technologií. Vše ještě není doladěno, ale blížíme se cíli!
                </div>
              </div>
              <div className="flex flex-col  justify-start items-center px-16">
                <Kameny 
                  width={90}
                  height={200}
                  viewBox="0 0 186.38 412.32"
                  className='chata-img mb-12' />
                <span className="text-center text-3xl font-bold py-4">
                  Materiály
                </span>
                <div className="text-block w-full pt-12 text-center">
                  Na pozemek chalupy jsme nedovezli jediný kámen... Všechny ty nádherné kusy skal zde již byly a my se je snažili znovu využít jak nejlépe to šlo. Stejně jako prostor bývalé stodoly, který čeká na další kapitolu.
                </div>
              </div>
            </div>
            </AnimateIn>
        </div>

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
                    images={['chalupa_stodola1', 'chalupa_stodola2', 'chalupa_stodola3', 'chalupa_stodola4']}
                    innerColumn={true}
                    className={''}
                    height={'606px'}
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
                  images={['chalupa_krajina1', 'chalupa_krajina2', 'chalupa_krajina3']}
                  innerColumn={true}
                  className={''}
                  height={'976px'}
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


export default Pokoje
