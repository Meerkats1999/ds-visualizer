import React from 'react';

import Auxillary from '../../components/hoc/Auxillary';
import Stack from '../../containers/dataStructures/stack/stack';
import Queue from '../../containers/dataStructures/queue/queue';
import LinkedList from '../../containers/dataStructures/linkedList/linkedList';

const Visualizer = (props: any) => {

    let dataStructure = <div></div>

    switch (props.dataStructure) {
        case "stack":
            dataStructure = <Stack />
            break;
        case "queue":
            dataStructure = <Queue />
            break;
        case "linked list":
            dataStructure = <LinkedList />
            break;
        default:
            dataStructure = <span className='font-mono text-4xl text-white font-bold'>Select a Data Structure</span>
    }

    return (
        <Auxillary>
            {dataStructure}
        </Auxillary>
    );
}

export default Visualizer;

