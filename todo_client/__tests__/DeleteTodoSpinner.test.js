import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import DeleteSpinner from '../src/Components/DeleteSpinner'

describe('DeleteSpinner', ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<DeleteSpinner/>)
        const parent = screen.getByTestId("container");
        const child = screen.getByTestId("child");
        expect(parent).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    })
})