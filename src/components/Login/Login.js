import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { GoogleIcon, FacebookIcon } from '~/components/Icons/Icons';
import firebase, { auth } from '~/firebase';

const cx = classNames.bind(styles);

function Login() {
    const handleSignInGoogle = async () => {
        const dataGoogle = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        console.log({ dataGoogle });
    };

    const handleSignInFacebook = async () => {
        const dataFacebook = await auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        console.log({ dataFacebook });
    };

    return (
        <div className={cx('login__wrapper')}>
            <div className={cx('login__content')}>
                <div className={cx('login__logo', { logo: 'logo' })}>Litchat</div>

                <div className={cx('login__section')}>
                    <div className={cx('loginHeader')}>
                        <h1>Sign In</h1>
                        <span>Welcome to Litchat!</span>
                    </div>

                    <div className={cx('loginButtons')}>
                        <div className={cx('googleLogin', { btn: 'btn' })} onClick={handleSignInGoogle}>
                            <GoogleIcon />
                            <span>Sign in with Google</span>
                        </div>

                        <span>OR</span>

                        <div className={cx('facebookLogin', { btn: 'btn' })} onClick={handleSignInFacebook}>
                            <FacebookIcon />
                            <span>Sign in with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
