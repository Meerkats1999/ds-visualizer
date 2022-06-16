import React, { useState } from 'react';
import Auxillary from '../../../../components/hoc/Auxillary';

const QueuebuildControls = (props: any) => {

    const [state, setState] = useState({
        enQueueValue: " "
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enQueueValue = event.target.value;
        setState({
            ...state,
            enQueueValue: enQueueValue
        })
    }

    const onChangequeueSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const queueSizeValue = parseInt(event.target.value);
        props.queueSizeHandler(queueSizeValue);
    }

    return (
        <Auxillary>
            <div className='flex'>
                <form>
                    <label>
                        Enter Queue Size:
                        <input type="number" value={props.queueSize} onChange={(event) => onChangequeueSizeHandler(event)} />
                    </label>
                </form>
                <br />
                <form onSubmit={() => props.enQueueHandler(parseInt(state.enQueueValue))}>
                    <label>
                        EnQueue Element:
                        <input type="number" value={state.enQueueValue} onChange={(event) => onChangeHandler(event)} />
                    </label>
                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                        type="submit" value="EnQueue" />
                </form>
                <br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    onClick={props.deQueueHandler}>DeQueue</button>
            </div>
        </Auxillary >
    )
}

export default QueuebuildControls;