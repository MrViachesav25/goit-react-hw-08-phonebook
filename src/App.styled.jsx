import styled from 'styled-components';



export const StyledTittle = styled.h1`
    font-size: 55px;
    font-weight: 700;
    color: rgb(40, 39, 39); 
    text-align: center;
    margin-top: 150px;
`;

export const StaledParagraph = styled.p`
    text-align: center;
    color: rgb(56, 54, 54);
    margin-bottom: auto;
`;

export const StyledBox = styled.div`
 margin: 0 auto; 
 padding-bottom: 25px; 
 height: 100vh; 
`;

export const StyledContainer = styled.div`
padding: 20px 17px;
margin: 0 auto;

@media screen and (min-width: 480px){
  padding: 25px 55px;
  }
`
export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;
    padding: 30px 15px ;

 position: relative;

&::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7px; 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);}

  @media screen and (min-width: 768px){
    flex-direction: row;
    padding: 30px 20px;
    justify-content: space-between;
  }
  

.NavLink{
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(40, 39, 39); 
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-left: 20px;

    @media screen and (min-width: 480px){
      font-size: 17px;
    font-weight: 700;
    }
    
    }
    .NavLink.active{
      color: #5fd38e;
    }
`
export const StyledNav = styled.nav`
display: flex;
align-items: center;
gap: 20px;
font-weight: 500;
    font-size: 18px;

.headerNavContainer{
    display: flex;
    gap: 25px;
}
.logo{
  font-size: 18px;
  font-weight: 700;
  color: rgb(57 55 55);
  letter-spacing: 0.1px;
 
}

@media screen and (min-width: 480px){
  gap: 25px;
    }
`
export const StyledLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .ant-spin-dot {
    .ant-spin-dot-item {
      background-color: #5fd38e;
    }
  }
`

export const StyledTit = styled.h2`
    margin-top:20px;
    font-size: 30px;
    font-weight: 700;
    color: rgb(40, 39, 39); 

    @media screen and (min-width: 480px) {
      margin-top:50px;
      font-size: 38px;
      font-weight: 700;
    }
`

export const StyledSubsection = styled.p`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: rgb(56, 54, 54); 

`

