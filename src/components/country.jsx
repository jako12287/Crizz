import styled from 'styled-components'

export const Country = ({name, image, population, region})=>{
    return(
        <Container>

            <Name>{name.toUpperCase().slice(0,12)}</Name>
            <Population>{population}</Population>
            <Region>{region}</Region>
        </Container>
    )
}

const Container = styled.div`
    background-color: green;

`

const Name = styled.h2`
    color: blue;

` 

const Population = styled.h3`
    color: yellow;
`

const Region = styled.h3`
    color: yellow;
`

