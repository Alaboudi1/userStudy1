module.exports = {
  assessment: {
    numberAssessmentQuestions: 2,
    Q1: {
      text: `What is the output of the code below:`,
      code:`const t = 10;\nconsole.log(x); // x is not initialized`,
      answers: [
        "Null",
        "initialization error",
        "undefined",
        "an empty string",
        "I do not know!"
      ]
    },

    Q2: {
      text: `What is the output of the code below:`,
      code :`const a = [5,10,10,10];\nconst result = a.reduce((a,b)=> a+b, 1);\nconsole.log(result);`,
      answers: ["Null", "35", "36", "39", "I do not know"]
    }
  },
  tasks: {
    numberTasks: 1,
    numberSubTasks: 2,
    task1: {
      description: `I'm trying to make a shopping cart using JS and one of my tasks is to create a placeOrder function.
      <ul><li>The placeOrder() function accepts one argument, a credit card number.</li> 
      <li>If no argument is received, the function should print out Sorry, we don't have a credit card on file for you.</li>
      <li>If a card number is received, the function should print out Your total cost is $71, which will be charged to the card 83296759. Then, it should empty the cart array.</li>
      </ul>
      However, when I call in the total function into the string keeps returning undefined.`,
      binURL1: "https://jsbin.com/xaxodeg/edit?console,output",
      binURL2: "https://jsbin.com/xaxodeg/edit?html,js,console,output",
    },
    task2: {
      description: "This the problem",
      binURL: ""
    }
  }
};
