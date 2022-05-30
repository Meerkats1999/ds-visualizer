import React from 'react';

import LinkedListBuilder from './linkedListBuilder';

const buildControls = () => {

    var ll = new LinkedListBuilder();

    ll.add(10);

    ll.printList();

    ll.add(20);
    ll.add(30);
    ll.add(40);
    ll.add(50);

    ll.printList();

    ll.insertAt(60, 2);

    ll.printList();

    console.log(ll.removeFrom(3));

    ll.printList();


    return (
        <p>BuildControls</p>
    )
}

export default buildControls