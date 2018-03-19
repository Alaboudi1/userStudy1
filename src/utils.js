//@ts-check
const html = String.raw;
export const welcome = () => html`
<div class="jumbotron">
    <h1 class="display-4">Welcome!</h1>
    <p class="lead">Thank you for participating in this study! This study will take around two hours to complete. The aim of the study is
        to closely examines the debugging activity through understanding how developers build hypotheses about the cause
        of a bug. There will be three tasks that include three defected small applications taken from StackOverflow questions.
        Each task, you will be asked to build hypotheses, write down the triggers you used to construct these hypotheses,
        and how would you approve or disapprove these hypotheses.

    </p>
    <p class="lead"> The process of building hypotheses for each defected application will be in three stages. The first stage through only
        The input(i.e., GUI), the output (i.e., GUI, console) of the application as well as a short description of the problem
        usually taken from the corresponding StackOverflow question. The second stage has only the bug report and the source
        code. You will not be asked to fix the bug at this stage, but rather to review your hypotheses, approve or disapprove
        them, and add more hypotheses as you gain more knowledge about the application. The third stage you will be asked
        to validate your hypotheses by editing the code and trying to fix the bug. If this stage reveal more hypotheses,
        please add and validate them. You will be asked to write down your hypotheses, triggers of the hypotheses, and evidence
        that prove or disapprove the hypotheses for each stage. For the second stage, will be able to approve hypotheses
        from the previous stage as well as disapprove them as you gain more understanding about the application.
    </p>
    <p class="lead">We further define these concepts below as well as give an example of a task. </p>
    <p class="lead">
        <ul>
            <li>
                <b>Hypothesis:</b> An assumption a developer has that explains the cause of behavior, possibly a bug, in an
                application.
            </li>
            <li>
                <b>Evidence:</b> A fact that proves or disapprove a hypothesis.</li>
            <li>
                <b>Triggers:</b> Keywords in the bug report or the code that prompt hypotheses. Also, these triggers can be
                behavior in the application.</li>
        </ul>

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
    <h5 class="card-title">Hypothesis # 1</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <!-- <div class="form-group">
                            <label for="triggers">triggers</label>
                            <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                        </div> -->
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
            <!-- <div class="form-group">
                            <label for="triggers">triggers</label>
                            <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                        </div> -->
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
    <h5 class="card-title">Hypothesis # 1</h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <!-- <div class="form-group">
                                <label for="triggers">triggers</label>
                                <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                            </div> -->
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
            <!-- <div class="form-group">
                                <label for="triggers">triggers</label>
                                <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                            </div> -->
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
    <h5 class="card-title">Hypothesis # 1
    </h5>
    <p class="card-text">
        <div class="border-bottom border-dark ">
            <div class="form-group">
                <label for="hypothesis">hypothesis</label>
                <textarea class="form-control" id="hypothesis1" rows="3" disabled>The path to the image is not correct</textarea>
            </div>
            <!-- <div class="form-group">
                                <label for="triggers">triggers</label>
                                <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                            </div> -->
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
            <!-- <div class="form-group">
                                <label for="triggers">triggers</label>
                                <textarea class="form-control" id="triggers2" rows="3" disabled>image either doesn't show up,shows a broken image, browser, html. </textarea>
                            </div> -->
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
            <!-- <div class="form-group">
                                        <label for="evidence">evidence</label>
                                        <textarea class="form-control" id="evidence3" rows="3" disabled>The image path is not relative path.
                                        </textarea> -->
            <!-- </div> -->
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
            <pre><code class=" javascript keyword text-success">${
              question.code
            }</code></pre>
            <br>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer1" name="assessment" value= ${question.answers[0].replace( /\s/g, "_" )} class="custom-control-input">
                <label for="answer1" class="custom-control-label">${
                  question.answers[0]
                }
                </label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer2" name="assessment" value= ${question.answers[1].replace( /\s/g, "_" )} class="custom-control-input">
                <label for="answer2" class="custom-control-label">${
                  question.answers[1]
                }
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer3" name="assessment" value= ${question.answers[2].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer3" class="custom-control-label">${
                  question.answers[2]
                }
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer4" name="assessment" value= ${question.answers[3].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer4" class="custom-control-label">${
                  question.answers[3]
                }
                </label>
            </div>

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="answer5" name="assessment" value= ${question.answers[4].replace(
                  /\s/g,
                  "_"
                )} class="custom-control-input">
                <label for="answer5" class="custom-control-label">${
                  question.answers[4]
                }
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
    participant.tasks[participant.current.task - 1][
      `subtask${participant.current.subtask}`
    ]["hypotheses"];
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
    <div class="card text-center">
        <div class="card-header">
            Hypotheses and Triggers
        </div>
        <div id="hypotheses" class="card-body">
            ${hypotheses.map((hypothesis, index) =>
              getHypothesisForum(
                index + 1,
                participant.current.subtask,
                hypothesis
              )
            )}
        </div>
        <div style="width: 300px; margin:auto;">
            <button id="addHypothesis" class="btn btn-success">Add another Hypothesis</button>
        </div>
        <br>
        <br>
        <div style="width: 200px; margin:auto; display:${
          participant.current.subtask == 3 ? " block " : "none "
        }">
            <button data-role="assessment" class="btn btn-success btn-lg" id="expertHelp"> Expert Help</button>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div id="expertHypotheses"></div>
    <br>
    <div style="width: 500px; margin:auto;">
        <button id="button" data-role="assessment" class="btn btn-primary btn-lg btn-block"> submit</button>
        <br>
    </div>
</div>
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
        <!-- <div class="form-group">
                <label for="triggers">triggers</label>
                <textarea class="form-control" id="triggers${index}" rows="3"></textarea>
        </div> -->
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
