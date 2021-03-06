import React from 'react';


function GameMenu({lives, enemies, speed, startGame, updateContext}) {
    return <React.Fragment>
        <form>
            <label>
                Speed:
                <select value={speed} onChange={event => updateContext({speed: event.target.value})}>
                    {Array.from(Array(9)).map((element, index) =>
                        <option key={index + 1} value={index + 1}>{index + 1}</option>)}
                </select>
            </label>
            <label>
                Enemies count:
                <select value={enemies} onChange={event => updateContext({enemies: event.target.value})}>
                    {Array.from(Array(4)).map((element, index) =>
                        <option key={index + 1} value={index + 1}>{index + 1}</option>)}
                </select>
            </label>
            <label>
                Lives:
                <select value={lives} onChange={event => updateContext({lives: event.target.value})}>
                    {Array.from(Array(9)).map((element, index) =>
                        <option key={index + 1} value={index + 1}>{index + 1}</option>)}
                </select>
            </label>
        </form>
        <button onClick={startGame}>START!</button>
    </React.Fragment>;
}

export default GameMenu;
