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
    console.log(current);

    let items = [];
    while (current !== null) {
        if (current.next !== null) {
            items.push([current.element, current.next.element]);
        } else {
            items.push([current.element, 'null']);
        }
        current = current.next;
        console.log(items);
    }

    const arrowLogo = <img className='justify-center w-full self-center'
        src={arrowImage} />

    let listItems = items.map((item, index) => {
        let arrow = null;
        if (item[1] !== 'null')
            arrow = <img className='justify-center w-full self-center'
                src={arrowImage} />
        return <li className='flex' key={index}>
            <div className='flex-shrink-0 rounded-full text-center text-sm h-20 w-20 bg-red-500'>
                {"Value: " + item[0]}<br />
                {"Next: " + item[1]}
            </div>
            {arrow}
        </li>
    });


    const addToHead = (addValue: number) => {
        linkedList = linkedListState.linkedList
        linkedList.add(addValue);
        setLinkedListState({
            linkedList: linkedList
        });
    }

    const insertAt = (addPosValue: number, addIndex: number) => {
        linkedList = linkedListState.linkedList
        linkedList.insertAt(addPosValue, addIndex);
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
            <p>LinkedList</p>
            <LinkedListBuildControls
                addValueSubmitHandler={addToHead}
                addPosValueSubmitHandler={insertAt}
                removeHandler={removeFrom} />
            <ul className='flex'>
                {listItems}
            </ul>
        </Auxillary>
    );
}

export default LinkedList;