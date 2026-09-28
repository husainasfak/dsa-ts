/*
Linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. Each element of a linked list is called a node. 
Each node has two parts: 
- data and a pointer to the next node. 
- The last node has a pointer to null.

Types 
Singly Linked List: Each node has a pointer to the next node. The last node has a pointer to null.
Doubly Linked List: Each node has a pointer to the next node and a pointer to the previous node. The last node has a pointer to null.
Circular Linked List: Each node has a pointer to the next node. The last node has a pointer to the first node.

*/

// Singly Linked List
class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Doubly Linked List
class DoublyListNode {
    value: number;
    next: DoublyListNode | null;
    prev: DoublyListNode | null
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Circular Linked List
class CircularListNode {
    value: number
    next: CircularListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = this; // initally points to itself
    }
}



// Traversing a linked list

function traverseSinglyLinkedList(head: ListNode | null): void {
    let current: ListNode | null = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}


function traverseCircularLinkedList(head: CircularListNode | null): void {
    if (!head) return;
    let current: CircularListNode = head;
    do {
        console.log(current.value);
        current = current.next!;
    }
    while (current !== head);
}

// Search
function searchSinglyLinkedList(head: ListNode | null, target: number): boolean {
    let current: ListNode | null = head;
    while (current) {
        if (current.value === target) {
            return true;
        }
        current = current.next;
    }
    return false;
}

// Insertion
// At the beginning
function insertAtBeginning(head: ListNode | null, value: number): ListNode {
    const newNode = new ListNode(value);
    newNode.next = head;
    head = newNode;
    return newNode;
}

function insertAtEnd(head: ListNode | null, value: number): ListNode {
    const newNode = new ListNode(value);
    if (!head) {
        head = newNode;
        return newNode;
    }
    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

function insertAtPosition(head: ListNode | null, value: number, position: number): ListNode {
    const newNode = new ListNode(value);
    if (position === 0) {
        newNode.next = head;
        head = newNode;
        return newNode;
    }
    let current = head;
    let prev: ListNode | null = null;
    let index = 0;
    while (current && index < position) {
        prev = current;
        current = current.next;
        index++;
    }
    if (prev) {
        prev.next = newNode;
    }
    newNode.next = current;
    return head!;
}

// delete
function deleteNode(
    head: ListNode | null,
    target: number
): ListNode | null {

    // Case 1: Empty list
    if (!head) return null;

    // Case 2: Target is the first node
    if (head.value === target) {
        return head.next;
    }

    // Case 3: Search for the node before target
    let current = head;

    while (
        current.next &&
        current.next.value !== target
    ) {
        current = current.next;
    }

    // Case 4: Skip the target node
    if (current.next) {
        current.next = current.next.next;
    }

    // Return the updated list
    return head;
}