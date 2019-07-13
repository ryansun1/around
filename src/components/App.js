import React from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';
import { TOKEN_KEY } from '../constants';

import '../styles/App.css';

class App extends React.Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }
                            //the token is from backend, 用來記錄是否有登入，代替session
    handleLoginSucceed = (token) => {
        localStorage.setItem(TOKEN_KEY, token)         //local browser storage
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }

    render() {
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
                <Main handleLoginSucceed={this.handleLoginSucceed} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default App;
