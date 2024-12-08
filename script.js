// Switch between login and register forms
function switchToRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function switchToLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

// Register a new user
function registerUser() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (username === "" || password === "") {
    document.getElementById("register-error").innerText = "Please fill in both fields.";
    return;
  }

  // Check if username already exists
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  if (existingUsers.some(user => user.username === username)) {
    document.getElementById("register-error").innerText = "Username already taken.";
    return;
  }

  // Store the new user in localStorage
  existingUsers.push({ username, password });
  localStorage.setItem("users", JSON.stringify(existingUsers));
  document.getElementById("register-error").innerText = "";
  alert("Registration successful! You can now log in.");
  switchToLogin();
}

// Login an existing user
function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === "" || password === "") {
    document.getElementById("login-error").innerText = "Please fill in both fields.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    document.getElementById("login-error").innerText = "";
    alert("Login successful! Welcome, " + username + ".");
    // Redirect or show logged-in content
  } else {
    document.getElementById("login-error").innerText = "Invalid username or password.";
  }
}
