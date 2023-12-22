const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorText = document.getElementById("error-text");
const modal = document.getElementById("modal");
const dismissBtn = document.getElementById("dismiss-btn");
const userEmail = document.getElementById("user-email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    showModal(emailValue);
  } else {
    showError();
  }
});

dismissBtn.addEventListener("click", hideModal);

emailInput.addEventListener("input", clearError);

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function showModal(email) {
  modal.classList.remove("hide");
  userEmail.textContent = email;
}

function hideModal() {
  modal.classList.add("hide");
  emailInput.value = "";
}

function showError() {
  emailInput.classList.add("input-error");
  errorText.classList.remove("hide");
}

function clearError() {
  emailInput.classList.remove("input-error");
  errorText.classList.add("hide");
}
