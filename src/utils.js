//@ts-check
const html = String.raw;
// @ts-ignore
import exampleImage from "./example.png";
// @ts-ignore
import task1 from "./task1.png";
// @ts-ignore
import task2 from "./task2.png";
// @ts-ignore
import task3 from "./task3.gif";

export const welcome = () => html`
<div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">Thank you for participating in this study! The study will take around two hours to complete. The aim here is to carefully examine the debugging activity through understanding how developers generate and use hypotheses about the cause of a bug.
    </p>
    
    <h2>A Story:</h2>
    <p class="lead"> Once upon a time, you were sitting on your desk trying to write down your one billion worth application :). Then an ugly bug showed up to ruin your dream of selling your application to Google. The bug threw "NullPointerException" error message and then crashed your application.
    You set back and started thinking about what could cause this bug. Your first hypothesis was that it must be a null value in the array which causes my application to crash when the reading process happened. You went and checked every value in the array to see if there is any null value there.
    To your surprise, you have not found any null values in the array. 
    Desperate, you reached out to a friend and described your application buggy behavior and the error message you got. 
    Your friend proposed a hypothesis that this bug happened because you were accessing the array with an index that was greater than its capacity. 
    You went back and checked the value of the index variable, and it was 10, and your array length was 8. You fixed that bug and now your application is working and ready to be sold to Google. The End.
    </p>
    <h2>The Study:</h2>
    <p class="lead"> 
    The above story is not fictional. It happened to almost all of us with some variations. We come across a bug, and we hypothesize that the bug occurs because of a particular wrong implementation we did in the code. Then we spend some time testing this hypothesis to see if this is the real cause of the bug. If we are unable to fix the bug, we seek help from colleagues or online developers community such as StackOverflow. The help can in a form of hypotheses that we can use to fix the bug.
 In this study, we want to investigate this phenomenon by asking you to complete three tasks that each contains a buggy application taken from StackOverflow. Each task, you will be asked to write down your hypotheses, and how you would go about testing these hypotheses before you use them to try to fix the bug in the application. If you are unable to fix the bug using your hypotheses, you may have access to expert help by clicking the expert help button. 
    </p>
    <p class="lead"> 
    In more detail, each task has three stages. In the first stage, you will be asked to write down your hypotheses and the hypotheses testing steps by only having access to the bug report, the application user interfaces and a picture of the correct output. In the second stage, you will be asked to generate more hypotheses after gaining access to the source code, but you will be not able to debug the code yet. In the third subtask, you will be asked to fix the bug by trying your hypotheses. You also can debug the application using the conventional 'console.log' statements. If you are not able to fix the bug using your hypotheses, and you are not able to generate any more hypotheses, you can check if you have the option to get expert help. The expert help will be either a set of potential buggy lines or pre-generated hypotheses about the cause of the bug.
    </p>
      <p class="lead">
     <b> Click Example button to start with an example of the experiment. </b>
    </p>
    <div style="width: 500px; margin:auto;">
        <button id="ExampleStart" data-role="assessment" class="btn btn-primary btn-lg btn-block"> Example</button>
        <br>
    </div>
`;

export const assessment = (assessment, participant) => {
  const question = assessment["Q" + participant.current.question];
  const questionHTML = html`
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Question Number ${participant.current.question}/${
    assessment.numberAssessmentQuestions
  }
        </h1>
        <p class="lead">
            <div class="text-justify"> ${question.text}</div>
            <pre><code class=" javascript keyword text-success">${question.code}</code></pre>
            <br>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer1" name="assessment" value= ${question.answers[0].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer1" class="custom-control-label">${question.answers[0]}
                </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer2" name="assessment" value= ${question.answers[1].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer2" class="custom-control-label">${question.answers[1]}
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer3" name="assessment" value= ${question.answers[2].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer3" class="custom-control-label">${question.answers[2]}
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer4" name="assessment" value= ${question.answers[3].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer4" class="custom-control-label">${question.answers[3]}
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer5" name="assessment" value= ${question.answers[4].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer5" class="custom-control-label">${question.answers[4]}
                </label>
            </div>
            <br>
            <br>
        </p>
    </div>
    <div style="width: 500px; margin:auto;">
        <button id="button" data-role="assessment" class="btn btn-primary btn-lg btn-block"> submit</button>
        <br>
    </div>
</div>

      `;

  return questionHTML;
};

///////
export const task = (tasks, participant) => {
  const task = tasks["task" + participant.current.task];
  const hypotheses =
    participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`][
      "hypotheses"
    ];
  const taskHTML = html`
<div class="jumbotron jumbotron-fluid" style="padding:10px">
    <h1 class="display-4">Task # ${participant.current.task}</h1>
    <h3>Stage # ${participant.current.subtask}</h3>
    <p class="lead"> Please read the following bug report and write down your hypotheses.${
      tasks[`subtaskInfo${participant.current.subtask}`]["information"]
    } <b> You have ${
    tasks[`subtaskInfo${participant.current.subtask}`]["time"]
  } minutes to complete this stage.</b> </p>
        <hr class="my-4">
    <p>${task.description}</p>
    <button id="refresh" class="btn btn-primary float-right">refresh</button>
    <br>
    <p class="lead">
        <div class="embed-responsive embed-responsive-1by1">
            <iframe id="application" src=${
              task[`binURL` + participant.current.subtask]
            } class="embed-responsive-item"></iframe>
        </div>
    </p>
    <p class="lead"><b>This is a picture of the correct program output.</b></p>

    <div class="card" style="margin: auto; width: 25rem;">
        ${
          participant.current.task == 1
            ? `<img class="card-img-top" src=${task1} alt="application state">`
            : participant.current.task == 2
              ? `<img class="card-img-top" src=${task2} alt="application state">`
              : `<img class="card-img-top" src=${task3} alt="application state">`
        }
    </div>
    <br>
    <div style='display: ${participant.current.subtask !== 1 ? `block` : `none`}'>
    <p class="lead"><b>This is a list of related documentations:</b></p>
        <ul>
            ${task.links.map(l => `<li><a href=${l.link} target="_blank">${l.topic}</a></li>`).join("")}
        </ul>
          
    </div>
    <br>
    <div class="card text-center">
        <div class="card-header">
            Hypotheses and Triggers
        </div>
        <div id="hypotheses" class="card-body">
            ${hypotheses.map((hypothesis, index) =>
              getHypothesisForum(index + 1, participant.current.subtask, hypothesis)
            )}
        </div>
        <div style="width: 300px ;margin:10px auto;">
            <button id="addHypothesis" class="btn btn-success">Add another Hypothesis</button>
        </div>
        <br>
        <br>
        <div style='display: ${participant.current.subtask == 3 ? `block` : `none`}'>     
            <div style='display: ${
              participant.tasks[`task${participant.current.task}`].typeExpertHelp !== `controlled`
                ? `block`
                : `none`
            }'>
                <br>
                <button data-role="assessment" class="btn btn-warning btn-lg" id="expertHelpButton"> Expert Help</button>
                <div id="expertHelpSection" class="card-body"></div>
            </div>
            <br>
            <h4> Did you fix the bug ?</h4>
            <button data-role="Yes" class="btn btn-success btn-lg" id="bugFixAnswerYes">YES</button>
            <button data-role="No" class="btn btn-danger btn-lg" id="bugFixAnswerNo"> NO</button>
            <br>
            <br>
            <div id="bugFixAnswer"></div>
            <br>
        </div>
        <br>
    <div style='width: 500px; margin:auto; display: ${
      participant.current.subtask == 3 ? `none` : `block`
    }'>
            <button id="button" data-role="assessment" class="btn btn-primary btn-lg btn-block"> submit</button>
    </div>
    <br>

`;

  return taskHTML;
};

export const getHypothesisForum = (
  index,
  sub = 1,
  { hypothesis, status, evidence } = {
    hypothesis: "",
    evidence: "",
    status: false
  }
) => html`
<h5 class="card-title">Hypothesis # ${index} </h5>
<p class="card-text">
    <div class="border-bottom border-dark ">
        <div class="form-group">
            <label for="hypothesis"><b>Hypothesis</b>: Based on what you have learned so far, what do you think is the underling cause of the bug?</label>
            <textarea class="form-control" id="hypothesis${index}" rows="3">${hypothesis}</textarea>
        </div>
        <div class="form-group">
            <label for="evidence"><b>Testing Steps</b>: what are the steps that you are going to take to check whether this hypothesis is valid or not?.</label>
            <textarea class="form-control" id="evidence${index}" rows="3">${evidence}</textarea>
        </div>
        <div class="custom-control custom-checkbox " style="display:${
          sub === 3 ? " flex " : "none "
        }">
        ${
          status
            ? `<input type="checkbox" class="custom-control-input" id="hypothesisApprove${index}" checked>`
            : `<input type="checkbox" class="custom-control-input" id="hypothesisApprove${index}">`
        }
            <label class="custom-control-label text-success" for="hypothesisApprove${index}">
                <b>I believe that this a correct hypothesis.</b>
            </label>
        </div>
    </div>
</p>
    `;

//////
export const getExpertHypotheses = task =>
  [1, 2, 3]
    .map(
      index => html`
<h5 class="card-title">Hypothesis # ${index} </h5>
<p class="card-text">
    <div class="border-bottom border-dark ">
        <div class="form-group">
            <label for="expertHypothesis${index}"><b>Hypothesis</b>: Based on what you have learned so far, what do you think is the underling cause of the bug?</label>
            <textarea class="form-control" id="expertHypothesis${index}" rows="3"disabled>${
        task["expertHypothesis" + index]
      }</textarea>
        </div>
        <div class="form-group">
              <label for="evidence"><b>Testing Steps</b>: what are the steps that you are going to take to check whether this hypothesis is valid or not?.</label>
              <textarea class="form-control" id="expertEvidence${index}" rows="3" disabled>${
        task["evidence" + index]
      }</textarea>
          </div>
        <div class="form-group">
            <label for="expertWhy${index}">If this was not helpful, why was it not helpful? </label>
            <textarea class="form-control" id="expertWhy${index}" rows="3"></textarea>
        </div>
        <div class="custom-control custom-checkbox d-flex justify-content-start">
            <input type="checkbox" class="custom-control-input " id="expertHypothesisApprove${index}">
            <label class="custom-control-label text-success" for="expertHypothesisApprove${index}">
                <b>I believe that this a correct hypothesis.</b>
            </label>
        </div>
    </div>
</p>
  `
    )
    .join("");

export const getBuggyLines = task =>
  [1, 2, 3]
    .map(
      index => html`
<h5 class="card-title">Buggy Line # ${index} </h5>
<p class="card-text">
    <div class="border-bottom border-dark ">
        <div class="form-group">
            <label for="buggyLine${index}"><b>Buggy Line</b>: Where the bug is located.</label>
            <textarea class="form-control" id="buggyLine${index}" rows="3"disabled>${
        task["buggyLine" + index]
      }</textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy${index}">If this was not helpful, why was it not helpful? </label>
            <textarea class="form-control" id="buggyLineWhy${index}" rows="3"></textarea>
        </div>
        <div class="custom-control custom-checkbox d-flex justify-content-start">
            <input type="checkbox" class="custom-control-input " id="buggyLineApprove${index}">
            <label class="custom-control-label text-success" for="buggyLineApprove${index}">
                <b>I believe that this is the bug location.</b>
            </label>
        </div>
    </div>
</p>
  `
    )
    .join("");

export const survey = () => html`
<div class="jumbotron">
<h2 class="card-title"> Survey Questions: </h2>
<p class="card-text">
        <div class="form-group">
            <label for="buggyLineWhy">Did you use an expert hypothesis? If so, in what ways was it helpful? How might it have offered more help? </label>
            <textarea class="form-control" id="surveyHypotheses" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy">Did you use an expert buggy line help? If so, in what ways was it helpful? How might it have offered more help? </label>
            <textarea class="form-control" id="surveyBuggyLines" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy">For those tasks that you were not able to complete successfully, what did you find most challenging? </label>
            <textarea class="form-control" id="surveyBugFixes" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy">How many years of industry experience do you have as a software developer, if any? </label>
            <textarea class="form-control" id="surveyExpertise" rows="3"></textarea>
        </div>
    </div>
    <br>


    <div style="width: 500px; margin:auto;">
        <button id="button" data-role="assessment" class="btn btn-primary btn-lg btn-block"> submit</button>
        <br>
    </div>
</p>
</div>
`;

export const bugFixNo = () =>
  html`
   <div class="card-text">
        <div class="form-group">
            <label for="hypothesis">Please copy and past your code here. </label>
            <textarea class="form-control" id="participantCode" rows="4"style='width: 95%; margin:auto;'></textarea>
            <br>
            <label for="hypothesis">Please indicate why you could not fix the bug. </label>
            <textarea class="form-control" id="whyNotFixBug" rows="4"style='width: 95%; margin:auto;'></textarea>
            <br>
            <button id="button" data-role="assessment" style='width: 500px; margin:auto;' class="btn btn-primary btn-lg btn-block"> submit</button>
        </div>
    </p>`;

export const bugFixYes = () => html`<p class="card-text" id="bugFixCodeSection">
    <div class="card-text">
        <div class="form-group">
            <label for="hypothesis">Please copy and past your code here. </label>
            <textarea class="form-control" id="participantCode" rows="4"style='width: 95%; margin:auto;'></textarea>
            <br>
            <button id="button" data-role="assessment" style='width: 500px; margin:auto;' class="btn btn-primary btn-lg btn-block"> submit</button>
        </div>
    </p>`;
