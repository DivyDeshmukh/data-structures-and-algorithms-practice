// Singly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    // traverse
    traverse() {
        let current = this.head;
        while (current) {
            console.log("Current Value: ", current.value);
            current = current.next;
        }
    }

    appendAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    appendAtTail(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    appendAtIndex(value, index) {
        if(index === 0) {
            this.appendAtHead(value);
            return;
        }

        const newNode = new Node(value);

        let current = this.head;
        let prev = null;
        let currentIndex = 0;

        while(current !== null && currentIndex < index) {
            prev = current;
            current = current.next;
            currentIndex++;
        }

        if (prev === null) {
            throw new Error("Index out of bounds");
        }

        newNode.next = current;
        prev.next = newNode;
    }

    search(value) {
        let current = this.head;
        while(current) {
            if (current.value === value) return current;
            current = current.next;
        }

        return null;
    }

    deleteHead () {
        if (!this.head) return null;
        this.head = this.head.next;
    }

    delete(value) {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    reverse() {
        if (!this.head) return null;
        let prev = null;
        let current = this.head;

        while(current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.head = prev;
    }

    hasCycle = function(head) {
        // only valid if all elements are unique
        // let set = new Set();

        // let current = head;
        // while(current) {
        //     let value = current.value;
        //     if (set.has(value)) {
        //         return true;
        //     }

        //     set.add(value);
        //     current = current.next;
        // }

        // return false;

        if(!head || (head && !head.next)) return false;

        // let fast = head.next;
        // let slow = head;

        // while ((slow !== fast) && (fast !== null && fast.next !== null) && (slow !== null && slow.next !== null)) {
        //     fast = fast.next.next;
        //     slow = slow.next;
        // }

        // if (slow === fast) return true;

        // return false;

        // Floyd's Logic
        let fast = head;
        let slow = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast == slow) return true;
        }

        return false;
    }

    middleNode = function(head) {
        // let count = 0;
        // let current = head;
        // while(current) {
        //     current = current.next;
        //     count++;
        // }

        // let mid = Math.ceil((count+1)/2);

        // current = head;
        // while(mid > 1) {
        //     current = current.next;
        //     mid--;
        // }

        // return current;

        let fast = head;
        let slow = head;

        let current = head;
        while(fast !== null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    };
};

const linkedList = new LinkedList();
linkedList.appendAtTail(10);
linkedList.appendAtTail(20);
linkedList.appendAtTail(30);
linkedList.appendAtTail(40);

linkedList.traverse();
linkedList.delete(30);
linkedList.traverse();
linkedList.appendAtIndex(30, 5);
linkedList.reverse();
linkedList.traverse();