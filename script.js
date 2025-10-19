  const roleButtons = document.querySelectorAll(".role-btn");
  const loginInput = document.getElementById("loginId");

  roleButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      roleButtons.forEach(btn => btn.classList.remove("active"));

      // Add 'active' class to clicked button
      button.classList.add("active");

      // Get role from data attribute
      const role = button.getAttribute("data-role");

      // Change placeholder based on role
      if (role === "doctor") {
        loginInput.placeholder = "Doctor ID";
      } else if (role === "admin") {
        loginInput.placeholder = "Admin ID";
      } else {
        loginInput.placeholder = "Patient ID";
      }

      // Optionally store selected role (e.g., in hidden input or variable)
    });
  });

