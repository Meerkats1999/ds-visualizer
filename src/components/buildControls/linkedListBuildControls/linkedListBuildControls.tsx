import React, { useState } from 'react';
import Auxillary from '../../hoc/Auxillary';

import LinkedListBuilder from './linkedListBuilder';

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
        addValue: " "
    })

    const addValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addValue = event.target.value;
        // console.log(addValue);

        setState({
            addValue: addValue
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
        </Auxillary>
    )
}

export default BuildControls;