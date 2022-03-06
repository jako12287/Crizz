import { Countries } from "../components/countries"
import styled from "styled-components"


export const Home = ()=>{
   




    return(
        <div>

            <div>
                <h3>Where in the world?</h3>
                <button>Dark mode</button>
            </div>

            <div>
                <input type='text' placeholder="Search for a country..."/>
                <select name="Filter">
                    <option>Filter by region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>


                </select>
            </div>

            <div>
            {<Countries/>&&<Countries/>}
            </div>


        </div>
    )
}

// const Container = styled.div` 
//     border: 2px solid red;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     justify-items: center;
    
// `