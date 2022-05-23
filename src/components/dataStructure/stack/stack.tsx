import React, { useEffect, useState } from 'react';

import Auxillary from '../../hoc/Auxillary';
import StackBuildControls from './stackBuildControls/stackBuildControls';

const Stack = () => {

    const [stackState, setStackState] = useState({
        stack: [],
        top: null,
        isEmpty: true,
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

    const handlePush = (props: any) => {
        if (pushState.lastPushElement) {
            const pushElement = pushState.lastPushElement;
            let tempStack = JSON.parse(JSON.stringify(stackState.stack)); //clone array without reference
            tempStack.push(pushElement);
            setStackState({
                stack: tempStack,
                top: tempStack[tempStack.length - 1],
                isEmpty: false,
            })
        }
        // stackModule = displayStack()
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
            stack: tempStack,
            top: top,
            isEmpty: isEmpty
        })
        // stackModule = displayStack()
    }

    const handlePeek = () => {
        console.log(stackState.top);
    }

    return (
        <Auxillary>
            <StackBuildControls
                pushHandler={handlePush}
                pushElementHandler={pushElementHandler}
                popHandler={handlePop} />
            <ul>
                {stackModule}
            </ul>
        </Auxillary>
    );
}

export default Stack;