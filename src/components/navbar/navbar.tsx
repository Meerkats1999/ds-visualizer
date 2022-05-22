import React from 'react';

import styles from './navbar.module.css';
import Auxillary from '../hoc/Auxillary';

const navBar = (props: any) => {

    return (
        <Auxillary>
            <nav className="flex items-center flex-wrap bg-teal-500 p-6">

                <li className="flex items-center flex-shrink-0 text-white mr-10">
                    <span className="font-semibold text-xl tracking-tight">Data Structure Visualizer</span>
                </li>

                <li className="list-none">
                    <div className="group">
                        <div className="dropdown group-hover:text-white inline-block relative">
                            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                <span className="mr-1">Select Data Structure</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu absolute hidden group-hover:block text-gray-700 pt-1">
                                <li className="">
                                    <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                        onClick={(event) => props.selector(event)}>Stack</a>
                                </li>
                                <li className="">
                                    <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                        onClick={(event) => props.selector(event)}>Queue</a>
                                </li>
                                <li className="">
                                    <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                        href="#"
                                        onClick={(event) => props.selector(event)}>Linked List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li >

            </nav >

        </Auxillary >
    );
}

export default navBar;
