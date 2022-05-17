
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



const Spinnerpage = () => {
    return (
        <Container>
        <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
</Container>
    )
}

export default Spinnerpage
