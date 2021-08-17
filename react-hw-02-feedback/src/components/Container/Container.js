import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children }) => {
    return <div className="Container">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
