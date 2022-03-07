import styled from "styled-components"

export const NavBar = ()=>{
    return(
        <Navbar>
              <SubNav>
                <Title>Where in the world?</Title>
                <Button>☾ Dark mode</Button>
              </SubNav>
        </Navbar>
    )
}

const fontColor = '#ffffff'
const bgColorL = '#2b3743';
const bgColor = '#202c37';

const Navbar = styled.div`
    width: 100%;
    background-color: ${bgColorL};
    display: flex;
    justify-content:center;

`

const SubNav = styled.div`
    color: ${fontColor};
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Title = styled.h4`
    width: 50%;
`

const Button = styled.button` 
    background-color: #ffffff00;
    color: ${fontColor};
    border: none;
    height: 2rem;
    cursor: pointer;
`