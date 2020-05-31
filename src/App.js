import React from "react";
import "./App.css";
import {post} from "axios";
import Core from "./containers/Core/Core";
import Home from "./containers/Home/Home";

class App extends React.Component  {


    constructor(props) {
        super(props);
        this.state = {
            accessCode : '',
            accessToken: '',
            userId: ''
        };
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(token) {
        const queryString = require('query-string');
        this.setState({ accessCode:token });

        post('https://api.instagram.com/oauth/access_token', queryString.stringify({
            'client_id': '1347672618757609',
            'client_secret': '049d294b9d73fd0624777951c3adf3d2',
            'grant_type': 'authorization_code',
            'redirect_uri': 'https://master.d3jm5n2ehqc89v.amplifyapp.com/',
            'code': token
        }))
            .then(response => {
                const accessToken = response.data.access_token;
                const userId = response.data.user_id;
                console.log(accessToken + ' '+ userId);
                this.setState({accessToken, userId});
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const {accessToken, userId} = this.state;

        return (

            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top">
                    <h1>Profiler</h1>
                </nav>
                {
                    (this.state.accessToken === '')
                        ? <Home onLogin={this.onLogin}/>
                        : <Core passAccess={accessToken} user={userId}/>
                }
            </div>
        );
    }
}
export default App;

