import Styled from 'styled-components'
import { mobile } from '../Responsive/Responsive'
import { tablet } from '../Responsive/Responsive'


export const Container = Styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
height: 100vh;
background-image: url("https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg");
background-size: cover;
padding: 0px;

`

export const Left = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
${mobile({display: 'none'})};
`

export const LeftText = Styled.h1`
font-size: 120px;
color: white;
${tablet({fontSize: "85px"})};
`

export const Right = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
${mobile({width: '80%', marginLeft: "5%"})};
${tablet({width: "90%"})};
`

export const RightWrapper = Styled.div `
border: 1px solid grey;
border-radius: 5px;
width: 60%;
padding: 18px 30px;
display: flex;
flex-direction: column;
background-color: #783937FF;
color: white;
${mobile({width: '100%'})};
`


export const LoginText = Styled.h2`
text-align: center;
`

export const EmailField = Styled.div`
padding: 10px 0px;
`

export const EmailInput = Styled.input`
padding: 10px 0px;
width: 100%;
`

export const UsernameField = Styled.div`
padding: 10px 0px;
`

export const UsernameInput = Styled.input`
padding: 8px 0px;
width: 100%;
`

export const PasswordField = Styled.div`
padding: 10px 0px;
`

export const PasswordInput = Styled.input`
padding: 8px 0px;
width: 100%;
`

export const ConfirmPasswordField = Styled.div`
padding: 10px 0px;
`

export const ConfirmPasswordInput = Styled.input`
padding: 8px 0px;
width: 100%;
`

export const LoginButton = Styled.button`
padding: 10px 0px;
margin: 10px 0px;
transition: all 0.5s ease;
&:hover {
    transform: scale(1.1);
}
`

export const CreateAccountButton = Styled.button`
padding: 10px 0px;
margin: 12px 0px;
transition: all 0.5s ease;
&:hover {
    transform: scale(1.1);
}
`

export const AuthError = Styled.span`
color: #FFFF00;
font-size: 18px;
font-weight: 100;
`

export const EmptyPassError = Styled.span`
color: white;
font-size: 18px;
font-weight: 100;
`