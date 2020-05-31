import React from 'react';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
    console.log(response);
    console.log(response.toLocaleString());
}

export default function Login() {
    return (
        <InstagramLogin
            clientId="1347672618757609"
            scope="user_profile"
            redirectUri="https://master.d3jm5n2ehqc89v.amplifyapp.com"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
        >
            <span> Login with Instagram</span>
        </InstagramLogin>
    );
}