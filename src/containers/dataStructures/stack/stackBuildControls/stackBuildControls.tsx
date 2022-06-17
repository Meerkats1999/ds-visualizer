import React, { useState } from 'react';
import Auxillary from '../../../../components/hoc/Auxillary';

const StackbuildControls = (props: any) => {

    const [state, setState] = useState({
        pushValue: " "
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let pushValue = event.target.value;
        setState({
            pushValue: pushValue
        })
    }

    let stackSizeValue = 0;
    const stackSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        stackSizeValue = parseInt(event.target.value);
        console.log(stackSizeValue);
        props.stackSizeHandler(stackSizeValue);
    }

    return (
        <Auxillary>
            <div className='flex'>
                <form onSubmit={() => props.pushHandler(parseInt(state.pushValue))}>
                    <label>
                        Enter Stack Size:
                        <input type="number" value={props.stackSize} onChange={(event) => stackSizeHandler(event)} />
                    </label>
                    <label>
                        Push Element:
                        <input type="number" value={props.lastPushElement} onChange={(event) => onChangeHandler(event)} />
                    </label>
                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                        type="submit" value="Push" />
                </form>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    onClick={props.popHandler}>Pop</button>
            </div>
        </Auxillary>

    );
}

export default StackbuildControls;