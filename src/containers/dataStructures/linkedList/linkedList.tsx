import React, { useEffect, useState } from 'react';

import arrowImage from '../../../assets/images/arrow.svg';
import LinkedListBuildControls from './linkedListBuildControls/linkedListBuildControls';
import LinkedListBuilder from '../../../data-structures/linkedList/linkedListBuilder';
import Auxillary from '../../../components/hoc/Auxillary';

const LinkedList = () => {
    let linkedList = new LinkedListBuilder();

    const [linkedListState, setLinkedListState] = useState({
        linkedList: linkedList
    });

    let current = linkedListState.linkedList.head;
    // console.log(current);

    let items = [];
    while (current !== null) {
        // console.log(current.color);
        if (current.next !== null) {
            items.push([current.element, current.color, current.next.element]);
        } else {
            items.push([current.element, current.color, 'null']);
        }
        current = current.next;
        console.log(items);
    }

    const arrowLogo = <img className='justify-center w-full self-center'
        src={arrowImage} />

    let listItems = items.map((item, index) => {
        let arrow = null;
        if (item[2] !== 'null')
            arrow = <img className='justify-center w-full self-center'
                src={arrowImage} />

        let color = null;
        switch (item[1]) {
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

        return <li className='flex' key={index}>
            <div className={'flex-shrink-0 border-solid hover:border-dashed border-2 border-gray-800 shadow-xl rounded-full text-center text-sm h-20 w-20 ' + color}>
                {"Value: " + item[0]}<br />
                {"Next: " + item[2]}
            </div>
            {arrow}
        </li>
    });


    const addToHead = (addValue: number, nodeColor: string) => {
        linkedList = linkedListState.linkedList
        linkedList.add(addValue, nodeColor);
        setLinkedListState({
            linkedList: linkedList
        });
    }

    const insertAt = (addPosValue: number, addIndex: number, nodeColor: string) => {
        linkedList = linkedListState.linkedList
        linkedList.insertAt(addPosValue, addIndex, nodeColor);
        setLinkedListState({
            linkedList: linkedList
        })
    }

    const removeFrom = (removeIndex: number) => {
        linkedList = linkedListState.linkedList;
        linkedList.removeFrom(removeIndex);
        setLinkedListState({
            linkedList: linkedList
        })
    }

    return (
        <Auxillary>
            <LinkedListBuildControls
                addValueSubmitHandler={addToHead}
                addPosValueSubmitHandler={insertAt}
                removeHandler={removeFrom} />
            <br />
            <div className='mx-20 my-10'>
                <span className='font-mono text-4xl text-white font-bold'>Singly Linked List</span>
                <ul className='flex mt-5'>
                    {listItems}
                </ul>
            </div>

        </Auxillary>
    );
}

export default LinkedList;