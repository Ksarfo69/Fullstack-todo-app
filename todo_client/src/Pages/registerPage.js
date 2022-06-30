import React, {useState, useEffect} from 'react'
import axiosInstance from './apiConfig'
import {Container, Wrapper, RegistrationText, EmailField, EmailInput, PasswordField, PasswordInput, ConfirmPasswordField, PasswordMatchError,
ConfirmPasswordInput, RegistrationError, CreateAccountButton, LoginButton, RegistrationSuccess, UsernameField, UsernameInput, EmptyPasswordError} from '../styledComponents/registerPageStyling'
import { useDispatch, useSelector } from 'react-redux'
import {loginEnd, registrationStart, registrationSuccess, registrationError, registrationEnd} from '../Redux/usersSlice'




const RegisterPage = (props) => {
    const user = useSelector(state => state.users)
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [passwordMatch, setpasswordMatch] = useState(false)
    const [emptyPassword, setemptyPassword] = useState(false)
    const [emptyUsername, setemptyUsername] = useState(false)
    const [emptyEmail, setemptyEmail] = useState(false)


    useEffect(() => {
        setpasswordMatch(true)
        setemptyPassword(false)
    }, [])


    const dispatch = useDispatch();



    const userDetailsForRegistration = {
        username: Username,
        email: Email,
        password: Password
    }


   const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const confirmPasswordHandler = (e) => {
        setconfirmPassword(e.target.value)
    }


    const createAccountHandler = async() => {
        dispatch(registrationStart)

        if(Username === ""){
            return   setemptyUsername(true)
        }
        if( Password === ""){
            setemptyUsername(false)
            return   setemptyPassword(true)
        }
        if(Email === ""){
            setemptyUsername(false)
            setemptyPassword(false)
            return   setemptyEmail(true)
        }
        if(Password!==confirmPassword){
            setemptyUsername(false)
            setemptyPassword(false)
            setemptyEmail(false)
            return setpasswordMatch(false)
        }
        try{
                setpasswordMatch(true)
                const res = await axiosInstance.post('/register', userDetailsForRegistration)
                dispatch(registrationSuccess(userDetailsForRegistration))
                setUsername("")
                setEmail("")
                setPassword("")
                setconfirmPassword("")
                
                
        }catch(err){
            dispatch(registrationError())
        }   
    }


    const loginHandler = () => {
        props.setshowRegistrationForm(false) 
        dispatch(registrationEnd())
        dispatch(loginEnd())

    }

  return (
      <div>
    <Container> 
        <Wrapper>
            <RegistrationText>TodoApp Registration</RegistrationText>

            <RegistrationError style={{display: user.registrationError? "initial" : "none"}}>Username or Email already exists</RegistrationError>
            <RegistrationSuccess  style={{display: user.registrationSuccess? "initial" : "none"}}>Account Created Successfully</RegistrationSuccess>
            <PasswordMatchError data-testid="passwordMatchError" style={{display: passwordMatch? "none" : "initial"}}>Passwords do not match.</PasswordMatchError>
            <EmptyPasswordError data-testid="emptyPasswordError" style={{display: emptyPassword? "initial" : "none"}}>Please enter a password</EmptyPasswordError>
            <EmptyPasswordError data-testid="emptyUsernameError" style={{display: emptyUsername? "initial" : "none"}}>Please enter a username</EmptyPasswordError>
            <EmptyPasswordError  data-testid="emptyEmailError" style={{display: emptyEmail? "initial" : "none"}}>Please enter a email</EmptyPasswordError>


            <UsernameField data-testid="usernamefield" >
                Username:
                <UsernameInput data-testid="usernameInput" onChange={usernameHandler} value={Username}>

                </UsernameInput>
            </UsernameField>
            
            <EmailField data-testid="emailfield" >
                Email:
                <EmailInput  data-testid="emailInput" onChange={emailHandler} value={Email}>

                </EmailInput>
            </EmailField>
            
            <PasswordField data-testid="passwordfield" >
                Password:
                <PasswordInput data-testid="passwordInput" type="password" onChange={passwordHandler} value={Password}>

                </PasswordInput>
            </PasswordField>

           <ConfirmPasswordField data-testid="confirmpasswordfield" >
                Confirm Password:
                <ConfirmPasswordInput data-testid="confirmpasswordInput" type="password" onChange={confirmPasswordHandler} value={confirmPassword}>

                </ConfirmPasswordInput>
            </ConfirmPasswordField>

            <CreateAccountButton data-testid="createAccountButton" onClick={createAccountHandler}>Create Account</CreateAccountButton>
            <LoginButton data-testid="loginButton" onClick={loginHandler}>Login</LoginButton>
        </Wrapper>
    </Container>
    </div>
  )
}

export default RegisterPage