import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import StackBuildControls from './stackBuildControls/stackBuildControls';

const stack = () => {
    return (
        <Auxillary>
            <StackBuildControls />
            <p>Stack</p>
        </Auxillary>
    );
}

export default stack;