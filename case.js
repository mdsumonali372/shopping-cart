// update case number
function updateCaseNumber(isIncrease) {
  const caseInputField = document.getElementById("case-input");
  const previousCaseNumber = parseInt(caseInputField.value);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseInputField.value = newCaseNumber;
  return newCaseNumber;
}

// update case price
function updateCasePrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCasePrice(newCaseNumber);
  calculatePhone();
});

document.getElementById("case-minus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(false);
  updateCasePrice(newCaseNumber);
  calculatePhone();
});
