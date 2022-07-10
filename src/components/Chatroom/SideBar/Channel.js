import classNames from 'classnames/bind';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { MessageTwoTone, HighlightTwoTone, CustomerServiceTwoTone, PlusOutlined } from '@ant-design/icons';
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

function Channel() {
    return (
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
                            <span>Add Channel</span>
                        </div>
                    </div>
                </PanelStyled>
            </CollapseStyled>
        </div>
    );
}

export default Channel;
