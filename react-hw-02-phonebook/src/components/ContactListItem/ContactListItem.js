import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ name, number, onDelete }) => {
    return (
        <li className="ContactListItem">
            <p className="ContactListItem-text">
                {name}:<span>{number}</span>
            </p>

            <button className="Button" type="submit" onClick={onDelete}>
                Delete
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
