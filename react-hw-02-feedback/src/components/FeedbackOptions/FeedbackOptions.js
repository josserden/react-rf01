import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(type => (
                <div className="Button-box">
                    <button
                        key={type.toString()}
                        type="button"
                        className="Button"
                        onClick={() => onLeaveFeedback(type)}
                    >
                        {type}
                    </button>
                </div>
            ))}
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
