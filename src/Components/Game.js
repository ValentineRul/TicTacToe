import React from "react";
import Board from "./Board";

class Game extends React.Component {
    state = {
        player1: true,
        player2: false,
        chack: true,
    };

    handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
        this.setState({
            [firstPlayer]: firstBoolean,
            [secondPlayer]: secondBoolean,
        });
    };

    render() {
        const { player1, player2 } = this.state;
        const { endgame } = this.props;
        return (
            <div className="game">
                <Board
                    turn={this.handleTurn}
                    player1={player1}
                    player2={player2}
                    handleScore={this.props.handleScore}
                    endgame={endgame}
                />
            </div>
        );
    }
}

export default Game;
