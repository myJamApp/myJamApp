import classNames from 'classnames/bind';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

import styles from './SideBar.module.scss';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';

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
    const { rooms, setIsAddChannelVisible, setSelectedRoomId } = useContext(AppContext);

    const handleAddChannel = () => {
        setIsAddChannelVisible(true);
    };

    return (
        <div className={cx('channel')}>
            <CollapseStyled ghost defaultActiveKey={['1']}>
                <PanelStyled header="CHANNEL" key="1">
                    <div className={cx('roomList')}>
                        {rooms.map((room, index) => {
                            return (
                                <div className={cx('room')} key={index}>
                                    <div className={cx('roomName')} onClick={() => setSelectedRoomId(room.id)}>
                                        {room.name}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Add Room */}
                        <div className={cx('addRoom')} onClick={handleAddChannel}>
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
