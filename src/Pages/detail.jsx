import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../Global_store/actions"
import { CardDetail } from "../components/cardDetail"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NavBar } from "../components/NavBar"
import { Loader } from "../components/Loader/Loader"

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
                    {!$detail.length ? <Loader/> : $detail.map((el)=><CardDetail 
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



const Container = styled.div`
   height: 99vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`



const ContainButton = styled.div`
    height: 14%;
    width: 90%;
    display: flex;
    align-items: center;
`
const Button = styled.button` 
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ;
    width: 5rem;
    height: 2rem;
    border: none;
    border-radius:.3rem;
    font-size:.8rem;
    cursor: pointer;
    @media(max-width: 1180px){
     margin-top: 30px ;

  }
`

const Render = styled.div` 
    width: 100%;

`