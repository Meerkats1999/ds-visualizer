import React, { useState } from 'react';
import Auxillary from '../../../hoc/Auxillary';

const stackbuildControls = (props: any) => {

    let pushValue = 0;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        pushValue = parseInt(event.target.value);
        props.pushElementHandler(pushValue)
    }

    return (
        <Auxillary>
            <div className='flex'>
                <form onSubmit={props.pushHandler}>
                    <label>
                        Name:
                        <input type="number" value={props.lastPushElement} onChange={(event) => onChangeHandler(event)} />
                    </label>
                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                        type="submit" value="Submit" />
                </form>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    onClick={props.popHandler}>Pop</button>
            </div>
        </Auxillary>

    );
}

export default stackbuildControls;