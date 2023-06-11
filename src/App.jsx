import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import StartPage from './pages/StartPage'


function App() {
  return (
    <>
    <About></About>
    <BrowserRouter>
        <Routes>
          <Route path='/dado-vuelta/' element={<StartPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
