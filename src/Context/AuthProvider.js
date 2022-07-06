import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '~/firebase';

function AuthProvider() {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/', { replace: true });
            }
        });
    }, [navigate]);

    return <div></div>;
}

export default AuthProvider;
