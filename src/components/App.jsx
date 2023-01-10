import { Component } from 'react';
import style from './App.module.scss';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification';

const optionNames = ['Good', 'Neutral', 'Bad'];

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    addStatistics = name => {
        this.setState(prevState => {
            return {
                [name.toLowerCase()]: prevState[name.toLowerCase()] + 1,
            };
        });
    };

    countTotalFeedbacks = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countGoodFeedbacksShare = () => {
        const { good, neutral, bad } = this.state;
        let positiveFeedbacksShare = (good / (good + neutral + bad)) * 100;
        if (!positiveFeedbacksShare) {
            return 0 + '%';
        }
        return positiveFeedbacksShare.toFixed(0) + '%';
    };

    render() {
        return (
            <div className={style.FeedbackWidget__wrapper}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={optionNames}
                        onLeaveFeedback={this.addStatistics}
                    ></FeedbackOptions>
                </Section>

                <hr />

                {this.countTotalFeedbacks() !== 0 ? (
                    <Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedbacks()}
                            positivePercentage={this.countGoodFeedbacksShare()}
                        ></Statistics>
                    </Section>
                ) : (
                    <Notification message="There is no feedback"></Notification>
                )}
            </div>
        );
    }
}

export default App;
