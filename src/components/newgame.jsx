import React, { useState, useEffect } from "react";

export default function NewGame({ score, gameRunning, gamerunningtrue, setthescore, setthescoreminus }) {
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
        setRedIndex(Math.floor(Math.random() * 9));
        gamerunningtrue();
    };

    useEffect(() => {
        // Regenerate the red square every 3 seconds if the game is running
        if (gameRunning) {

            const intervalId = setInterval(() => {
                const newRedIndex = Math.floor(Math.random() * 9);

                if (newRedIndex !== redIndex) {
                    setRedIndex(newRedIndex);
                }
            }, seconds);



            const handleKeyDown = (event) => {
                // Check if the pressed key is the 'A' key (you can use any key you want)
                if (event.key === "r" || event.key === "R") {
                  // Perform your action here
                    handleSquareClick(0)
                  // You can replace the console.log with the action you want to perform.
                }
                else if (event.key === "t" || event.key === "T") {
                    // Perform your action here
                      handleSquareClick(1)
                    // You can replace the console.log with the action you want to perform.
                  }
                 else if (event.key === "y" || event.key === "Y") {
                    // Perform your action here
                      handleSquareClick(2)
                    // You can replace the console.log with the action you want to perform.
                  }
                  else if (event.key === "f" || event.key === "F") {
                    // Perform your action here
                      handleSquareClick(3)
                    // You can replace the console.log with the action you want to perform.
                  }
                 else if (event.key === "g" || event.key === "G") {
                    // Perform your action here
                      handleSquareClick(4)
                    // You can replace the console.log with the action you want to perform.
                  }
                  else if (event.key === "h" || event.key === "H") {
                    // Perform your action here
                      handleSquareClick(5)
                    // You can replace the console.log with the action you want to perform.
                  }
                  else if (event.key === "v" || event.key === "V") {
                    // Perform your action here
                      handleSquareClick(6)
                    // You can replace the console.log with the action you want to perform.
                  }
                  else if (event.key === "b" || event.key === "B") {
                    // Perform your action here
                      handleSquareClick(7)
                    // You can replace the console.log with the action you want to perform.
                  }
                  else if (event.key === "n" || event.key === "N") {
                    // Perform your action here
                      handleSquareClick(8)
                    // You can replace the console.log with the action you want to perform.
                  }
              };


              window.addEventListener("keydown", handleKeyDown);




             // Clean up the interval
              return () => {
                clearInterval(intervalId)
                window.removeEventListener("keydown", handleKeyDown);
              };
           // add a function that will also run 
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
                                key={index+3}
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
                                key={index+6}
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
