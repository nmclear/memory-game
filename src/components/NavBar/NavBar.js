import React from "react";
import "./NavBar.css";
import Score from "../Score";
import Status from "../Status"

// const NavBar = () => (

//     <nav className="nav navbar navbar-light bg-light">
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-4">
//                     <h2 className="navbar-brand mb-0 h1">Memory Game</h2>
//                 </div>
//                 <div className="col-sm-4">
//                     <Status />
//                 </div>
//                 <div className="col-sm-4">
//                     <Score />
//                 </div>
//             </div>
//         </div>
//     </nav>
// );

// class NavBar extends React.Component {
//     state = {
//         guess: true,
//         status: 'Click on an image to get started!',
//         currentScore: 0,
//         highScore: 0
//     }

    // handleStatusUpdate = () => {
    //     if(this.state.guess){
    //         this.setState({status: 'Correct Guess!'})
    //     } else {
    //         this.setState({status: 'Wrong Guess. Play Again.'})
    //     }
    // }

//     handleCurrentScore = () => {
//         this.setState({ currentScore: this.state.currentScore + 1 });
//         console.log(this.state.currentScore);
//     }

//     handleHighScore = () => {
        // if(this.state.currentScore > this.state.highScore) {
        //     this.setState({ highScore: this.state.currentScore});
        // }
//     }

//     render(){
//         return (
//             <nav className="nav navbar navbar-light bg-light">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-4">
//                             <h2 className="navbar-brand mb-0 h1">Memory Game</h2>
//                         </div>
//                         <div className="col-sm-4">
//                             <Status status={this.state.status} />
//                         </div>
//                         <div className="col-sm-4">
//                             <Score currentScore={this.state.currentScore} highScore={this.state.highScore}/>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

const NavBar = props => (
    <nav className="nav navbar navbar-light bg-light">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h2 className="navbar-brand mb-0 h1">Memory Game</h2>
                </div>
                <div className="col-sm-4">
                    <Status status={props.status}/>
                </div>
                <div className="col-sm-4">
                    <Score currentScore={props.currentScore} highScore={props.highScore}/>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar;