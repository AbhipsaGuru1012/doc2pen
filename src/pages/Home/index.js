import React from 'react'
import Footer from '../../components/Footer/Footer'
import About from './sections/About/About'
import ContactUs from './sections/ContactUs/ContactUs'
import Banner from './sections/Banner/Banner'
import OpenSource from './sections/OpenSource/OpenSource'
import SupportUs from './sections/SupportUs/SupportUs'
import Team from './sections/Team/Team'

function Home() {
    return (
        <div className="HomePage">
            <Banner />
            <About />
            <Team />
            <OpenSource />
            <ContactUs />
            <SupportUs />
            <Footer />
        </div>
    )
}

export default Home
