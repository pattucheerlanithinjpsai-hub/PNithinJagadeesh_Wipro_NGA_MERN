import React, { useState, Suspense, lazy } from "react";
import Loader from "./components/Loader";
import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";

// Lazy loaded components
const CourseDetails = lazy(() => import("./components/CourseDetails"));
const InstructorProfile = lazy(() => import("./components/InstructorProfile"));

function App() {
  // Lazy loading toggles
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);

  // Stats state (Pure Components)
  const [stats, setStats] = useState([
    { title: "Students", value: 100, lastUpdated: "Today" },
    { title: "Courses", value: 50, lastUpdated: "Today" },
  ]);

  // Update Students
  const updateStudents = () => {
    setStats(prevStats =>
      prevStats.map(s =>
        s.title === "Students" ? { ...s, value: s.value + 1 } : s
      )
    );
  };

  // Update Courses
  const updateCourses = () => {
    setStats(prevStats =>
      prevStats.map(s =>
        s.title === "Courses" ? { ...s, value: s.value + 1 } : s
      )
    );
  };

  // Portal modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ReactJS Advanced Concepts</h1>

      {/* Lazy Loading Section */}
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setShowCourse(!showCourse)}>
          View Course Details
        </button>
        <button onClick={() => setShowInstructor(!showInstructor)}>
          View Instructor Profile
        </button>
      </div>

      <Suspense fallback={<Loader />}>
        {showCourse && <CourseDetails />}
        {showInstructor && <InstructorProfile />}
      </Suspense>

      {/* Dashboard with Pure Components */}
      <h2>Dashboard</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {stats.map((s, i) => (
          <StatsCard
            key={i}
            title={s.title}
            value={s.value}
            lastUpdated={s.lastUpdated}
          />
        ))}
      </div>
      <div style={{ margin: "10px 0" }}>
        <button onClick={updateStudents}>Simulate Student Update</button>
        <button onClick={updateCourses}>Simulate Course Update</button>
      </div>

      {/* Product Cards with Error Boundary */}
      <h2>Product Cards</h2>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ProductCard />
        </Suspense>
      </ErrorBoundary>

      {/* Portal Modal */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3>Notification</h3>
          <p>This is a portal modal!</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
