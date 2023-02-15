// innertext by element function
function getTextELementById(elementId) {
  const phoneCaseTotalElement = document.getElementById(elementId);
  const currentPhoneCaseTotal = parseInt(phoneCaseTotalElement.innerText);
  return currentPhoneCaseTotal;
}
// set text element by id
function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

// calculate function
function calculatePhone() {
  const currentPhoneTotal = getTextELementById("phn-total");
  const currentPhoneCase = getTextELementById("case-total");
  const currentSubTotal = currentPhoneTotal + currentPhoneCase;
  setTextElementById("sub-total", currentSubTotal);
  //   tax amount

  const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
  setTextElementById("tax-amount", taxAmount);
  const total = currentSubTotal + taxAmount;
  setTextElementById("total-amount", total);
}
