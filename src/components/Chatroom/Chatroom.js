import { Col, Row } from 'antd';
// import ChatMedia from './ChatMedia/ChatMedia';
import ChatWindow from './ChatWindow/ChatWindow';
import 'antd/dist/antd.css';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';

const SideBarStyled = styled.div`
    &&& {
        .ant-row {
            height: 100vh;
        }
    }
`;

function Chatroom() {
    return (
        <SideBarStyled>
            <Row>
                <Col span={7}>
                    <SideBar />
                </Col>
                <Col span={17}>
                    <ChatWindow />
                </Col>
                {/* <Col span={5}>
                    <ChatMedia />
                </Col> */}
            </Row>
        </SideBarStyled>
    );
}

export default Chatroom;
