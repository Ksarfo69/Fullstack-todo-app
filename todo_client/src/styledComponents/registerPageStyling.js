import Styled from 'styled-components'
import { mobile } from '../Responsive/Responsive'
import { tablet } from '../Responsive/Responsive'


export const Container = Styled.div`
display: flex;
justify-content: space-between;
width: 100%
`

export const Wrapper = Styled.div `
border: 1px solid grey;
border-radius: 5px;
width: 100%;
padding: 18px 30px;
display: flex;
flex-direction: column;
background-color: #783937FF;
color: white;
${tablet({padding: "12px 30px"})};

`

export const RegistrationText = Styled.h2`
text-align: center;
`

export const EmailField = Styled.div`
padding: 10px 0px;
${mobile({padding: "5px 0px"})};
`

export const EmailInput = Styled.input`
padding: 10px 0px;
width: 100%;
${tablet({padding: "6px 0px"})};
`

export const UsernameField = Styled.div`
padding: 10px 0px;
${mobile({padding: "5px 0px"})};
`

export const UsernameInput = Styled.input`
padding: 8px 0px;
width: 100%;
${mobile({padding: "6px 0px"})};
${tablet({padding: "6px 0px"})};
`

export const PasswordField = Styled.div`
padding: 10px 0px;
${mobile({padding: "5px 0px"})};
`

export const PasswordInput = Styled.input`
padding: 8px 0px;
width: 100%;
${mobile({padding: "6px 0px"})};
${tablet({padding: "6px 0px"})};
`

export const ConfirmPasswordField = Styled.div`
padding: 10px 0px;
${mobile({padding: "5px 0px"})};
`

export const ConfirmPasswordInput = Styled.input`
padding: 8px 0px;
width: 100%;
${mobile({padding: "6px 0px"})};
${tablet({padding: "6px 0px"})};
`

export const CreateAccountButton = Styled.button`
padding: 10px 0px;
margin: 12px 0px;
transition: all 0.5s ease;
&:hover {
    transform: scale(1.1);
}
${mobile({margin: "9px 0px"})};
`

export const LoginButton = Styled.button`
padding: 10px 0px;
margin: 10px 0px;
transition: all 0.5s ease;
&:hover {
    transform: scale(1.1);
}
${mobile({margin: "9px 0px"})};
`

export const RegistrationError = Styled.span`
color: #FFFF00;
font-size: 18px;
font-weight: 100;
`

export const RegistrationSuccess = Styled.span`
color: #FFFF00;
font-size: 18px;
font-weight: 100;
`

export const PasswordMatchError = Styled.span`
color: #FFFF00;
font-size: 18px;
font-weight: 100;
`

export const EmptyPasswordError = Styled.span`
color: white;
font-size: 18px;
font-weight: 100;
`