import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { AuthContext } from '~/Context/AuthProvider';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    return (
        <div className={cx('userInfo')}>
            <div className={cx('userAvatar')}>
                <Avatar size="large" src={photoURL}>
                    {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
                </Avatar>
            </div>
            <div className={cx('userInfo__text')}>
                <h1>{displayName}</h1>
                <span>Active for chat</span>
            </div>
            <div className={cx('userOptions')}>
                <EllipsisOutlined />
            </div>
        </div>
    );
}

export default UserInfo;
