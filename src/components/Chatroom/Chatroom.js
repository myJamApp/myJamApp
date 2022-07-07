import classNames from 'classnames/bind';
import styles from './Chatroom.module.scss';

const cx = classNames.bind(styles);

function Chatroom() {
    return (
        <div className={cx('chatroomWrapper')}>
            <div>This is chat room</div>
        </div>
    );
}

export default Chatroom;
