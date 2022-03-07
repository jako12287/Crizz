import './App.css'
import { Home } from './Pages/home'
import { Detail } from './Pages/detail'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme, GlobalStyles } from './components/Theme/Theme'
import { useSelector } from 'react-redux'

export const App = ()=>{
    const $theme = useSelector((state)=>state.darkmode)

    


  return(
    
    <ThemeProvider theme={$theme === "Light" ? LightTheme : DarkTheme}>
    <GlobalStyles/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Detail/>}/>
    </Routes>
    </ThemeProvider>
  )
}



