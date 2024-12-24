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

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("name-overlay");
  const nameInput = document.getElementById("user-name");
  const submitButton = document.getElementById("submit-name");
  const greeting = document.getElementById("greeting");

  // Clear localStorage on page load to reset name
  localStorage.removeItem("userName");

  // Show the overlay on page load
  overlay.style.display = "flex";

  // When user submits their name
  submitButton.addEventListener("click", () => {
    const userName = nameInput.value.trim();
    if (userName) {
      // Generate and display the greeting
      displayGreeting(userName);
      overlay.style.display = "none";
    } else {
      alert("Please enter your name! 😊");
    }
  });
  displayGreeting(userName);
  playJingle();
  overlay.style.display = "none";

  // Function to generate time-based greeting
  function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else if (currentHour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  }

  // Function to display the personalized greeting
  function displayGreeting(name) {
    const timeGreeting = getTimeBasedGreeting();
    if (greeting) {
      greeting.textContent = `${timeGreeting}, ${name}! Merry Christmas! 🎄✨`;
    }
  }
});

function playJingle() {
  const audio = new Audio(
    "https://www.bensound.com/bensound-music/bensound-happyrock.mp3"
  ); // Replace with your jingle URL
  audio.play();
}

// function createSnowflake(name) {
//   const snowflake = document.createElement("div");
//   snowflake.textContent = name || "❄️"; // Use the name if available, else default to ❄️
//   snowflake.classList.add("snowflake");
//   document.body.appendChild(snowflake);

//   // Randomize position and animation duration
//   snowflake.style.left = Math.random() * 100 + "vw";
//   snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

//   // Remove snowflake after animation ends
//   setTimeout(() => snowflake.remove(), 5000);
// }

// setInterval(() => {
//   const userName = document.getElementById("user-name").value || "❄️";
//   createSnowflake(userName);
// }, 300);

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
