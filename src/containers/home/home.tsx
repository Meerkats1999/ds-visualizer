import React, { FC, useState } from "react";
import Auxillary from "../../components/hoc/Auxillary";

import NavBar from '../../components/navbar/navbar'
import Visualizer from "../visualizer/visualizer";

interface dataStructure {
    dataStructure: string
}

const Home: FC = () => {

    const [dsState, setdsState] = useState<dataStructure>({
        dataStructure: ""
    })

    const dsStateHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const currentDataStructure = (event.target as HTMLInputElement).textContent?.toLowerCase();
        console.log(currentDataStructure);
        setdsState({
            dataStructure: currentDataStructure ? currentDataStructure : ""
        })
    }

    return (
        <Auxillary>
            <NavBar selector={dsStateHandler}></NavBar>
            <Visualizer dataStructure={dsState.dataStructure}></Visualizer>
        </Auxillary>
    );
}

export default Home;