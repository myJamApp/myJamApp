import { Avatar, Tooltip, Alert } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';
import { AppContext } from '~/Context/AppProvider';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function ChatWindow() {
    const { selectedRoom, members, setIsInviteFriendVisible } = useContext(AppContext);

    return (
        <div className={cx('chatWindow__wrapper')}>
            {selectedRoom?.id ? (
                <div className={cx('chatWindow__container')}>
                    {/* Chatroom Header */}
                    <div className={cx('chatroomHeader')}>
                        <div className={cx('chatroomName')}>{selectedRoom?.name}</div>
                        <div className={cx('roomMembers')}>
                            <Avatar.Group size="small" maxCount="3">
                                {members.map((member) => {
                                    return (
                                        <Tooltip key={member.id} title={member.displayName}>
                                            <Avatar src={member.photoURL}>
                                                {member.photoURL ? '' : member.displayName.charAt(0).toUpperCase()}
                                            </Avatar>
                                        </Tooltip>
                                    );
                                })}
                            </Avatar.Group>
                            <div
                                className={cx('inviteFriend', { btn: true })}
                                onClick={() => setIsInviteFriendVisible(true)}
                            >
                                <UserAddOutlined />
                                <span>Invite</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Container */}
                    <div className={cx('textContainer')}>
                        <Message
                            text="Hey!!"
                            displayName="Kevin"
                            photoURL="https://wallpapercave.com/wp/wp10538768.jpg"
                            createAt="09:23 AM"
                        />

                        <Message
                            text="Hello"
                            displayName="Foden"
                            photoURL="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4f78cf6a94c0f10d/62250b61ecb10f75e2f3c6ce/Phil_Foden_Manchester_City_2021-22.jpg"
                            createAt="09:25 AM"
                        />

                        <Message
                            text="Hi everyone. I'm new here"
                            displayName="Haaland"
                            photoURL="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/6/13/1056092/Haaland-Man-City.jpg"
                            createAt="09:33 AM"
                        />

                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />

                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                        <Message
                            text="Welcome !!"
                            displayName="Rodri"
                            photoURL="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg"
                            createAt="09:40 AM"
                        />
                    </div>

                    {/* Text Input */}
                    <div className={cx('textInput')}>
                        <div className={cx('typeBar')}>
                            <input type="text" placeholder="Type something ...." />
                        </div>

                        <div className={cx('sendBtn')}>
                            <div className={cx('send', { btn: true })}>Send</div>
                        </div>
                    </div>
                </div>
            ) : (
                // Needs to be updated
                <Alert message="Hãy chọn phòng" type="info" showIcon style={{ margin: 5, width: '100%' }} closable />
            )}
        </div>
    );
}

export default ChatWindow;
