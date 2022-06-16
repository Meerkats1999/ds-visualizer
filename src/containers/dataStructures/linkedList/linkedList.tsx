import React, { useEffect, useState } from 'react';
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
        items.push(current.element);
        current = current.next;
        console.log(items);
    }

    let listItems = items.map((item, index) => {
        return <li key={index}>{item}</li>
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
            <ul>
                {listItems}
            </ul>
        </Auxillary>
    );
}

export default LinkedList;