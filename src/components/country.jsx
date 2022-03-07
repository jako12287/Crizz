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

const fontColor = '#ffffff'
const bgColorL = '#2b3743';
const bgColor = '#202c37';


const Container = styled.div`
    background-color: ${bgColorL};
    margin-top: 4rem;
    width: 12rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;


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
    color: ${fontColor};
    margin: 0;
    display: flex;
    align-items: flex-end;

` 

const Info = styled.div`
    height: 70%;
    font-weight: bold;
    color: ${fontColor};
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
    color: ${fontColor};
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`

const SubTitle = styled.h3`
 color: ${fontColor};
 font-weight: 300;
`

