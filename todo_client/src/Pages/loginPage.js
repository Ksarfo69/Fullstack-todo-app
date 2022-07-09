import React, {useState} from 'react'
import axiosInstance from './apiConfig'
import {Container, Left, LeftText, Right, RightWrapper, LoginText, EmailField, EmailInput, PasswordField, PasswordInput, LoginButton, CreateAccountButton, AuthError} from '../styledComponents/loginPageStyling'
import { useDispatch, useSelector } from 'react-redux'
import {loginStart, loginSuccess, loginError} from '../Redux/usersSlice'
import RegisterPage from './registerPage'



const LoginPage = () => {
    const user = useSelector(state => state.users)
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [EmptyPassword, setEmptyPassword] = useState(false)
    const [showRegistrationForm, setshowRegistrationForm] = useState(false)

    const dispatch = useDispatch();


    const userDetails = {
        email: Email,
        password: Password
    }

   const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }


    const loginHandler = async() => {   
            dispatch(loginStart())
            if(Password == ""){
               return setEmptyPassword(true)
            }
            try{
                const res = await axiosInstance.post('/login', userDetails)
                dispatch(loginSuccess(res.data))
            
            }catch{
                dispatch(loginError())
            }
       
    }


    const createAccountHandler = () => {
        setshowRegistrationForm(true)  
    }

  return (
    <Container data-testid="container"> 
        <Left>
           <LeftText>
              <em>The TodoApp</em> 
            </LeftText> 
        </Left> 
        <Right> 
        
           {showRegistrationForm? <RegisterPage setshowRegistrationForm={setshowRegistrationForm}/> :
           <RightWrapper> 
           <LoginText>TodoApp Login</LoginText>

            <AuthError data-testid="autherror" style={{visibility: user.authError? "visible" : "hidden"}}>Incorrect Email or password.</AuthError>
            <AuthError data-testid="emptypassword" style={{visibility: EmptyPassword? "visible" : "hidden"}} >Please enter a password.</AuthError>
           
            <EmailField >
                Email:
                <EmailInput data-testid="email" type="email" onChange={emailHandler} value={Email}>

                </EmailInput>
            </EmailField>
            <PasswordField >
                Password:
                <PasswordInput data-testid="password" type="password" onChange={passwordHandler} value={Password}>

                </PasswordInput>
            </PasswordField>
           
            <LoginButton data-testid="login" onClick={loginHandler}>Login</LoginButton>
            <CreateAccountButton data-testid="create-account" onClick={createAccountHandler}>Create Account</CreateAccountButton>
            </RightWrapper>
            }
            

        </Right>
    </Container>
  )
}

export default LoginPage
