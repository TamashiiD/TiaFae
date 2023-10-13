
import React from "react";
import { useState } from "react";
import BeautifulDropdown from "./navbar";
import NewGame from "./newgame";

export default function TagGame() {
    const [score, setScore] = useState(0)
    const [gameover, setGameOver] = useState(false)
    const [gameRunning, setGameRunning] = useState(false);


    function setthescore() {
        setScore(score + 1)
    }
    function reset() {
        setScore(0)
        setGameOver(false)
    }
    function setthescoreminus(){
            reset()
            over()
    }

    function gamerunningfalse (){
        setGameRunning(false)
    }
    function gamerunningtrue (){
        setGameRunning(true)
    }
    function over(){
        alert("GAME OVER", score)
       gamerunningfalse()
    }

    return (
        <>
            <div id="TAGGAME">
                <BeautifulDropdown />
                <h1>THIS IS THE TAG GAME</h1>
               
                <h3>Click the Red Tag as Many Times as You Can</h3>
                <div>
                <NewGame 
                score={score}
                gameover={gameover}
                gameRunning={gameRunning}
                gamerunningfalse={gamerunningfalse}
                gamerunningtrue={gamerunningtrue} 
                setthescoreminus={setthescoreminus}
                setthescore={setthescore}/> 
               </div>
                <p> {score} <strong>Score</strong></p>
            </div>
        </>

    )
}





