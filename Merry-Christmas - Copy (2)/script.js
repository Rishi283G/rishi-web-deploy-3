// Snowfall Effect
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".snow-container");
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    container.appendChild(snowflake);
  }
});

// Greeting Update
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();
if (hours < 12) {
  greeting.textContent = "Good Morning and Merry Christmas!🌟";
} else if (hours < 18) {
  greeting.textContent = "Good Afternoon and Merry Christmas!🎄";
} else {
  greeting.textContent = "Good Evening and Merry Christmas!🎅";
}

// Contact Form
// const contactForm = document.getElementById("contactForm");
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Thank you for your message! Merry Christmas!");
// });
// Toggle Light Strings On/Off
// document.addEventListener("DOMContentLoaded", () => {
//   const lightStrings = document.querySelectorAll('.light-string');
//   const toggleButton = document.getElementById('toggle-lights');
//   let lightsOn = false;

//   toggleButton.addEventListener('click', () => {
//       lightsOn = !lightsOn;
//       lightStrings.forEach((string) => {
//           string.style.visibility = lightsOn ? 'visible' : 'hidden';
//       });
//       toggleButton.textContent = lightsOn ? 'Turn Off Lights' : 'Turn On Lights';
//   });
// });

// // Drag-and-Drop Ornaments
// document.addEventListener("DOMContentLoaded", () => {
//   const ornaments = document.querySelectorAll('.ornament');
//   const treeContainer = document.querySelector('.tree-container');

//   ornaments.forEach((ornament) => {
//       ornament.addEventListener('dragstart', (e) => {
//           e.dataTransfer.setData('text/plain', 'ornament');
//       });
//   });

//   treeContainer.addEventListener('dragover', (e) => {
//       e.preventDefault();
//   });

//   treeContainer.addEventListener('drop', (e) => {
//       const ornament = document.createElement('div');
//       ornament.className = 'ornament';
//       ornament.style.position = 'absolute';
//       ornament.style.left = `${e.offsetX}px`;
//       ornament.style.top = `${e.offsetY}px`;
//       treeContainer.appendChild(ornament);
//   });
// });
