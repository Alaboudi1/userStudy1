//@ts-check
const html = String.raw;

import * as experiment from "./tasks";
import * as participant from "./participant";
import "bootstrap/dist/css/bootstrap.min.css";
import * as utils from "./utils";
import * as ui from "./UI";

const renderPage = page => {
  ui.clearAll();
  let content;
  switch (page) {
    case "assessment":
      if (
        experiment.assessment.numberAssessmentQuestions <
        participant.current.question
      )
        return renderPage("task");
      content = utils.assessment(experiment.assessment, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () =>
        renderPage("assessment")
      );
      break;
    case "task":
      content = utils.task(experiment.tasks, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () => {
        const hypotheses = getHypotheses();
        hypotheses.forEach((el, i) => {
          i = i + 1;
          el.hypothesis = ui.getElement("hypothesis" + i).value;
          el.evidence = ui.getElement("evidence" + i).value;
          el.triggers = ui.getElement("triggers" + i).value;
        });
        if (participant.current.subtask < experiment.tasks.numberSubTasks) {
          participant.current.subtask++;
          let hypotheses2 = hypotheses.map(e => ({ ...e, status: "" }));
          setHypotheses(hypotheses2);
        } else {
          participant.current.task++;
        }
        if (participant.current.task > experiment.tasks.numberTasks) {
          renderPage("end");
        } else {
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
          triggers: ""
        });
        const div = document.createElement("div");
        div.innerHTML += utils.getHypothesisForum(hypotheses.length);
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
ui.attachEvent(ui.getElement("button"), "click", () =>
  renderPage("assessment")
);
