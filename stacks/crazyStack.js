const crazyLinkedListForward = require("../linkedList/crazyLinkedList");
const stack = require("./stacks");
const crazyStack = new stack();
const prompt = require("prompt");
crazyLinkedListForward.forEvery((node) => {
  crazyStack.push(node.value);
});

function xBottlesOfBeer(stack, calls = 0) {
  let x = stack.top.value;
  console.log(`${x} bottles of beer on the wall..`);
  setTimeout(() => {
    console.log(`${x} bottles of beer !`);
  }, [1500]);
  setTimeout(() => {
    console.log(`You take one down..`);
    stack.pop();
    x = stack.top.value;
  }, [3000]);
  setTimeout(() => {
    console.log(`pass it around..`);
  }, [4000]);
  setTimeout(() => {
    console.log(`${x} bottles of beer on the wall!`);
  }, [5000]);
  setTimeout(() => {
    if (calls === 2 && stack.top.value > 100) {
      let message =
        "We've got a long way to go, are you sure you want to do this?";

      prompt.get([message], (err, res) => {
        result = Object.values(res)[0];
        if (result === "y" || result === "yes") {
          console.log("Hurray!");
          if (x) xBottlesOfBeer(stack, calls + 1);
        } else {
          console.log("yeah thats probably a good idea..");
        }
      });
    } else {
      if (x) xBottlesOfBeer(stack, calls + 1);
    }
  }, [7000]);
}

xBottlesOfBeer(crazyStack);
