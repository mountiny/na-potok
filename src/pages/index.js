import React, { useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import LandingImage1 from "../components/landingImage1"
import SEO from "../components/seo"
 
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


const IndexPage = () => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      {/* INTRO PAGE START */}

      <section className="landing-page">
        <div className="images-cont">
          <img
            src={LandingImage1} 
            className='landing-image'
            />
        </div>
        <div className="title absolute flex justify-center items-center content-center">
          <h1 className='potok text-center uppercase'>na chatě</h1>
        </div>
      </section>

      {/* INTRO PAGE END */}

      <section className='container relative mx-auto text-primary'>
        <div className="flex w-full justify-between pt-32">
          <div className="left-col flex flex-col">
            <div className="heading-wrapper">
              <h3 className='potok uppercase'>
                Nejkrásnější<br />
                výhledy na<br />
                dolní moravě
              </h3>
            </div>
            <div className="text-block inner-column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ante nibh, nec lacinia libero eleifend nec. Mauris blandit dolor finibus iaculis auctor. Ut eleifend felis in facilisis laoreet. Curabitur eget elit tincidunt, condimentum neque sed, ornare nunc. Aliquam erat volutpat. Integer aliquet nunc id augue consequat convallis. Aliquam urna urna, varius sit amet luctus vel, condimentum nec nisl. Vestibulum tristique auctor massa at dictum. Morbi et quam sapien.
            </div>
            <a href="" className="link-wrapper">
              <span className='uppercase underline-link text-primary'>
                Přečíst více
              </span>
            </a>
            <div className="images-wrapper inner-column mt-40">
              <img
                src={MainImage2} 
                />
              <div className="description description-right uppercase">
                popisek obrázku
              </div>
            </div>
          </div>

          <div className="right-col flex flex-col">
            <div className="images-wrapper self-end cursor-pointer">
              <img
                src={MainImage1} 
                />
              <div className="controls-wrapper flex justify-end">
                <div className="switch-wrapper">
                  <div className="switch active"></div>
                </div>
                <div className="switch-wrapper">
                  <div className="switch"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="central-text-block my-24 text-center">
          <div className="centered-block">
            Spread over two interconnected buildings, Le Mirabeau offers 30 double, and 5 single rooms as well as 36 suites and junior suites. Families can enjoy some privacy thanks to interconnecting rooms or in our generous Family Suite with Matterhorn view on the top floor. Since our last renovation in 2018.
            <br></br>
            <br></br>
            all of our rooms feature elegant wooden parquet flooring. From the balconies, stunning mountain views can be enjoyed, and many of our rooms and suites offer stunning views of the Matterhorn. All of our accommodation options comprise luxury amenities such as tea & coffee makers,
          </div>
          <img
            className='centered-image'
            src={MainImage3}
            />
        </div>
      </section>

      {/* FEATURES CONTAINER START */}

      <section className="features-cont">
        <div className="cont relative mx-auto text-white">
          <div className="flex w-full justify-between pt-32 pb-56">
            <div className="left-col flex flex-col">
              <div className="images-wrapper inner-column mt-40">
                <div className="image-text">
                  <h3 className="potok uppercase">
                    svatby
                  </h3>
                  <div className="image-description text-block">
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
                  src={MainImage4} 
                  />
                <div className="description description-left uppercase">
                  popisek obrázku
                </div>
              </div>
            </div>

            <div className="right-col flex flex-col">
              <div className="chata-wrapper self-center pr-12">
                <ChataImg width={179.36} height={173.46} viewBox="0 0 179.36 173.46" className='chata-img mb-8 md:mt-0 sm:mt-8' />
              </div>
              <div className="images-wrapper inner-column self-end mt-40">
                <div className="image-text">
                  <h3 className="potok uppercase">
                    teambuilding
                  </h3>
                  <div className="image-description text-block">
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
                <div className="description description-right uppercase">
                  popisek obrázku
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES CONTAINER END */}

      <section className="page-block">

        <div className="cont relative mx-auto">

          <div className="color-block"></div>

          <div className="block-heading">
            <h3 className='potok uppercase'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tincidunt mauris sit amet molestie.
            </h3>
          </div>

          <div className="flex w-full justify-between pt-32 pb-56">
            <div className="left-col flex flex-col">
              <ImageSlider 
                images={[MainImage1, MainImage6]}
                descriptionSide={'description-left'}
              />
              {/* <div className="images-wrapper inner-column cursor-pointer">
                <img
                  src={MainImage1} 
                  />
                <div className="description description-left uppercase">
                  popisek obrázku
                </div>
                <div className="controls-wrapper flex justify-end">
                  <div className="switch-wrapper">
                    <div className="switch active"></div>
                  </div>
                  <div className="switch-wrapper">
                    <div className="switch"></div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="right-col flex flex-col pt-56">
              <ImageSlider 
                images={[MainImage6, MainImage1]}
                descriptionSide={'description-right'}
              />
             
            </div>
          </div>

        </div>

      </section>

    </Layout>
  )
}


export default IndexPage
