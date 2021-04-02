import React, { useEffect, useState} from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateIn from '../components/AnimateIn'

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import LeftArrow from '../components/svg/leftArrow'
import RightArrow from '../components/svg/rightArrow'
import { useMediaQuery } from 'react-responsive'
import NarrowContainer from "../components/NarrowContainer"

import { WEEKDAYS_LONG, WEEKDAYS_SHORT, FIRST_DAY_OF_WEEK, LABELS, MONTHS } from '../config/locale'
import Dvere from "../components/svg/dvere";

import Image from '../components/image.js'

function Navbar({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  localeUtils,
}) {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];
  return (
    <div className={className}>
      <LeftArrow 
        className='DayPicker-NavButton--Next' 
        onClick={() => onNextClick()} 
        fill={"#707070"}
        />
      <RightArrow 
        className='DayPicker-NavButton--Previous' 
        onClick={() => onPreviousClick()}
        fill={"#707070"}
        />
    </div>
  );
}

const Cenik = ({location}) => {

  const locale = 'cs'

  let bookings = []
  let modifiers = {}
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })


  // Load all the bookings
  const { loading, error, data } = useQuery(GET_ALL_BOOKINGS, {});

  if (!loading) {
    if (error) return `Error! ${error.message}`;

    bookings = data.page.edges.map((node) => {
      return node.node
    })

    modifiers = {
      booked: bookings.map((booking) => {
        return {
          from: new Date(booking.bookedFrom),
          to: new Date(booking.bookedTo)
        }
      })
    }
  }

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Ceník a rezervace" />

      <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-normal text-center max-w-7xl text-black px-4">
              <h3 className="potok">
                Kdy a na jak dlouho<br/>
                se Na Potok chystáte?
              </h3>
            </div>
          </div>
        </AnimateIn>
      </section>

      <NarrowContainer className='text-primary h-half-spacing-bottom'>
         <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-loose text-center max-w-5xl py-32 text-black">
              <p className="leading-loose">
                Naše chalupa neslouží jen jako místo oddechu od hektického života ve městech, jako cíl dovolených a&nbsp;prodloužených víkendů, nebo rodinných rekreací.<br />
                Díky členitému pozemku s&nbsp;mnohými zákoutími, prostoru bývalé stodoly a&nbsp;perfektnímu zázemí může chalupa Na Potok hostit všechny možné příležitosti setkávání, zážitků a&nbsp;radostí, které Vás jen napadnou!<br />
               </p>   
            </div>
          </div>
        </AnimateIn>
        <div className="relative w-full mt-16 md:mt-8 text-black">
          <AnimateIn>
            <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-center content-center leading-relaxed">
              <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                  Na sezónu
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  Prosinec, leden, únor, březen / červen, červenec, srpen a září! Během těchto vytížených měsíců k nám můžete přijet na týden od neděle do neděle.
                </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                  40.000,- Kč
                </span>
              </div>
              <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                  Na klídek
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                 Klidné měsíce mimo sezónu mají svou neopakovatelnou atmosféru. Užít si ji Na Potoku určitě stojí za to! Sluncem zalité dny neslibujeme, ale klid a pohodu ano!
                </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                  35.000,- Kč
                </span>
              </div>
                <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                  <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                    Na pár dní
                  </span>
                  <div className="text-block w-full pt-6 text-center h-auto">
                  Během kvetoucího jara nebo malebného podzim k nám můžete přijet i od pondělí do středy, od středy do pátku nebo od pátku do neděle.
                  </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                  18.000,- Kč
                </span>
              </div>

              <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                  Na Vánoce
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  Pro Vaše Vánoční svátky plné klidu a pohody, s rodinou nebo přáteli bude chalupa Na Potok připravena od 23.-27.12.
                </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                 45.000,- Kč
                </span>
              </div>
              <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                  Na Silvestra
                </span>
                <div className="text-block w-full pt-6 text-center h-auto">
                  3! 2! 1! Šťastný nový rok!!!

Užít si poslední dny v roce starém a přivítat rok nový můžete Na Potoku od 28.12.-2.12.
                </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                  60.000,- Kč
                </span>
              </div>
                <div className="flex flex-col justify-start items-center justify-self-center px-4 pb-16 md:pb-4 max-w-lg lg:mb-20">
                  <span className="text-center potok text-3xl font-bold pt-8 pb-2">
                    Na Velikonoce
                  </span>
                  <div className="text-block w-full pt-6 text-center h-auto">
                  Ať už si přejete trávit Velikonoce jakkoliv, chalupa Na Potok je Vám k dispozici od Zeleného čtvrtka do Velikonočního pondělí.
                  </div>
                <span className="text-center potok text-3xl font-bold pt-16 pb-8">
                  24.000,-
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block leading-loose text-center max-w-5xl py-32 md:py-16 text-black">
              <p className="leading-loose">
                Podívejte se, jestli je Váš žádaný termín volný a ozvěte se nám! Máme rádi osobní přístup a určitě se domluvíme na všech podrobnostech! Těšíme se!

               </p>   
            </div>
          </div>
        </AnimateIn>
{/* 
          <div className="w-full text-block pt-28 pb-12 font-medium text-center tracking-wide flex justify-center items-center">
            <Link className="text-2xl font-normal border border-black px-5 py-4 hover:text-primary hover:bg-black transition-colors duration-200" to='/cenik/'>Chci přijet!</Link>
          </div> */}
      </NarrowContainer>

      <NarrowContainer className='text-black'>
          
        <div className='calendar-wrapper'>
          <div className="heading-wrapper pb-12 phone:pb-0">
            <AnimateIn>
              <h4 className='potok uppercase'>    
                volné termíny
              </h4>
            </AnimateIn>
          </div>

          <AnimateIn>
            <DayPicker 
              numberOfMonths={isMobile ? 1 : 3}
              locale={locale}
              months={MONTHS[locale]}
              weekdaysLong={WEEKDAYS_LONG[locale]}
              weekdaysShort={WEEKDAYS_SHORT[locale]}
              firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
              labels={LABELS[locale]}
              showOutsideDays
              modifiers={loading ? {} : modifiers}
              navbarElement={<Navbar />}
        
              />
              

            <div className='legend-wrapper my-16 relative flex justify-start text-black'>
              <div className='legend-block free-slot flex justify-start items-center mr-12'>
                <div className='legend-box'>
                  27
                </div>
                <div className='legend-text'>
                  volný termín
                </div>
              </div>
              <div className='legend-block booked-slot flex justify-start items-center'>
                <div className='legend-box'>
                  27
                </div>
                <div className='legend-text'>
                  rezervovaný termín
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>

        <div className="w-full text-block pt-20 pb-32 font-medium text-center tracking-wide flex justify-center items-center">
          <Link className="text-2xl font-normal border border-black px-5 py-4 mr-12 hover:text-primary hover:bg-black transition-colors duration-200" to='/ubytovaci-podminky/'>Chci vědět víc o cenách, termínech a ubytovacích podmínkách!</Link>
        </div>
        <div className="w-full text-block pb-32 font-medium text-center tracking-wide flex justify-center items-center">
          <a 
            className="text-2xl potok font-normal px-8 py-4 transition-colors duration-200" 
            href="mailto:chalupa@napotok.cz">
            chalupa@napotok.cz
          </a>
          <a 
            className="text-2xl potok font-normal px-8 py-4 transition-colors duration-200" 
            href="tel:+420777441876">
            +420 777 441 876
          </a>
        </div>

      </NarrowContainer>
        

    </Layout>
  )
}

const GET_ALL_BOOKINGS = gql`
  query content_view_0fc2f40c1e92499d879bb91233fcd086 {
    page: bookingsConnection {
      edges {
        node {
          id
          stage
          updatedAt
          bookedFrom
          bookedTo
          createdAt
          email
          id
          mobile
          name
          publishedAt
          updatedAt
          
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          
          }
        }
      }
    aggregate {
      count
    }
  }
}

`

export default Cenik
