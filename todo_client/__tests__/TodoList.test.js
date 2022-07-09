import React from 'react';
import { render, screen } from '@testing-library/react';
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
        })
    },
}));

describe("todo list page", ()=>{
    let store = configureStore({
        reducer: {
          users: usersSlice,
        }
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