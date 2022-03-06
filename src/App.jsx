import './App.css'
import { Home } from './Pages/home'
import { Detail } from './Pages/detail'
import { Routes, Route } from 'react-router-dom'

export const App = ()=>{
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Detail/>}/>
    </Routes>
  )
}



