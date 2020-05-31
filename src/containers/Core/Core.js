import React from "react";

class Core extends React.Component {

    constructor() {
        super();

        this.state = {
            accessToken: '',
            userId: ''
        };
    }

    componentWillMount() {
        const {passAccess, user} = this.props;
        this.setState({accessToken: passAccess, userId: user});
        console.log(passAccess);
        console.log(user);
    }

    render() {
        return <div>
            <h1>WELCOME</h1>
            <h1>{this.state.accessToken}</h1>
            <h2>{this.state.userId}</h2>
            {/*<header className="app-header">*/}

            {/*</header>*/}
            {/*<Title />*/}
            {/*<div className="app-card-list" id="app-card-list">*/}
                {/*{*/}
                    {/*Object*/}
                        {/*.keys(this.state.posts)*/}
                        {/*.map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)*/}
                {/*}*/}
            {/*</div>*/}
        </div>
    }

}

export default Core;