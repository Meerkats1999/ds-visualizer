class Queue {

    queue: any;
    top: any;
    isEmpty: boolean;
    queueSize: any;

    constructor() {
        this.queue = [];
        this.top = null;
        this.isEmpty = true;
        this.queueSize = 0;
    }

    setSize(value: number) {
        this.queueSize = value;
    }

    enQueue(value: number, elementColor: string) {
        this.queue.push([value, elementColor]);
        this.isEmpty = false;
        this.top = this.queue[this.queue.length - 1];
    }

    deQueue() {
        this.queue.shift();
        if (this.queue.length > 0) {
            this.isEmpty = false;
            this.top = this.queue[this.queue.length - 1];
        } else {
            this.top = null;
            this.isEmpty = true;
        }
    }

}

export default Queue;