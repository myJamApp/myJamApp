import classNames from 'classnames/bind';
import { Collapse, Popover, Avatar } from 'antd';
import styled from 'styled-components';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';

import styles from './SideBar.module.scss';
import { useContext, useState } from 'react';
import { AppContext } from '~/Context/AppProvider';
import useViewport from '~/hooks/useViewport';

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
    const { rooms, setIsAddChannelVisible, setSelectedRoomId, setSideBarVisible, setRemoveChannelModalVisible } =
        useContext(AppContext);

    const viewPort = useViewport();

    const [removeChannelVisible, setRemoveChannelVisible] = useState(false);

    // console.log(selectedRoomId);

    // Add channel
    const handleAddChannel = () => {
        setIsAddChannelVisible(true);
    };

    // Remove Channel
    const handleRemoveChannel = () => {
        setRemoveChannelVisible(!removeChannelVisible);
    };

    const handleOpenRemoveChannelModal = (roomId) => {
        setSelectedRoomId(roomId);
        setRemoveChannelModalVisible(true);
    };

    // Tablet and mobile part
    if (viewPort.width <= 768) {
        return (
            <div className={cx('channel')}>
                <CollapseStyled ghost defaultActiveKey={['1']}>
                    <PanelStyled header="CHANNEL" key="1">
                        <div className={cx('roomList')}>
                            {rooms.map((room) => {
                                return (
                                    <div className={cx('room')} key={room.id}>
                                        <Avatar shape="square" src={room.avatar}>
                                            {room.avatar ? '' : room.name.charAt(0).toUpperCase()}
                                        </Avatar>

                                        <div
                                            className={cx('roomName')}
                                            onClick={() => {
                                                setSelectedRoomId(room.id);

                                                setSideBarVisible(false);
                                            }}
                                        >
                                            {room.name}
                                        </div>

                                        <Popover
                                            key={room.id}
                                            content={
                                                <div onClick={() => handleOpenRemoveChannelModal(room.id)}>
                                                    Remove this channel
                                                </div>
                                            }
                                            trigger="click"
                                            zIndex="0"
                                            onVisibleChange={handleRemoveChannel}
                                        >
                                            <div className={cx('removeChannelOption')}>
                                                <EllipsisOutlined />
                                            </div>
                                        </Popover>
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

    // Desktop part
    return (
        <div className={cx('channel')}>
            <CollapseStyled ghost defaultActiveKey={['1']}>
                <PanelStyled header="CHANNEL" key="1">
                    <div className={cx('roomList')}>
                        {rooms.map((room) => {
                            return (
                                <div className={cx('room')} key={room.id}>
                                    <Avatar shape="square" src={room.avatar}>
                                        {room.avatar ? '' : room.name.charAt(0).toUpperCase()}
                                    </Avatar>

                                    <div className={cx('roomName')} onClick={() => setSelectedRoomId(room.id)}>
                                        {room.name}
                                    </div>

                                    <Popover
                                        key={room.id}
                                        content={
                                            <div onClick={() => handleOpenRemoveChannelModal(room.id)}>
                                                Remove this channel
                                            </div>
                                        }
                                        trigger="click"
                                        zIndex="0"
                                        onVisibleChange={handleRemoveChannel}
                                    >
                                        <div className={cx('removeChannelOption')}>
                                            <EllipsisOutlined />
                                        </div>
                                    </Popover>
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
