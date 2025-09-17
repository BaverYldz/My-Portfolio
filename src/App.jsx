import { Suspense } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from './sections/Contact'
import Footer from "./sections/Footer"
import Resume from "./sections/Resume"

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Resume />
            <Contact />
            <Footer />
        </>
    )
}

export default App