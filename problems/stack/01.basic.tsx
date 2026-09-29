// follows the LIFO princinple 
// Stack is a linear data structure that follows the Last In First Out (LIFO) principle. It means that the last element added to the stack will be the first one to be removed.

// Implementation using Arrays

class ArrayStack{
    private stack:number[]
    private top:number;
    private capacity:number;

    constructor(capacity:number){
        this.stack = new Array<number>(capacity);
        this.top = -1;
        this.capacity = capacity;
    }

    // oprations
    push(value:number):void{
        if(this.top ===  this.capacity - 1){
            console.log("Stack overflow")
            return
        }
        this.stack[++this.top] = value
    }

    pop(){
        if(this.top === -1){
            console.log("Stack Underflow")
        }
        return this.stack[this.top--]
    }

    peak():number{
        if(this.top === -1){
            console.log("Stack is empty")
            return -1;
        }
        return this.stack[this.top]
    }

    isEmpty():boolean{
        return this.top === -1
    }
}


// Stack Using LL
class StackNode { 
    value:number;
    next: StackNode | null;

    constructor(value:number){
        this.value = value
        this.next = null
    }
}

//  poitning mindmap
// 10 <- 20 <- 30 <- 40 <- 50
class LinkedListStack{
    private head: StackNode | null

    constructor(){
        this.head = null
    }
    
    push(value:number):void{
        const node = new StackNode(value)
        node.next = this.head
        this.head = node
    }

    pop():number{
        if(this.head === null){
            console.log("Stack Underflow");
            return -1;
        }
        const value = this.head.value;
        this.head = this.head.next
        return value
    }

    peak():number{
        if(this.head === null) return -1;
        return this.head.value
    }


    isEmpty(): boolean {
        return this.head === null;
    }
}


// built in stack in ts
const stack: number[] = []
stack.push(1)
stack.push(2)
stack.push(3)
const tophead:number = stack[stack.length - 1] // peak
stack.pop() // removes the top element