import classNames from 'classnames/bind';
import { Avatar, Collapse } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

import styles from './SideBar.module.scss';

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

function Messages() {
    return (
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
    );
}

export default Messages;
