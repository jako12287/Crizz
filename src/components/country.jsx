import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Country = ({name, image, population, region, capital, id})=>{

    const styles = {
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
          
      }
    const stylesLink = {
        textDecoration:'none'
    }

    let Dot = (x) => {  
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
      }

  

    return(
    <Link style={stylesLink} to={`/details/${id}`}>
        <Container>
            <Flag style={styles}/>
            <SubContain>
                <Name>{name}</Name>
                <Info>
                <Population>Population: <SubTitle>{Dot(population)}</SubTitle></Population>
                <Region>Region: <SubTitle>{region}</SubTitle></Region>
                <Capital>Capital: <SubTitle>{capital ? capital[0] : 'not exist'}</SubTitle></Capital>
                </Info>

            </SubContain>
        </Container>
    </Link>
    )
}




const Container = styled.div`
    border: 8px solid ${props=>props.theme.bgColorL};
    border-radius: 8px;
    background-color: ${props=>props.theme.bgColorL};
    color: ${props=>props.theme.text} ; 
    margin-top: 4rem;
    width: 12rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 630px){
        width: 16rem;
        height: 22rem;
  }


`
const SubContain = styled.div` 
    width: 95%;
    height: 50%;
    display: flex;
    flex-direction: column;

`

const Flag = styled.div`
width: 100%;
height: 50%;

`


const Name = styled.h2`
    height: 30%;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: flex-end;

` 

const Info = styled.div`
    height: 70%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:.2rem;

`

const Population = styled.div`
    height: 1rem;
    font-size: .8rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap:.3rem;


`

const Region = styled.div`
    height: 1rem;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`

const Capital = styled.div`
    height: 1rem;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`

const SubTitle = styled.h3`
 font-weight: 300;
`

