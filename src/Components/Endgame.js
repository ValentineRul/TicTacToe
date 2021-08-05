import React from "react";

//!Модальное окно конца игры
class Endgame extends React.Component {
    state = {
        draw: "Its draw!!!!",
        playerWin: "U win " + this.props.winner + "!!",
    };
    handleClick = () => {
        this.props.endgame(false);
    };
    render() {
        const { winner } = this.props;
        const { draw, playerWin } = this.state;
        return (
            <div className="wrapper">
                <div className="screen">
                    <p> {winner === "Draw" ? draw : playerWin} </p>

                    <button className="btn-start" onClick={this.handleClick}>
                        Do u want play again?
                    </button>
                </div>
            </div>
        );
    }
}

export default Endgame;
