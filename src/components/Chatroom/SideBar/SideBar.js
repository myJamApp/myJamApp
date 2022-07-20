import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import { auth } from '~/firebase/firebase';
import UserInfo from './UserInfo';
import Channel from './Channel';

// import Options from './Options';
// import Messages from './Messages';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('sideBar__wrapper')}>
            <div className={cx('sideBar__container')}>
                <UserInfo />

                {/* <Options /> */}

                <Channel />

                {/* <Messages /> */}

                {/* Log Out */}
                <div onClick={() => auth.signOut()} className={cx('logOut', { btn: true })}>
                    Log Out
                </div>
            </div>
        </div>
    );
}

export default SideBar;
