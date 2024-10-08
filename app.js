// a comment !
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
}

// Run logWorkbookInformation when the workbook becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
