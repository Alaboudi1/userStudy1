//@ts-check
const html = String.raw;

import { experiment } from "./tasks";
import { participant } from "./participant";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "./utils";
import * as ui from "./UI";
import * as db from "./db";
let timerForce, timerReminder;

const renderPage = page => {
  ui.clearAll();
  switch (page) {
    case "assessment":
      assessments();
      break;
    case "task":
      tasks();
      break;
    case "end":
      clearTimeout(timerReminder);
      clearTimeout(timerForce);
      ui.render("contents", "<h1>Survey Questions</h1>");
      break;
  }
};

ui.render("contents", utils.welcome());

ui.attachEvent(ui.getElement("button"), "click", () => {
  renderPage("assessment");
  ui.getElement("welcome").classList.remove("active", "text-primary");
  ui.getElement("assessments").classList.add("active", "text-primary");
  setTimerReminder(540000, "You only have 1 minute remaining!"); // 9 min
  setTimerForce(600000, "You reached the time limit!", "assessment"); // 10 min
});

const getTime = () => new Date().toLocaleTimeString();

db.init().then(payload => {
  console.log(payload.val());
  if (payload.val()) {
    console.log(participant);
    participant.tasks = payload.val().tasks;
    participant.current = payload.val().current;
    participant.expertise = payload.val().expertise;
    console.log(participant);
    renderPage("task");
  } else {
    db.getTaskAssignment().then(payload => {
      const array = payload.val();
      participant.tasks[`task${array[0]}`].typeExpertHelp = "controlled";
      participant.tasks[`task${array[1]}`].typeExpertHelp = "expertHypotheses";
      participant.tasks[`task${array[2]}`].typeExpertHelp = "buggyLines";
      array.push(array.shift());
      db.setTaskAssignment(array);
      console.log(participant);
    });
  }
});

ui.attachEvent(ui.getElement("skip"), "click", () => {
  participant.current.task = ui.getElement("select").value;
  participant.current.subtask = 1;
  renderPage("task");
});

const setTimerForce = (time, message, page) => {
  timerForce = setTimeout(() => {
    alert(message);
    if (page === "assessment") {
      participant.expertise.timeUp = true;
      db.save(participant);
      renderPage("task");
    } else if (page === "task") {
      participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`].timeUp = true;
      saveSubtask();
    }
  }, time);
};

const setTimerReminder = (time, message) => {
  timerReminder = setTimeout(() => {
    alert(message);
  }, time);
};
participant.current.startTime = getTime();

const saveAnswer = () => {
  // @ts-ignore
  const answer = document.querySelector(
    'input[name="assessment"]:checked'
    // @ts-ignore
  ).value;
  participant.expertise[`Q${participant.current.question}`] = answer;
  participant.expertise[`Q${participant.current.question}EndTime`] = getTime();

  participant.current.question++;
  renderPage("assessment");
};
const assessments = () => {
  let content;
  if (experiment.assessment.numberAssessmentQuestions < participant.current.question) {
    ui.getElement("assessments").classList.remove("active", "text-primary");
    ui.getElement("task1").classList.add("active", "text-primary");
    db.save(participant);
    renderPage("task");
  } else {
    participant.expertise[`Q${participant.current.question}StartTime`] = getTime();
    content = utils.assessment(experiment.assessment, participant);
    ui.render("contents", content);
    ui.attachEvent(ui.getElement("button"), "click", saveAnswer);
  }
  return content;
};

const tasks = () => {
  let content, timeF, timeR;
  clearTimeout(timerReminder);
  clearTimeout(timerForce);
  if (participant.subtask === 3) {
    timeF = 960000;
    timeR = 660000;
  } else {
    timeF = 420000;
    timeR = 300000;
  }
  setTimerReminder(timeR, `You only have ${(timeF - timeR) / 60000} minute remaining!`);
  setTimerForce(timeF, "You reached the time limit!", "task");
  content = utils.task(experiment.tasks, participant);
  ui.render("contents", content);
  console.log(participant.tasks);

  participant.tasks[`task${participant.current.task}`][
    `subtask${participant.current.subtask}`
  ].subtaskStartTime = getTime();
  ui.attachEvent(ui.getElement("expertHelpButton"), "click", expertHelp);
  ui.attachEvent(ui.getElement("button"), "click", saveSubtask);
  //@ts-ignore
  ui.attachEvent(
    ui.getElement("refresh"),
    "click",
    //@ts-ignore
    () => (ui.getElement("application").src += "")
  );
  ui.attachEvent(ui.getElement("addHypothesis"), "click", addHypothesis);
};

const saveSubtask = () => {
  const hypotheses = getHypotheses();
  hypotheses.forEach((el, i) => {
    i = i + 1;
    // @ts-ignore
    el.hypothesis = ui.getElement("hypothesis" + i).value;
    // @ts-ignore
    el.evidence = ui.getElement("evidence" + i).value;
    // @ts-ignore
    // el.triggers = ui.getElement("triggers" + i).value;
    const status = ui.getElement("hypothesisApprove" + i);
    // @ts-ignore
    el.status = status !== null ? status.checked : false;
  });
  if (participant.tasks[`task${participant.current.task}`].expertHelp) {
    const expert =
      participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`];
    if (participant.tasks[`task${participant.current.task}`].typeExpertHelp == "expertHypotheses") {
      expert.ExpertHypotheses = [1, 2, 3].map(
        i =>
          ui.getElement("expertWhy" + i).value == "" //validate the why is entered
            ? "missingExpertWhy"
            : {
                // @ts-ignore
                hypothesis: ui.getElement("expertHypothesis" + i).value,
                // @ts-ignore
                evidence: ui.getElement("expertEvidence" + i).value,
                status: ui.getElement(
                  "expertHypothesisApprove" + i
                  // @ts-ignore
                ).checked,
                // @ts-ignore
                why: ui.getElement("expertWhy" + i).value
              }
      );
    }
    if (participant.tasks[`task${participant.current.task}`].typeExpertHelp == "buggyLines") {
      expert.buggyLines = [1, 2, 3].map(
        i =>
          ui.getElement("buggyLineWhy" + i).value == "" //validate the why is entered
            ? "buggyLineWhy"
            : {
                // @ts-ignore
                line: ui.getElement("buggyLine" + i).value,
                // @ts-ignore
                status: ui.getElement(
                  "buggyLineApprove" + i
                  // @ts-ignore
                ).checked,
                // @ts-ignore
                why: ui.getElement("buggyLineWhy" + i).value
              }
      );
    }
    if (
      (expert.ExpertHypotheses.includes("missingExpertWhy") ||
        expert.buggyLines.includes("buggyLineWhy")) &&
      !participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`].timeUp
    ) {
      alert("You need to write down you justification of why");
      return;
    }
  } else if (
    participant.current.subtask == 3 &&
    !participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`].timeUp
  ) {
    const approve = hypotheses.filter(h => h.status);
    if (approve.length == 0) {
      alert("You need to approve at least one of your hypotheses or ask for expert help");
      return;
    }
  }
  if (participant.current.subtask < experiment.tasks.numberSubTasks) {
    participant.current.subtask++;
    let hypotheses2 = hypotheses.map(e => ({ ...e }));
    setHypotheses(hypotheses2);
  } else {
    ui.getElement(`task${participant.current.task}`).classList.remove("active", "text-primary");
    participant.current.task++;
    participant.current.subtask = 1;
  }
  db.save(participant);
  if (participant.current.task > experiment.tasks.numberTasks) {
    renderPage("end");
  } else {
    ui.getElement(`task${participant.current.task}`).classList.add("active", "text-primary");
    renderPage("task");
  }
};
const getHypotheses = () =>
  participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`][
    "hypotheses"
  ];

const setHypotheses = hypotheses =>
  (participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`][
    "hypotheses"
  ] = hypotheses);
const addHypothesis = () => {
  const hypotheses = getHypotheses();
  hypotheses.push({
    hypothesis: "",
    evidence: "",
    triggers: "",
    status: false
  });
  const div = document.createElement("div");
  div.innerHTML += utils.getHypothesisForum(hypotheses.length, participant.current.subtask);
  ui.getElement("hypotheses").appendChild(div);
};

const expertHelp = () => {
  let content;
  if (participant.tasks[`task${participant.current.task}`].typeExpertHelp == "expertHypotheses") {
    content = utils.getExpertHypotheses(experiment.tasks[`task${participant.current.task}`]);
  } else {
    content = utils.getBuggyLines(experiment.tasks[`task${participant.current.task}`]);
  }
  ui.getElement("expertHelpSection").innerHTML = content;
  participant.tasks[`task${participant.current.task}`].expertHelp = true;
  participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`][
    "expertHelp"
  ] = getTime();
};
