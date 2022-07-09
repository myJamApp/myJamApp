import { Avatar, Tooltip } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';

const cx = classNames.bind(styles);

function ChatWindow() {
    return (
        <div className={cx('chatWindow__wrapper')}>
            <div className={cx('chatWindow__container')}>
                {/* Chatroom Header */}
                <div className={cx('chatroomHeader')}>
                    <div className={cx('chatroomName')}>General Chat</div>
                    <div className={cx('roomMembers')}>
                        <Avatar.Group size="small" maxCount="3">
                            <Tooltip>
                                <Avatar src="https://cdn.bongdaplus.vn/Assets/Media/2022/04/29/25/Grealish.jpg" />
                            </Tooltip>
                            <Tooltip>
                                <Avatar src="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/6/13/1056092/Haaland-Man-City.jpg" />
                            </Tooltip>
                            <Tooltip>
                                <Avatar src="https://vcdn-ngoisao.vnecdn.net/2021/11/02/rodrigo3-6894-1635830293.jpg" />
                            </Tooltip>
                            <Tooltip>
                                <Avatar src="https://cdnimg.vietnamplus.vn/t620/uploaded/bojoka/2020_03_09/ederson.jpg" />
                            </Tooltip>
                            <Tooltip>
                                <Avatar src="https://media1.nguoiduatin.vn/thumb_x1280x857/media/tran-dang-nguyen/2022/01/01/mahrez1.jpg" />
                            </Tooltip>
                        </Avatar.Group>
                        <div className={cx('inviteFriend', { btn: true })}>
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
        </div>
    );
}

export default ChatWindow;
