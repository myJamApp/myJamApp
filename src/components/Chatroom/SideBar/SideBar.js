import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Avatar, Collapse } from 'antd';
import styled from 'styled-components';
import { auth } from '~/firebase';
import {
    EllipsisOutlined,
    ClockCircleOutlined,
    UserOutlined,
    SettingOutlined,
    MessageTwoTone,
    HighlightTwoTone,
    CustomerServiceTwoTone,
    PlusOutlined,
} from '@ant-design/icons';

const cx = classNames.bind(styles);
const { Panel } = Collapse;

// Style

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header {
            color: white;
        }
    }
`;

const CollapseStyled = styled(Collapse)`
    &&& {
        .ant-collapse-content-box {
            padding: 0;
        }
    }
`;

// Style

function SideBar() {
    return (
        <div className={cx('sideBar__wrapper')}>
            <div className={cx('sideBar__container')}>
                {/* User Info */}
                <div className={cx('userInfo')}>
                    <div className={cx('userAvatar')}>
                        <Avatar size="large" src="https://wallpapercave.com/wp/wp10538768.jpg" />
                    </div>
                    <div className={cx('userInfo__text')}>
                        <h1>Kevin</h1>
                        <span>Active for chat</span>
                    </div>
                    <div className={cx('userOptions')}>
                        <EllipsisOutlined />
                    </div>
                </div>
                {/* User Info */}

                {/* Options */}
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
                {/* Options */}

                {/* Channel */}
                <div className={cx('channel')}>
                    <CollapseStyled ghost defaultActiveKey={['1']}>
                        <PanelStyled header="CHANNEL" key="1">
                            <div className={cx('roomList')}>
                                {/* General Chat */}
                                <div className={cx('generalChat')}>
                                    <div className={cx('roomIcon')}>
                                        <MessageTwoTone />
                                    </div>
                                    <div className={cx('roomName')}>General Chat</div>
                                    <div className={cx('numberMessage')}>12</div>
                                </div>

                                {/* Design Support */}
                                <div className={cx('designSupport')}>
                                    <div className={cx('roomIcon')}>
                                        <HighlightTwoTone />
                                    </div>
                                    <div className={cx('roomName')}>Design Support</div>
                                    <div className={cx('numberMessage')}>23</div>
                                </div>

                                {/* Product Team */}
                                <div className={cx('productTeam')}>
                                    <div className={cx('roomIcon')}>
                                        <CustomerServiceTwoTone />
                                    </div>
                                    <div className={cx('roomName')}>Product Team</div>
                                    <div className={cx('numberMessage')}>2</div>
                                </div>

                                {/* Add Room */}
                                <div className={cx('addRoom')}>
                                    <div className={cx('iconAdd')}>
                                        <PlusOutlined />
                                    </div>
                                    <span>Add</span>
                                </div>
                            </div>
                        </PanelStyled>
                    </CollapseStyled>
                </div>
                {/* Channel */}

                {/* Messages */}
                <div className={cx('messages')}>
                    <CollapseStyled ghost defaultActiveKey={['2']}>
                        <PanelStyled header="MESSAGES" key="2">
                            {/* Friend 1 */}
                            <div className={cx('friend1')}>
                                <div className={cx('friendAvatar')}>
                                    <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f78cf6a94c0f10d/62250b61ecb10f75e2f3c6ce/Phil_Foden_Manchester_City_2021-22.jpg" />
                                </div>
                                <div className={cx('friendName')}>Foden</div>
                                <div className={cx('space')}></div>
                            </div>

                            {/* Friend 2 */}
                            <div className={cx('friend2')}>
                                <div className={cx('friendAvatar')}>
                                    <Avatar src="https://baobariavungtau.com.vn/dataimages/202112/original/images1689900_10M_2.jpg" />
                                </div>
                                <div className={cx('friendName')}>Silva</div>
                                <div className={cx('space')}></div>
                            </div>

                            {/* Add Icon */}
                            <div className={cx('addFriend')}>
                                <div className={cx('iconAdd')}>
                                    <PlusOutlined />
                                </div>
                                <span>Add Friend</span>
                                <div className={cx('space')}></div>
                            </div>
                        </PanelStyled>
                    </CollapseStyled>
                </div>
                {/* Message */}

                {/* Log Out */}
                <div onClick={() => auth.signOut()} className={cx('logOut', { btn: true })}>
                    Log Out
                </div>
            </div>
        </div>
    );
}

export default SideBar;
