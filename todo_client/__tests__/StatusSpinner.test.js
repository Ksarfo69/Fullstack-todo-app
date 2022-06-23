import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import StatusSpinner from '../src/Components/StatusSpinner'

describe('StatusSpinner', ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<StatusSpinner/>)
        const parent = screen.getByTestId("container");
        const child = screen.getByTestId("child");
        expect(parent).toBeInTheDocument();
        expect(child).toBeInTheDocument();
    })
})