import React, { useEffect, useState } from 'react';

import Auxillary from '../../../components/hoc/Auxillary';
import StackBuilder from '../../../data-structures/stack/stackBuilder';
import StackBuildControls from './stackBuildControls/stackBuildControls';

const Stack = () => {

    let stack = new StackBuilder();

    const [stackState, setStackState] = useState({
        stack: stack
    })

    let stackList = stackState.stack.stack.map((stackItem: any, index: any) => {
        return <li key={index}>{stackItem}</li>
    });

    const stackSizeHandler = (stackSizeSet: number) => {
        stack = stackState.stack;
        stack.setSize(stackSizeSet);
        setStackState({
            stack: stack
        })
    }

    const handlePush = (pushValue: number) => {
        if (!(stackState.stack.stack.length >= stackState.stack.stackSize)) {
            stack = stackState.stack;
            stack.push(pushValue);
            setStackState({
                stack: stack
            })
        } else if (stackState.stack.stack.length >= stackState.stack.stackSize) {
            alert("Stack Full");
        }
    }

    const handlePop = () => {
        const stack = stackState.stack;
        if (stack.isEmpty) {
            alert("Stack is Empty");
        } else {
            stack.pop()
            setStackState({
                stack: stack
            })
        }
    }

    return (
        <Auxillary>
            <StackBuildControls
                stackSize={stackState.stack.stackSize}
                stackSizeHandler={stackSizeHandler}
                pushHandler={handlePush}
                popHandler={handlePop} />
            <ul className='flex flex-col-reverse'>
                {stackList}
            </ul>
        </Auxillary>
    );
}

export default Stack;