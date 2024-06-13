import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLinkInter from "../components/UnderlineLinkInter"

const Cenik = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Na Potok - Ceník a rezervace" />

      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-normal text-center max-w-7xl text-black px-4">
              <h4 className="potok uppercase">
                Kdy a na jak dlouho<br/>
                se Na Potok chystáte?
              </h4>
            </div>
          </div>
        </AnimateIn>
      </section>

      <NarrowContainer className='text-primary'>
        <div className="relative w-full mt-32 md:mt-16 text-black">
          <AnimateIn threshold={0}>
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-center content-center leading-relaxed">
              <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                  Na sezónu
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  Prosinec, leden, únor, březen, červen, červenec, srpen a září. Během těchto měsíců k nám můžete přijet na týden od soboty do soboty.
                </div>
                <span className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                  69.000 Kč / týden <br />
                  (od 616 Kč / os. / noc)
                </span>
              </div>
              <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                  Na klídek
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                 Duben, květen, říjen a listopad. Týden na chalupě v období mimo sezónu má svou neopakovatelnou atmosféru. Sluncem zalité dny neslibujeme, ale klid a pohodu ano.
                </div>
                <span className="text-center helvetica text-3xl font-bold pt-16 pb-8 ">
                  59.000 Kč / týden<br />
                  (od 526 Kč / os. / noc)
                </span>
              </div>
                <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                  <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                    Na pár dní
                  </span>
                  <div className="text-block w-full pt-6 text-center h-auto">
                    Během kvetoucího jara nebo malebného podzimu k nám můžete přijet na pár dní. Minimálně dvě noci si u nás určitě skvěle užijete a každá další bude o to příjemnější.
                  </div>
                  <span className="text-center helvetica text-3xl font-bold pt-16 pb-8 ">
                    31.000 Kč / 2 noci
                  </span>
              </div>

              <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                  Na Vánoce
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  Pro Vaše vánoční svátky plné klidu a pohody, s rodinou nebo přáteli bude chalupa Na Potok připravena od 22.-26.12.
                </div>
                <span className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                 79.000 Kč / 4 noci
                </span>
              </div>
              <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                  Na Silvestra
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  3! 2! 1! Šťastný nový rok!!! Užít si poslední dny v roce starém a přivítat rok nový můžete Na Potoku od 27.12.-2.12.
                </div>
                <span className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                  110.000 Kč / týden
                </span>
              </div>
                <div className="flex flex-col justify-between items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                  <span className="text-center potok text-3xl font-bold pt-8 pb-2 uppercase">
                    Na Velikonoce
                  </span>
                  <div className="text-block w-full pt-6 text-center h-auto">
                    Ať už si přejete trávit Velikonoce jakkoliv, chalupa Na Potok je Vám k dispozici od Zeleného čtvrtka do Velikonočního pondělí.
                  </div>
                  <span className="text-center helvetica text-3xl font-bold pt-16 pb-8">
                    53.000 Kč / 4 noci
                  </span>
              </div>
            </div>
          </AnimateIn>
        </div>
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-loose text-center max-w-5xl py-32 md:py-16 text-black">
              <p className="leading-loose">
                Ozvěte se nám, zda-li je Váš termín volný. Máme rádi osobní přístup a určitě se domluvíme na všech podrobnostech. Těšíme se!

               </p>   
            </div>
          </div>
        </AnimateIn>
      </NarrowContainer>

      <NarrowContainer className='text-black pt-12'>
        <div className="relative w-full mt-20 mb-32 text-black">
          <AnimateIn>
            <span className="pt-16 block pb-0 text-5xl lg:text-3xl potok w-full text-center">
              <UnderlineLinkInter link="/ubytovaci-podminky/" text={`Chci vědět víc o podmínkách ubytování`} />
            </span>
          </AnimateIn>
        </div>
        
        <div className="w-full text-block pb-32 font-medium text-center tracking-wide flex justify-center flex-wrap items-center">
          <a 
            className="text-2xl helvetica font-normal px-8 py-4 transition-colors duration-200" 
            href="mailto:chalupa@napotok.cz">
            chalupa@napotok.cz
          </a>
          <a 
            className="text-2xl helvetica font-normal px-8 py-4 transition-colors duration-200" 
            href="tel:+420777441876">
            +420 777 441 876
          </a>
        </div>
      </NarrowContainer>
    </Layout>
  )
}

export default Cenik
