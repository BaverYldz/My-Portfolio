import { lazy, Suspense } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

// Lazy load non-critical components
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"))
const FeatureCards = lazy(() => import("./sections/FeatureCards"))
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"))
const TechStack = lazy(() => import("./sections/TechStack"))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import("./sections/Footer"))
const LogoSection = lazy(() => import("./sections/LogoSection"))

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>}>
                <ShowcaseSection />
                {/* <LogoSection /> */}
                <FeatureCards />
                <ExperienceSection />
                <TechStack />
                <Contact />
                <Footer />
            </Suspense>
        </>
    )
}

export default App