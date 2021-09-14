// create a linked list from set exported in sets.js
const crazySet = require("../sets");
const LinkedList = require("./linkedLists");
//console.log(crazySet);

const crazyLinkedListBackwards = new LinkedList();

crazySet.forEach((item) => {
  crazyLinkedListBackwards.insertAtHead(item);
});

//notice the first item got pushed to to the end of the linked list
//the last item in the list is not the head
//console.log(crazyLinkedList)

const crazyLinkedListForward = new LinkedList();
const simple = new Set([1.1, 3.3, 5.5, 7.7, 9.9, 25]);

for (let value of crazySet.values()) {
  crazyLinkedListForward.insertAtEnd(value);
}
//this created a linked list with the same orientation as the set
//console.log(crazyLinkedListForward)

const find1214 = crazyLinkedListForward.find((node) => node.value === 1214.25);
//console.log(find1214)
const find121 = crazyLinkedListForward.find((node) => node.value === 121);
//console.log(find121)

crazyLinkedListForward.insert(26, (node) => node.value === 25);
const isMatch26 = (node) => node.value === 26;
let find26 = crazyLinkedListForward.find(isMatch26);
//console.log("you just inserted 26",find26)

let find26WithPrevious = crazyLinkedListForward.findWithPrevious(isMatch26);
//console.log("here is the node and the previous node", find26WithPrevious)

crazyLinkedListForward.remove(isMatch26);
find26 = crazyLinkedListForward.find(isMatch26);
//console.log("you just removed 26, here is proof", find26)

//lets fill in the blanks and cut off the decimals
//start by cutting the decimals

crazyLinkedListForward.forEvery((node) => {
  node.value = Math.trunc(node.value);
});

//fill in the blanks

crazyLinkedListForward.forEvery((node) => {
  //find previous node
  const [current, previous] = crazyLinkedListForward.findWithPrevious(
    (subject) => subject.value === node.value
  );
//create an array to store the missing nodes before the current node
  let missingNodes = [];

  //push missing nodes to the missing node array
  //(if there is a current value and a previous value, 
  //find the difference and push 1 to difference)
  //(if there is no previous node, its the head, so  
  // push 1 the value of the current node)
  if (current != null) {
    let difference;
    if (previous != null) {
      difference = current.value - previous.value;
    } else {
      difference = current.value;
    }
    for (let x = 0; x < difference; x++) {
      if (previous != null) {
        if (x != 0) missingNodes.push(x + previous.value);
      } else {
        if (x != 0) missingNodes.push(x);
      }
    }
  }

//iterate through the node array, pushing the values to the 
//list in the proper place
  if (missingNodes[0] === 1) {
    crazyLinkedListForward.insertAtHead(missingNodes.splice(0, 1)[0]);
    while (missingNodes.length) {
      const firstItem = missingNodes.splice(0, 1);
      crazyLinkedListForward.insert(
        firstItem[0],
        (node) => node.value === firstItem - 1
      );
    }
  } else {
    while (missingNodes.length) {
      const firstItem = missingNodes.splice(0, 1);
      crazyLinkedListForward.insert(
        firstItem[0],
        (node) => node.next === current
      );
    }
  }
});

//for every node
const finalArray = [];
crazyLinkedListForward.forEvery((node) => {
  finalArray.push(node.value);
});

//console.log(finalArray);

module.exports = crazyLinkedListForward