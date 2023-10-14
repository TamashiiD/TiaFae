
import React from "react";
import { useState } from "react";
import BeautifulDropdown from "./navbar";
import NewGame from "./newgame";

export default function TagGame() {

    const [score, setScore] = useState(0)
    const [gameRunning, setGameRunning] = useState(false);



    function setthescore() {
        setScore(score + 1)
    }
    function reset() {
        setScore(0)
    }
    function setthescoreminus() {
        reset()
        over()
    }

    function gamerunningfalse() {
        setGameRunning(false)
    }
    function gamerunningtrue() {
        setGameRunning(true)
    }
    function over() {
        alert("GAME OVER ")
        gamerunningfalse()
    }

    return (
        <>

            <div id="TAGGAME">
                <BeautifulDropdown />
                <h1>THIS IS THE TAG GAME</h1>
                <div> keyboard controls <br />r  t  y <br />f  g  h <br />v  b  n </div>


                <h3>Click the Red Tag as Many Times as You Can</h3>
                <p> {score} <strong>Score</strong></p>

                <div>
                    <NewGame
                        score={score}
                        gameRunning={gameRunning}
                        gamerunningfalse={gamerunningfalse}
                        gamerunningtrue={gamerunningtrue}
                        setthescoreminus={setthescoreminus}
                        setthescore={setthescore} />
                </div>
            </div>

        </>

    )
}





