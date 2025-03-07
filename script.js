
// Sticky Navigation Menu JS CodequerySelectortext
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const ctx = document.getElementById('experienceChart').getContext('2d');

// Experience data for timeline
const chartData = {
  labels: ['Feb 2018 - Feb 2019', ' June 2020 - Nov 2020', 'Dec 2020 - Jan 2022', 'Feb 2022 - Feb 2024','Mar 2024 - Mar 2025'],  // X-axis (Years)
  datasets: [{
    label: 'Years of Experience',
    data: [1,0.4, 1.1, 2, 1],  // Y-axis values (Years of experience at each company)
    backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Bar color
    borderColor: 'rgb(75, 192, 192)',  // Border color
    borderWidth: 1,
    tension: 0.1,
  }]
};

// Companies and positions (same order as chartData)
const companies = [
  { name: 'Code IT Pvt. Ltd', position: 'Intern - Full Stack Developer' },
  { name: 'Sagarmatha SD College', position: 'Full Stack Developer (VB.Net & Flutter)' },
  { name: 'IMS Software Pvt.Ltd', position: 'Junior Fullstack .NET Developer' },
  { name: 'EZone International Pvt. Ltd', position: 'Mid-Level Fullstack ASP.NET Developer' },
  { name: 'Freelancing', position: 'Freelancer Developer' }
];

// Chart Configuration
const config = {
  type: 'bar',  // Changed from 'line' to 'bar' to create a bar chart
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: { display: true, text: 'Year' }
      },
      y: {
        beginAtZero: true,
        max : 2.5,
        title: { display: true, text: 'Experience (Years)' },
        ticks: {
          stepSize: 0.5 // Ensures Y-axis increments by 0.5
        }
      }
    },
    plugins: {
      annotation: {
        annotations: companies.map((company, index) => ({
          type: 'label',
          xValue: chartData.labels[index],  // Corresponding Year
          yValue: chartData.datasets[0].data[index],  // Years of experience
          backgroundColor: 'rgba(255, 255, 255, 0)',
          content: `${company.name} - ${company.position}`,
          font: { size: 12, weight: 'bold', family: 'Arial' },
          color: 'black',
          position: 'top',  // Position of the label (above the bar)
        }))
      }
    }
  }
};


// Initialize the chart
const experienceChart = new Chart(ctx, config);

