import javascriptFlashcards from '../javascript/information.js'
import { useContext, useState } from 'react'
import { StateContext } from '../State.jsx'


export default function Card(){
    const {item,setItem}=useContext(StateContext)
    const [answer,setAnswer]=useState(false)
    return(<>
        <div id="Card">
            <div id="TextContainer">
                <div id="Text">
                    {!answer &&<span className="Question" style={{fontWeight:'700',fontSize:'50px'}}>{javascriptFlashcards[item].question}</span>}
                    {answer &&<span className='Question'>{javascriptFlashcards[item].answer}</span>}
                </div>
            </div>
            <div id="ButtonsContainer">
                <div id="Buttons">
                    <button onClick={()=>{
                        if(item-1<0){
                            return
                        }
                        if(answer){setAnswer(!answer)}
                        setItem(item=>item-1)
                    }}>{"< Previous"}</button>
                    <button onClick={()=>{setAnswer(!answer)}}>Answer</button>
                    <button onClick={()=>{
                        if(item+1>19){
                            return
                        }
                        if(answer){setAnswer(!answer)}
                        setItem(item=>item+1)
                    }}>{"Next >"}</button>
                </div>
            </div>
        </div>
    </>)
}