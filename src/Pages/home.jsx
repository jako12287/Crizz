import { Countries } from "../components/countries"
import { useDispatch } from "react-redux"
import { Continent, Search } from "../Global_store/actions"
import styled from "styled-components"
import { NavBar } from "../components/NavBar"
import { Loader } from '../components/Loader/Loader'


export const Home = ()=>{
    const dispatch = useDispatch()


    const handelChange = (e)=>{

        dispatch(Search(e.target.value))

    }

    const handelContinent = (e)=>{

        dispatch(Continent(e.target.value))

    }
   




    return(
        <Container>

            <NavBar/>

            <Filters>
                <Input type='text' placeholder="   🔍  Search for a country..." onChange={handelChange}/>
              

                <Select onChange={handelContinent}>
                    <option hidden={true}>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </Select>
            </Filters>

            <Render>
            !<Countries/> ? <Loader/> : <Countries/>
            </Render>


        </Container>
    )
}



const Container = styled.div` 
    background-color: ${props=>props.theme.bgColor};
    color: ${props=>props.theme.text} ;
    width:100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`



const Filters = styled.div`
    width: 90%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const Input = styled.input` 
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ;
    width: 22rem;
    height: 2.5rem;
    border: none;
    outline: none;

`

const Select = styled.select` 
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ;
    width: 10rem;
    height: 2.5rem;
    border: none;
    outline: none;
`

const Render = styled.div`
    width: 100%;
`



