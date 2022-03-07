// import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


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
    <div style={styles}/>
   </Flag>

    <Info>
        <Title>{name}</Title>

        <ContainInfo>
        <SeparateOne>

        <TextTitle>Native Name:</TextTitle><TextSub> {nName}</TextSub>
        <TextTitle>Population:</TextTitle><TextSub> {Dot(population)}</TextSub>
        <TextTitle>Region:</TextTitle><TextSub> {region}</TextSub>
        <TextTitle>Sub Region:</TextTitle><TextSub> {subRegion}</TextSub> 
        <TextTitle>Capital:</TextTitle><TextSub> {capital ? capital[0] : 'capital does not exist'}</TextSub>
        </SeparateOne>

        <SeparateTwo>
        <TextTitle>Top Level Domain:</TextTitle><TextSub> {topLevel}</TextSub>
        <TextTitle>Currencies:</TextTitle><TextSub> {currencies.join(', ')}</TextSub>
        <TextTitle>languages:</TextTitle><TextSub> {languages.join(', ')}</TextSub>
        </SeparateTwo>

        </ContainInfo>
        <Border>Border Countries: {borderCountries.map(el=><Link to={`/details/${el}`} key={el}><button onClick={handleOnclick}>{el}</button></Link>)}</Border>
    </Info>
   </SubContain>

  </Contain>
  );
};

const fontColor = '#ffffff'
const bgColorL = '#2b3743';
const bgColor = '#202c37';

const Contain = styled.div` 
  background-color: ${bgColor};
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const SubContain = styled.div` 
  width: 90%;
  height: 100%;
  display: flex;
`
const Flag = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`

const Info = styled.div`
    width: 60%;
`

const Title = styled.div` 
  font-size: 1.5rem;
  font-weight: bold;
  color: ${fontColor};

`
const ContainInfo = styled.div` 
  display: flex;
`
const Border = styled.div` 
`

const SeparateOne = styled.div` 
  border:2px solid red;
  width: 20rem;
  display: flex;
`
const SeparateTwo = styled.div` 
  width: 60%;
`

const TextTitle = styled.h3` 
  color: ${fontColor};
  width: 50%;
  margin: 0;
  border:2px solid red;

  
  
`
const TextSub = styled.h3` 
  color: ${fontColor};
  width: 50%;
  margin: 0;
  border:2px solid red;



`


