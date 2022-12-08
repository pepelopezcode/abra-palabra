import React, { useContext, useCallback, useEffect } from 'react'
import Key from './Key';
import {AppContext} from "../App"

function Keyboard() {
    const { onEnter, onDelete, onSelectLetter} = useContext(AppContext)

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        const keyPressed = event.key.toUpperCase()
        if (keyPressed === "ENTER") {
            onEnter()
        }   else if (keyPressed === "BACKSPACE"){
            onDelete()
            } else {
                
            keys1.forEach((key) => {
                if (keyPressed === key) {
                    onSelectLetter(key);
                }
            })
            keys2.forEach((key) => {
                if (keyPressed === key) {
                    onSelectLetter(key);
                }
            })
            keys3.forEach((key) => {
                if (keyPressed === key) {
                    onSelectLetter(key);
                }
            })
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    },[handleKeyboard]);

  return (
    <div className="keyBoard" onKeyDown={handleKeyboard} >
        <div className="line1" >
            {keys1.map(key => {
                return  <Key keyVal={key} />
            })}
        </div>
        <div className="line2" >
        {keys2.map(key => {
                return  <Key keyVal={key}  />
            })}
        </div>
        <div className="line3" >
        <Key keyVal={"DELETE"} bigKey/>
        {keys3.map(key => {
                return  <Key keyVal={key} />
            })}
        <Key keyVal={"ENTER"} bigKey/>
        </div>
    </div>
  )
}

export default Keyboard