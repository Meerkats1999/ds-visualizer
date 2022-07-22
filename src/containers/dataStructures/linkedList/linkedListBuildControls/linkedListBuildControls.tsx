import React, { useState } from 'react';
import Auxillary from '../../../../components/hoc/Auxillary';

const BuildControls = (props: any) => {

    const [state, setState] = useState({
        addValue: " ",
        addPosValue: " ",
        addIndex: " ",
        removeIndex: " ",
        color: "red",
    })

    const addValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const addValue = event.target.value;
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

    const colorSelector = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const color = (event.target as HTMLInputElement).textContent?.toLowerCase();
        // console.log(color);
        setState({
            ...state,
            color: color ? color : " "
        })
    }

    return (
        <Auxillary>
            <form onSubmit={() => props.addValueSubmitHandler(parseInt(state.addValue), state.color)}>
                <label>
                    <span className='text-white font-bold'>Add Value</span> <br />
                    <input className='bg-gray-200 shadow-xl w-20 mt-2' type="number" value={state.addValue} onChange={(event) => addValueHandler(event)} />
                </label>

                <label className="group mx-5">
                    <div className="dropdown group-hover:text-white inline-block relative">
                        <button className="bg-gray-300 text-gray-700 shadow-xl font-semibold py-2 px-4 rounded inline-flex items-center" type='button'>
                            <span className="mr-1">Color</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden group-hover:block pt-1">
                            <li className="">
                                <a className="rounded-b bg-red-500 text-red-500 hover:bg-red-700 hover:text-red-700 border-solid border-4 border-gray-600 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                    href="#"
                                    onClick={(event) => colorSelector(event)}>red</a>
                            </li>
                            <li className="">
                                <a className="rounded-b bg-blue-500 text-blue-500 hover:bg-blue-700 hover:text-blue-700 border-solid border-4 border-gray-600 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                    href="#"
                                    onClick={(event) => colorSelector(event)}>blue</a>
                            </li>
                            <li className="">
                                <a className="rounded-b bg-purple-500 text-purple-500 hover:bg-purple-700 hover:text-purple-700 border-solid border-4 border-gray-600 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                    href="#"
                                    onClick={(event) => colorSelector(event)}>purple</a>
                            </li>
                        </ul>
                    </div>
                </label>

                <input className='bg-gray-400 hover:bg-gray-500 text-white shadow-xl font-bold py-2 px-4 border border-gray-500 rounded h-15 w-20'
                    type="submit" value="Push" />

            </form>
            <br />
            <br />

            <form onSubmit={() => props.addPosValueSubmitHandler(parseInt(state.addPosValue), parseInt(state.addIndex), state.color)}>
                <div className='flex'>
                    <label>
                        <span className='text-white font-bold'>Add Value</span> <br />
                        <input className='bg-gray-200 shadow-xl w-20 mt-2' type="number" value={state.addPosValue} onChange={(event) => addPosValueHandler(event)} />
                    </label>
                    <label className='mx-5'>
                        <span className='text-white font-bold'>Position</span> <br />
                        <input className='bg-gray-200 shadow-xl w-20 mt-2' type="number" value={state.addIndex} onChange={(event) => addIndexHandler(event)} />
                    </label>
                    <input className='bg-gray-400 hover:bg-gray-500 text-white shadow-xl font-bold py-2 px-4 border border-gray-500 rounded mt-5 h-15 w-25'
                        type="submit" value="Insert At Position" />
                </div>


            </form>
            <br />
            <br />

            <form onSubmit={() => props.removeHandler(parseInt(state.removeIndex))}>
                <label>
                    <span className='text-white font-bold'>Position</span> <br />
                    <input className='bg-gray-200 shadow-xl w-20 mt-2' type="number" value={state.removeIndex} onChange={(event) => removeIndexHandler(event)} />
                </label>
                <input className='bg-gray-400 hover:bg-gray-500 text-white shadow-xl font-bold py-2 px-4 border border-gray-500 rounded mx-5 h-15 w-25'
                    type="submit" value="Remove from Position" />
            </form>

        </Auxillary>
    )
}

export default BuildControls;