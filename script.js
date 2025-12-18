document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("registerForm");

  // FORM SUBMIT
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = document.querySelector('input[placeholder="First Name"]').value.trim();
    const lastName = document.querySelector('input[placeholder="Last Name"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    const gender = document.querySelector('input[name="r1"]:checked');
    const country = document.querySelector(".country").value;
    const terms = document.querySelector("#cb").checked;

    if (!firstName || !lastName) return alert("Enter full name");
    if (!email) return alert("Enter email");
    if (password.length < 6) return alert("Password must be 6+ chars");
    if (password !== confirmPassword) return alert("Passwords do not match");
    if (!gender) return alert("Select gender");
    if (country === "Select your Country") return alert("Select country");
    if (!terms) return alert("Accept terms");

    const data = {
      name: firstName + " " + lastName,
      email,
      password,
      role: "student"
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      alert(result.message);

      if (res.ok) form.reset();

    } catch (error) {
      alert("Backend not running!");
    }
  });

});



const pages = [
  "/index.html",
  "/source/html2.html"
];


let currentPage = pages.findIndex(page =>
  window.location.pathname.includes(page)
);

function goNext() {
  if (currentPage < pages.length - 1) {
    window.location.href ="/success.html";
  }
}

function goPrev() {
  if (currentPage > 0) {
    window.location.href = pages[currentPage - 1];
  }
}
