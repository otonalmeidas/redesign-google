import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

import './globals.scss'

export function App() {
  return (
    <div className="view">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
