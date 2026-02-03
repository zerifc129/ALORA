// Qeydiyyat
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        localStorage.setItem(email, JSON.stringify({username, password}));
        alert("Qeydiyyat uğurla tamamlandı!");
        window.location.href = "login.html";
      });
    }
  
    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
  
        const user = JSON.parse(localStorage.getItem(email));
        if (user && user.password === password) {
          alert("Giriş uğurlu!");
          window.location.href = "dashboard.html";
        } else {
          alert("Email və ya şifrə yanlışdır!");
        }
      });
    }
  });
  