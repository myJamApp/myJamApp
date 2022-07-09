import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { Avatar } from 'antd';

const cx = classNames.bind(styles);

function Message({ text, displayName, createAt, photoURL }) {
    return (
        <div className={cx('message')}>
            <div className={cx('avatar')}>
                <Avatar src={photoURL} />
            </div>
            <div className={cx('textMessage')}>
                <div className={cx('nameAndTime')}>
                    <h3>{displayName}</h3>
                    <span>{createAt}</span>
                </div>
                <div className={cx('text')}>{text}</div>
            </div>
        </div>
    );
}

export default Message;
