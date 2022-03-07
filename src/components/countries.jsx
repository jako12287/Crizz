import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../Global_store/actions';
import { Country } from './country';
import { Loader } from './Loader/Loader';
import styled from 'styled-components';

export const Countries = () => {
  const dispatch = useDispatch();
  const $countries = useSelector((state) => state.countries);
  const $search = useSelector((state) => state.search.toLowerCase());
  const $continent = useSelector((state) => state.continent.toLowerCase());

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Container>
      {!$countries.length ? (
        <Loader />
      ) : (
        $countries
          .filter((el) => el.region.toLowerCase().includes($continent))
          .filter((el) => el.name.toLowerCase().includes($search))
          .map((el) => (
            <Country
              key={el.id}
              name={el.name}
              population={el.population}
              region={el.region}
              capital={el.capital}
              image={el.imageFlag}
              id={el.id}
            />
          ))
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 4rem;

  @media(max-width: 880px){
  grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 630px){
  grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 550px){
  grid-template-columns: repeat(1, 1fr);
  }
`;
