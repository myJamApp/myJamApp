import React from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatroom from '~/components/Chatroom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddChannelModal from './components/Modals/AddChannelModal';
import InviteFriendModal from './components/Modals/InviteFriendModal';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <AppProvider>
                        <Routes>
                            <Route path="/" element={<Chatroom />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                        <AddChannelModal />
                        <InviteFriendModal />
                    </AppProvider>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
