import { useState } from "react"

export default function Batsman(){
    const [score, setScore] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const handleSingle = () => {
        let updatedScore = score + 1;
        setScore(updatedScore);
    }
    const handleDouble = () => {
        let updatedScore = score + 2;
        setScore(updatedScore);
    }
    const handleTriple = () => {
        let updatedScore = score + 3;
        setScore(updatedScore);
    }
    const handleFour = () => {
        let updatedScore = score + 4;
        let updatesFours = fours + 1;
        setFours(updatesFours);
        setScore(updatedScore);
    }
    const handleSix = () => {
        let updatedScore = score + 6;
        let updatesSixes = sixes + 1;
        setSixes(updatesSixes);
        setScore(updatedScore);
    }

    return(
        <div>
            <h1>Player: Bangladeshi Batsman</h1>
            <h1>Current score: {score}</h1>
            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {fours}</small></p>
            {
                score >= 100 && <h2>Congratulations BD team. They scored Hundred</h2>
            }
            <button onClick={handleSingle} >Single</button>
            <button onClick={handleDouble} >Double</button>
            <button onClick={handleTriple} >Triple</button>
            <button onClick={handleFour} >Four</button>
            <button onClick={handleSix} >Six</button>
        </div>
    )
}