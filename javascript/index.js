const button = document.querySelector(".icon");
const dropdown = document.querySelector(".menu-dropdown");
const dropdownItems = document.querySelectorAll(".menu-dropdown-items");

console.log(button);
console.log(dropdown);

button.addEventListener("click", () => {
  button.classList.toggle("transform");
  dropdown.classList.toggle("display-none");
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
      button.classList.toggle("transform");
    dropdown.classList.toggle("display-none");
  });
});

const aboutme = document.querySelector(".aboutme");
const aboutMeHeader = document.querySelector(".aboutme-header");
const aboutMeContent = document.querySelector(".aboutme-content");

aboutMeHeader.addEventListener("click", () => {
  aboutMeContent.classList.toggle("display-none");
  aboutme.classList.toggle("min-height-15vh");
});

const educationHeader = document.querySelector("#education-header");
const educationContent = document.querySelector("#education-content");

educationHeader.addEventListener("click", () => {
  educationContent.classList.toggle("display-none");
});

const skillsHeader = document.querySelector("#skills-header");
const skillsContent = document.querySelector("#skills-content");

skillsHeader.addEventListener("click", () => {
  skillsContent.classList.toggle("display-none");
});

const certificationHeader = document.querySelector("#certification-header");
const certificationContent = document.querySelector("#certification-content");

certificationHeader.addEventListener("click", () => {
  certificationContent.classList.toggle("display-none");
});

const projectHeader = document.querySelector("#project-head");
const projectContent = document.querySelector(".project-container");

projectHeader.addEventListener("click", () => {
  projectContent.classList.toggle("display-none");
});
