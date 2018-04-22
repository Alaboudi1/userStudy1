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
      binURL2: "https://Alaboudi1.jsbin.com/budihaquci/1/edit?html",
      binURL3: "https://Alaboudi1.jsbin.com/budihaquci/1/edit?html,output",
      expertHypothesis1: "The path to the image is not correct.",
      evidence1:
        "check if the path is either written correctly as absolute path or relative path  ",
      expertHypothesis2: "The image name is misspelled or the image extension in the src is wrong",
      evidence2:
        "check the name of the image and its extension. usually the extension .png or .jpg",
      expertHypothesis3: "the image does not contain valid permission.",
      evidence3: "if the image has 755 permission.",
      buggyLine1: 10,
      buggyLine2: 12,
      buggyLine3: 5
    },
    subExample1: {
      time: 7,
      information:
        "Here you only have access to the bug report and the application UI. You can interact with the application via the GUI. Please write as many hypotheses as you can think."
    },
    subExample2: {
      time: 7,
      information:
        "Below is the code for the bug report you just viewed. At this stage, you may read the code, but may not run the code. Based on what you learn from reading the code, please update your hypothe(s), removing hypotheses you have ruled out, adding additional hypotheses you might have, and revising hypotheses that still seem plausible."
    },
    subExample3: {
      time: 15,
      information:
        "You have access to full implementation detail.Try to fix the bug and feel free to add more hypotheses."
    }
  },
  tasks: {
    numberTasks: 3,
    numberSubTasks: 3,
    subtaskInfo1: {
      time: 7,
      information:
        "Here you only have access to the bug report and the application UI. You can interact with the application via the GUI. Please write as many hypotheses as you can think."
    },
    subtaskInfo2: {
      time: 7,
      information:
        "Below is the code for the bug report you just viewed. At this stage, you may read the code, but may not run the code. Based on what you learn from reading the code, please update your hypothe(s), removing hypotheses you have ruled out, adding additional hypotheses you might have, and revising hypotheses that still seem plausible."
    },
    subtaskInfo3: {
      time: 15,
      information:
        "You have access to full implementation detail.Try to fix the bug and feel free to add more hypotheses."
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
      binURL1: "https://Alaboudi1.jsbin.com/vabolok/6/edit?output,console",
      binURL2: "https://Alaboudi1.jsbin.com/vabolok/7/edit?html,js,css",
      binURL3: "https://jsbin.com/vabolok/11/edit?html,css,js,console,output",
      expertHypothesis1: "Not using the correct CSS property.",
      evidence1:
        "Check if you are using the correct CSS property to change the visibility of an element. Example: visibility: 'visible' or 'hidden', or  display: 'none' or 'block'",
      expertHypothesis2: "You are using the wrong DOM API or not using it correctly.",
      evidence2:
        "Check of you are using the correct DOM API. Also remember: document.getElementById returns an HTML element that has the same id, document.getElementsByClassName returns a HTMLCollection that you have to iterate over.",
      expertHypothesis3: "You are subscribing to the wrong event.",
      evidence3:
        "make sure you spell the event name correctly(e.g. 'click' and not 'onclick'). Also, check you have used the addEventListener API correctly (e.g. element.addEventListener(event,callback))",
      buggyLine1: 2,
      buggyLine2: 5,
      buggyLine3: 3,
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
      <h3>React Multiple Fetch from state </h3>
      so I am trying to fetch from dogs API twice using the dog type to get the dog image  but I just get "TypeError: Cannot read property 'message' of undefined". Im fairly new to React so if it looks messy im sorry! Thanks in advance!`,
      binURL1: "https://jsbin.com/qazoyis/47/edit?console,output",
      binURL2: "https://Alaboudi1.jsbin.com/qazoyis/57/edit?js",
      binURL3: "https://Alaboudi1.jsbin.com/qazoyis/60/edit?js,console,output",
      expertHypothesis1: "You have a fetching dependency.",
      evidence1:
        "Check if you have two or more unchain fetch calls but they have dependency in their contents. For example you are using an object inside the second fetch that suppose to arrive from the first fetch.",
      expertHypothesis2:
        "You are trying to access an object that is still being downloaded from the server.",
      evidence2:
        "Check that you are only accessing the object after making sure that it is available. For example, check if you have a condition that assure whether the object you are trying to access is not undefined",
      expertHypothesis3: "you are not using setState properly.",
      evidence3:
        "setState is an asynchronous function. If you try to access the state immediately after changing it, check that you are doing it through a callback. For example, this.setState(newState, callback)",
      buggyLine1: 42,
      buggyLine2: 65,
      buggyLine3: 38,
      links: [
        {
          topic: "Http Fetch API",
          link: "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"
        },
        {
          topic: "Conditional Rendering",
          link: "https://reactjs.org/docs/conditional-rendering.html"
        },
        {
          topic: "SetState API",
          link:
            "https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous"
        }
      ]
    },
    task3: {
      description: `<h3>Why is my if/else JS statement using jQuery not working?</h3>
      I was playing around with the code from the w3schools editor which illustrates a jQuery animate function. 
      I want to try and make this movement reversible though, so I added an if/else statement to allow the div to move back if it had already been clicked. 
      Here is my code for between the script tags:`,
      binURL1: "https://Alaboudi1.jsbin.com/nuxeheh/1/edit?output",
      binURL2: "https://Alaboudi1.jsbin.com/nuxeheh/2/edit?html,css,js",
      binURL3: "https://Alaboudi1.jsbin.com/nuxeheh/2/edit?html,css,js,output",
      expertHypothesis1: "You are not assigning a callback to the click event.",
      evidence1:
        "Check if you have a callback function to the click event. JQuery has this pattern: $('#htmlId').click(callback)",
      expertHypothesis2: "You not setting the new animation position correctly.",
      evidence2:
        "Check that the new position value is set correctly and in pixels. For example: 15px.",
      expertHypothesis3: "You are binding to the wrong event.",
      evidence3:
        "Check if your the correct event for triggering the animation. For example: click or hover.",
      buggyLine1: 4,
      buggyLine2: 15,
      buggyLine3: 20,
      links: [
        { topic: "JQuery Click Event API", link: "http://api.jquery.com/click/" },
        { topic: "JQuery Animation API", link: "http://api.jquery.com/animate/" }
      ]
    }
  }
};
