import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/react'
import RegisterPage from '../src/Pages/registerPage'
import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '../src/Redux/usersSlice'
import { Provider } from 'react-redux';


describe('Registration Page', ()=> {
    let store = configureStore({
        reducer: {
          users: usersSlice,
        }
      })

    it("checks username field is rendered", ()=>{
    render(
        <Provider store={store}>
            <RegisterPage />
        </Provider>)

        const usernameField = screen.getByTestId("usernamefield")

        expect(usernameField).toBeInTheDocument()
    })

    it("checks email field is rendered", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const emailField = screen.getByTestId("emailfield")
    
            expect(emailField).toBeInTheDocument()
        })


    it("checks password field is rendered", ()=>{
    render(
        <Provider store={store}>
            <RegisterPage />
        </Provider>)

        const passwordField = screen.getByTestId("passwordfield")

        expect(passwordField).toBeInTheDocument()
    })

    it("checks confirm password field is rendered", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const confirmpasswordField = screen.getByTestId("confirmpasswordfield")
    
            expect(confirmpasswordField).toBeInTheDocument()
        })
})