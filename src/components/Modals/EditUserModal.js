import { Button, Form, Input, Modal } from 'antd';
import { useContext } from 'react';
import { AppContext } from '~/Context/AppProvider';

function EditUserModal() {
    const {
        isUserProfileVisible,
        setIsUserProfileVisible,
        updateUserProfile,
        updateCurrentUserProfile,
        setUserDisplayName,
        setUseruserAvatar,
        newUserName,
        setNewUserName,
        newUserAvatar,
        setNewUserAvatar,
    } = useContext(AppContext);

    const handleChangeName = (e) => {
        setNewUserName(e.target.value);
    };

    const handleChangeAvatar = (e) => {
        setNewUserAvatar(e.target.value);
    };

    const handleOk = async () => {
        setIsUserProfileVisible(false);

        await updateUserProfile(newUserName, newUserAvatar);
        updateCurrentUserProfile(newUserName, newUserAvatar);
        setUserDisplayName(newUserName);
        setUseruserAvatar(newUserAvatar);

        setTimeout(() => {
            window.location.reload();
        });

        form.resetFields();
    };

    const handleCancel = () => {
        setIsUserProfileVisible(false);
        form.resetFields();
    };

    const [form] = Form.useForm();

    return (
        <Modal
            title="Update your profile"
            visible={isUserProfileVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="update" type="primary" onClick={handleOk}>
                    Update
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Display Name">
                    <Input value={newUserName} onChange={handleChangeName} />
                </Form.Item>
                <Form.Item label="Avatar">
                    <Input.TextArea value={newUserAvatar} autoSize onChange={handleChangeAvatar} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default EditUserModal;
