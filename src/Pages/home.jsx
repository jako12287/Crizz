import { Countries } from "../components/countries"
import { useDispatch } from "react-redux"
import { Continent, Search } from "../Global_store/actions"
import styled from "styled-components"


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

            <Navbar>
              <SubNav>
                <Title>Where in the world?</Title>
                <Button>☾ Dark mode</Button>
              </SubNav>
            </Navbar>

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
    background-color: ${bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Navbar = styled.div`
    width: 100%;
    background-color: ${bgColorL};
    display: flex;
    justify-content:center;

`

const SubNav = styled.div`
    color: ${fontColor};
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Title = styled.h4`
    width: 50%;
`

const Button = styled.button` 
    border: none;
    height: 2rem;
`

const Filters = styled.div`
    width: 90%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Input = styled.input` 
    width: 20rem;
    height: 2.5rem;
    background-color: ${bgColorL};

`

const Select = styled.select` 
    width: 10rem;
    height: 2.5rem;
`

const Render = styled.div`
    width: 100%;
`



