import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/react'
import RegisterPage from '../src/Pages/registerPage'
import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '../src/Redux/usersSlice'
import { Provider } from 'react-redux';
import axios from 'axios'
import axiosInstance from '../src/Pages/apiConfig'




jest.mock('../src/Pages/apiConfig.js', () => ({
    __esModule: true,
  
    default: {
      get: () => ({
        data: { id: 1, name: "John" },
      }),
      post: jest.fn(),
    create: jest.fn()
  }}));



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

    
    it("checks empty username input error is visible", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)

            const createAccountButton = screen.getByTestId("createAccountButton")
            const emptyUsernameError = screen.getByTestId("emptyUsernameError")

            fireEvent.click(createAccountButton)
    
            expect(emptyUsernameError).toBeVisible();
        })


    it("checks empty password input error is visible", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)

            const usernameInput = screen.getByTestId("usernameInput")
            const testusername = "testname50"

            fireEvent.change(usernameInput, {target: {value: testusername}})

    
            const createAccountButton = screen.getByTestId("createAccountButton")
            const emptyPasswordError = screen.getByTestId("emptyPasswordError")

            fireEvent.click(createAccountButton)

            expect(emptyPasswordError).toBeVisible();
        })


    it("checks empty email input error is visible", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)
    
            const usernameInput = screen.getByTestId("usernameInput")
            const testusername = "testname50"

            fireEvent.change(usernameInput, {target: {value: testusername}})

            const passwordInput = screen.getByTestId("passwordInput")
            const testpassword = "testpassword1111"

            fireEvent.change(passwordInput, {target: {value: testpassword}})
    
            const createAccountButton = screen.getByTestId("createAccountButton")
            const emptyEmailError = screen.getByTestId("emptyEmailError")

            fireEvent.click(createAccountButton)

            expect(emptyEmailError).toBeVisible();
        })

    it("checks password match error is visible", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)

            const usernameInput = screen.getByTestId("usernameInput")
            const testusername = "testname50"

            fireEvent.change(usernameInput, {target: {value: testusername}})


            const emailInput = screen.getByTestId("emailInput")
            const testemail = "testname50@gmail.com"

            fireEvent.change(emailInput, {target: {value: testemail}})


            const passwordInput = screen.getByTestId("passwordInput")
            const testpassword = "testpassword1111"

            fireEvent.change(passwordInput, {target: {value: testpassword}})


            const confirmpasswordInput = screen.getByTestId("confirmpasswordInput")
            const testconfirmpassword = "testpassword"

            fireEvent.change(confirmpasswordInput, {target: {value: testconfirmpassword}})
    
            const createAccoutButton = screen.getByTestId("createAccountButton")
            const passwordMatchError = screen.getByTestId("passwordMatchError")

            fireEvent.click(createAccoutButton)

            expect(passwordMatchError).toBeVisible();
        })

        it("checks that a call to server is made", async ()=>{
            render(
                <Provider store={store}>
                    <RegisterPage />
                </Provider>)
    
                const usernameInput = screen.getByTestId("usernameInput")
                const testusername = "testname50"
    
                fireEvent.change(usernameInput, {target: {value: testusername}})
    
    
                const emailInput = screen.getByTestId("emailInput")
                const testemail = "testname50@gmail.com"
    
                fireEvent.change(emailInput, {target: {value: testemail}})
    
    
                const passwordInput = screen.getByTestId("passwordInput")
                const testpassword = "testpassword"
    
                fireEvent.change(passwordInput, {target: {value: testpassword}})
    
    
                const confirmpasswordInput = screen.getByTestId("confirmpasswordInput")
                const testconfirmpassword = "testpassword"
    
                fireEvent.change(confirmpasswordInput, {target: {value: testconfirmpassword}})
        
                const createAccoutButton = screen.getByTestId("createAccountButton")
                const passwordMatchError = screen.getByTestId("passwordMatchError")
                const emptyEmailError = screen.getByTestId("emptyEmailError")
                const emptyPasswordError = screen.getByTestId("emptyPasswordError")
                const emptyUsernameError = screen.getByTestId("emptyUsernameError")
    
    
                fireEvent.click(createAccoutButton)

              
    
                expect(passwordMatchError).not.toBeVisible();
                expect(emptyEmailError).not.toBeVisible();
                expect(emptyPasswordError).not.toBeVisible();
                expect(emptyUsernameError).not.toBeVisible();
               await waitFor(()=> expect(usernameInput.value).toBe(""))
               expect(axiosInstance.post).toHaveBeenCalledTimes(1)
                
            })
            

    it("checks registration progresses with all fields filled", ()=>{
        render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>)

            const usernameInput = screen.getByTestId("usernameInput")
            const testusername = "testname50"

            fireEvent.change(usernameInput, {target: {value: testusername}})


            const emailInput = screen.getByTestId("emailInput")
            const testemail = "testname50@gmail.com"

            fireEvent.change(emailInput, {target: {value: testemail}})


            const passwordInput = screen.getByTestId("passwordInput")
            const testpassword = "testpassword"

            fireEvent.change(passwordInput, {target: {value: testpassword}})


            const confirmpasswordInput = screen.getByTestId("confirmpasswordInput")
            const testconfirmpassword = "testpassword"

            fireEvent.change(confirmpasswordInput, {target: {value: testconfirmpassword}})
    
            const createAccoutButton = screen.getByTestId("createAccountButton")
            const passwordMatchError = screen.getByTestId("passwordMatchError")
            const emptyEmailError = screen.getByTestId("emptyEmailError")
            const emptyPasswordError = screen.getByTestId("emptyPasswordError")
            const emptyUsernameError = screen.getByTestId("emptyUsernameError")


            fireEvent.click(createAccoutButton)

            expect(passwordMatchError).not.toBeVisible();
            expect(emptyEmailError).not.toBeVisible();
            expect(emptyPasswordError).not.toBeVisible();
            expect(emptyUsernameError).not.toBeVisible();
            
        })
    

        
})