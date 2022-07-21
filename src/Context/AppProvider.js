import { createContext, useState } from 'react';
import useFireStore from '~/hooks/useFireStore';
import { AuthContext } from '~/Context/AuthProvider';
import { useContext, useMemo } from 'react';
import { auth, db } from '~/firebase/firebase';
import { generateKeywords } from '~/firebase/service';

export const AppContext = createContext();

function AppProvider({ children }) {
    const {
        user: { uid, displayName, photoURL },
    } = useContext(AuthContext);

    // Add channel modal
    const [isAddChannelVisible, setIsAddChannelVisible] = useState(false);

    // Invite friend modal
    const [isInviteFriendVisible, setIsInviteFriendVisible] = useState(false);

    // Remove channel modal
    const [removeChannelModalVisible, setRemoveChannelModalVisible] = useState(false);

    // Visibility for responsive
    const [sideBarVisible, setSideBarVisible] = useState(true);

    // Selected channel
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);

    const rooms = useFireStore('room', roomsCondition);

    const selectedRoom = useMemo(() => {
        return rooms.find((room) => room.id === selectedRoomId);
    }, [rooms, selectedRoomId]);

    const usersCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom?.members,
        };
    }, [selectedRoom?.members]);

    const members = useFireStore('users', usersCondition);

    // Edit user's profile
    const [isUserProfileVisible, setIsUserProfileVisible] = useState(false);
    const [newUserName, setNewUserName] = useState(displayName);
    const [newUserAvatar, setNewUserAvatar] = useState(photoURL);

    const userProfileCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: '==',
            compareValue: uid,
        };
    }, [uid]);

    const updateUsers = useFireStore('users', userProfileCondition);

    const [userDisplayName, setUserDisplayName] = useState(displayName);
    const [userAvatar, setUseruserAvatar] = useState(photoURL);

    const updateUserProfile = async (newUserName, newUserAvatar) => {
        const profileRef = db.collection('users').doc(updateUsers[0].id);
        await profileRef
            .update({
                displayName: newUserName,
                photoURL: newUserAvatar,
                keywords: generateKeywords(newUserName),
            })
            .then(() => {
                console.log('Document successfully updated!');
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error('Error updating document: ', error);
            });
    };

    const updateCurrentUserProfile = async (newUserName, newUserAvatar) => {
        await auth.currentUser.updateProfile({
            displayName: newUserName,
            photoURL: newUserAvatar || '',
        });
    };

    // Delete all rooms with no members

    db.collection('room')
        .where('members', '==', [])
        .get()
        .then((snapshot) => {
            return snapshot.docs.forEach((doc) => {
                db.collection('room').doc(doc.id).delete();
            });
        });

    return (
        <AppContext.Provider
            value={{
                rooms,
                isAddChannelVisible,
                setIsAddChannelVisible,
                selectedRoomId,
                setSelectedRoomId,
                selectedRoom,
                members,
                isInviteFriendVisible,
                setIsInviteFriendVisible,
                isUserProfileVisible,
                setIsUserProfileVisible,
                updateUsers,
                updateUserProfile,
                userDisplayName,
                setUserDisplayName,
                userAvatar,
                setUseruserAvatar,
                updateCurrentUserProfile,
                newUserName,
                setNewUserName,
                newUserAvatar,
                setNewUserAvatar,
                sideBarVisible,
                setSideBarVisible,
                removeChannelModalVisible,
                setRemoveChannelModalVisible,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
