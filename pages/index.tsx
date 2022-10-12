import type { NextPage } from 'next'
import Advantages from '../components/Landing/Advantages/Advantages'
import Banner from '../components/Landing/Banner/Banner'
import ContactUs from '../components/Landing/Contact/ContactUs'
import ExploreMarketplace from '../components/Landing/ExploreMarketplace/ExploreMarketplace'
import Features from '../components/General/Features/Features'
import Footer from '../components/General/Footer/Footer'
import Info from '../components/Landing/Info/Info'
import Procedures from '../components/General/Procedures/Procedures'
import TrustedCompanies from '../components/Landing/TrustedCompanies/TrustedCompanies'

const Home: NextPage = () => {
  return (
    <>
    <Banner />
    <TrustedCompanies />
    <ExploreMarketplace />
    <Features />
    <Advantages />
    <Info />
    <ContactUs />
    <Procedures />
    {/* <Footer /> */}
    </>
  )
}

export default Home
