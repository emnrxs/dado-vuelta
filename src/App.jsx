import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import StartPage from './pages/StartPage'
import AgePage from './pages/AgePage'


function App() {
  return (
    <>
    <About></About>
    <BrowserRouter>
        <Routes>
          <Route path='/dado-vuelta/' element={<StartPage/>}/>
          <Route path='/dado-vuelta/age' element={<AgePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
