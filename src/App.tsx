import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { History } from './components/History'
import { Space } from './components/Space'
import { Cia } from './components/Cia'
import { Team } from './components/Team'
import { Video } from './components/Video'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <About />
        <Courses />
        <History />
        <Space />
        <Cia />
        <Team />
        <Video />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
