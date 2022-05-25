import React, { useEffect, useState } from 'react';

import Auxillary from '../../../components/hoc/Auxillary';
import StackBuildControls from '../../../components/buildControls/stackBuildControls/stackBuildControls';

const Stack = () => {

    const [stackState, setStackState] = useState({
        stack: [],
        top: null,
        isEmpty: true,
        stackSize: 0
    })

    const [pushState, setPushState] = useState({
        lastPushElement: null
    })

    let stackModule = stackState.stack.map((stackItem, index) => {
        return <li key={index}>{stackItem}</li>
    });

    const pushElementHandler = (pushValue: any) => {
        setPushState({
            lastPushElement: pushValue
        })
    }

    const stackSizeHandler = (stackSizeSet: number) => {
        console.log(stackSizeSet);
        setStackState({
            ...stackState,
            stackSize: stackSizeSet
        })
    }

    const handlePush = () => {
        if (pushState.lastPushElement && !(stackState.stack.length >= stackState.stackSize)) {
            console.log(stackState.stack.length + " " + stackState.stackSize);
            const pushElement = pushState.lastPushElement;
            let tempStack = JSON.parse(JSON.stringify(stackState.stack)); //clone array without reference
            tempStack.push(pushElement);
            setStackState({
                ...stackState,
                stack: tempStack,
                top: tempStack[tempStack.length - 1],
                isEmpty: false,
            })
        } else if (stackState.stack.length >= stackState.stackSize) {
            alert("Stack Full");
        }
    }

    const handlePop = () => {
        let tempStack = JSON.parse(JSON.stringify(stackState.stack)); //clone array without reference
        tempStack.pop();
        const isEmpty = true;
        const top = null;
        if (tempStack.length > 0) {
            const isEmpty = false;
            const top = tempStack[tempStack.length - 1];
        }
        setStackState({
            ...stackState,
            stack: tempStack,
            top: top,
            isEmpty: isEmpty
        })
    }

    return (
        <Auxillary>
            <StackBuildControls
                stackSizeHandler={stackSizeHandler}
                pushHandler={handlePush}
                pushElementHandler={pushElementHandler}
                popHandler={handlePop} />
            <ul className='flex flex-col-reverse'>
                {stackModule}
            </ul>
        </Auxillary>
    );
}

export default Stack;