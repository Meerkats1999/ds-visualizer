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

        console.log(stackItem);


        let color = null;
        switch (stackItem[1]) {
            case "red": {
                color = 'bg-red-500';
                break;
            }
            case "blue": {
                color = 'bg-blue-500';
                break;
            }
            case "purple": {
                color = 'bg-purple-500';
                break;
            }
            default: {
                color = 'bg-red-500';
                break;
            }
        }

        return <li className={'text-center h-10 w-20 ' + color} key={index}>{stackItem[0]}</li>
    });

    const stackSizeHandler = (stackSizeSet: number) => {
        stack = stackState.stack;
        stack.setSize(stackSizeSet);
        setStackState({
            stack: stack
        })
    }

    const handlePush = (pushValue: number, itemColor: string) => {
        if (!(stackState.stack.stack.length >= stackState.stack.stackSize)) {
            stack = stackState.stack;
            stack.push(pushValue, itemColor);
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