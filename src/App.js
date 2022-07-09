import React from 'react';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatroom from '~/components/Chatroom';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Chatroom />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
