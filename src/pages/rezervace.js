import React, { useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import LeftArrow from '../components/svg/leftArrow'
import RightArrow from '../components/svg/rightArrow'
import { useMediaQuery } from 'react-responsive'

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
      <LeftArrow className='DayPicker-NavButton--Previous' onClick={() => onPreviousClick()} />
      <RightArrow className='DayPicker-NavButton--Next' onClick={() => onNextClick()} />
      {/* <button style={styleLeft} onClick={() => onPreviousClick()}>
      </button> */}
      {/* <button style={styleRight} onClick={() => onNextClick()}>
      </button> */}
    </div>
  );
}

const ReservationPage = () => {

  const locale = 'cs'

  // const [bookings, setBookings] = useState([])
  // const [modifiers, setModifiers] = useState({})
  let bookings = []
  let modifiers = {}
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  useEffect(() => {

  }, [])

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

  if (loading) {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    )
  } else {
  
    return (
      <Layout>
        <SEO title="Home" />

        <div className='cont relative mx-auto my-20'>
          
          <div className='calendar-wrapper'>

            <DayPicker 
              numberOfMonths={isMobile ? 1 : 3}
              locale={locale}
              months={MONTHS[locale]}
              weekdaysLong={WEEKDAYS_LONG[locale]}
              weekdaysShort={WEEKDAYS_SHORT[locale]}
              firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
              labels={LABELS[locale]}
              showOutsideDays
              modifiers={modifiers}
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
          </div>
        </div>
        
  
      </Layout>
    )

  }
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
