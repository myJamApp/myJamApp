import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '~/firebase';
import { Span } from 'antd';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;

                setUser({ displayName, email, uid, photoURL });

                setIsLoading(false);
                navigate('/', { replace: true });
            }

            setIsLoading(false);
            navigate('/login');
        });

        return () => {
            unsubcribe();
        };
    }, [navigate]);

    return <AuthContext.Provider value={{ user }}>{isLoading ? <Span /> : children}</AuthContext.Provider>;
}

export default AuthProvider;
