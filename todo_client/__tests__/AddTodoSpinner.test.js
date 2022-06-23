import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import TodoSpinner from '../src/Components/AddTodoSpinner'

describe('TodoSpinner', ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<TodoSpinner/>)
        const parent = screen.getByTestId("container");
        const child = screen.getByTestId("child");
        expect(parent).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    })
})