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

    it("checks username input value changes", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const usernameInput = screen.getByTestId("usernameInput")
            const testusername = "testname50"

            fireEvent.change(usernameInput, {target: {value: testusername}})
    
    
            expect(usernameInput.value).toBe(testusername)
        })

    it("checks email input value changes", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const emailInput = screen.getByTestId("emailInput")
            const testemail = "testname50@gmail.com"

            fireEvent.change(emailInput, {target: {value: testemail}})
    
            expect(emailInput.value).toBe(testemail)
        })

    it("checks password input value changes", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const passwordInput = screen.getByTestId("passwordInput")
            const testpassword = "testpassword"

            fireEvent.change(passwordInput, {target: {value: testpassword}})
    
            expect(passwordInput.value).toBe(testpassword)
        })

    it("checks confirmpassword input value changes", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const confirmpasswordInput = screen.getByTestId("confirmpasswordInput")
            const testconfirmpassword = "testpassword"

            fireEvent.change(confirmpasswordInput, {target: {value: testconfirmpassword}})
    
            expect(confirmpasswordInput.value).toBe(testconfirmpassword)
        })
})