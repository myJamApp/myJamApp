import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import { auth } from '~/firebase/firebase';
import UserInfo from './UserInfo';
import Options from './Options';
import Channel from './Channel';
import Messages from './Messages';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('sideBar__wrapper')}>
            <div className={cx('sideBar__container')}>
                {/* User Info */}
                <UserInfo />

                {/* Options */}

                <Options />

                {/* Channel */}

                <Channel />

                {/* Messages */}

                <Messages />

                {/* Log Out */}
                <div onClick={() => auth.signOut()} className={cx('logOut', { btn: true })}>
                    Log Out
                </div>
            </div>
        </div>
    );
}

export default SideBar;
