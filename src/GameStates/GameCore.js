import React, {useCallback, useContext, useState} from 'react';
import CanvasStage from "../Canvas/CanvasStage";
import {DebugContext} from "../Utils/withDebugContext";
import useEventHandler from "../Utils/useEventListener";

export const MOVE_MAP = {
    LEFT: -1,
    RIGHT: 1,
    DOWN: 2,
    UP: -2
};

export const KEYBOARD_EVENTS_MOVE_MAP = {
    ArrowLeft: MOVE_MAP.LEFT,
    KeyA: MOVE_MAP.LEFT,
    ArrowRight: MOVE_MAP.RIGHT,
    KeyD: MOVE_MAP.RIGHT,
    ArrowUp: MOVE_MAP.UP,
    KeyW: MOVE_MAP.UP,
    ArrowDown: MOVE_MAP.DOWN,
    KeyS: MOVE_MAP.DOWN
};

//menu with inputs and START button
function GameCore({speed, mobs}) {
    const [actorPosX, setActorPosX] = useState(0);
    const [actorPosY, setActorPosY] = useState(0);
    const debug = useContext(DebugContext);
    const keydownHandler = useCallback(function(event) {
        if (KEYBOARD_EVENTS_MOVE_MAP[event.code]) {
            event.preventDefault();
            const movementValue = (event.shiftKey ? 3 : 1) * KEYBOARD_EVENTS_MOVE_MAP[event.code];
            debug.state && console.log("next Direction", movementValue, actorPosX, actorPosY)
            // TODO: import isOdd
            movementValue % 2
                ? setActorPosX(prev => prev + movementValue * speed) //TODO: is moveSpeed setting needed?
                : setActorPosY(prev => prev + movementValue / 2 * speed)
        }
    }, [debug.state, speed, actorPosX, actorPosY])
    useEventHandler('keydown', keydownHandler);

    return  <CanvasStage posX={actorPosX} posY={actorPosY} speed={speed} mobs={mobs}/>
}

export default GameCore;
