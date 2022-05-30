import React, { useState } from 'react';
import LinkedListBuildControls from '../../../components/buildControls/linkedListBuildControls/linkedListBuildControls';
import LinkedListBuilder from '../../../components/buildControls/linkedListBuildControls/linkedListBuilder';
import Auxillary from '../../../components/hoc/Auxillary';

const LinkedList = () => {

    const linkedList = new LinkedListBuilder();

    const [linkedListState, setLinkedListState] = useState(linkedList);

    const addToHead = (event: any) => {

    }

    let current = linkedListState.head;

    let items = [];

    while (current !== "null") {
        items.push(<li>{current.value}</li>);
        current = current.next;
    }

    return (
        <Auxillary>
            <p>LinkedList</p>
            <LinkedListBuildControls />
        </Auxillary>
    );
}

export default LinkedList;