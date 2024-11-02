import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-customBackground">
      <Navigation />
      <main className="flex flex-col md:flex-row flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
