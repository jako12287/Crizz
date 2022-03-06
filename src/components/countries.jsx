import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../Global_store/actions"
import { Country } from "./country"

export const Countries = ()=>{

    const dispatch = useDispatch()
    const $countries = useSelector((state)=> state.countries)
    

        useEffect(()=>{
         dispatch(getCountries())  

        },[])

    return(
        <div>
         {$countries && $countries.map((el)=><Country 
                                                key={el.id}
                                                name={el.name}
                                                population={el.population}
                                                region={el.region}
                                                image={el.imageFlag}
                                                />)}

        </div>
    )

}