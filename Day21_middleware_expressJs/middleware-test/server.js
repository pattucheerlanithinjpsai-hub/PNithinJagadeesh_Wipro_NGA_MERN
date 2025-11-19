const express = require("express");
const morgan = require("morgan");

const app = express();


// 1. BUILT-IN MIDDLEWARE (body parsing)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 2. MORGAN LOGGING (formatted logs)

app.use(morgan("dev"));


// 3. CUSTOM LOGGING MIDDLEWARE

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[CUSTOM LOG] ${req.method} ${req.url} at ${timestamp}`);
  next();
});


// 4. CUSTOM VALIDATION MIDDLEWARE FOR /students

function validateStudent(req, res, next) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: "error",
      message: "Name and Email are required fields.",
    });
  }

  next();
}


// 5. ROUTES
// Student POST route
app.post("/students", validateStudent, (req, res) => {
  res.json({
    status: "success",
    message: "Student created successfully",
    data: req.body,
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Middleware Demo Running Successfully!");
});


// 6. 404 NOT FOUND MIDDLEWARE

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});


// 7. GLOBAL ERROR HANDLING MIDDLEWARE

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);

  res.status(500).json({
    status: "error",
    message: "Unexpected server error. Please try again later.",
  });
});


// START SERVER

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
