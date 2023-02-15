// update phone input number
function updatePhoneInput(isIncrease) {
  const phoneInputField = document.getElementById("phn-input");
  const previousPhoneInput = parseInt(phoneInputField.value);
  let newPhoneInput;
  if (isIncrease === true) {
    newPhoneInput = previousPhoneInput + 1;
  } else {
    newPhoneInput = previousPhoneInput - 1;
  }
  phoneInputField.value = newPhoneInput;
  return newPhoneInput;
}
// phone total price
function updatePhonePrice(newPhoneInput) {
  const phoneTotalPrice = newPhoneInput * 1219;
  const phontTotalElement = document.getElementById("phn-total");
  phontTotalElement.innerText = phoneTotalPrice;
}

// phone increment
document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    const newPhoneInput = updatePhoneInput(true);
    updatePhonePrice(newPhoneInput);
    // calculate phone price
    calculatePhone();
  });

// phone decrement
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newPhoneInput = updatePhoneInput(false);
    updatePhonePrice(newPhoneInput);
    // calculate phone price
    calculatePhone();
  });
