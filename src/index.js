//@ts-check
import * as tasks from "./tasks";
import * as participant from "./participant";
import "bootstrap/dist/css/bootstrap.min.css";

const html = String.raw;

const render = (id, content) =>
  (document.getElementById(id).innerHTML = `${content}`);

const append = (id, content) =>
  (document.getElementById(id).innerHTML += `${content}`);

const assessment = (assessment, participant) => {
  if (assessment.numberAssessmentQuestions < participant.current.question)
    return renderPage("task");

  const question = assessment["Q" + participant.current.question];
  const questionHTML = html`
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Question Number ${participant.current.question}/${
    assessment.numberAssessmentQuestions
  }</h1>
    <p class="lead">
     <div class="text-justify"> ${question.text}</div>
     <pre><code class=" javascript keyword text-success">${
       question.code
     }</code></pre>

     <br>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="answer1" name="contact" value= ${
      question.answers[0]
    } class="custom-control-input">
    <label for="answer1" class="custom-control-label">${
      question.answers[0]
    }</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="answer2" name="contact" value= ${
      question.answers[1]
    } class="custom-control-input">
    <label for="answer2" class="custom-control-label">${
      question.answers[1]
    }</label>
    </div>

   <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="answer3" name="contact" value= ${
      question.answers[2]
    } class="custom-control-input">
    <label for="answer3" class="custom-control-label">${
      question.answers[2]
    }</label>
    </div>

    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="answer4" name="contact" value= ${
      question.answers[3]
    } class="custom-control-input">
    <label for="answer4" class="custom-control-label">${
      question.answers[3]
    }</label>
    </div>

    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="answer5" name="contact" value= ${
      question.answers[4]
    } class="custom-control-input">
    <label for="answer5" class="custom-control-label">${
      question.answers[4]
    }</label>
    </div>
  <br>
  <br>
</p>
  </div>
</div>
  
  `;
  participant.current.question++;

  render("question", questionHTML);
};

const task = (tasks, participant) => {
  const button = document.getElementById("button");
  button.dataset.role = "task";
  button.innerHTML = "submit hypotheses";
  const task = tasks["task" + participant.current.task];
  const taskHTML = html`
     <div class="jumbotron">
        <h1 class="display-4">Task # ${participant.current.task}</h1>
        <h3>Stage # ${participant.current.subtask}</h3>

        <p class="lead"> Please read the following bug report and write down your hypotheses.  </p>

        <hr class="my-4">
        <p>${task.description}</p>
        <p class="lead">
        <iframe src=${
          task["binURL" + participant.current.subtask]
        } width="1400px" height="1300;"></iframe>
        </p>
        
        </div>`;
  if (participant.current.task <= tasks.numberTasks) {
    if (participant.current.subtask < tasks.numberSubTasks) {
      participant.current.subtask++;
    } else {
      participant.current.task++;
    }
  } else {
    renderPage("edn");
  }
  render("application-only", taskHTML);
};
const clearAll = () => {  
  [...document.getElementById("app").children].forEach(e => render(e.id, ""));
};
const renderPage = page => {
  clearAll();
  switch (page) {
    case "assessment":
      assessment(tasks.assessment, participant);
      break;
    case "task":
      task(tasks.tasks, participant);
      break;
    case "end":
      render("end-study", "<h1>Thanks</h1>");
      break;
  }
};

render(
  "contents",
  html`
     <div class="jumbotron">
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">Thank you for participating in this study! This study will take around two hours to complete. 
        There will be 4 tasks that include 4 defected small applications taken from stack overflow questions. Each task, you will be asked to build hypotheses, write down justifications of theses hypotheses, and denote triggers word that helped you build theses hypotheses.
       </p>
       <p class="lead"> The process of building hypotheses for each defected application will be in two stages. 
        The first stage through only the input(i.e. GUI), the output (i.e. GUI, console) of the application as well as a short description of the problem usually taken from the corresponding stack overflow question.
         The second stage has similar information about the code but with the implementation detail of the application. you will be asked to write down your hypotheses, justifications of the hypotheses, and triggers for theses hypotheses for each stage. For the second stage, will be able to approve hypotheses from the previous stage as well as disapprove them as you gain more understanding about the application.    
         </p>
         <p class="lead">We further define theses concepts below as well as an example of the study. </p>
        <p class="lead">
        <ul>
        <li><b>Hypothesis:</b></li>
        <li><b>Justification of a hypotheses:</b></li>
        <li><b>Triggers word:</b></li>
        </ul>
        </p>
        </div>

  `
);
document.getElementById("button").addEventListener("click", ev => {
  //@ts-ignore
  switch (ev.target.dataset.role) {
    case "assessment":
      //@ts-ignore
      ev.target.innerHTML = "submit answer";
      renderPage("assessment");
      break;
    case "task":
      renderPage("task");
  }
});
