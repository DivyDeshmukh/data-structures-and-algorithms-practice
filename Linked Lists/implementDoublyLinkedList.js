class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFront(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
    }

    insertEnd(value) {
        const node = new Node(value);

        if(!this.tail) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    deleteFront() {
        if (!this.head) return null;

        const val = this.head.value;
        this.head = this.head.next;

        if (this.head) this.head.prev = null;
        else this.tail = null;

        this.length--;
        return val;
    }

    deleteEnd () {
        if (!this.head) return null;
        const val = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail) this.tail.next = null;
        else this.head = null;

        this.length--;
        return val;
    }

    traverse () {
        if (!this.head) return null;

        let current = this.head;
        let nodeCount = 1;

        while (current !== null) {
            console.log(`Node ${nodeCount}: ${current.value}`);
            current = current.next;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertEnd(10);
doublyLinkedList.insertEnd(20);
doublyLinkedList.insertEnd(30);
doublyLinkedList.insertEnd(40);
doublyLinkedList.traverse();
console.log(doublyLinkedList.deleteFront());
doublyLinkedList.traverse();
doublyLinkedList.insertFront(10);
doublyLinkedList.traverse();
console.log(doublyLinkedList.deleteEnd());
doublyLinkedList.traverse();
doublyLinkedList.insertEnd(40);
doublyLinkedList.traverse();
