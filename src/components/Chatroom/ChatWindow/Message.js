import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { Avatar } from 'antd';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Message({ text, displayName, createAt, photoURL }) {
    const messageRef = useRef();

    useEffect(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [text]);

    if (!text) {
        return;
    }

    return (
        <div className={cx('message')} ref={messageRef}>
            <div className={cx('avatar')}>
                <Avatar src={photoURL}>{photoURL ? '' : displayName.charAt(0).toUpperCase()}</Avatar>
            </div>
            <div className={cx('textMessage')}>
                <div className={cx('nameAndTime')}>
                    <h3>{displayName}</h3>
                    <span>{createAt}</span>
                </div>
                <div className={cx('text')}>{text.trim()}</div>
            </div>
        </div>
    );
}

export default Message;
