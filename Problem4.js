function createCounter() {
  // Private state stored in closure scope
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    // Getter property allows reading count via counter.value
    get value() {
      return count;
    },
  };
}

// Test case from assignment
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined — not directly accessible