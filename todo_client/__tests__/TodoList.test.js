import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import TodoListPage from '../src/Pages/todoListPage';
import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '../src/Redux/usersSlice'
import { Provider} from 'react-redux';
import {loginSuccess} from '../src/Redux/usersSlice'



jest.mock('../src/Pages/apiConfig.js', () => ({
    __esModule: true,

    default: {
        get: () => ({
            data: [{
                username: "Kwame",
                user_id: 1,
                todo: "Go to work on tuesday",
                todo_status: 0
            }]
        }),
        post: jest.fn()
    },
}));

describe("todo list page", ()=>{
    let store = configureStore({
        reducer: {
          users: usersSlice,
        }
      })
    
    it('checks that input field value changes', ()=>{
        store.dispatch(loginSuccess({
            username: "Kwame",
            user_id: 1
        }));

        render(
            <Provider store={store}>
                <TodoListPage />
            </Provider>)

        const inputSection = screen.getByTestId("inputsection");
        const testInput = "This is a new todo"

        fireEvent.change(inputSection, {target: {value: testInput}})

        expect(inputSection.value).toBe(testInput)
    })


    it('checks that the add button submits input', async ()=>{
        store.dispatch(loginSuccess({
            username: "Kwame",
            user_id: 1
        }));
        
        render(
            <Provider store={store}>
                <TodoListPage />
            </Provider>)

        const inputSection = screen.getByTestId("inputsection");
        const testInput = "This is a new todo"
        const addButton = screen.getByTestId("addButton")

        fireEvent.change(inputSection, {target: {value: testInput}})
        fireEvent.click(addButton)

       await waitFor(()=> expect(inputSection.value).toBe(""))
    })
        


    it('checks that the whole page renders correctly', async ()=>{
        store.dispatch(loginSuccess({
            username: "Kwame",
            user_id: 1
        }));

       render(
        <Provider store={store}>
            <TodoListPage />
        </Provider>) 

        const container = screen.getByTestId("maincontainer")
        const userActions = screen.getByTestId("useractions")
        const todoList = screen.getByTestId("todolist")
        const inputSection = screen.getByTestId("inputsection")
        

        const todotext = await screen.findByText("Go to work on tuesday")

        expect(container).toBeVisible()
        expect(userActions).toBeVisible()
        expect(todoList).toBeVisible()
        expect(inputSection).toBeVisible()
        expect(todotext).toBeInTheDocument()


    })
})