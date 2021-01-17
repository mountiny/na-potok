import React, { useEffect, useState} from "react"

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
        className='DayPicker-NavButton--Previous' 
        onClick={() => onPreviousClick()} 
        />
      <RightArrow 
        className='DayPicker-NavButton--Next' 
        onClick={() => onNextClick()}
        />
    </div>
  );
}

const ReservationPage = ({location}) => {

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

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Ceník a rezervace</h2>
        </div>
      </section>

      <NarrowContainer className='text-primary'>

        <div className="flex w-full flex-wrap justify-between h-half-spacing-top h-half-spacing-bottom">
          <div className="left-col flex flex-col">
            <AnimateIn>
             
               <div className="text-block">
                <h4 
                  className={`potok uppercase mr-24 phone:mr-0 text-primary`} 
                  >
                  16 postelí v&nbsp;chalupě
                </h4>

                <div className="pt-8">
                V Chalupě NA POTOK se můžete ubytovat minimálně na 2&nbsp;a&nbsp;více nocí pro 1&nbsp;až 16 osob.
                Pronajímáme vždy celou chalupu za jednotnou cenu v&nbsp;daném období.
                </div>

                <table className="table-fixed phone:leading-8 font-bold mt-16 phone:text-lg phone:mb-16">
                  <tbody className="phone:leading-8">
                    <tr>
                      <td className="w-2/5 phone:w-1/2 pr-8">Týden (7 nocí)</td>
                      <td className="w-3/5">39 000 Kč (5&nbsp;570&nbsp;Kč&nbsp;za&nbsp;noc)</td>
                    </tr>
                    <tr>
                      <td className="w-2/5 phone:w-1/2 pr-8">Víkendový pobyt</td>
                      <td>17 000 Kč</td>
                      
                    </tr>
                    <tr>
                      <td className="w-2/5 phone:w-1/2 pr-8">Silvestr (7 nocí)</td>
                      <td>60 000 Kč</td>
                      
                    </tr>
                    <tr>
                      <td className="w-2/5 phone:w-1/2 pr-8">Vánoce</td>
                      <td>42 000 Kč</td>
                      
                    </tr>
                    <tr>
                      <td className="w-2/5 phone:w-1/2 pr-8">Velikonoce Pá - Po</td>
                      <td>24 000 Kč</td>
                      
                    </tr>
                  </tbody>
                </table>
               </div>
            </AnimateIn>
           

          </div>

          <div className="right-col flex flex-col">
            <AnimateIn>
              <Image
                filename={"cenik"}
                className={`mb-16`}
                />
            </AnimateIn>
          </div>
        </div>
          
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
              

            <div className='legend-wrapper my-16 relative flex justify-start'>
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

            <div className="w-full text-block my-20 font-medium text-center tracking-wide">
              <a className="text-lg uppercase underline" href='mailto:chalupa@napotok.cz'>rezervujte si termín!</a>
            </div>

          </AnimateIn>

        </div>

        <div className="flex w-full flex-wrap justify-between h-half-spacing-bottom">
          <div className="left-col flex flex-col phone:order-2">
            <AnimateIn>
             
               <div className="text-block">
               
                  <p className="pb-8">
                    <strong>Cena zahrnuje</strong> <br />
                    lůžkoviny, ručníky, vířivku, saunu, venkovní gril a&nbsp;ohniště, dřevo (pro ohniště a&nbsp;vnitřní krb), spotřebu elektrické energie a&nbsp;vody, skladovací prostory pro sportovní vybavení, závěrečný úklid.
                  </p>
                  <p className="pb-8">
                    <strong className="line-through">Cena nezahrnuje</strong> <br />
                    Vratnou kauci ve výši 5 000 Kč, kterou host zaplatí při příjezdu hotově. Kauce je vrácena při předání Chalupy v&nbsp;den odjezdu v&nbsp;plné výši, v&nbsp;případě, že nedošlo ke škodě. <br />
                    Poplatek za psa 250 Kč/noc.
                  </p>
                  <p className="pb-8">
                    <strong>Příjezd a odjezd</strong> <br />
                    Příjezd: od 16 hod. do 20 hod.<br />
                    Odjezd: do 10 hod.
                  </p>
                  <p className="pb-8 underline">
                    Vzhledem k tomu, že Chalupa nedisponuje recepcí budeme rádi, když nám dáte vědět předpokládaný čas příjezdu.
                  </p>

               </div>
            </AnimateIn>
           

          </div>

          <div className="right-col flex flex-col phone:order-1 phone:py-16">
            <AnimateIn>
                <div className="flex justify-end phone:justify-center">

                  <Dvere 
                    className="align-end phone:align-center"
                  />
                </div>

            </AnimateIn>
          </div>
        </div>
        <div className="w-full text-block h-half-spacing-bottom font-medium text-center tracking-wide">
          Přečtěte si prosím <a href="" className="underline uppercase">Všeobecné podmínky</a>.
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

export default ReservationPage
