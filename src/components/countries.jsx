import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../Global_store/actions"
import { Country } from "./country"
import styled from "styled-components"

export const Countries = ()=>{

    const dispatch = useDispatch()
    const $countries = useSelector((state)=> state.countries)
    

        useEffect(()=>{
         dispatch(getCountries())  

        },[])

    return(
        <Container>
         {$countries && $countries.map((el)=><Country 
                                                key={el.id}
                                                name={el.name}
                                                population={el.population}
                                                region={el.region}
                                                capital={el.capital}
                                                image={el.imageFlag}
                                                />)}

        </Container>
    )

}

const Container = styled.div` 
    border: 2px solid red;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 4rem;
    
`