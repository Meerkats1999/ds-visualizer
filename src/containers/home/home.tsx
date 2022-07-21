import React, { FC, useState } from "react";
import Auxillary from "../../components/hoc/Auxillary";

import NavBar from '../../components/navbar/navbar'
import Visualizer from '../../components/visualizer/visualizer';

interface dataStructure {
    dataStructure: string
}

const Home: FC = () => {

    const [dsState, setdsState] = useState<dataStructure>({
        dataStructure: ""
    })

    const dsStateHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const currentDataStructure = (event.target as HTMLInputElement).textContent?.toLowerCase();
        // console.log(currentDataStructure);
        setdsState({
            dataStructure: currentDataStructure ? currentDataStructure : ""
        })
    }

    return (
        <Auxillary>
            <NavBar selector={dsStateHandler}></NavBar>
            <div className='mx-20 my-10'>
                <Visualizer dataStructure={dsState.dataStructure}></Visualizer>
            </div>

        </Auxillary>
    );
}

export default Home;