import React from "react";

class Stat extends React.Component {
    render() {
        const { player1, player2, userName1, userName2 } = this.props;
        return (
            <div className="stat">
                <div className="title">
                    <h1>Score</h1>
                </div>
                <div className="score">
                    <h2>
                        {userName1}:{player1}
                    </h2>
                    <h2>
                        {userName2}:{player2}
                    </h2>
                </div>
            </div>
        );
    }
}

export default Stat;
