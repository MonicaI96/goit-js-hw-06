const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (formObject.email === "" || formObject.password === "") {
    alert("Toate câmpurile trebuie completate.");
  } else {
    console.log("Datele introduse:", formObject);
    loginForm.reset();
  }
});