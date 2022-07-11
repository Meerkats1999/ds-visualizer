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

        console.log(item);


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

        return <li className={'text-center h-10 w-20 ' + color} key={index}>{item[0]}</li>
    })

    const queueSizeHandler = (queueSizeValue: number) => {
        queue = queueState.queue;
        queue.setSize(queueSizeValue);
        setQueueState({
            queue
        })
    }

    const enQueueHandler = (enQueueValue: number, elementColor: string) => {
        if (enQueueValue && !(queueState.queue.queue.length >= queueState.queue.queueSize)) {
            const queue = queueState.queue;
            queue.enQueue(enQueueValue, elementColor);
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