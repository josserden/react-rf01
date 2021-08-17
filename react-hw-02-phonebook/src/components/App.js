import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import Container from './Container/Container';
import Heading from './Heading';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = (name, number) => {
        const normalizedName = name.toLowerCase();

        const checkedForName = this.state.contacts.find(
            contact => normalizedName === contact.name.toLowerCase(),
        );

        if (checkedForName) {
            return toast.error(`${name} is already in contacts`);
        }

        const newContact = {
            id: shortid.generate(),

            name,
            number,
        };

        if (!name || !number) {
            toast.error('Invalid name or number value !');
            return;
        }

        this.setState(({ contacts }) => ({
            contacts: [...contacts, newContact],
        }));
    };

    formSubmitHandler = ({ name, number }) => {
        this.addContact(name, number);
    };

    handleFilterChange = filter => {
        this.setState({ filter });
    };

    showContact = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    };

    removeContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(({ id }) => id !== contactId),
        }));
    };

    render() {
        const { contacts, filter } = this.state;

        return (
            <Container>
                <Heading text="Phonebook" />
                <ContactForm onSubmit={this.formSubmitHandler} />
                <ToastContainer />
                <Heading text="Contacts" />
                {contacts.length >= 2 && (
                    <Filter
                        value={filter}
                        onFilterChange={this.handleFilterChange}
                    />
                )}
                {}
                <ContactList
                    contacts={this.showContact()}
                    onDeleteContact={this.removeContact}
                />
            </Container>
        );
    }
}

export default App;
