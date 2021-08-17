import React from 'react';
import PropTypes from 'prop-types';
import './StatisticItem.css';

const StatisticItem = ({ label, value }) => {
    return (
        <li className="Statistics__item">
            {label} : {value}
        </li>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default StatisticItem;
