##Question 1

Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}

###ANSWER: 
Because JS starts with a compiling phase in which it goes through the code and sets aside functions as well as variables, once it runs the code it is already aware of the function and can run it.  I did say that it sets aside variables as well but it leaves them undefined until the code runs.

##Question 2

Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();

###ANSWER:
It can't be executed until the code runs because the function is assigned to printGreeting.  During the compiling phase JS sets aside printGreeting however it only sets it aside as undefined until it runs the code.