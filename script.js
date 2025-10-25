// ====== Role Toggle Code (Your Original) ======
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
  });
});

// ====== Mobile Floating Menu Code ======
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon i");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeIcon = document.querySelector(".close-icon");

  if (menuIcon && mobileMenu && closeIcon) {
    // Open mobile menu when clicking hamburger icon
    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    // Close menu when clicking close icon
    closeIcon.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    // Close menu if clicking outside the content area
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  }
});
