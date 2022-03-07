import { CONTINENT, GETALL, SEARCH, DETAIL, DARKMODE } from './types';
const API = 'https://restcountries.com/v3.1/all';
const APIDETAIL = 'https://restcountries.com/v3.1/alpha/';

export const getCountries = () => {
  return (dispatch) => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((res) => {
        let data = res.map((el) => {
          return {
            id: el.cca3,
            name: el.name.official,
            imageFlag: el.flags.svg,
            population: el.population,
            region: el.region,
            capital: el.capital,
            continent: el.continents
          };
        });
        return data;
      })
      .then((data) =>
        dispatch({
          type: GETALL,
          payload: data
        })
      )
      .catch((err) => console.log(err));
  };
};

export const getDetail = (value) => {
  return async (dispatch) => {
    fetch(`${APIDETAIL}${value}`)
         .then((res)=> res.json())
         .then((res) => {
          let data = res.map((el) => {
            return {
              id:el.cca3,
              image:el.flags.svg,
              name: el.name.common,
              nName: el.translations.nld.common,
              population: el.population,
              region: el.region,
              subRegion: el.subregion,
              capital: el.capital,
              topLevel: el.tld,
              currencies: Object.keys(el.currencies),
              languages: Object.keys(el.languages),
              borderCountries: el.borders
             
            };
          });
          return data;
        })
        .then((data) =>
        dispatch({
          type: DETAIL,
          payload: data
        })
      )
      .catch((err) => console.log(err));
  };
};

export const Search = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH,
      payload: value
    });
  };
};

export const Continent = (value) => {
  return async (dispatch) => {
    dispatch({
      type: CONTINENT,
      payload: value
    });
  };
};

export const DarkMode = (value)=>{
  return (dispatch)=>{
     dispatch({
       type:DARKMODE,
       payload: value
     })
  }

}
