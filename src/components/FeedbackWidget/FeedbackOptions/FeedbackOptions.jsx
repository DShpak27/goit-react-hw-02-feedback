import style from './FeedbackOptions.module.scss';
import clsx from 'clsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={style.FeedbackOptions}>
            {options.map(name => {
                return (
                    <button
                        key={name}
                        type="button"
                        className={clsx(
                            style[`FeedbackOptions__btn`],
                            style[`FeedbackOptions__btn--${name}`]
                        )}
                        onClick={() => {
                            onLeaveFeedback(name);
                        }}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
};

export default FeedbackOptions;
