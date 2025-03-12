import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-customBackground">
      <Helmet>
        {/* Título de la página */}
        <title>Hernan Miranda Portafolio</title>

        {/* Metaetiquetas Open Graph */}
        <meta property="og:title" content="Hernan Miranda Portafolio" />
        <meta
          property="og:description"
          content="Mis proyectos y habilidades en Desarrollo en Android"
        />
        <meta property="og:image" content="https://cdn.worldvectorlogo.com/logos/android-logomark.svg" />
        <meta property="og:url" content="https://hernanMiranda22.github.io/portafolio" />
        <meta property="og:type" content="website" />

        {/* Metaetiquetas adicionales para SEO */}
        <meta
          name="description"
          content="Explora mi portafolio, proyectos destacados y habilidades en desarrollo android."
        />
        <meta
          name="keywords"
          content="portafolio, desarrollador android, proyectos, habilidades, contacto"
        />
      </Helmet>

      <main className="flex flex-col md:flex-row flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
