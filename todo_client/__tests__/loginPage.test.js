import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from '../src/Pages/loginPage';
import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '../src/Redux/usersSlice'



describe('Login Page', ()=>{
    let store = configureStore({
        reducer: {
          users: usersSlice,
        }
      })

    it('the email input changes', ()=>{
        render(
        <Provider store={store}>
                <LoginPage />
            </Provider>)
        const emailField = screen.getByTestId("email")
        const testValue = "test@gmail.com"

        fireEvent.change(emailField, {target : {value : testValue}})

    })

    it('the password input changes', ()=>{
        render(
        <Provider store={store}>
                <LoginPage />
            </Provider>)
        const passwordField = screen.getByTestId("password")
        const testValue = "testpassword"

        fireEvent.change(passwordField, {target : {value : testValue}})

    })

    it('the login handler returns empty password error if password is empty',  ()=>{
        render(
        <Provider store={store}>
                <LoginPage />
            </Provider>)
        const login = screen.getByTestId("login")
        const emptyPassword = screen.getByTestId("emptypassword")
   
        fireEvent.click(login)
        expect(emptyPassword).toBeVisible();
    })

    it('the login handler works with filled username and password', async ()=>{
        render(
        <Provider store={store}>
                <LoginPage />
            </Provider>)
        const login = screen.getByTestId("login")
        const emailField = screen.getByTestId("email")
        const passwordField = screen.getByTestId("password")
        const testEmail = "test@gmail.com"
        const testPassword = "testpassword"
        const autherror = screen.getByTestId("autherror")

        
        
        fireEvent.change(emailField, {target : {value : testEmail}})
        fireEvent.change(passwordField, {target : {value : testPassword}})
        fireEvent.click(login)
        await waitFor(()=> expect(autherror).toBeVisible());

    })

    it('the create account button show the registration form', ()=>{
        render(
        <Provider store={store}>
                <LoginPage />
            </Provider>)
        const createAccount = screen.getByTestId("create-account")

        fireEvent.click(createAccount)

    })

    it('the page renders correctly', () => {
        render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        );
        const parent = screen.getByTestId('container')
        expect(parent).toBeInTheDocument()
    });
})
