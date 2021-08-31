import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
    state = {};

    componentDidUpdate(prevProps, prevState) {}

    render() {
        return (
            <>
                <Container>
                    <h2>Hello!</h2>
                </Container>
            </>
        );
    }
}

export default App;
