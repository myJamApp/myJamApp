import { createContext, useState } from 'react';
import useFireStore from '~/hooks/useFireStore';
import { AuthContext } from '~/Context/AuthProvider';
import { useContext, useMemo } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [isAddChannelVisible, setIsAddChannelVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const [isInviteFriendVisible, setIsInviteFriendVisible] = useState(false);

    const {
        user: { uid },
    } = useContext(AuthContext);

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
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
