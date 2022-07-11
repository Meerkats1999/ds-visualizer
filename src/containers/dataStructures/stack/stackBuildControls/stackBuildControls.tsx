import React, { useState } from 'react';
import Auxillary from '../../../../components/hoc/Auxillary';

const StackbuildControls = (props: any) => {

    const [state, setState] = useState({
        pushValue: " ",
        color: " ",
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let pushValue = event.target.value;
        setState({
            ...state,
            pushValue: pushValue
        })
    }

    let stackSizeValue = 0;
    const stackSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        stackSizeValue = parseInt(event.target.value);
        console.log(stackSizeValue);
        props.stackSizeHandler(stackSizeValue);
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
            <div className='flex'>
                <form onSubmit={() => props.pushHandler(parseInt(state.pushValue), state.color)}>
                    <label>
                        Enter Stack Size:
                        <input type="number" value={props.stackSize} onChange={(event) => stackSizeHandler(event)} />
                    </label>

                    <label>
                        Push Element:
                        <input type="number" value={props.lastPushElement} onChange={(event) => onChangeHandler(event)} />
                    </label>

                    <label className="group">
                        <div className="dropdown group-hover:text-white inline-block relative">
                            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" type='button'>
                                <span className="mr-1">Select Data Structure</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu absolute hidden group-hover:block pt-1">
                                <li className="">
                                    <a className="rounded-b bg-red-500 text-red-500 hover:bg-red-700 hover:text-red-700 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                        href="#"
                                        onClick={(event) => colorSelector(event)}>red</a>
                                </li>
                                <li className="">
                                    <a className="rounded-b bg-blue-500 text-blue-500 hover:bg-blue-700 hover:text-blue-700 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                        href="#"
                                        onClick={(event) => colorSelector(event)}>blue</a>
                                </li>
                                <li className="">
                                    <a className="rounded-b bg-purple-500 text-purple-500 hover:bg-purple-700 hover:text-purple-700 py-2 px-4 block whitespace-no-wrap h-10 w-20"
                                        href="#"
                                        onClick={(event) => colorSelector(event)}>purple</a>
                                </li>
                            </ul>
                        </div>
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