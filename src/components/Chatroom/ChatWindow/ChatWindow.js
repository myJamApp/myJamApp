import { Avatar, Tooltip, Alert } from 'antd';
import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';
import { UserAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Message from './Message';
import { AppContext } from '~/Context/AppProvider';
import { useContext, useMemo, useState } from 'react';
import { addDocument } from '~/firebase/service';
import { AuthContext } from '~/Context/AuthProvider';
import useFireStore from '~/hooks/useFireStore';
import { formatRelative } from 'date-fns';
import useViewport from '~/hooks/useViewport';

const cx = classNames.bind(styles);

function ChatWindow() {
    const { selectedRoom, members, setIsInviteFriendVisible, setSideBarVisible } = useContext(AppContext);
    const {
        user: { uid, photoURL, displayName },
    } = useContext(AuthContext);

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            photoURL: photoURL,
            displayName: displayName,
            uid: uid,
            roomId: selectedRoom?.id,
        });

        setInputValue('');
    };

    const messagesCondition = useMemo(
        () => ({
            fieldName: 'roomId',
            operator: '==',
            compareValue: selectedRoom?.id,
        }),
        [selectedRoom?.id],
    );

    const messages = useFireStore('messages', messagesCondition);

    const formatDate = (seconds) => {
        let formattedDate = '';

        if (seconds) {
            formattedDate = formatRelative(new Date(seconds * 1000), new Date());
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }

        return formattedDate;
    };

    const viewPort = useViewport();

    // Tablet and mobile part
    if (viewPort.width <= 768) {
        return (
            <div className={cx('chatWindow__wrapper')}>
                {selectedRoom?.id ? (
                    <div className={cx('chatWindow__container')}>
                        {/* Chatroom Header */}
                        <div className={cx('chatroomHeader')}>
                            <div
                                className={cx('backBtn')}
                                onClick={() => {
                                    setSideBarVisible(true);
                                }}
                            >
                                <ArrowLeftOutlined />
                            </div>
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
                            {messages.map((message) => (
                                <Message
                                    key={message.id}
                                    text={message.text}
                                    displayName={message.displayName}
                                    photoURL={message.photoURL}
                                    createAt={formatDate(message.createAt?.seconds)}
                                />
                            ))}
                        </div>

                        {/* Text Input */}
                        <div className={cx('textInput')}>
                            <div className={cx('typeBar')}>
                                <input
                                    type="text"
                                    placeholder="Type something ...."
                                    onChange={handleOnChange}
                                    value={inputValue}
                                />
                            </div>

                            <div className={cx('sendBtn')}>
                                <div className={cx('send', { btn: true })} onClick={handleSubmit}>
                                    Send
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Needs to be updated
                    <Alert
                        message="CHOOSE OR ADD A NEW CHANNEL TO CHAT"
                        type="info"
                        showIcon
                        style={{ width: '100%' }}
                        closable
                    />
                )}
            </div>
        );
    }

    // Desktop Part
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
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                text={message.text}
                                displayName={message.displayName}
                                photoURL={message.photoURL}
                                createAt={formatDate(message.createAt?.seconds)}
                            />
                        ))}
                    </div>

                    {/* Text Input */}
                    <div className={cx('textInput')}>
                        <div className={cx('typeBar')}>
                            <input
                                type="text"
                                placeholder="Type something ...."
                                onChange={handleOnChange}
                                value={inputValue}
                            />
                        </div>

                        <div className={cx('sendBtn')}>
                            <div className={cx('send', { btn: true })} onClick={handleSubmit}>
                                Send
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Needs to be updated
                <Alert
                    message="CHOOSE OR ADD A NEW CHANNEL TO CHAT"
                    type="info"
                    showIcon
                    style={{ width: '100%' }}
                    closable
                />
            )}
        </div>
    );
}

export default ChatWindow;
