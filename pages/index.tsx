import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
import ExploreMarketplace from '../components/ExploreMarketplace/ExploreMarketplace'
import Features from '../components/Features/Features'
import Header from '../components/Header/Header'
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Banner />
    <TrustedCompanies />
    <ExploreMarketplace />
    <Features />
    </>
  )
}

export default Home
