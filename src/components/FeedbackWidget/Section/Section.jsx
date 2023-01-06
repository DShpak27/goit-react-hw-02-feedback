import style from './Section.module.scss';

const Section = ({ title, children }) => {
    return (
        <section>
            <p className={style.Section__title}>{title}</p>
            {children}
        </section>
    );
};

export default Section;
