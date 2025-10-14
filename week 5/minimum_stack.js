class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const container = [];
        let minimum = this.stack[this.stack.length - 1];

        while (this.stack.length > 0) {
            minimum = Math.min(minimum, this.stack[this.stack.length - 1]);
            container.push(this.stack.pop());
        }

        while (container.length > 0) {
            this.stack.push(container.pop());
        }

        return minimum;
    }
}