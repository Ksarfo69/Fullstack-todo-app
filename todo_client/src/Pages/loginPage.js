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
                const results = await axiosInstance.get('/getusertodolist/6');
            
            }catch{
                dispatch(loginError())
            }
       
    }


    const createAccountHandler = () => {
        setshowRegistrationForm(true)  
    }


  return (
    <Container> 
        <Left>
           <LeftText>
              <em>The TodoApp</em> 
            </LeftText> 
        </Left> 
        <Right> 
        
           {showRegistrationForm? <RegisterPage setshowRegistrationForm={setshowRegistrationForm}/> :
           <RightWrapper> 
           <LoginText>TodoApp Login</LoginText>

            {user.authError && <AuthError>Incorrect Email or password.</AuthError>}
            {EmptyPassword && <AuthError>Please enter a password.</AuthError>}
           
            <EmailField >
                Email:
                <EmailInput  onChange={emailHandler} value={Email}>

                </EmailInput>
            </EmailField>
            <PasswordField >
                Password:
                <PasswordInput type="password" onChange={passwordHandler} value={Password}>

                </PasswordInput>
            </PasswordField>
           
            <LoginButton onClick={loginHandler}>Login</LoginButton>
            <CreateAccountButton onClick={createAccountHandler}>Create Account</CreateAccountButton>
            </RightWrapper>
            }
            

        </Right>
    </Container>
  )
}

export default LoginPage