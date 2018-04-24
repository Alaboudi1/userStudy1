//@ts-check
const html = String.raw;
import exampleImage from "./example.png";
import { experiment } from "./tasks";
import * as utils from "./utils";
import * as ui from "./UI";
import { start, renderPage } from "./index";

export const experimentExample = example => {
  const exampleInfo = example["subExample" + example.currentSubExample];
  const exampleHTML = html`
    <div class="jumbotron jumbotron-fluid" style="padding:10px">
        <h1 class="display-4">Example # 1</h1>
        <h3>Stage # ${example.currentSubExample}</h3>
        <p class="lead"> Please read the following bug report and write down your hypotheses.${
          exampleInfo.information
        } <b> You have ${exampleInfo.time} minutes to complete this stage.</b> </p>
        <hr class="my-4">
        <p>${example.example1.description}</p>
        <button id="refresh" class="btn btn-primary float-right">refresh</button>
        <br>
        <p class="lead">
            <div class="embed-responsive embed-responsive-1by1">
                <iframe id="application" src=${
                  example.example1[`binURL` + example.currentSubExample]
                } class="embed-responsive-item"></iframe>
            </div>
        </p>
         <p class="lead"><b>This is a picture of the correct program output.</b></p>
        <div class="card" style="margin: auto; width: 25rem;">
        <img class="card-img-top" src=${exampleImage} alt="application state">
        </div>
        <br>
        <div style='display: ${example.currentSubExample !== 1 ? `block` : `none`}'>
    <p class="lead"><b>This is a list of related documentations:</b></p>
        <ul>
            ${example.example1.links
              .map(l => `<li><a href=${l.link} target="_blank">${l.topic}</a></li>`)
              .join("")}
        </ul>
          
    </div>
        <div class="card text-center">
        <h4 class="text-danger"> Your Hypotheses Section.</h4>

            <div class="card-header">
                Hypotheses and Evidences
            </div>
            <div id="hypotheses" class="card-body">
                ${
                  example.currentSubExample != 1
                    ? getExampleHypotheses(true, 1, 3)
                    : getExampleHypotheses(false, 1, 2)
                }
            </div>
            <div style="width: 300px; margin:10px auto;">
                <button id="addHypothesisExample" class="btn btn-success">Add another Hypothesis</button>
            </div>
            <br>
            <br>
            <div style='display: ${example.currentSubExample != 1 ? `block` : `none`};  margin-top:10px'>   
            <h4 class="text-danger"> Expert Help: Please go through them all if possible and indicate how they helped or did not help you to fix the bug.</h4>  
                 <div id="expertHelpSection" class="card-body"></div>
            </div>
            <div style='display: ${example.currentSubExample ==3  ? `block` : `none`};  margin-top:10px'>     
                 <br>
                 <h4> Did you fix the bug ?</h4>
                 <button data-role="Yes" class="btn btn-success btn-lg" id="bugFixAnswerYes">YES</button>
                 <button data-role="No" class="btn btn-danger btn-lg" id="bugFixAnswerNo"> NO</button>
                  <br>
                  <br>
                  <div id="bugFixAnswer"></div>
                  <br>
             </div>
        </div>
        <br>
    <div style='width: 500px; margin:auto; display: ${
      example.currentSubExample === 3 ? `none` : `block`
    }'>
            <button id="exampleButton" data-role="assessment" class="btn btn-primary btn-lg btn-block"> submit</button>
    </div>
    <br>
    `;

  return exampleHTML;
};

export const getExpertHypothesesExample = example =>
  [1, 2]
    .map(
      index => html`
<h5 class="card-title">Hypothesis # ${index} </h5>
<p class="card-text">
    <div class="border-bottom border-dark ">
        <div class="form-group">
            <label for="expertHypothesis${index}"><b>Hypothesis</b>: Based on what you have learned so far, what do you think is a possible underlying reason for the bug?</label>

            <textarea class="form-control" id="expertHypothesis${index}" rows="3"disabled>${
        example["example1"]["expertHypothesis" + index]
      }</textarea>
        </div>
        <div class="form-group">
              <label for="evidence"><b>Next Steps</b>: What steps would you take to check if this hypothesis is true?</label>
              <textarea class="form-control" id="expertEvidence${index}" rows="3" disabled>${
        example["example1"]["evidence" + index]
      }</textarea>
          </div>
        <div class="form-group">
            <label for="expertWhy${index}">If this hypothesis is not relevant, please indicate why? </label>
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

export const getBuggyLinesExample = example =>
  [1, 2]
    .map(
      index => html`
<h5 class="card-title">Buggy Line # ${index} </h5>
<p class="card-text">
    <div class="border-bottom border-dark ">
        <div class="form-group">
            <label for="buggyLine${index}"><b>Buggy Line</b>: Where the bug is located.</label>
            <textarea class="form-control" id="buggyLine${index}" rows="3"disabled>${
        example["example1"]["buggyLine" + index]
      }</textarea>
        </div>
        <div class="form-group">
            <label for="buggyLineWhy${index}">If this bug line is not relevant, please indicate why? </label>
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

const getExampleHypotheses = (hypotheses = false, index, subExample) => html`
  <h5 class="card-title">Hypothesis # ${index} </h5>
  <p class="card-text">
      <div class="border-bottom border-dark ">
          <div class="form-group">
              <label for="hypothesis"><b>Hypothesis</b>: Based on what you have learned so far, what do you think is a possible underlying reason for the bug?</label>
              <textarea class="form-control" id="hypothesis${index}" rows="3">${
  hypotheses ? "The image name is misspelled or the image extension in the src is wrong" : ""
}</textarea>
          </div>
          <div class="form-group">
              <label for="evidence"><b>Testing Steps</b>: What steps would you take to check if this hypothesis is true?</label>
              <textarea class="form-control" id="evidence${index}" rows="3">${
  hypotheses
    ? "check the name of the image and its extension. usually the extension .png or .jpg"
    : ""
}</textarea>
          </div>
          <div class="custom-control custom-checkbox " style="display:${
            subExample === 3 ? " flex " : "none "
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

const addHypothesisExample = () => {
  experiment.example.numberOfHypotheses++;
  const div = document.createElement("div");
  div.innerHTML += utils.getHypothesisForum(experiment.example.numberOfHypotheses);
  ui.getElement("hypotheses").appendChild(div);
};
const expertHelpExample = () => {
  let content =
    getBuggyLinesExample(experiment.example) + getExpertHypothesesExample(experiment.example);
  ui.getElement("expertHelpSection").innerHTML = content;
};
export const example = () => {
  window.scrollTo(0, 0);
  let content;
  experiment.example.numberOfHypotheses = 1;
  content = experimentExample(experiment.example);
  ui.render("contents", content);
  expertHelpExample();
  ui.attachEvent(ui.getElement("addHypothesisExample"), "click", addHypothesisExample);
  ui.attachEvent(
    ui.getElement("refresh"),
    "click",
    //@ts-ignore
    () => (ui.getElement("application").src += "")
  );
  if (experiment.example.currentSubExample === 3) {
    ui.attachEvent(ui.getElement("bugFixAnswerYes"), "click", () => {
      ui.getElement("bugFixAnswer").innerHTML = utils.bugFixYes();
      ui.attachEvent(ui.getElement("button"), "click", start);
    });
    ui.attachEvent(ui.getElement("bugFixAnswerNo"), "click", () => {
      ui.getElement("bugFixAnswer").innerHTML = utils.bugFixNo();
      ui.attachEvent(ui.getElement("button"), "click", start);
    });
  } else {
    ui.attachEvent(ui.getElement("exampleButton"), "click", () => renderPage("example"));
    experiment.example.currentSubExample++;
  }
};
