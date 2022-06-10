import React, { useState } from 'react';
import Auxillary from '../../hoc/Auxillary';

const BuildControls = (props: any) => {

    // const ll = new LinkedListBuilder();

    // ll.add(10);

    // ll.printList();

    // ll.add(20);
    // ll.add(30);
    // ll.add(40);
    // ll.add(50);

    // ll.printList();

    // ll.insertAt(60, 2);

    // ll.printList();

    // console.log(ll.removeFrom(3));

    // ll.printList();

    const [state, setState] = useState({
        addValue: " ",
        addPosValue: " ",
        addIndex: " ",
        removeIndex: " ",
    })

    const addValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addValue = event.target.value;
        // console.log(addValue);

        setState({
            ...state,
            addValue: addValue
        })
    }

    const addPosValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addValue = event.target.value;
        setState({
            ...state,
            addPosValue: addValue
        })
    }

    const addIndexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addIndex = event.target.value;
        setState({
            ...state,
            addIndex: addIndex
        })
    }

    const removeIndexHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const removeIndex = event.target.value;
        setState({
            ...state,
            removeIndex: removeIndex
        })
    }

    return (
        <Auxillary>
            <p>BuildControls</p>
            <form onSubmit={() => props.addValueSubmitHandler(parseInt(state.addValue))}>
                <label>
                    Add Value to Linked List:
                    <input type="number" value={state.addValue} onChange={(event) => addValueHandler(event)} />
                </label>
                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    type="submit" value="Push" />
            </form>
            <form onSubmit={() => props.addPosValueSubmitHandler(parseInt(state.addPosValue), parseInt(state.addIndex))}>
                <label>
                    Add Value at Fixed Position:
                    <input type="number" value={state.addPosValue} onChange={(event) => addPosValueHandler(event)} />
                    <input type="number" value={state.addIndex} onChange={(event) => addIndexHandler(event)} />
                </label>
                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    type="submit" value="Insert At Position" />
            </form>
            <form onSubmit={() => props.removeHandler(parseInt(state.removeIndex))}>
                <label>
                    Remove Value from Position:
                    <input type="number" value={state.removeIndex} onChange={(event) => removeIndexHandler(event)} />
                </label>
                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                    type="submit" value="Remove from Position" />
            </form>
        </Auxillary>
    )
}

export default BuildControls;