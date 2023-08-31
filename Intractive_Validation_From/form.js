// form.js

function handleChange(input, errorId) {
  input.classList.remove("error");
  document.getElementById(errorId).style.display = "none";
}

function submit() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number");
  const passwordInput = document.getElementById("password");

  const inputs = [
    {
      input: nameInput,
      errorId: "nameError",
      errorMessage: "Name must be 3 words",
    },
    {
      input: emailInput,
      errorId: "emailError",
      errorMessage: "Please enter a valid email address.",
    },
    {
      input: numberInput,
      errorId: "numberError",
      errorMessage: "Number must be 10 digits.",
    },
    {
      input: passwordInput,
      errorId: "passwordError",
      errorMessage: "Minimum password length must be 5.",
    },
  ];

  let isValid = true;

  inputs.forEach((inputData) => {
    const { input, errorId, errorMessage } = inputData;
    if (input === numberInput && input.value.length !== 10) {
      isValid = false;
      input.classList.add("error");
      document.getElementById(errorId).textContent = errorMessage;
      document.getElementById(errorId).style.display = "block";
    } else if (input === passwordInput && input.value.length < 5) {
      isValid = false;
      input.classList.add("error");
      document.getElementById(errorId).textContent = errorMessage;
      document.getElementById(errorId).style.display = "block";
    } else if (input === nameInput && input.value.length < 3) {
      isValid = false;
      input.classList.add("error");
      document.getElementById(errorId).textContent = errorMessage;
      document.getElementById(errorId).style.display = "block";
    }
    else if (input === emailInput) {
        const emailValue = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(emailValue)) {
            isValid = false;
            input.classList.add("error");
            document.getElementById(errorId).textContent = errorMessage;
            document.getElementById(errorId).style.display = "block";
        } else {
            document.getElementById(errorId).style.display = "none";
        }
    }else {
        document.getElementById(errorId).style.display = "none";
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    alert("Please correct the errors in the form.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", submit);

  const inputs = document.querySelectorAll(".form input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      handleChange(input, `${input.id}Error`);
    });
  });
});
