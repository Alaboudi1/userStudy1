export const experiment = {
  assessment: {
    numberAssessmentQuestions: 9,
    Q1: {
      text: `What is the output of the code below:`,
      code: `const x = 10;\n console.log(y);`,
      answers: ["Null", "initialization error", "undefined", "an empty string", "I do not know!"]
    },
    Q2: {
      text: `How to subscribe to a click event for HTML button using the DOM API:`,
      code: ``,
      answers: [
        "button.onclick(callback)",
        "button.event().click(callback)",
        "button.addEventListener('click', callback)",
        "button.click(callback)",
        "I do not know"
      ]
    },

    Q3: {
      text: `There are many ways to handle asynchronous programming in javaScript. Which one is NOT one of these ways?:`,
      code: "",
      answers: ["Promise", "Callback", "Async/Await", "Thread", "I do not know!"]
    },

    Q4: {
      text: `In React, what is the recommended component life cycle hock to implement http request inside:`,
      code: "",
      answers: [
        "ComponentWillAttach",
        "ReactNotBusy",
        "ComponentDidMount",
        "ComponentIsReady",
        "I do not know!"
      ]
    },
    Q5: {
      text: `In React, the setState function is`,
      code: "",
      answers: [
        "Synchronous",
        "Asynchronous",
        "Prototype function",
        "Only supported for mobile",
        "I do not know!"
      ]
    },
    Q6: {
      text: `In React, setting the state triggers which function?`,
      code: "",
      answers: ["update()", "new()", "render()", "constructor()", "I do not know!"]
    },

    Q7: {
      text: `Jquery is`,
      code: "",
      answers: [
        " A Http library that makes AJAX call simpler.",
        "A JavaScript library for HTML document manipulation, event handling, animation, and Ajax.",
        "A 3D graphics library for building games in javascript.",
        "An advance ML library for javascript.",
        "I do not know!"
      ]
    },

    Q8: {
      text: `To add a node element to the DOM using Jquery, you need to use which Jquery API?`,
      code: "",
      answers: [
        "attach(element)",
        "appendChild(element)",
        "attachChild(element)",
        "add(element)",
        "I do not know!"
      ]
    },
    Q9: {
      text: `The JQuery API equivalent to document.getElementById('id').addEventListener("click",callback) is:`,
      code: "",
      answers: [
        `JQuery.attachEventTo('id').click(callback);`,
        `$("#id ).addEventListener("click", callback);`,
        "JQuery.getElement('id').addEventListener('click',callback)",
        `$("#id ).on( "click", callback);`,
        "I do not know!"
      ]
    }
  },
  example: {
    currentSubExample: 1,
    numberOfHypotheses: 1,
    example1: {
      description: `
      <h4>HTML showing broken image:</h4>
      I have the following html code and when i pull it up in my browsers the image either doesn't show up, or it shows a broken
      image.`,
      binURL1: "https://jsbin.com/toyuxih/6/edit?output",
      binURL2: "https://jsbin.com/yajuhe/1/edit?html",
      binURL3: "https://jsbin.com/yajuhe/1/edit?html,output",
      expertHypothesis1: "The path to the image is not correct.",
      evidence1:
        "Check if the path is either written correctly as absolute path or relative path  ",
      expertHypothesis2: "The image name is misspelled or the image extension in the src is wrong",
      evidence2:
        "Check the name of the image and its extension. usually the extension .png or .jpg",
      // expertHypothesis3: "the image does not contain valid permission.",
      // evidence3: "if the image has 755 permission.",
      buggyLine1: 11,
      buggyLine2: 13,
      // buggyLine3: 5
      links: [
        {
          topic: "HTML <img> Tag",
          link: "https://www.w3schools.com/tags/tag_img.asp"
        }
      ]
    },
    subExample1: {
      time: 7,
      information:
        "Please read the following bug report and write down your initial hypotheses about potential causes of the bug. In Stage 1, you have access to the bug report and the application UI. You can interact with the application through its GUI. Please write down all the hypotheses you think of."
    },
    subExample2: {
      time: 10,
      information:
        "In Stage 2, you can read the buggy code snippet as well as the listed documentation describing related framework functions and concepts (please read only the linked documentation). Based on what you learn, please update your hypothesis or hypotheses, removing hypotheses you have ruled out, adding additional hypotheses you might have, and revising hypotheses that still seem plausible."
    },
    subExample3: {
      time: 20,
      information:
        "In Stage 3,you have access to full implementation detail.Try to fix the bug and feel free to add more hypotheses."
    }
  },
  tasks: {
    numberTasks: 3,
    numberSubTasks: 3,
    subtaskInfo1: {
      time: 7,
      information:
      "Please read the following bug report and write down your initial hypotheses about potential causes of the bug. In Stage 1, you have access to the bug report and the application UI. You can interact with the application through its GUI. Please write down all the hypotheses you think of."
    },
    subtaskInfo2: {
      time: 10,
      information:
        "In Stage 2, you can read the buggy code snippet as well as the listed documentation describing related framework functions and concepts (please read only the linked documentation). Based on what you learn, please update your hypothesis or hypotheses, removing hypotheses you have ruled out, adding additional hypotheses you might have, and revising hypotheses that still seem plausible."
    },
    subtaskInfo3: {
      time: 20,
      information:
        "In Stage 3,you have access to full implementation detail.Try to fix the bug and feel free to add more hypotheses."
    },
    task1: {
      description: `
      <h3>Change Link Visibility — Event Listener with mouseover and getElementsByClassName</h3>
      I am relatively new to JavaScript.
      I've searched the internet over and found what people are calling solutions and correct scripts and fixes etc., but none of them seem to work for me so I'm clearly missing something. Been troubleshooting for hours now. Please help!
      CSS: I have created a simple two-column div (out of 12, it's floated left). I have a CSS transition in place to pull it from 2% width to 15% width (nearly the full two columns) on hover.
      HTML: I created a few test links in the div which I've hidden with a CSS class.
      JS: I am trying to use JavaScript to make them visible when the mouse is over the div. For what it's worth, I've also tried document.getElementsByClassName(menulinks").style.visibility="visible"; without any luck and I've tried accomplishing the same thing using opacity instead of visibility and that made no difference.
      Thank you.`,
      binURL1: "https://jsbin.com/vabolok/6/edit?output,console",
      binURL2: "https://jsbin.com/vabolok/7/edit?html,js,css",
      binURL3: "https://jsbin.com/vabolok/11/edit?html,css,js,console,output",
      expertHypothesis1: "Not using the correct CSS property.",
      evidence1:
        "Check if you are using the correct CSS property to change the visibility of an element. Example: visibility: 'visible' or 'hidden', or  display: 'none' or 'block'",
      expertHypothesis2: "You are using the wrong DOM API or not using getElementsByClassName correctly.",
      evidence2:
        "Check of you are using the correct DOM API. Also remember: document.getElementById returns an HTML element that has the same id, document.getElementsByClassName returns a HTMLCollection that you have to iterate over.",
      // expertHypothesis3: "You are subscribing to the wrong event.",
      // evidence3:
      //   "Make sure you spell the event name correctly(e.g. 'click' and not 'onclick'). Also, check you have used the addEventListener API correctly (e.g. element.addEventListener(event,callback))",
      buggyLine1: 2,
      buggyLine2: 5,
      // buggyLine3: 3,
      links: [
        {
          topic: "document.getElementsByClassName",
          link: "https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp"
        },
        {
          topic: "style visibility",
          link: "https://www.w3schools.com/jsref/prop_style_visibility.asp"
        },
        {
          topic: "document.addEventListener",
          link: "https://www.w3schools.com/jsref/met_document_addeventlistener.asp"
        }
      ]
    },
    task2: {
      description: `
      <h3>TypeError: this is undefined - React JS, Javascript</h3>
      I am trying to implement a simple react component which change the image on clicking. I am getting below error while loading my page which has below react component. What am i doing wrong? I am fairly new to Javascript and React JS. Error seems to be in the setstate line. 
      Error - TypeError: this is undefined`,
      binURL1: "https://jsbin.com/zojilaj/3/edit?console,output",
      binURL2: "https://jsbin.com/zojilaj/3/edit?js",
      binURL3: "https://jsbin.com/zojilaj/4/edit?js,console,output",
      expertHypothesis1: "You are not creating initial state.",
      evidence1:
        "Check if you have created initial state in the constructor. For example: this.state = {}.",
      expertHypothesis2:
        "You are not binding the scope of 'this' for the callback.",
      evidence2:
        "Check that you are binding the callback for the click event with 'this'. For example: callback.bind(this)",
      // expertHypothesis3: "You are not using setState properly.",
      // evidence3:
      //   "SetState is an asynchronous function. If you try to access the state immediately after changing it, check that you are doing it through a callback. For example, this.setState(newState, callback)",
      buggyLine1: 5,
      buggyLine2: 31,
      // buggyLine3: 20,
      links: [
        {
          topic: "Event Binding",
          link: "https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56"
        },
        {
          topic: "SetState API",
          link:
            "https://reactjs.org/docs/state-and-lifecycle.html"
        }
      ]
    },
    task3: {
      description: `<h3>Why is my if/else JS statement using jQuery not working?</h3>
      I was playing around with the code from the w3schools editor which illustrates a jQuery animate function. 
      I want to try and make this movement reversible though, so I added an if/else statement to allow the div to move back if it had already been clicked. 
      Here is my code for between the script tags:`,
      binURL1: "https://Alaboudi1.jsbin.com/nuxeheh/1/edit?output",
      binURL2: "https://Alaboudi1.jsbin.com/nuxeheh/2/edit?css,js",
      binURL3: "https://Alaboudi1.jsbin.com/nuxeheh/2/edit?css,js,console,output",
      expertHypothesis1: "You are not assigning a callback to the click event.",
      evidence1:
        "Check if you have a callback function to the click event. JQuery has this pattern: $('#htmlId').click(callback)",
      expertHypothesis2: "You not setting the new animation position correctly.",
      evidence2:
        "Check that the new position value is set correctly and in pixels. For example: 15px.",
      // expertHypothesis3: "You are binding to the wrong event.",
      // evidence3:
      //   "Check if your the correct event for triggering the animation. For example: click or hover.",
      buggyLine1: 4,
      buggyLine2: 15,
      // buggyLine3: 20,
      links: [
        { topic: "JQuery Click Event API", link: "http://api.jquery.com/click/" },
        { topic: "JQuery Animation API", link: "http://api.jquery.com/animate/" }
      ]
    }
  }
};
