const counsellors = [
  {
    name: "Dr. Aisha Verma",
    role: "Academic Counsellor",
    experience: "10 Years Experience",
    location: "Delhi, India",
    rating: "★★★★★",

  },
  {
    name: "Rahul Mehta",
    role: "Career Consultant",
    experience: "7 Years Experience",
    location: "Mumbai, India",
    rating: "★★★★☆"
  },
  {
    name: "Neha Kulkarni",
    role: "Mental Wellness Coach",
    experience: "5 Years Experience",
    location: "Pune, India",
    rating: "★★★★★",
    
  }
];

const container = document.getElementById("counsellorList");

counsellors.forEach(c => {
  container.innerHTML += `
    <div class="card">
      <img src="${c.image}">
      <h3>${c.name}</h3>
      <span>${c.role}</span>
      <p>${c.experience}</p>
      <p>${c.location}</p>
      <div class="rating">${c.rating}</div>
      <button class="btn">Book Appointment</button>
    </div>
  `;
});

/* Navigation */
const pages = [
  "/index.html",
  "/source/html2.html",
  "/source/new.html"
];

let currentPage = pages.findIndex(p =>
  window.location.pathname.includes(p)
);

function goNext() {
  if (currentPage < pages.length - 1)
    window.location.href = pages[currentPage + 1];
}

function goPrev() {
  if (currentPage > 0)
    window.location.href = "/index.html";
}
