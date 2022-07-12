import { Avatar, Button, Form, Modal, Select, Spin } from 'antd';
import { debounce } from 'lodash';
import { useContext, useMemo, useState } from 'react';
import { AppContext } from '~/Context/AppProvider';
import { db } from '~/firebase/firebase';

const DebounceSelect = ({ fetchOptions, debounceTimeOut = 300, curMembers, ...props }) => {
    const [fetching, setFetching] = useState(false);
    const [selectOption, setSelectOption] = useState([]);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            setSelectOption([]);
            setFetching(true);

            fetchOptions(value, curMembers).then((newOption) => {
                setSelectOption(newOption);
                setFetching(false);
            });
        };

        return debounce(loadOptions, debounceTimeOut);
    }, [fetchOptions, debounceTimeOut, curMembers]);

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {selectOption.map((opt) => (
                <Select.Option key={opt.value} value={opt.value} title={opt.label}>
                    <Avatar size="small" src={opt.photoURL}>
                        {opt.photoURL ? '' : opt.label.charAt(0).toUpperCase()}
                    </Avatar>
                    {`${opt.label}`}
                </Select.Option>
            ))}
        </Select>
    );
};

const fetchUserList = async (search, curMembers) => {
    return db
        .collection('users')
        .where('keywords', 'array-contains', search)
        .orderBy('displayName')
        .limit(20)
        .get()
        .then((snapshot) => {
            return snapshot.docs
                .map((doc) => ({
                    label: doc.data().displayName,
                    value: doc.data().uid,
                    photoURL: doc.data().photoURL,
                }))
                .filter((opt) => !curMembers.includes(opt.value));
        });
};

function InviteFriendModal() {
    const { isInviteFriendVisible, setIsInviteFriendVisible, selectedRoomId, selectedRoom } = useContext(AppContext);
    const [valueSearch, setValueSearch] = useState([]);

    const handleOk = () => {
        form.resetFields();
        setValueSearch([]);

        const roomRef = db.collection('room').doc(selectedRoomId);
        roomRef.update({
            members: [...selectedRoom.members, ...valueSearch.map((val) => val.value)],
        });
        setIsInviteFriendVisible(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsInviteFriendVisible(false);
    };

    const [form] = Form.useForm();

    console.log({ valueSearch });

    return (
        <Modal
            title="Invite friends to this room"
            visible={isInviteFriendVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="save" type="primary" onClick={handleOk}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <DebounceSelect
                    mode="multiple"
                    value={valueSearch}
                    placeholder="Type name"
                    fetchOptions={fetchUserList}
                    onChange={(newValue) => setValueSearch(newValue)}
                    style={{ width: '100%' }}
                    curMembers={selectedRoom?.members}
                />
            </Form>
        </Modal>
    );
}

export default InviteFriendModal;
