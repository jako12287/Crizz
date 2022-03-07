import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "./Loader/Loader";


export const CardDetail = ({
  image,
  name,
  nName,
  population,
  region,
  subRegion,
  capital,
  topLevel,
  currencies,
  languages,
  borderCountries
}) => {

    let id = useParams().id

    let Dot = (x) => {  
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(".");
      }

   

    const handleOnclick = (e)=>{
       setInterval(()=>{
           window.location.reload(true)
           
       }, 300)
        
    }

    let styles = {
      width:'25rem',
      height:'20rem',
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',

    }

    


  return(
  <Contain>
   <SubContain>
   <Flag>
    <Borde>
    <div style={styles}/>
    </Borde>
   </Flag>

    <Info>
        <Title>{name}</Title>

        <ContainInfo>
        <SeparateOne>
        <Div>

        <Title1>Native Name:<Title2>{nName ? nName : 'Not exist'}</Title2></Title1>
        </Div>
        <Div>

        <Title1>Population:<Title2> {Dot(population)}</Title2></Title1>
        </Div>
        <Div>

        <Title1>Region:<Title2> {region ? region : 'Not exist'}</Title2></Title1>
        </Div>
        <Div>

        <Title1>Sub Region:<Title2> {subRegion ? subRegion : 'Not exist'}</Title2></Title1> 
        </Div>
        <Div>

        <Title1>Capital:<Title2> {capital ? capital[0] : 'capital does not exist'}</Title2></Title1>
        </Div>
        </SeparateOne>

        <SeparateTwo>
        <Div>

        <Title1>Top Level Domain:<Title2> {topLevel ? topLevel : 'Not exist'}</Title2></Title1>
        </Div>
        <Div>

        <Title1>Currencies:<Title2> {currencies.join(', ')}</Title2></Title1>
        </Div>
        <Div>

        <Title1>Languages:<Title2> {languages.join(', ')}</Title2></Title1>
        </Div>
        </SeparateTwo>

        </ContainInfo>
        <Border>
         <P>Border Countries:</P> 
         <Box>
           {!borderCountries? 'No border Countries' :borderCountries.map(el=><Link to={`/details/${el}`} key={el}><ButtonBorder onClick={handleOnclick}>{el}</ButtonBorder></Link>)}
           </Box>  
        </Border>
    </Info>
   </SubContain>

  </Contain>
  );
};



const Contain = styled.div` 
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const SubContain = styled.div` 
  width: 90%;
  height: 100%;
  display: flex;
  @media(max-width: 1180px){
       flex-direction: column;
       margin-top: 40px;

  }
`
const Flag = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`
const Borde = styled.div` 
      border: 10px solid ${props=>props.theme.bgColorL};
      border-radius:10px;
 
`

const Info = styled.div`
    width: 60%;
    height: 100%;
`

const Title = styled.div` 
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

`
const ContainInfo = styled.div` 
  display: flex;
  @media(max-width: 1180px){
       flex-direction: column;
       gap:2rem;
  }
`

const SeparateOne = styled.div` 
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content:end;
`
const SeparateTwo = styled.div` 
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content:start;
  @media(max-width: 1180px){
       width: 20rem;
  }
`

const Div = styled.div`
display: flex;
height: 2rem;

`
const Title1 = styled.div` 
margin: 0;
width: 100%;
font-weight: bold;


`

const Title2 = styled.h4` 
margin: 0;
display: inline-block;
font-weight: 300;

`
const Border = styled.div` 
  display: flex;
  justify-content: start;
  @media(max-width: 1180px){
       flex-direction: column;
  }
`

const Box = styled.div` 
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 1180px){
  justify-content: space-between;
  align-items: flex-start;
  height: 5rem;

  }

`

const P = styled.p` 
  width: 20rem;
  font-weight: bold;
`
const ButtonBorder = styled.button`  
  background-color: ${props=>props.theme.bgColorL};
  color: ${props=>props.theme.text} ;
  font-size: .9rem;
  width: 4.5rem;
  border: none;
  font-weight: 100;
  cursor: pointer;
`

