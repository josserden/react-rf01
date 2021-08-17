import React, { Component } from 'react';
import { nameIdInput, numberIdInput } from '../../helpers/helpers';
import './ContactForm.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
        const inputChange = this.handleChange;

        return (
            <form
                className="Form"
                onSubmit={this.handleSubmit}
                autoComplete="off"
            >
                <label htmlFor={nameIdInput}>
                    <p className="Label-text">Name:</p>
                    <input
                        id={nameIdInput}
                        className="Form-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor={numberIdInput}>
                    <p className="Label-text">Number:</p>
                    <input
                        id={numberIdInput}
                        className="Form-input"
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        value={number}
                        onChange={inputChange}
                        required
                    />
                </label>
                <button className="Button" type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactForm;
