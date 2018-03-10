//@ts-check
const html = String.raw;

import * as tasks from "./tasks";
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
        tasks.assessment.numberAssessmentQuestions <
        participant.current.question
      )
        return renderPage("task");
      content = utils.assessment(tasks.assessment, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () =>
        renderPage("assessment")
      );
      break;
    case "task":
      content = utils.task(tasks.tasks, participant);
      ui.render("contents", content);
      ui.attachEvent(ui.getElement("button"), "click", () =>
        renderPage("assessment")
      );
      //@ts-ignore
      ui.attachEvent(ui.getElement("refresh"), "click", () =>  ui.getElement("application").src+="");
      break;
    case "end":
      content = ui.render("end-study", "<h1>Thanks</h1>");
      break;
  }

};
ui.render("contents", utils.welcome());
ui.attachEvent(ui.getElement("button"), "click", () =>
  renderPage("assessment")
);
