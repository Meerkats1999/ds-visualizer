import React, { useEffect, useState } from 'react';
import LinkedListBuildControls from '../../../components/buildControls/linkedListBuildControls/linkedListBuildControls';
import LinkedListBuilder from '../../../components/buildControls/linkedListBuildControls/linkedListBuilder';
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


    return (
        <Auxillary>
            <p>LinkedList</p>
            <LinkedListBuildControls
                addValueSubmitHandler={addToHead} />
            <ul>
                {listItems}
            </ul>
        </Auxillary>
    );
}

export default LinkedList;