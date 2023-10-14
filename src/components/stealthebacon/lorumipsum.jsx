import React, { useEffect, useState } from "react";
import { ipsum } from "./lorum";

export default function Lorum() {
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);
    const [gameon, setGameon] = useState(false)
    const [backgroundColor, setBackgroundcolor] = useState("white")
    const [count, setCount] = useState(0)
    const [bacon, setbacon] = useState(0)

    useEffect(() => {
         let timer;
         if (gameon) {
           

            
            timer = setInterval(() => {
                setTotalMilliseconds((prevTotalMilliseconds) => prevTotalMilliseconds + 100);
              }, 100);
            

            function handleKeyDown(event){
                event.preventDefault();
                matching(event.key, count)
            }


            document.addEventListener("keydown", handleKeyDown);


            return () => {
                clearInterval(timer);
                document.removeEventListener("keydown", handleKeyDown);

            };
        }





    }, [gameon, count])

    function matching(key, count) {
            if (ipsum[count] === "_" && key === " ") {
                const newBackground = [...backgroundColor];
                newBackground[count] = "green";
                setBackgroundcolor(newBackground);
                setCount(count + 1);
                setbacon(bacon+1)
                console.log("this is the problem")
            } else if (key.toLowerCase() === ipsum[count].toLowerCase()) {
                const newBackground = [...backgroundColor];
                newBackground[count] = "green";
                setBackgroundcolor(newBackground);
                setbacon(bacon+1)
                setCount(count + 1);
                console.log("this is working");
            } else {
                const newBackground = [...backgroundColor];
                newBackground[count] = "red";
                gameover();
                setBackgroundcolor(newBackground);
            }
        
    }


    function gameover() {
        setBackgroundcolor(Array(ipsum.length).fill("white"));
      
        setTimeout(() => {
          alert("GAME OVER");
          setGameon(false);
          setCount(0);  
        }, 0); // The 0ms delay ensures it's executed in the next tick.
      }

    function handleclick() {
       
        setBackgroundcolor(Array(ipsum.length).fill("white"));
        clearInterval(totalMilliseconds);
        setTotalMilliseconds(0);
        setGameon(true)
        setCount(0)
        setbacon(0)
        
    }

    function stop(){
        setGameon(false)
        setCount(0)
        setbacon(0)
        setBackgroundcolor(Array(ipsum.length).fill("white"));
        clearInterval(totalMilliseconds);
        setTotalMilliseconds(0);
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
    return (
        <>
            <button style={{
            marginBottom: "1rem"
            }}onClick={handleclick}> START</button>
            <button onClick={stop}>STOP</button>
            <div>
            <div>{formatTime(totalMilliseconds)} <strong>Time</strong> </div>
            <div>{bacon}/{ipsum.length} <strong>Bacon</strong> </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexFlow: "wrap",
                    marginBottom: "2rem"

                }}>
                {ipsum.map((char, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "10px",
                                height: "10px",
                                padding: "1rem",
                                backgroundColor: backgroundColor[index],
                                fontSize:"25px"
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