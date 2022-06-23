import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Spinnerpage from '../src/Components/DisplayTodoSpinner'

describe('Spinnerpage', ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Spinnerpage/>)
        const parent = screen.getByTestId("container");
        const child = screen.getByTestId("child");
        expect(parent).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    })
})