import React from 'react';
import InstagramLogin from 'react-instagram-login';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(token) {
        const {onLogin} = this.props;
        onLogin(token);
    }

    onFailure(response) {
        console.log(response);
    }


    render() {
        return (
            <InstagramLogin
                clientId="1347672618757609"
                scope="user_profile"
                redirectUri="https://master.d3jm5n2ehqc89v.amplifyapp.com/"
                onSuccess={this.onClick}
                onFailure={this.onFailure}
            >
                <span> Login with Instagram</span>
            </InstagramLogin>
        );
    }
}

export default Login;