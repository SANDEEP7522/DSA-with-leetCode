class MyCircularQueue {
    int[] queue;
    // Point front and rear of the queue, current size
    int front = 0, rear = 0, size = 0;

    public MyCircularQueue(int k) {
        // Create an array of size 'k' to hold the queue elements
        queue = new int[k];
        // Fill the array with -1 to indicate that all positions are initially empty
        Arrays.fill(queue, -1);
    }

    public boolean enQueue(int value) {
        // Check if the queue is full
        if (isFull()) {
            return false; // Cannot add the element if the queue is full
        }
        // If the queue is empty, set both front and rear to 0 and add the value
        if (isEmpty()) {
            front = rear = 0; // Set both pointers to the first position
            queue[rear] = value; // Add the value at the rear position
            size++; // Increase the size of the queue
            return true;
        }

        rear++;

        size++;
        rear = rear % queue.length;
        // Add the new value at the updated rear position
        queue[rear] = value;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }
        // Optionally reset the value at the front position to -1
        queue[front] = -1;
        size--;
        front++;
        front = front % queue.length;
        return true;
    }

    public int Front() {
        return queue[front];
    }

    public int Rear() {
        return queue[rear];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == queue.length;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k); // Create a new circular queue
 * with size k
 * boolean param_1 = obj.enQueue(value); // Add a value to the queue
 * boolean param_2 = obj.deQueue(); // Remove an element from the queue
 * int param_3 = obj.Front(); // Get the front element of the queue
 * int param_4 = obj.Rear(); // Get the rear element of the queue
 * boolean param_5 = obj.isEmpty(); // Check if the queue is empty
 * boolean param_6 = obj.isFull(); // Check if the queue is full
 */
