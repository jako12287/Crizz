import { GETALL } from "./types";
const API = 'https://restcountries.com/v3.1/all'
const Api2 = 'https://restcountries.com/v3/all'



export const getCountries = ()=>{
    return (dispatch)=>{
        fetch(`${API}`) 
                          .then(res => res.json())
                          .then(res => {
                            let data = res.map((el)=>{
                              return {
                                id:el.cca3,
                                name:el.name.official,
                                imageFlag: el.flags.svg,
                                population:el.population,
                                region: el.region,
                                capital: el.capital,
                                continent: el.continents
                              }
                            })
                            return data
                            })
                          .then(data => dispatch(
                              {
                              type:GETALL, 
                              payload:data
                              }
                            ))
                          .catch(err => console.log(err))

    } 
}