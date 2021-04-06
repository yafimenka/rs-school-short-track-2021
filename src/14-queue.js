const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = new ListNode(undefined);
    this.last = this.list;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.last.value = element;
    this.last.next = new ListNode(undefined);
    this.last = this.last.next;
    this.length++;
  }

  dequeue() {
    const currentValue = this.list.value;
    this.list = this.list.next;
    this.length--;
    return currentValue;
  }
}

module.exports = Queue;
