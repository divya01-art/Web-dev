// Example of marking steps as completed dynamically
const steps = document.querySelectorAll(".tracking-steps .step");

// Simulate dynamic status update (e.g., from a server)
const completedSteps = 5; // Example: All 5 steps completed

steps.forEach((step, index) => {
  if (index < completedSteps) {
    step.classList.add("completed");
  }
});