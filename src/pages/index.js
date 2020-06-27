import React, { useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const IndexPage = () => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/rezervace/">Ceník a rezervace</Link>
    </Layout>
  )
}


export default IndexPage
