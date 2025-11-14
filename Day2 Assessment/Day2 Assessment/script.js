// -------- REGISTER --------
function register() {
  let username = document.getElementById("regUsername").value.trim();
  let password = document.getElementById("regPassword").value.trim();

  if (!username || !password) {
    alert("Please fill all fields!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.username === username)) {
    alert("Username already exists!");
    return;
  }

  // Generate unique ID
  let newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  users.push({ id: newId, username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  showLogin();
}

// -------- LOGIN --------
function login() {
  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "welcome.html";
  } else {
    alert("Invalid credentials!");
  }
}

// -------- PAGE SWITCHES --------
function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

// -------- WELCOME PAGE --------
if (window.location.pathname.includes("welcome.html")) {
  let user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) window.location.href = "index.html";

  document.getElementById("welcomeText").innerHTML = `Hi, <span style="color: black;">${user.username}</span>!`;
  document.getElementById("userIdText").innerText = `Your User ID: ${user.id}`;
}

function openMonthly() {
  window.location.href = "monthly.html";
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}
function openTimeTable() {
  window.location.href = "timetable.html";
}


// -------- MONTHLY PAGE --------
const activities = [
  { id: 1, activity: "Create project file with tables from 12 to 19", subject: "Maths" },
  { id: 2, activity: "Perform an experiment on chemical reactions", subject: "Science" },
  { id: 3, activity: "Write an essay on 'My School'", subject: "English" },
  { id: 4, activity: "Design a webpage using HTML and CSS", subject: "Computer" }
];

if (window.location.pathname.includes("monthly.html")) {
  let user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!user) window.location.href = "index.html";
}

function showActivity() {
  const subject = document.getElementById("subjectSelect").value;
  const listDiv = document.getElementById("activityList");
  listDiv.innerHTML = "";

  if (!subject) return;

  const filtered = activities.filter(a => a.subject === subject);

  if (filtered.length === 0) {
    listDiv.innerHTML = "<p>No activities found!</p>";
    return;
  }

  filtered.forEach(a => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${a.subject}:</strong> ${a.activity}</p>`;
    div.style.background = "rgba(255,255,255,0.1)";
    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.borderRadius = "10px";
    listDiv.appendChild(div);
  });
}

function backToWelcome() {
  window.location.href = "welcome.html";
}
function openProfile() {
  window.location.href = "profile.html";
}

function openAbout() {
  window.location.href = "about.html";
}

// -------- TIMETABLE PAGE --------
if (window.location.pathname.includes("timetable.html")) {
  document.addEventListener('DOMContentLoaded', function() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE11
      document.documentElement.msRequestFullscreen();
    }
  });
}

