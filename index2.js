// Check eligibility for vote by age
function eligibility(age) {
  if (typeof age !== "number" || age < 0) {
    console.log("Invalid age provided!");
    return;
  }
  if (age < 18) {
    console.log("Not eligible to vote!");
    return;
  }
  console.log("Eligible to vote!");
}

// Test cases
eligibility(5); // Not eligible to vote!
eligibility(20); // Eligible to vote!
eligibility(-3); // Invalid age provided!
eligibility("15"); // Invalid age provided!
