import React, { useEffect, useRef, useState } from "react";
import { ipsum, essay1ready } from "./lorum";

export default function Lorum() {
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);
    const [gameon, setGameon] = useState(false)
    const [backgroundColor, setBackgroundcolor] = useState("white")
    const [count, setCount] = useState(0)
    const [bacon, setbacon] = useState(0)
    const [totalcorrect, settotalcorrect] = useState([])
    const inputRef = useRef(null);




    useEffect(() => {
        let timer;
        if (gameon) {
            timer = setInterval(() => {
                setTotalMilliseconds((prevTotalMilliseconds) => prevTotalMilliseconds + 100);
            }, 100);


            function handleKeyDown(event) {
                event.preventDefault();
                matching(event.key, count)
            };


            document.addEventListener("keydown", handleKeyDown);


            return () => {
                clearInterval(timer);
                document.removeEventListener("keydown", handleKeyDown);

            };
        }

    }, [gameon, count, totalcorrect])

    function matching(key, count) {
        if(count === essay1ready.length-1){
           
            endgamewin()
        }
        if (essay1ready[count] === "_" && key === " ") {
            const newBackground = [...backgroundColor];
            newBackground[count] = "green";
            setBackgroundcolor(newBackground);
            setCount(count + 1);
            setbacon(bacon + 1)
            settotalcorrect([...totalcorrect, key])
        } else if (key.toLowerCase() === essay1ready[count].toLowerCase()) {
            const newBackground = [...backgroundColor];
            newBackground[count] = "green";
            setBackgroundcolor(newBackground);
            setbacon(bacon + 1)
            setCount(count + 1);
            settotalcorrect([...totalcorrect, key])
        } else {
            const newBackground = [...backgroundColor];
            newBackground[count] = "red";
            setBackgroundcolor(newBackground);
            gameover();
            

        }

    }

    function endgamewin(){
        setBackgroundcolor(Array(essay1ready.length).fill("white"));
        const wpm = handleTyping()
        setTimeout(() => {

            alert("Winner!! " + wpm + " words per minute");
            setGameon(false);
            setCount(0);

        }, 2);   
    }

    function gameover() {
        setBackgroundcolor(Array(essay1ready.length).fill("white"));
        const wpm = handleTyping()
        // Store the words per minute value

        setTimeout(() => {

            alert("GAME OVER " + wpm + " words per minute");
            setGameon(false);
            setCount(0);

        }, 2); // The 0ms delay ensures it's executed in the next tick.
    }

    function handleclick() {

        setBackgroundcolor(Array(essay1ready.length).fill("white"));
        clearInterval(totalMilliseconds);
        setTotalMilliseconds(0);
        setGameon(true)
        setCount(0)
        setbacon(0)
        settotalcorrect([])





    }

    function stop() {
        setGameon(false)
        setCount(0)
        setbacon(0)
        setBackgroundcolor(Array(essay1ready.length).fill("white"));
        clearInterval(totalMilliseconds);
        setTotalMilliseconds(0);

        settotalcorrect([])
    }



    function formatTime(totalMilliseconds) {
        const minutes = Math.floor(totalMilliseconds / 60000);
        const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
        const milliseconds = totalMilliseconds % 1000;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const formattedMilliseconds = milliseconds < 100 ? `0${milliseconds}` : milliseconds < 10 ? `00${milliseconds}` : milliseconds;
        return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }


    const handleTyping = () => {

        const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
        if (seconds >= 60) {
            // If one minute or more has passed, calculate and set WPM
            const wordsPerMinute = Math.floor((totalcorrect.length / 5) / 60);
            return wordsPerMinute;
        } else {
            // If less than one minute has passed, just show the total word count
            let less = Math.floor(totalcorrect.length / 5)
            return less;
        }
    };

    return (
        <>

            <div onClick={() => {inputRef.current.focus(); console.log("the keyboard should pop up now") }} style={{ cursor: "text" }}>
                 <input
                    ref={inputRef}
                    style={{ opacity: 0, position: "absolute", top: -1000, left: -1000 }}
                    type="text"
                    placeholder="its here"
                />
                <button style={{
                    marginBottom: "1rem"
                }}
                onClick={handleclick}> START</button>
               
            </div>
            <button onClick={stop}>STOP</button>
            <div>
                <div>{formatTime(totalMilliseconds)} <strong>Time</strong> </div>
                <div>{bacon}/{essay1ready.length} <strong>Bacon</strong> </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexFlow: "wrap",
                    marginBottom: "2rem"

                }}>
                {essay1ready.map((char, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "15px",
                                height: "25px",
                                padding: "1rem",
                                backgroundColor: backgroundColor[index],
                                fontSize: "25px"
                            }}
                        >
                            {char === " " && "_"}
                            {char}
                        </div>
                    )
                })}

            </div>
        </>
    )
}