class Stack {

    stack: any;
    top: any;
    isEmpty: boolean;
    stackSize: any;

    constructor() {
        this.stack = [];
        this.top = null;
        this.isEmpty = true;
        this.stackSize = 0;
    }

    setSize(stackSize: number) {
        this.stackSize = stackSize;
    }

    push(pushElement: number, elementColor: string) {
        this.stack.push([pushElement, elementColor]);
        this.isEmpty = false;
        this.top = this.stack[this.stack.length - 1];
    }

    pop() {
        this.stack.pop();
        if (this.stack.length > 0) {
            this.isEmpty = false;
            this.top = this.stack[this.stack.length - 1];
        } else {
            this.isEmpty = true;
            this.top = null;
        }
    }

}

export default Stack;