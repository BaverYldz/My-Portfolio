import { Suspense, lazy } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import DarkVeil from "./components/DarkVeil"

// Lazy load sections for better initial load performance
const Projects = lazy(() => import("./sections/Projects"))

const WorkExperience = lazy(() => import("./sections/WorkExperience"))
const TechStack = lazy(() => import("./sections/TechStack"))
const Resume = lazy(() => import("./sections/Resume"))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import("./sections/Footer"))

const App = () => {
    return (
        <main className="relative min-h-screen w-full">
            <div
                className="fixed top-0 inset-x-0 h-[50vh] z-0 pointer-events-none"
                style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                }}
            >
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0.1}
                    scanlineIntensity={0}
                    speed={1.2}
                    scanlineFrequency={0}
                    warpAmount={0}
                />
            </div>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <TechStack />
                </Suspense>
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <Projects />
                </Suspense>

                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <WorkExperience />
                </Suspense>
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>

                </Suspense>
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <Resume />
                </Suspense>
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <Contact />
                </Suspense>
                <Suspense fallback={
                    <div className="w-full h-32 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                }>
                    <Footer />
                </Suspense>
            </div>
        </main>
    )
}

export default App