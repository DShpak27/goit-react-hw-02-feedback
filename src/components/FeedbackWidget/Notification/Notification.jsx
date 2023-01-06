import style from './Notification.module.scss';

const Notification = ({ message }) => (
    <p className={style.notification}>{message}</p>
);

export default Notification;
