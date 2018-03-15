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
        return renderPage("task");
      }
      content = utils.assessment(experiment.assessment, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () => {
        // @ts-ignore
        const answer = document.querySelector(
          'input[name="assessment"]:checked'
        ).value;
        participant.expertise[`Q${participant.current.question}`] = answer;
        participant.current.question++;
        db.save(participant);
        renderPage("assessment");
      });
      break;
    case "task":
      content = utils.task(experiment.tasks, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () => {
        const hypotheses = getHypotheses();
        hypotheses.forEach((el, i) => {
          i = i + 1;
          // @ts-ignore
          el.hypothesis = ui.getElement("hypothesis" + i).value;
          // @ts-ignore
          el.evidence = ui.getElement("evidence" + i).value;
          // @ts-ignore
          el.triggers = ui.getElement("triggers" + i).value;
          const status = document.querySelector(
            `input[name="status${i}"]:checked`
          );
          // @ts-ignore
          el.status = status !== null ? status.value : "";
        });
        if (participant.current.subtask < experiment.tasks.numberSubTasks) {
          participant.current.subtask++;
          let hypotheses2 = hypotheses.map(e => ({ ...e, status: "" }));
          setHypotheses(hypotheses2);
        } else {
          ui
            .getElement(`task${participant.current.task}`)
            .classList.remove("active", "text-primary");
          participant.current.task++;
          participant.current.subtask = 1;
          ui
            .getElement(`task${participant.current.task}`)
            .classList.add("active", "text-primary");
        }
        if (participant.current.task > experiment.tasks.numberTasks) {
          renderPage("end");
        } else {
          renderPage("task");
        }
        db.save(participant);
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
          triggers: ""
        });
        const div = document.createElement("div");
        div.innerHTML += utils.getHypothesisForum(hypotheses.length, participant.current.subtask);
        ui.getElement("hypotheses").appendChild(div);
      });
      break;
    case "end":
      ui
        .getElement(`task${participant.current.task}`)
        .classList.remove("active", "text-primary");
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

db.init();
