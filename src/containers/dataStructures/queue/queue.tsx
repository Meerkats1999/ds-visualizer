import React, { useState } from 'react';

import QueueBuilder from '../../../data-structures/queue/queueBuilder';
import QueueBuildControls from './queueBuildControls/queueBuildControls';
import Auxillary from '../../../components/hoc/Auxillary';

const Queue = () => {

    let queue = new QueueBuilder();

    const [queueState, setQueueState] = useState({
        queue: queue
    })

    let queueList = queueState.queue.queue.map((item: any, index: any) => {
        return <li key={index}>{item}</li>
    })

    const queueSizeHandler = (queueSizeValue: number) => {
        queue = queueState.queue;
        queue.setSize(queueSizeValue);
        setQueueState({
            queue
        })
    }

    const enQueueHandler = (enQueueValue: number) => {
        if (enQueueValue && !(queueState.queue.queue.length >= queueState.queue.queueSize)) {
            const queue = queueState.queue;
            queue.enQueue(enQueueValue);
            setQueueState({
                queue: queue
            })
        }
        else if (queueState.queue.queue.length >= queueState.queue.queueSize) {
            alert("Queue Full");
        }
    }

    const deQueueHandler = () => {
        const queue = queueState.queue;
        if (queue.isEmpty) {
            alert("Queue is Empty");
        } else {
            queue.deQueue();
            setQueueState({
                queue: queue
            })
        }
    }

    return (
        <Auxillary>
            <QueueBuildControls
                queueSize={queueState.queue.queueSize}
                queueSizeHandler={queueSizeHandler}
                enQueueHandler={enQueueHandler}
                deQueueHandler={deQueueHandler} />
            <ul className='flex flex-col'>
                {queueList}
            </ul>
        </Auxillary>
    );
}

export default Queue;