import React from 'react';
import Auxillary from '../../hoc/Auxillary';

const queuebuildControls = (props: any) => {

    let enQueueValue = 0;
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        enQueueValue = parseInt(event.target.value);
        props.enQueueElementHandler(enQueueValue)
    }

    let queueSizeValue = 0;
    const queueSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        queueSizeValue = parseInt(event.target.value);
        props.queueSizeHandler(queueSizeValue);
    }

    return (
        <Auxillary>
            <div className='flex'>
                <form onSubmit={props.enQueueHandler}>
                    <label>
                        Enter Queue Size:
                        <input type="number" value={props.queueSize} onChange={(event) => queueSizeHandler(event)} />
                    </label>
                    <label>
                        EnQueue Element:
                        <input type="number" value={props.lastEnqueueElement} onChange={(event) => onChangeHandler(event)} />
                    </label>
                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                        type="submit" value="EnQueue" />
                </form>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    onClick={props.deQueueHandler}>DeQueue</button>
            </div>
        </Auxillary>
    )
}

export default queuebuildControls