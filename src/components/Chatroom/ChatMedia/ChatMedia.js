import classNames from 'classnames/bind';
import styles from './ChatMedia.module.scss';

const cx = classNames.bind(styles);

function ChatMedia() {
    return (
        <div className={cx('chatMedia__wrapper')}>
            <div>Chat Media</div>
        </div>
    );
}

export default ChatMedia;
