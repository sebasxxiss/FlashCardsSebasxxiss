import { useContext } from "react"
import { StateContext } from "../State.jsx"

export default function Card() {
    const {item,setItem}=useContext(StateContext)
    return(<>
    <div id="BarContainer">
        <div id="Bar">
            <div id="filler" style={{width:((item+1)/20)*740+"px"}}></div>
            <span id="Percentage">{Math.floor(((item+1)/20)*100)}%</span>
            <span id="numberOfCards">{item+1} of 20</span>
        </div>
        
    </div>
    </>)
}