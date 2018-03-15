export const experiment = {
  assessment: {
    numberAssessmentQuestions: 8,
    Q1: {
      text: `What is the output of the code below:`,
      code: `const t = 10;\nconsole.log(x); // x is not initialized`,
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
      code: `const a = [5,10,10,10];\nconst result = a.reduce((a,b)=> a+b, 1);\nconsole.log(result);`,
      answers: ["Null", "35", "36", "39", "I do not know"]
    },
    Q3: {
      text: `In React, what is the recommended component life cycle hock to implement http request  :`,
      code: "",
      answers: [
        "ComponentWillAttach",
        "ReactNotBusy",
        "ComponentDidMount",
        "ComponentIsReady",
        "I do not know!"
      ]
    },
    Q4: {
      text: `In React, the setState function is`,
      code: "",
      answers: [
        "synchronous",
        "asynchronous",
        "prototype function",
        "only supported for mobile",
        "I do not know!"
      ]
    },
    Q5: {
      text: `There are many ways to handle asynchronous programming in javaScript. Which one is not one of these ways?:`,
      code: "",
      answers: [
        "Promise",
        "callback",
        "async/await",
        "thread",
        "I do not know!"
      ]
    },

    Q6: {
      text: `D3.js is`,
      code: "",
      answers: [
        " a JavaScript library for manipulating documents based on data",
        "an Http library that makes AJAX call simpler",
        "a 3D graphics library for building games in javascript",
        "an advance ML library for javascript",
        "I do not know!"
      ]
    },

    Q7: {
      text: `To add a node element to the DOM using D3, you need to you which D3 API`,
      code: "",
      answers: [
        "attach()",
        "appendChild()",
        "attachChild()",
        "append()",
        "I do not know!"
      ]
    },
    Q8: {
      text: `The D3 API equivalent to document.getElementById('id')`,
      code: "",
      answers: [
        "d3.select('#id')",
        "d3.get('id')",
        "d3.selectById('id')",
        "d3.getElement('#id')",
        "I do not know!"
      ]
    }
  },
  tasks: {
    numberTasks: 4,
    numberSubTasks: 3,
    task1: {
      description: `I'm trying to make a shopping cart using JS and one of my tasks is to create a placeOrder function.
      <ul><li>The placeOrder() function accepts one argument, a credit card number.</li> 
      <li>If no argument is received, the function should print out Sorry, we don't have a credit card on file for you.</li>
      <li>If a card number is received, the function should print out Your total cost is $71, which will be charged to the card 83296759. Then, it should empty the cart array.</li>
      </ul>
      However, when I call in the total function into the string keeps returning undefined.`,
      binURL1: "https://jsbin.com/xaxodeg/edit?console,output",
      binURL2: "https://jsbin.com/xaxodeg/edit?js",
      binURL3: "https://jsbin.com/xaxodeg/edit?js,console,output"
    },
    task2: {
      description: `I am relatively new to JavaScript.
      I've searched the internet over and found what people are calling solutions and correct scripts and fixes etc., but none of them seem to work for me so I'm clearly missing something. Been troubleshooting for hours now. Please help!
      CSS: I have created a simple two-column div (out of 12, it's floated left). I have a CSS transition in place to pull it from 2% width to 15% width (nearly the full two columns) on hover.
      HTML: I created a few test links in the div which I've hidden with a CSS class.
      JS: I am trying to use JavaScript to make them visible when the mouse is over the div. For what it's worth, I've also tried document.getElementsByClassName(menulinks").style.visibility="visible"; without any luck and I've tried accomplishing the same thing using opacity instead of visibility and that made no difference.
      Thank you.`,
      binURL1: "https://Alaboudi1.jsbin.com/vabolok/6/edit?output",
      binURL2: "https://Alaboudi1.jsbin.com/vabolok/7/edit?html,js",
      binURL3: "https://jsbin.com/vabolok/8/edit?html,output,js,console"
    },
    task3: {
      description: `
      <h3>React Multiple Fetch from state </h3>
      so I am trying to fetch from dogs API twice using the dog type to get the dog image  but I just get "TypeError: Cannot read property 'message' of undefined". Im fairly new to React so if it looks messy im sorry! Thanks in advance!`,
      binURL1: "https://jsbin.com/qazoyis/47/edit?console,output",
      binURL2: "https://Alaboudi1.jsbin.com/qazoyis/51/edit?js",
      binURL3: "https://Alaboudi1.jsbin.com/qazoyis/52/edit?js,console,output"
    },
    task4: {
      description: `<h3>d3.js Histogram does not show columns</h3>
      I am trying to create a d3 histogram but the columns are not showing up. I am new to d3 and have hours spent trying to figure it out with no success.`,
      binURL1: "https://Alaboudi1.jsbin.com/vinuram/12/edit?output",
      binURL2: "https://Alaboudi1.jsbin.com/vinuram/13/edit?js",
      binURL3: "https://Alaboudi1.jsbin.com/vinuram/14/edit?js,console,output"
    }
  }
};

