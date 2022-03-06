import { CONTINENT, GETALL, SEARCH } from "./types";
const API = 'https://restcountries.com/v3.1/all'



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

export const Search = (value)=>{

  return async(dispatch)=>{
      dispatch({
        type:SEARCH,
        payload:value
      })
  }

}

export const Continent = (value)=>{

  return async(dispatch)=>{
    dispatch({
      type:CONTINENT,
      payload:value
    })

  }

}