import Styled from 'styled-components'
import { mobile } from '../Responsive/Responsive'
import { tablet } from '../Responsive/Responsive'


export const Container = Styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-image: url("https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg");
background-size: cover;
padding: 0px;
`

export const Wrapper = Styled.div `
display: flex;
flex-direction: column;
width: 50%; 
border: 1px solid grey;
border-radius: 5px;
background-color: #783937FF;
color: white;
${mobile({width: "90%"})};
${tablet({width: "70%"})};  
`

export const UserActions = Styled.div `
 display: flex;
 justify-content: flex-end;  
 width: 100%; 
 border: 1px solid grey;
`

export const UserName = Styled.p`

`

export const LogoutAction = Styled.p`
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`

export const TodoList = Styled.div `
  display: flex;
  flex-direction: column;  
`
export const Headings = Styled.div `
    display: flex; 
    width: 100%;
    justify-content: space-between;  
    height: 50px;
    border: 1px solid grey;
    ${mobile({height: "40px"})};
`

export const TodoHeading = Styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%; 
    font-size: 19px;
    ${mobile({fontSize: "16px"})};

`

export const StatusHeading = Styled.div `
    display: flex;
   width: 25%;
   align-items: center;
   justify-content: center;
   font-size: 19px; 
   ${mobile({fontSize: "16px", width: "15%"})};
  
`

export const DeleteHeading = Styled.div`
   display: flex;
   width: 5%;
   align-items: center;
   justify-content: center;
   font-size: 19px; 
   ${mobile({fontSize: "16px", width: "15%"})};
`

export const InputSection = Styled.div `
    display: flex; 
    width: 70%;
    justify-content: space-between;  
    height: 50px;
    margin-left: 30px;
    ${mobile({width: "86%", marginLeft: "15px"})};
`

export const AddTodo = Styled.input `
 height: 25px;
 width: 70%;
 border: none;
 padding-left: 20px;
 margin-top: 5px;

 ::placeholder,
  ::-webkit-input-placeholder {
    color: gray;
    opacity: 0.5;
    font-style: italic;
  }
  ${mobile({paddingLeft: "15px", fontSize: "13px"})};
`

export const AddIcon = Styled.div `
width: 30%;
display: flex;
margin-top: 5px;
justify-content: center;
cursor: pointer;
${mobile({width: "2%", marginLeft: "1%"})};
`


export const TodoBody = Styled.div`
    display: flex;
    width: 100%;
    ${mobile({marginTop: "1%", marginBottom: "1%"})};
`

export const Todo = Styled.div `
width: 70%;
height: 40px;
display: flex;
align-items: center;
font-size: 18px;
${mobile({width: "70%"})};

`

export const TodoText = Styled.p `
font-size: 18px;
margin-left: 30px;
${mobile({fontSize: "14px", marginTop: "5.3%", marginLeft: "15px"})};
`

export const Status = Styled.div `
width: 25%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
${mobile({width: "15%"})};
`

export const NotDoneIcon = Styled.div `
color: red;
cursor: pointer;
`

export const DoneIcon = Styled.div `
color: green;
cursor: pointer;

`

export const Delete = Styled.div `
width: 5%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
${mobile({maxWidth: "15%", marginLeft: "4.8%"})};
`

export const DeleteIcon = Styled.div`
cursor: pointer;
`

 