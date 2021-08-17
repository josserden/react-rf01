import React from 'react';
import StatisticItem from '../StatisticItem';
import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className="Statistics">
            <StatisticItem label="Good" value={good} />
            <StatisticItem label="Neutral" value={neutral} />
            <StatisticItem label="Bad" value={bad} />
            <StatisticItem label="Total" value={total} />
            <StatisticItem
                label="Positive feedback"
                value={`${positivePercentage}%`}
            />
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
