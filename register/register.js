import { participantTemplate, successTemplate } from "./templates.js";

let participantCount = 1;

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
  participantCount++;
  addBtn.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
});

function totalFees() {
  let feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((sum, input) => sum + Number(input.value || 0), 0);
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#adult_name").value.trim();
  const total = totalFees();
  const summary = document.querySelector("#summary");
  if (name === "") {
    alert("Please enter the adult contact name.");
    return;
  }
  form.style.display = "none";
  summary.innerHTML = successTemplate({
    name,
    count: participantCount,
    total,
  });
  summary.style.display = "block";
});
