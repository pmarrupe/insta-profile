import React from 'react';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
    console.log(response.toLocaleString().replace('#_',''));
}

export default function Login() {
    return (
        <InstagramLogin
            clientId="1347672618757609"
            scope="user_profile"
            redirectUri="https://github.com/pmarrupe/insta-profile"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
        >
            <span> Login with Instagram</span>
        </InstagramLogin>
    );
}