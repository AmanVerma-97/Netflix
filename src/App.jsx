import './App.css'
import Home from './components/home/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignIn from './components/sign in/SignIn'
import Error from './components/error/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<SignIn />}/>
          <Route path='/error' element={<Error />}/>

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
