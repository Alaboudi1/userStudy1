//@ts-check
const html = String.raw;

import { experiment } from "./tasks";
import { participant } from "./participant";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "./utils";
import * as ui from "./UI";
import * as db from "./db";

const renderPage = page => {
  ui.clearAll();
  let content;
  switch (page) {
    case "assessment":
      if (
        experiment.assessment.numberAssessmentQuestions <
        participant.current.question
      ) {
        ui.getElement("assessments").classList.remove("active", "text-primary");
        ui.getElement("task1").classList.add("active", "text-primary");
        db.save(participant);
        return renderPage("task");
      }
      participant.expertise[
        `Q${participant.current.question}StartTime`
      ] = getTime();
      content = utils.assessment(experiment.assessment, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () => {
        // @ts-ignore
        const answer = document.querySelector(
          'input[name="assessment"]:checked'
          // @ts-ignore
        ).value;
        participant.expertise[`Q${participant.current.question}`] = answer;
        participant.expertise[
          `Q${participant.current.question}EndTime`
        ] = getTime();
        participant.current.question++;
        renderPage("assessment");
      });
      break;
    case "task":
      content = utils.task(experiment.tasks, participant);
      ui.render("contents", content);
      participant.tasks[participant.current.task - 1][
        `subtask${participant.current.subtask}`
      ].subtaskStartTime = getTime();

      ui.attachEvent(ui.getElement("expertHelp"), "click", () => {
        const content = utils.getExpertHypotheses(
          experiment.tasks[`task${participant.current.task}`]
        );

        ui.getElement("expertHypotheses").innerHTML = content;
        participant.tasks[participant.current.task - 1].expertHelp = true;
        participant.tasks[participant.current.task - 1][
          `subtask${participant.current.subtask}`
        ]["expertHelp"] = getTime();
      });
      ui.attachEvent(ui.getElement("button"), "click", () => {
        const hypotheses = getHypotheses();

        participant.tasks[participant.current.task - 1][
          `subtask${participant.current.subtask}`
        ].subtaskEndTime = getTime();

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
        if (participant.tasks[participant.current.task - 1].expertHelp) {
          const Expert =
            participant.tasks[participant.current.task - 1][
              `subtask${participant.current.subtask}`
            ];
          Expert.ExpertHypotheses = [1, 2, 3].map(
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
          if (Expert.ExpertHypotheses.includes("missingExpertWhy")) {
            alert("You need to write down you justification of why");
            return;
          }
        } else if (participant.current.subtask == 3) {
          const approve = hypotheses.filter(h => h.status);
          if (approve.length == 0) {
            alert(
              "You need to approve at least one of your hypotheses or ask for expert help"
            );
            return;
          }
        }
        if (participant.current.subtask < experiment.tasks.numberSubTasks) {
          participant.current.subtask++;
          let hypotheses2 = hypotheses.map(e => ({ ...e }));
          setHypotheses(hypotheses2);
        } else {
          ui
            .getElement(`task${participant.current.task}`)
            .classList.remove("active", "text-primary");
          participant.current.task++;
          participant.current.subtask = 1;
        }
        db.save(participant);
        if (participant.current.task > experiment.tasks.numberTasks) {
          renderPage("end");
        } else {
          ui
            .getElement(`task${participant.current.task}`)
            .classList.add("active", "text-primary");
          renderPage("task");
        }
      });
      //@ts-ignore
      ui.attachEvent(
        ui.getElement("refresh"),
        "click",
        //@ts-ignore
        () => (ui.getElement("application").src += "")
      );
      ui.attachEvent(ui.getElement("addHypothesis"), "click", () => {
        const hypotheses = getHypotheses();
        hypotheses.push({
          hypothesis: "",
          evidence: "",
          triggers: "",
          status: false
        });
        const div = document.createElement("div");
        div.innerHTML += utils.getHypothesisForum(
          hypotheses.length,
          participant.current.subtask
        );
        ui.getElement("hypotheses").appendChild(div);
      });
      break;
    case "end":
      ui.render("contents", "<h1>Thanks</h1>");
      break;
  }
};
const getHypotheses = () =>
  participant.tasks[participant.current.task - 1][
    `subtask${participant.current.subtask}`
  ]["hypotheses"];

const setHypotheses = hypotheses =>
  (participant.tasks[participant.current.task - 1][
    `subtask${participant.current.subtask}`
  ]["hypotheses"] = hypotheses);

ui.render("contents", utils.welcome());
ui.attachEvent(ui.getElement("button"), "click", () => {
  renderPage("assessment");
  ui.getElement("welcome").classList.remove("active", "text-primary");
  ui.getElement("assessments").classList.add("active", "text-primary");
});
const getTime = () => new Date().toLocaleTimeString();
console.log(participant);

db.init().then(payload => {
  console.log(payload.val());
  if (payload.val()) {
    console.log(participant);
    participant.tasks = payload.val().tasks;
    participant.current = payload.val().current;
    participant.expertise = payload.val().expertise;
    console.log(participant);
    renderPage("task");
  }
});

participant.current.startTime = getTime();

ui.attachEvent(ui.getElement("skip"), "click", () => {
  participant.current.task = ui.getElement("select").value;
  participant.current.subtask = 1;
  renderPage("task");
});
