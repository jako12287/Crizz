import { useState } from "react"
import { useDispatch} from "react-redux"
import styled from "styled-components"
import { DarkMode } from "../Global_store/actions"

export const NavBar = ()=>{
    
    const [darkMode, setDarkMode] = useState(true)
    const dispatch = useDispatch()


   const handleChange = (e)=>{
       if(darkMode){
           setDarkMode(false)
           localStorage.setItem('darkmode', 'Light')
           dispatch(DarkMode(localStorage.getItem('darkmode')))
        }
       if(!darkMode){
           setDarkMode(true)
           localStorage.setItem('darkmode', 'Dark')
           dispatch(DarkMode(localStorage.getItem('darkmode')))

        }
   }
        

    return(
        <Navbar>
              <SubNav>
                <Title>Where in the world?</Title>
                <Button onClick={handleChange}>☾ Dark mode</Button>
              </SubNav>
        </Navbar>
    )
    
}




const Navbar = styled.div`
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ;
    width: 100%;
    display: flex;
    justify-content:center;
   

`

const SubNav = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  

`

const Title = styled.h4`
    width: 50%;
`

const Button = styled.button` 
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ;
    border: none;
    height: 2rem;
    cursor: pointer;
`