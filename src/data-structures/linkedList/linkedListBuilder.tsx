import LinkedListNode from './LinkedListNode';

class LinkedListBuilder {
    head: any;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element: any) {
        const node = new LinkedListNode(element);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element: any, index: any) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            const node = new LinkedListNode(element);
            let curr, prev;

            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index: any) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

export default LinkedListBuilder;