import './styles/App.css';
import './styles/tailwind.css';

import Navbar from './components/Navbar'; 
import Home from './modules/Home';
import Portfolio from './components/PortfolioCard'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <main className='w-full min-h-screen h-full p-8 bg-black text-blue-300'>
      <Routes>
        <Route path='/Salcedo-Project' element={
          <>
            <Navbar/>
            <Home />
          </>
        }/>
        <Route path='/Portfolio' element={
          <Portfolio />
        }/>
      </Routes>


    </main>
  )
}

export default App
