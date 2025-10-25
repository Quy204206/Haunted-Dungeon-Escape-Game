// Haunted Dungeon Escape 👻
// A simple math puzzle adventure game

const rooms = [
  {
    description: "You see a glowing riddle on the wall: 3x - 5 = 10. Solve for x.",
    answer: "5"
  },
  {
    description: "A skeleton blocks your way! Find the area of a rectangle 4 x 6.",
    answer: "24"
  },
  {
    description: "You find a mysterious scroll: What is 12 ÷ 4?",
    answer: "3"
  },
  {
    description: "The final gate asks: What is sin(90°)?",
    answer: "1"
  }
];

let currentRoom = 0;

const descriptionEl = document.getElementById("room-description");
const inputEl = document.getElementById("answer-input");
const buttonEl = document.getElementById("submit-btn");
const messageEl = document.getElementById("message");

function showRoom() {
  if (currentRoom < rooms.length) {
    descriptionEl.textContent = rooms[currentRoom].description;
    inputEl.value = "";
    messageEl.textContent = "";
  } else {
    descriptionEl.textContent = "🎉 You escaped the haunted dungeon! Congratulations!";
    inputEl.style.display = "none";
    buttonEl.style.display = "none";
    messageEl.textContent = "";
  }
}

buttonEl.addEventListener("click", () => {
  const userAnswer = inputEl.value.trim();
  if (userAnswer === rooms[currentRoom].answer) {
    messageEl.textContent = "✅ Correct! The door creaks open...";
    currentRoom++;
    setTimeout(showRoom, 1500);
  } else {
    messageEl.textContent = "👻 Wrong! The ghost laughs... Try again!";
  }
});

showRoom();

