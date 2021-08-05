import React from "react";

class Login extends React.Component {
    state = {
        player1: "",
        player2: "",
    };
    handleChange = (event) => {
        console.log(event.target.value);

        let player = event.target.id;
        this.setState({ [player]: event.target.value });
    };

    handleClick = (event) => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        this.props.names(player1, player2);
    };

    //! Создание модального окна и вписывание имен игроков
    render() {
        return (
            <div className="wrapper">
                <div className="screen">
                    <form>
                        <div className="intro">
                            Welcome to Tic-Tac-Toe Game! Enter your names
                        </div>
                        <div className="form-group">
                            <label>Player</label>
                            <input
                                type="name"
                                id="player1"
                                className="form-control"
                                onChange={this.handleChange}
                            />

                            <label>Player2</label>
                            <input
                                type="name"
                                id="player2"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </div>

                        <button
                            onClick={this.handleClick}
                            className="btn-start"
                        >
                            Let's start game
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
