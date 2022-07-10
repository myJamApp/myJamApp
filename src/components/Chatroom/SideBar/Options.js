import classNames from 'classnames/bind';
import { ClockCircleOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function Options() {
    return (
        <div className={cx('options')}>
            {/* All Updates */}
            <div className={cx('allUpdate')}>
                <div className={cx('icon')}>
                    <ClockCircleOutlined />
                </div>
                <div className={cx('text')}>All Updates</div>
                <div className={cx('numberUpdates')}>
                    <span className={cx('number')}>243</span>
                </div>
            </div>

            {/* Members */}
            <div className={cx('members')}>
                <div className={cx('icon')}>
                    <UserOutlined />
                </div>
                <div className={cx('text')}>Members</div>
                <div className={cx('numberUpdates')}></div>
            </div>

            {/* Settings */}
            <div className={cx('settings')}>
                <div className={cx('icon')}>
                    <SettingOutlined />
                </div>
                <div className={cx('text')}>Settings</div>
                <div className={cx('numberUpdates')}></div>
            </div>
        </div>
    );
}

export default Options;
