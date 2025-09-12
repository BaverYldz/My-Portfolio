import { lazy, Suspense } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

// Lazy load heavy components
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"))
const FeatureCards = lazy(() => import("./sections/FeatureCards"))
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"))
const TechStack = lazy(() => import("./sections/TechStack"))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import("./sections/Footer"))
const Resume = lazy(() => import("./sections/Resume"))

// Loading component
const SectionLoader = () => (
    <div className="flex-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    </div>
)

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Suspense fallback={<SectionLoader />}>
                <ShowcaseSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FeatureCards />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <ExperienceSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <TechStack />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Resume />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Footer />
            </Suspense>
        </>
    )
}

export default App