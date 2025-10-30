// Show Login Form
function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

// Show Register Form
function showRegisterForm() {
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
}

// Handle Login Submission
function submitLogin() {
  const name = document.getElementById("loginName").value;
  const location = document.getElementById("loginLocation").value;
  const password = document.getElementById("loginPassword").value;

  console.log("Login Info:", { name, location, password });
  alert(`Welcome back, ${name}!`);
}

// Handle Registration Submission
  function submitRegister() {
  const firstName = document.getElementById("regFirstName").value.trim();
  const lastName = document.getElementById("regLastName").value.trim();
  const location = document.getElementById("regLocation").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const email = document.getElementById("regEmail").value.trim();

  if (!firstName || !lastName || !location || !password || !email) {
    alert("Please fill in all fields before registering.");
    return;
  }

  console.log("Registration submitted:", { firstName, lastName, location, password, email });
  alert("Thanks for registering!");
}