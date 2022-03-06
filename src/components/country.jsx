import styled from 'styled-components'

export const Country = ({name, image, population, region, capital})=>{

    const styles = {
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
          
      }

    let Dot = (x) => {  
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
      }

  

    return(
        <Container>
            <Flag style={styles}/>
            <SubContain>
                <Name>{name}</Name>

                <Info>
                <Population>Population: <SubTitle>{Dot(population)}</SubTitle></Population>
                <Region>Region: <SubTitle>{region}</SubTitle></Region>
                <Capital>Capital: <SubTitle>{capital ? capital[0] : 'capital does not exist'}</SubTitle></Capital>
                </Info>

            </SubContain>
        </Container>
    )
}

const fontColor = '#ffffff'
const bgColor = '#04293A';

const Container = styled.div`
    background-color: ${bgColor};
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

const Population = styled.h3`
    height: 1rem;
    font-size: .8rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap:.3rem;


`

const Region = styled.h3`
    height: 1rem;
    margin: 0;
    font-size: .8rem;
    display: flex;
    align-items: center;
    gap:.3rem;

`

const Capital = styled.h3`
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

