import React, { useState } from 'react';

import QueueBuildControls from '../../../components/buildControls/queueBuildControls/queueBuildControls';
import Auxillary from '../../../components/hoc/Auxillary';

const Queue = () => {

    const [queueState, setQueueState] = useState({
        queue: [],
        top: null,
        isEmpty: true,
        queueSize: 0
    })

    const [enQueueState, setEnqueueState] = useState({
        lastEnqueueElement: null
    })

    let queueModule = queueState.queue.map((queueItem, index) => {
        return <li key={index}>{queueItem}</li>
    })


    const queueSizeHandler = (queueSizeSet: number) => {
        setQueueState({
            ...queueState,
            queueSize: queueSizeSet
        })
    }

    const enQueueElementHandler = (enQueueValue: any) => {
        console.log(enQueueValue)
        setEnqueueState({
            lastEnqueueElement: enQueueValue
        })
    }

    const enQueueHandler = () => {
        if (enQueueState.lastEnqueueElement && !(queueState.queue.length >= queueState.queueSize)) {
            const enQueueElement = enQueueState.lastEnqueueElement;
            let tempQueue = JSON.parse(JSON.stringify(queueState.queue)); //clone array without reference
            tempQueue.push(enQueueElement);
            setQueueState({
                ...queueState,
                queue: tempQueue,
                top: tempQueue[tempQueue.length - 1],
                isEmpty: false,
            })
        } else if (queueState.queue.length >= queueState.queueSize) {
            alert("Queue Full");
        }
    }

    const deQueueHandler = () => {
        let tempQueue = JSON.parse(JSON.stringify(queueState.queue)); //clone array without reference
        tempQueue.shift();
        const isEmpty = true;
        const top = null;
        if (tempQueue.length > 0) {
            const isEmpty = false;
            const top = tempQueue[tempQueue.length - 1];
        }
        setQueueState({
            ...queueState,
            queue: tempQueue,
            top: top,
            isEmpty: isEmpty
        })
    }

    return (
        <Auxillary>
            <QueueBuildControls
                queueSizeHandler={queueSizeHandler}
                enQueueElementHandler={enQueueElementHandler}
                enQueueHandler={enQueueHandler}
                deQueueHandler={deQueueHandler} />
            <ul className='flex flex-col-reverse'>
                {queueModule}
            </ul>
        </Auxillary>
    );
}

export default Queue;