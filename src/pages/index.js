import React, { useEffect, useState, useRef} from "react"
import { Link } from "gatsby"
import LocomotiveScroll from 'locomotive-scroll';

import Layout from "../components/layout"
// import LandingImage1 from "../components/landingImage1"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'
 
import LandingImage1 from "../images/landing.png"
import MainImage1 from "../images/main_1.png"
import MainImage2 from "../images/main_2.png"
import MainImage3 from "../images/main_3.png"
import MainImage4 from "../images/main_4.png"
import MainImage5 from "../images/main_5.png"
import MainImage6 from "../images/main_6.png"
import ChataImg from '../components/svg/chata.js'

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ImageSlider from "../components/imageSlider"
import IntroImageSlider from "../components/introImageSlider"
import WideContainer from "../components/WideContainer"
import NarrowContainer from "../components/NarrowContainer"
import UnderlineLink from "../components/UnderlineLink"


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
          images={[LandingImage1, LandingImage1]}
          />
      </section>

      {/* INTRO PAGE END */}

      <WideContainer className='text-primary'>
        <div className="flex w-full flex-wrap justify-between pt-32 phone:pt-8">
          <div className="left-col flex flex-col">
            <AnimateIn >
              <div className="heading-wrapper h-half-spacing-top">
                <h3 className='potok uppercase'>
                  Nejkrásnější<br />
                  výhledy na<br />
                  dolní moravě
                </h3>
              </div>
            </AnimateIn>
            <AnimateIn >
              <div className="text-block inner-column phone:mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
              </div>
              <UnderlineLink 
                classNameSpan={'text-primary'}
                link={'#'}
                text={'Přečíst více'}
              />
            </AnimateIn>
           
            <AnimateIn >
            <div className="images-wrapper inner-column mt-40 phone:mt-20">
              <img
                src={MainImage2} 
                />
              <div className="description description-right uppercase">
                popisek obrázku
              </div>
            </div>
            </AnimateIn>
          </div>

          <div className="right-col flex flex-col wider-col phone:mt-20">
            <AnimateIn >
              <ImageSlider 
                images={[MainImage1, MainImage6]}
                selfEnd={true}
                className={'tall-image'}
                maxHeight={'1082px'}
                />
            </AnimateIn>
          </div>

        </div>
        <div className="central-text-block h-bottom-padding-image text-center h-spacing-top">
            <div className="centered-block">
          <AnimateIn >
              Spread over two interconnected buildings, Le Mirabeau offers 30 double, and 5 single rooms as well as 36 suites and junior suites. Families can enjoy some privacy thanks to interconnecting rooms or in our generous Family Suite with Matterhorn view on the top floor. Since our last renovation in 2018.
              <br></br>
              <br></br>
              all of our rooms feature elegant wooden parquet flooring. From the balconies, stunning mountain views can be enjoyed, and many of our rooms and suites offer stunning views of the Matterhorn. All of our accommodation options comprise luxury amenities such as tea & coffee makers,
          </AnimateIn>
            </div>
          <AnimateIn  className='centered-image' translateX={'-50'} threshold={0.1}>
            <img
              className='centered-image'
              src={MainImage3}
              />
          </AnimateIn>
        </div>
      </WideContainer>

      {/* FEATURES CONTAINER START */}

      <section className="features-cont">

        <NarrowContainer className='text-white'> 
          <div className="flex w-full flex-wrap justify-between pt-32 pb-56 phone:pb-32">
            <div className="left-col flex flex-col">
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
            </div>

            <div className="right-col flex flex-col">
              <div className="chata-wrapper self-center pr-12 phone:hidden">
                <AnimateIn >
                  <ChataImg width={179.36} height={173.46} viewBox="0 0 179.36 173.46" className='chata-img mb-8 md:mt-0 sm:mt-8' />
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
            </div>
          </div>
        </NarrowContainer>

      </section>

      {/* FEATURES CONTAINER END */}

      <section className="page-block">

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
        </NarrowContainer>

      </section>

    </Layout>
  )
}


export default IndexPage
