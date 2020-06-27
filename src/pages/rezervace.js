import React, { useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import { WEEKDAYS_LONG, WEEKDAYS_SHORT, FIRST_DAY_OF_WEEK, LABELS, MONTHS } from '../config/locale'

const ReservationPage = () => {

  const locale = 'cs'

  // const [bookings, setBookings] = useState([])
  // const [modifiers, setModifiers] = useState({})
  let bookings = []
  let modifiers = {}

  const birthdayStyle = `.DayPicker-Day--booked {
    background-color: orange;
    color: white;
  }`;

  useEffect(() => {

  }, [])

  const { loading, data } = useQuery(GET_ALL_BOOKINGS, {});
  console.log('data: ', data)

  if (!loading) {

  // console.log('data: ', data.page.edges)
  
    bookings = data.page.edges.map((node) => {
      return node.node
    })

  // setBookings(loading ? [] : data.page.edges.map((node) => {
  //   return node.node
  // }))
  
  console.log('bookings: ', bookings)
    
    modifiers = {
      booked: bookings.map((booking) => {
        return {
          from: new Date(booking.bookedFrom),
          to: new Date(booking.bookedTo)
        }
      })
    }
  // setModifiers(loading ? {} : {
  //   booked: bookings.map((booking) => {
  //     return {
  //       from: new Date(booking.bookedFrom),
  //       to: new Date(booking.bookedTo)
  //     }
  //   })
  // })
  
  //   console.log('modifiers: ', modifiers)
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
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <style>{birthdayStyle}</style>
        
        <DayPicker 
          numberOfMonths={3}
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
          showOutsideDays
          modifiers={modifiers}
          />
  
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
