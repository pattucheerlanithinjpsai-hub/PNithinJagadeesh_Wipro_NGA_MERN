const validStudents = {
  "nitin": "1234",
  "alex": "abcd",
  "sara": "pass123"
};

function login() {
  const name = document.getElementById("studentName").value.toLowerCase();
  const password = document.getElementById("studentPassword").value;

  if (validStudents[name] === password) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("welcome-container").classList.remove("hidden");
    document.getElementById("studentDisplayName").textContent = name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    document.getElementById("loginMessage").textContent = "Invalid student credentials.";
  }
}

function showReport() {
  document.getElementById("welcome-container").classList.add("hidden");
  document.getElementById("report-container").classList.remove("hidden");
}