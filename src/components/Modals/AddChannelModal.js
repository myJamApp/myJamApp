import { Button, Form, Input, Modal } from 'antd';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { AuthContext } from '~/Context/AuthProvider';
import { addDocument } from '~/firebase/service';

function AddChannelModal() {
    const { isAddChannelVisible, setIsAddChannelVisible } = useContext(AppContext);
    const {
        user: { uid },
    } = useContext(AuthContext);

    const handleOk = () => {
        addDocument('room', { ...form.getFieldValue(), members: [uid] });

        setIsAddChannelVisible(false);
        form.resetFields();
    };

    const handleCancel = () => {
        setIsAddChannelVisible(false);
        form.resetFields();
    };

    const [form] = Form.useForm();

    return (
        <Modal
            title="Create a new channel"
            visible={isAddChannelVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="save" type="primary" onClick={handleOk}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input placeholder="Set name for your channel" />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input.TextArea placeholder="Write something about your channel" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddChannelModal;
