import React, { useState, useEffect } from "react";

export default function NewGame({ score, gameover, gameRunning, gamerunningtrue, setthescore, setthescoreminus }) {
    const [redIndex, setRedIndex] = useState(
        null) // Generates a random index for the red square (0-11)
        ;
    const [seconds, setSeconds] = useState(1500)


    function gameoverred() {
        setRedIndex(null)
        setSeconds(1500)
    }

    // Function to start the game
    const startGame = () => {
        setRedIndex(Math.floor(Math.random() * 12));
        gamerunningtrue();
    };

    useEffect(() => {
        // Regenerate the red square every 3 seconds if the game is running
        if (gameRunning) {
            const intervalId = setInterval(() => {
                const newRedIndex = Math.floor(Math.random() * 8);

                if (newRedIndex !== redIndex) {
                    setRedIndex(newRedIndex);
                }
            }, seconds);

            return () => clearInterval(intervalId); // Clean up the interval
        }
    }, [gameRunning, redIndex]);


    const handleSquareClick = (index) => {
        if (index === redIndex) {
            setthescore();
        }
        if (index !== redIndex && gameRunning) {
            setthescoreminus()
            gameoverred()
        }
        if (score >= 5 && score < 10) {
            setSeconds(1000)
        }
        if (score >= 10 && score < 15) {
            setSeconds(750)
        }
        if (score >= 15) {
            setSeconds(500)
        }
    };

    const cube = {
        display: "flex",
        flexDirection: "row",
    };

    const isRed = (index) => index === redIndex;
    const getBackgroundColor = (index) => (isRed(index) ? "red" : "white");


    return (
        <div id="NEWGAME">
                <div id="STARTBUTTON">
                    <button onClick={startGame}>Start</button>
                </div>
                <div id="HARDER">
                    {score === 0 ? <strong>This Game Gets Progressively Harder</strong> :
                        (score < 10 ? <strong>This is Easy</strong> :
                            (score >= 10 && score < 15 ? <strong>This is Getting Harder</strong> : <strong>This is Super Hard</strong>)
                        )
                    }
                </div>
                <div id="THEBOX">
                    <div style={cube}>

                        {Array.from({ length: 3 }, (_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: getBackgroundColor(index),
                                    border: "1px solid #000",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleSquareClick(index)}

                            ></div>

                        ))}
                    </div>
                    <div style={cube}>

                        {Array.from({ length: 3 }, (_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: getBackgroundColor(index + 3),
                                    border: "1px solid #000",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleSquareClick(index + 3)}

                            ></div>

                        ))}
                    </div>
                    <div style={cube}>

                        {Array.from({ length: 3 }, (_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: getBackgroundColor(index + 6),
                                    border: "1px solid #000",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleSquareClick(index + 6)}

                            ></div>

                        ))}
                    </div>
                </div>
            
        </div>
    );
}
