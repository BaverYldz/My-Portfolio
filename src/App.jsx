import { Suspense, lazy } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

// Lazy load sections for better initial load performance
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"))
const FeatureCards = lazy(() => import("./sections/FeatureCards"))
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"))
const TechStack = lazy(() => import("./sections/TechStack"))
const Resume = lazy(() => import("./sections/Resume"))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import("./sections/Footer"))

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <ShowcaseSection />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <FeatureCards />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <ExperienceSection />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <TechStack />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <Resume />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <Contact />
            </Suspense>
            <Suspense fallback={
                <div className="w-full h-32 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            }>
                <Footer />
            </Suspense>
        </>
    )
}

export default App