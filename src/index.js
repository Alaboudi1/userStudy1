//@ts-check
const html = String.raw;

import { experiment } from "./tasks";
import { participant } from "./participant";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "./utils";
import * as ui from "./UI";
import * as db from "./db";
import { example } from "./example";
let timerForce,
  timerReminder,
  timeOutsideTask = 0,
  timerForOutsideTask;

export const renderPage = page => {
  ui.clearAll();
  switch (page) {
    case "assessment":
      assessments();
      break;
    case "task":
      tasks();
      break;
    case "example":
      example();
      break;
    case "survey":
      survey();
      break;
  }
};

const getTime = () => new Date().toLocaleTimeString();

const setTimerForce = (time, message, page) => {
  timerForce = setTimeout(() => {
    alert(message);
    if (page === "assessment") {
      participant.expertise.timeUp = true;
      db.save(participant);
      renderPage("task");
    } else if (page === "task") {
      participant.tasks[`task${participant.current.task}`][
        `subtask${participant.current.subtask}`
      ].timeUp = true;
      saveSubtask();
    }
  }, time);
};

const setTimerReminder = (time, message) => {
  timerReminder = setTimeout(() => {
    alert(message);
    if (
      participant.current.subtask === 3 &&
      participant.tasks[`task${participant.current.task}`].typeExpertHelp != "controlled" &&
      !participant.tasks[`task${participant.current.task}`].expertHelp
    )
      ui.getElement("expertHelpButton").focus();
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
  let content, timeF, timeR, message;
  clearTimeout(timerReminder);
  clearTimeout(timerForce);
  content = utils.task(experiment.tasks, participant);
  ui.render("contents", content);
  if (participant.current.subtask === 3) {
    timeF = 1200000;
    timeR = 600000;
    message = `You only have ${(timeF - timeR) /
      60000} minute remaining!. Please consider using expert help if you there is one available for you.`;
    ui.attachEvent(ui.getElement("bugFixAnswerYes"), "click", () => {
      ui.getElement("bugFixAnswer").innerHTML = utils.bugFixYes();
      ui.attachEvent(ui.getElement("button"), "click", () => {
        participant.tasks[`task${participant.current.task}`]["participantCode"] = ui.getElement(
          "participantCode"
        ).value;
        saveSubtask();
      });
      participant.tasks[`task${participant.current.task}`].fixedBug = true;
    });
    ui.attachEvent(ui.getElement("bugFixAnswerNo"), "click", () => {
      ui.getElement("bugFixAnswer").innerHTML = utils.bugFixNo();
      participant.tasks[`task${participant.current.task}`].fixedBug = false;
      ui.attachEvent(ui.getElement("button"), "click", () => {
        participant.tasks[`task${participant.current.task}`]["participantCode"] = ui.getElement(
          "participantCode"
        ).value;
        participant.tasks[`task${participant.current.task}`]["whyNotFixBug"] = ui.getElement(
          "whyNotFixBug"
        ).value;
        saveSubtask();
      });
    });
  } else if (participant.current.subtask === 2){
    timeF = 600000;
    timeR = 420000;
    message = `You only have ${(timeF - timeR) / 60000} minute remaining!.`;
    ui.attachEvent(ui.getElement("button"), "click", saveSubtask);
  } else {
    timeF = 420000;
    timeR = 300000;
    message = `You only have ${(timeF - timeR) / 60000} minute remaining!.`;
    ui.attachEvent(ui.getElement("button"), "click", saveSubtask);
  }
  setTimerReminder(timeR, message);
  setTimerForce(timeF, "You reached the time limit!", "task");

  participant.tasks[`task${participant.current.task}`][
    `subtask${participant.current.subtask}`
  ].subtaskStartTime = getTime();
  ui.attachEvent(ui.getElement("expertHelpButton"), "click", expertHelp);
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
  console.log(participant);
  if (
    participant.tasks[`task${participant.current.task}`].expertHelp &&
    participant.current.subtask === 3
  ) {
    console.log(participant.tasks[`task${participant.current.task}`]);
    const expert =
      participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`];
    if (participant.tasks[`task${participant.current.task}`].typeExpertHelp == "expertHypotheses") {
      expert.ExpertHypotheses = [1, 2].map(
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
      expert.buggyLines = [1, 2].map(
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
      !participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`]
        .timeUp
    ) {
      alert(
        "You asked for expert help, but you have not indicated whether each help was useful or not."
      );
      return;
    }
  } else if (
    // participant.current.subtask == 3 &&
    !participant.tasks[`task${participant.current.task}`][`subtask${participant.current.subtask}`]
      .timeUp &&
    participant.tasks[`task${participant.current.task}`].fixedBug
  ) {
    const approve = hypotheses.filter(h => h.status);
    if (approve.length == 0) {
      alert(
        "You need to pick which of your hypotheses or expert help set you on the right track to fix the bug."
      );
      return;
    }
  }
  participant.tasks[`task${participant.current.task}`][
    `subtask${participant.current.subtask}`
  ].subtaskEndTime = getTime();
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
    renderPage("survey");
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
  participant.tasks[`task${participant.current.task}`].expertHelpTime = getTime();
};

const survey = () => {
  clearTimeout(timerReminder);
  clearTimeout(timerForce);
  ui.getElement("task3").classList.remove("active", "text-primary");
  ui.getElement("survey").classList.add("active", "text-primary");
  ui.render("contents", utils.survey());
  ui.attachEvent(ui.getElement("button"), "click", () => {
    participant.survey.expertHypotheses = ui.getElement("surveyHypotheses").value;
    participant.survey.buggyLines = ui.getElement("surveyBuggyLines").value;
    participant.survey.bugFixes = ui.getElement("surveyBugFixes").value;
    participant.survey.Expertise = ui.getElement("surveyExpertise").value;

    participant.done = true;
    db.save(participant);
    alert(
      "Thanks you for participating. Please do not close the window until you are asked to do so!"
    );
  });
};
// ui.attachEvent(ui.getElement("skip"), "click", () => {
//   participant.current.task = ui.getElement("select").value;
//   participant.current.subtask = 1;
//   if (participant.current.task == 4) renderPage("survey");
//   else renderPage("task");
// });
db.init().then(payload => {
  console.log(payload.val());
  if (payload.val()) {
    console.log(participant);
    participant.tasks = payload.val().tasks;
    participant.current = payload.val().current;
    participant.expertise = payload.val().expertise;
    console.log(participant);
    if (participant.current.task == 4) {
      renderPage("survey");
    } else {
      renderPage("task");
    }
  } else {
    db.getTaskAssignment().then(payload => {
      console.log(payload);
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
ui.render("contents", utils.welcome());

ui.attachEvent(ui.getElement("ExampleStart"), "click", () => {
  renderPage("example");
  ui.getElement("welcome").classList.remove("active", "text-primary");
  ui.getElement("example").classList.add("active", "text-primary");
});
export const start = () => {
  renderPage("assessment");
  ui.getElement("example").classList.remove("active", "text-primary");
  ui.getElement("assessments").classList.add("active", "text-primary");
  setTimerReminder(600000, "You only have 5 minutes remaining!"); //10 min
  setTimerForce(900000, "You reached the time limit!", "assessment"); // 15 min
};
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState == "hidden" && participant.current.subtask != 1) {
    timerForOutsideTask = setInterval(() => timeOutsideTask++, 1000);
  } else if (document.visibilityState == "visible" && participant.current.subtask != 1) {
    clearInterval(timerForOutsideTask);
    participant.tasks[`task${participant.current.task}`][
      `subtask${participant.current.subtask}`
    ].timeOutsideTask += timeOutsideTask;
    console.log(participant);
    timeOutsideTask = 0;
  }
});
