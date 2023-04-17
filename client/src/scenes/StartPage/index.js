import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
    }
  }

  const progress = Math.floor((count/3)*100) +"%"

  return (
    <div className="background-startpage">
      <header className="greeting">
        Try to solve, {props.user ? props.user.username : "not logged in"}!
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress} Completed
        </div>
      </div>
      <Row>
        <Col size="md-8">
            <div className="info-card">
              <div className="card-body">
                <h5 className="card-title">You heard about a treasury!</h5>
                <p className="card-text">
                The treasure hunt game began with a mysterious letter, leading the participants to a hidden location. They followed the clues, solving puzzles and deciphering codes, leading them through forests, across rivers, and up mountains...
                </p>
                <br></br>
                <p className="card-text">
                Due to your old ancestors, you came to know that a very big treasure has been hidden in a mysterious place, which no one has found till date...
                </p>
                <br></br>
                <p className="card-text">
                The way to reach treasure is written on a map, for which you have to find and with the help of that map you will find the treasure.You've got to get that map before anyone else gets there...
                </p>
                <br></br>
                <p className="card-text">
                  HURRY! Before it's too late!
                </p>
                <div className="startBtn">
                    <Link
                        to="/office"
                        style={{ textDecoration: 'none' }}
                    >
                      <div className="start">
                      {progress > 0+"%" ? "RESUME" : "START GAME"}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
        </Col>
      </Row>
      <div className="night-background">
                <div className="forest-start">
                    <div className="moon"></div>
                </div>
{/* <!-- forest end --> */}
                <div className="forest-background-start"></div>
                <div className="road"></div>
            </div> 
    </div>
  );
}

export default StartPage;
