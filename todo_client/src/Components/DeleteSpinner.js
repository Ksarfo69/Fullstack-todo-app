
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components'


const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
height: 5px;
`



const DeleteSpinner = () => {
    return (
        <Container data-testid="container">
        <Spinner data-testid="child" animation="border" role="status" size="sm">
  <span className="visually-hidden">Loading...</span>
</Spinner>
</Container>
    )
}

export default DeleteSpinner
