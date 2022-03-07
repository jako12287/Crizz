import { Countries } from "../components/countries"
import { useDispatch } from "react-redux"
import { Continent, Search } from "../Global_store/actions"
import styled from "styled-components"
import { NavBar } from "../components/NavBar"


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
            {<Countries/>&&<Countries/>}
            </Render>


        </Container>
    )
}

const fontColor = '#ffffff'
const bgColorL = '#2b3743';
const bgColor = '#202c37';

const Container = styled.div` 
    width:100%;
    min-height:100vh;
    background-color: ${bgColor};
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
    width: 22rem;
    height: 2.5rem;
    background-color: ${bgColorL};
    color: ${fontColor};
    border: none;
    outline: none;

`

const Select = styled.select` 
    width: 10rem;
    height: 2.5rem;
    border: none;
    background-color: ${bgColorL};
    color: ${fontColor};
`

const Render = styled.div`
    width: 100%;
`



