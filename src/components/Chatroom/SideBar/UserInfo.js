import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { AuthContext } from '~/Context/AuthProvider';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = useContext(AuthContext);

    const { setIsUserProfileVisible, setNewUserName, setNewUserAvatar } = useContext(AppContext);

    const [userEditVisible, setUserEditVisible] = useState(false);

    const handleUserEdit = () => {
        setUserEditVisible(!userEditVisible);
    };

    const handleEditProfile = () => {
        setNewUserName(displayName);
        setNewUserAvatar(photoURL);

        setUserEditVisible(!userEditVisible);

        setIsUserProfileVisible(true);
    };

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
            <Popover
                content={<div onClick={handleEditProfile}>Edit Your Profile</div>}
                trigger="click"
                visible={userEditVisible}
                onVisibleChange={handleUserEdit}
            >
                <div className={cx('userOptions')}>
                    <EllipsisOutlined />
                </div>
            </Popover>
        </div>
    );
}

export default UserInfo;
