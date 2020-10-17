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

  const [season, setSeason] = useState(0)


  // Load all the bookings
  const { loading, data } = useQuery(GET_ALL_BOOKINGS, {});

  if (!loading) {
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
      <SEO title="Home" />

      <section className="top-block">
        <div className="title-top absolute flex justify-center items-end content-center">
          <h2 className='potok text-center uppercase'>Ceník a rezervace</h2>
        </div>
      </section>

      <NarrowContainer className='text-primary'>
        <div className="central-text-block text-center h-half-spacing-top h-half-spacing-bottom">
          <div className="centered-block">
            <AnimateIn>
              <span className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam purus, euismod et tincidunt vel, alique aptent taciti sociosqu ad litorat id est.
              </span>
            </AnimateIn>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between h-half-spacing-bottom">
          <div className="left-col flex flex-col">
            <AnimateIn>
              <div className="heading-wrapper heading-selection flex pt-24 phone:pt-8">
                <h5 
                  className={`potok uppercase cursor-pointer underline-link selection mr-24 text-primary ${season === 0 && 'active'}`} 
                  onClick={() => setSeason(0)}
                  >
                  letní sezóna
                </h5>
                <h5 
                  className={`potok uppercase cursor-pointer underline-link selection text-primary ${season === 1 && 'active'}`} 
                  onClick={() => setSeason(1)}
                  >
                  zimní sezóna
                </h5>
              </div>
            </AnimateIn>
            <div className="text-block inner-column">
              <AnimateIn>
                <table className='w-full table-auto tabulka-ceny phone:mb-24'>
                  {
                    season === 0 
                    ? (
                      <tbody className='w-full'>
                        <tr className='w-full'>
                          <td className='font-medium '>
                            14 000 Kč / týden
                          </td>
                          <td className=''>
                            Networking & drinks
                          </td>
                        </tr>
    
                        <tr className='w-full'>
                          <td className='font-medium'>
                            15 000 Kč / týden
                          </td>
                          <td className=''>
                            Lena Lekkou: Teaching Creative Confidence
                          </td>
                        </tr>
    
                        <tr className='w-full'>
                          <td className='font-medium'>
                            13 500 Kč / týden
                          </td>
                          <td className=''>
                          Maria Delliou: Stay in the game without restrictions
                          </td>
                        </tr>
                      </tbody>
                    )
                    : (
                      <tbody className='w-full'>
                        <tr className='w-full'>
                          <td className='font-medium '>
                            24 000 Kč / týden
                          </td>
                          <td className=''>
                            Hodně drahá zimní sezóna
                          </td>
                        </tr>
    
                        <tr className='w-full'>
                          <td className='font-medium'>
                            18 000 Kč / týden
                          </td>
                          <td className=''>
                            Zima zima zima už tu je
                          </td>
                        </tr>
    
                        <tr className='w-full'>
                          <td className='font-medium'>
                            18 500 Kč / týden
                          </td>
                          <td className=''>
                            Mrazík
                          </td>
                        </tr>
                      </tbody>
                    )
                  }
                  
                </table>
              </AnimateIn>
            </div>

          </div>

          <div className="right-col flex flex-col">
            <AnimateIn>
              <div className="dummy-block shorter">

              </div>
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
              

            <div className='legend-wrapper relative flex justify-start'>
              <div className='legend-block free-slot flex justify-start items-center mr-12'>
                <div className='legend-box'>
                  19
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
      </NarrowContainer>
        

    </Layout>
  )
}

const GET_ALL_BOOKINGS = gql`
  query content_view_1208136bf41f46798e2b89edf4bcf51a {
    page: bookingsConnection {
      edges {
        node {
          id
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
