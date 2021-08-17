import React, { Component } from 'react';
import Container from './Container';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = (value, total) => {
        let percentage = (value * 100) / total;

        if (isNaN(percentage)) {
            percentage = 0;
        }

        return Math.round(percentage);
    };

    handleBtnClick = type => {
        this.setState(prevState => {
            return { [type]: prevState[type] + 1 };
        });
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage;

        return (
            <Container>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleBtnClick}
                    />
                </Section>
                <Section title={'Statistics'}>
                    {total !== 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positiveFeedbackPercentage(
                                good,
                                total,
                            )}
                        />
                    ) : (
                        <Notification message={'No feedback given'} />
                    )}
                </Section>
            </Container>
        );
    }

  switch (key) {
    case value:

      break;

    default:
      break;
  }
}

export default App;
