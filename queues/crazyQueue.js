const Queue = require("./queues");
const crazyLinkedListForward = require("../linkedList/crazyLinkedList");

const crazyQueue = new Queue();

crazyLinkedListForward.forEvery((node) => {
  crazyQueue.enqueue(node.value);
});

//go through que and remove every number that isnt a prime number
//this function is limited to 100 because going past that takes an incredible amount of time 
//(f(n) = n^2) 
function isAPrime(number) {
    if (number>100) return false
    if (number === 1) return false
  console.log("number", number);
  for (let x = 1; x < number; x++) {
    console.log("x", x);
    for (let y = 1; y < number; y++) {
      console.log("y", y);
      if (x != number && x != 1 && y != number && y != 1) {
        console.log(`multiplying ${x} and ${y}`);
        if (x * y === number) {
          return false;
        }
      }
    }
  }

  return true;
}

function filterPrimes(queue) {
  //const result = new Queue();
  const result = [];

  while (queue.first) {
    const dequeued = queue.dequeue();
    if (isAPrime(dequeued)) {
      //result.enqueue(dequeued)
      result.push(dequeued);
    }
  }
  return new Set(result);
}

const simpleQueue = new Queue();



//console.log(crazyQueue);
console.log("result", filterPrimes(crazyQueue));
