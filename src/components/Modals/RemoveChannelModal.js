import { Button, Modal } from 'antd';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { AuthContext } from '~/Context/AuthProvider';
import { db } from '~/firebase/firebase';

function RemoveChannelModal() {
    const { removeChannelModalVisible, setRemoveChannelModalVisible, selectedRoomId, selectedRoom } =
        useContext(AppContext);

    const {
        user: { uid },
    } = useContext(AuthContext);

    const handleOk = () => {
        setRemoveChannelModalVisible(false);

        const roomRef = db.collection('room').doc(selectedRoomId);
        roomRef.update({
            members: [...selectedRoom?.members.filter((member) => member !== uid)],
        });
    };

    const handleCancel = () => {
        setRemoveChannelModalVisible(false);
    };

    return (
        <Modal
            title="Removing This Channel"
            visible={removeChannelModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="yes" type="primary" onClick={handleOk}>
                    Yes
                </Button>,
                <Button key="no" type="primary" onClick={handleCancel}>
                    No
                </Button>,
            ]}
        >
            Do you want to remove this channel?
        </Modal>
    );
}

export default RemoveChannelModal;
