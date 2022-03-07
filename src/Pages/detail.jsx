import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../Global_store/actions"
import { CardDetail } from "../components/cardDetail"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NavBar } from "../components/NavBar"

export const Detail = ()=>{
    const dispatch = useDispatch()
    const $detail = useSelector((state)=>state.detail)
    const id = useParams().id


    useEffect(()=>{
        dispatch(getDetail(id))

    },[])


    return(
        <Container>
           <NavBar/>
             

            <ContainButton>
                <Link to={'/'}><Button>🡨 Back</Button></Link>
            </ContainButton>

            <Render>
                    {$detail && $detail.map((el)=><CardDetail 
                        key={el.id}
                        image={el.image}
                        name={el.name}
                        nName={el.nName}
                        population={el.population}
                        region={el.region}
                        subRegion={el.subRegion}
                        capital={el.capital}
                        topLevel={el.topLevel}
                        currencies={el.currencies}
                        languages={el.languages}
                        borderCountries={el.borderCountries}/>)}
            </Render>
        </Container>
    )
}

const fontColor = '#ffffff'
const bgColorL = '#2b3743';
const bgColor = '#202c37';

const Container = styled.div`
   background-color: ${bgColor};
   height: 99vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`



const ContainButton = styled.div`
    background-color: ${bgColor};
    height: 14%;
    width: 90%;
    display: flex;
    align-items: center;
`
const Button = styled.button` 
    width: 5rem;
    height: 2rem;
    border: none;
    background-color: ${bgColorL};
    color: ${fontColor};
    font-size:.8rem;
`

const Render = styled.div` 
    width: 100%;

`