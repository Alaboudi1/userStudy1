//@ts-check
const html = String.raw;
// @ts-ignore
import example from "./example.png";
// @ts-ignore
import task1 from "./task1.png";
// @ts-ignore
import task2 from "./task2.png";
// @ts-ignore
import task3 from "./task3.png";

export const welcome = () => html`
<div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">Thank you for participating in this study! This study will take around two hours to complete. The aim of the study is
        to closely examines the debugging activity through understanding how developers build and share hypotheses about the cause
        of a bug. There will be three tasks that include three defected small applications taken from StackOverflow questions.
        Each task, you will be asked to write down your hypotheses, and how would you go about approving or disapproving these hypotheses.

    </p>
    <p class="lead"> In this study, the process of building hypotheses for each defected application will span across three stages. 
    In the first stage, you will be asked to write down your hypotheses by only having access to the bug report and the application user interface. 
    In the second stage, you will be asked to approve your previous hypotheses after gaining access to the source code. 
    You also can write more hypotheses at this stage.In the third stage, you will be asked To fix the bug by trying your previous hypotheses.
    If you are not able to fix the bug using your previous hypotheses, and you are not able to generate any more hypotheses, you can check if you have the option to get expert help.
    The expert help will be discussed in the last section of this introduction.
    </p>
    <p class="lead">
        <h2>Example:</h2>
        <p>
            <b>Note:</b>This example is entirely taken from a question on StackOverflow.
        </p>
        <h3>Task # 1 </h3>
        <h4> stage # 1: </h4>
        <i>
            <u>You only have access to the bug report and the application UI. you should be able to interact with the application
                via GUI.
            </u>
        </i>
    </p>
    <p class="lead">
        <b>Bug Report:</b>
        <br>
        <h4>HTML showing broken image:</h4>
        I have the following html code and when i pull it up in my browsers the image either doesn't show up, or it shows a broken
        image:
    </p>
    <p class="lead">
        <div class="embed-responsive embed-responsive-21by9">
            <iframe src="https://jsbin.com/toyuxih/6/edit?output" width="1400px" height="1300;" class="embed-responsive-item"></iframe>
        </div>
    </p>
    <div class="card" style="margin: auto; width: 25rem; height: 31rem;">
        <img class="card-img-top" src=${example} alt="application state">
        <div class="card-body">
            <p class="card-text"><b>This is a picture of the correct program output.</b></p>
        </div>
    </div>
    <h5 class="card-title">Hypothesis # 1</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="7" disabled>
check:
Absolute path:
<img src="http://www.domain.com/MyImages/battleship-game-board.jpg"/>
or
Relative path:
<img src="../MyImages/battleship-game-board.jpg"/>
</textarea>
            </div>
        </div>
    </p>
    <h5 class="card-title">Hypothesis # 2</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>battleship-game-board.jpg does not contain valid permission</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="3" disabled>
check:
if the image has 755 permission.
                    </textarea>
            </div>
        </div>
    </p>
    <h3>Task # 1 </h3>
    <h4> stage # 2: </h4>
    <i>
        <u>
            You only have access to the bug report and source code. Please do not attempt to fix the bug. Try to approve/disapprove your
            hypotheses or add new hypotheses.
        </u>
    </i>
    <p class="lead">
        <b>Bug Report:</b>
        <br>
        <h4>HTML showing broken image:</h4>
        I have the following html code and when i pull it up in my browsers the image either doesn't show up, or it shows a broken
        image:
    </p>
    <p class="lead">
        <div class="embed-responsive embed-responsive-21by9">
            <iframe src="https://jsbin.com/toyuxih/6/edit?html" width="1400px" height="1300;" class="embed-responsive-item"></iframe>
        </div>
    </p>
    <div class="card" style="margin: auto; width: 25rem; height: 31rem;">
        <img class="card-img-top" src=${example} alt="application state">
        <div class="card-body">
            <p class="card-text"><b>This is a picture of the correct program output.</b></p>
        </div>
    </div>
    <h5 class="card-title">Hypothesis # 1</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="3" disabled>
                                        The image path is not relative path.
                                        </textarea>
            </div>

            <div class="custom-control custom-checkbox mb-4">
                <input type="checkbox" class="custom-control-input" id="example1">
                <label class="custom-control-label text-success" for="example1">
                    <b>I approve this!</b>
                </label>
            </div>
        </div>
    </p>
    <h5 class="card-title">Hypothesis # 2</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>battleship-game-board.jpg does not contain valid permission</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="3" disabled>
check:
if the image has 755 permission.
                </textarea>
            </div>
            <div class="custom-control custom-checkbox mb-4">
                <input type="checkbox" class="custom-control-input" id="example2">
                <label class="custom-control-label text-success" for="example2">
                    <b>I approve this!</b>
                </label>
            </div>
        </div>
    </p>
    <h3>Task # 1 </h3>
    <h4> stage # 2: </h4>
    <i>
        <u>Full implementation detail.Try to fix the bug. Feel free to add more hypotheses.</u>
    </i>
    <p class="lead">
        <b>Bug Report:</b>
        <br>
        <h4>HTML showing broken image:</h4>
        i have the following html code and when i pull it up in my browsers the image either doesn't show up, or it shows a broken
        image:
    </p>
    <p class="lead">
        <div class="embed-responsive embed-responsive-21by9">
            <iframe src="https://jsbin.com/toyuxih/4/edit?output,html" width="1400px" height="1300;" class="embed-responsive-item"></iframe>
        </div>
    </p>
    <div class="card" style="margin: auto; width: 25rem; height: 31rem;">
        <img class="card-img-top" src=${example} alt="application state">
        <div class="card-body">
            <p class="card-text"><b>This is a picture of the correct program output.</b></p>
        </div>
    </div>
    <h5 class="card-title">Hypothesis # 1
    </h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="3" disabled>The image path is not relative path.</textarea>
            </div>
            <div class="custom-control custom-checkbox mb-4">
                <input type="checkbox" class="custom-control-input" id="example2" checked>
                <label class="custom-control-label text-success" for="example2">
                    <b>I approve this!</b>
                </label>
            </div>
        </div>
    </p>
    <h5 class="card-title">Hypothesis # 2
    </h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>battleship-game-board.jpg does not contain valid permission</textarea>
            </div>
            <div class="form-group">
                <label for="evidence">evidence</label>
                <textarea class="form-control" id="evidence3" rows="3" disabled>
                                        check:
                                        if the image has 755 permission.
                                </textarea>
            </div>
            <div class="custom-control custom-checkbox mb-4">
                <input type="checkbox" class="custom-control-input" id="example3">
                <label class="custom-control-label text-success" for="example3">
                    <b>I approve this!</b>
                </label>
            </div>
        </div>
    </p>
    <p class="lead">
        <b>Expert Help:</b>
        <br>
        <h4>Failing to fix the bug:</h4>
        If your great effort did not result in fixing the bug, please indicate why and click on the expert help button.

        <span style="width: 200px; margin:auto;">
            <button data-role="assessment" class="btn btn-success btn-lg" disabled> Expert Help</button>
            <br>
        </span>
    </p>
    <p class="lead">
        You will see either three experts hypotheses about the cause of the bug, or three source code line numbers that might contain
        the bug.
        <br> Example:
        <br>
        <b> Expert Hypothesis: </b>
    </p>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <div class="form-group">
                <label for="triggers">Why would you approve or disapprove this help?</label>
                <textarea class="form-control" id="triggers2" rows="3" disabled>This is correct because the path is indeed not correct. </textarea>
            </div>
            <br>
    </p>
    <br>
    <b> Buggy line: </b>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">Line number</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>10</textarea>
            </div>
            <div class="form-group">
                <label for="triggers">Why would you approve or disapprove this help?</label>
                <textarea class="form-control" id="triggers2" rows="3" disabled>This this helpful because the line has the bug (path is not correct) </textarea>
            </div>
    </p>
    <p class="lead">
        Click start to start with the experiment. you will first have to answer number of questions to asses your expertise in certain
        technologies.
    </p>
    <div style="width: 500px; margin:auto;">
        <button id="button" data-role="assessment" class="btn btn-primary btn-lg btn-block"> start</button>
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
    <p class="lead"> Please read the following bug report and write down your hypotheses. </p>
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
    <div class="card" style="margin: auto; width: 25rem;">
        ${participant.current.task == 1 ?
        `<img class="card-img-top" src=${task1} alt="application state">`
        : participant.current.task == 2 ?
        `<img class="card-img-top" src=${task2} alt="application state">`
        :
        `<img class="card-img-top" src=${task3} alt="application state">`
        }
        <div class="card-body">
            <p class="card-text"><b>This is a picture of the correct program output.</b></p>
        </div>
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
        <div style="width: 300px; margin:auto;">
            <button id="addHypothesis" class="btn btn-success">Add another Hypothesis</button>
        </div>
        <br>
        <br>
        <div style='width: 200px; margin:auto; display: ${
          participant.current.subtask == 3 &&
          participant.tasks[`task${participant.current.task}`].typeExpertHelp !== `controlled`
            ? `block`
            : `none`
        }'>     
       <button data-role="assessment" class="btn btn-success btn-lg" id="expertHelpButton"> Expert Help</button>
        </div>
      <br>
    <div id="expertHelpSection"></div>
    <br>
    </div>
    <br>

<div style="width: 500px; margin:auto;">
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
            <label for="hypothesis">hypothesis</label>
            <textarea class="form-control" id="hypothesis${index}" rows="3">${hypothesis}</textarea>
        </div>
        <div class="form-group">
            <label for="evidence">evidence</label>
            <textarea class="form-control" id="evidence${index}" rows="3">${evidence}</textarea>
        </div>
        <div class="custom-control custom-checkbox " style="display:${
          sub !== 1 ? " flex " : "none "
        }">
        ${
          status
            ? `<input type="checkbox" class="custom-control-input" id="hypothesisApprove${index}" checked>`
            : `<input type="checkbox" class="custom-control-input" id="hypothesisApprove${index}">`
        }
            <label class="custom-control-label text-success" for="hypothesisApprove${index}">
                <b>I approve this!</b>
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
            <label for="expertHypothesis${index}">hypothesis</label>
            <textarea class="form-control" id="expertHypothesis${index}" rows="3"disabled>${
        task["expertHypothesis" + index]
      }</textarea>
        </div>
        <div class="form-group">
              <label for="evidence">evidence</label>
              <textarea class="form-control" id="expertEvidence${index}" rows="3" disabled>${
        task["evidence" + index]
      }</textarea>
          </div>
        <div class="form-group">
            <label for="expertWhy${index}">If this hypothesis is not relevant, please indicate why? </label>
            <textarea class="form-control" id="expertWhy${index}" rows="3"></textarea>
        </div>
        <div class="custom-control custom-checkbox d-flex justify-content-start">
            <input type="checkbox" class="custom-control-input " id="expertHypothesisApprove${index}">
            <label class="custom-control-label text-success" for="expertHypothesisApprove${index}">
                <b>I approve this!</b>
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
            <label for="buggyLine${index}">buggy Line</label>
            <textarea class="form-control" id="buggyLine${index}" rows="3"disabled>${
        task["buggyLine" + index]
      }</textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy${index}">If this bug line is not relevant, please indicate why? </label>
            <textarea class="form-control" id="buggyLineWhy${index}" rows="3"></textarea>
        </div>
        <div class="custom-control custom-checkbox d-flex justify-content-start">
            <input type="checkbox" class="custom-control-input " id="buggyLineApprove${index}">
            <label class="custom-control-label text-success" for="buggyLineApprove${index}">
                <b>I approve this!</b>
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
            <label for="buggyLineWhy">If you have used expert hypotheses, please indicate what did you like and dislike about that help? </label>
            <textarea class="form-control" id="surveyHypotheses" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy">If you have used buggy lines help, please indicate what did you like and dislike about that help? </label>
            <textarea class="form-control" id="surveyBuggyLines" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy">If you were not able to fix a bug in any task, please indicate why? </label>
            <textarea class="form-control" id="surveyBugFixes" rows="3"></textarea>
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
