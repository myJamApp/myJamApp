import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import ChatWindow from './ChatWindow/ChatWindow';
import SideBar from './SideBar/SideBar';
import useViewport from '~/hooks/useViewport';
import { AppContext } from '~/Context/AppProvider';
import { useContext } from 'react';

// import ChatMedia from './ChatMedia/ChatMedia';

const SideBarStyled = styled.div`
    &&& {
        .ant-row {
            height: 100vh;
        }
    }
`;

function Chatroom() {
    const { sideBarVisible } = useContext(AppContext);

    const viewPort = useViewport();
    const tabletAndMobile = viewPort.width <= 768;

    if (tabletAndMobile && sideBarVisible) {
        return (
            <SideBarStyled>
                <Row>
                    <Col span={24}>
                        <SideBar />
                    </Col>
                </Row>
            </SideBarStyled>
        );
    }

    if (tabletAndMobile && !sideBarVisible) {
        return (
            <SideBarStyled>
                <Row>
                    <Col span={24}>
                        <ChatWindow />
                    </Col>
                </Row>
            </SideBarStyled>
        );
    }

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
