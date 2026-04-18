setTimeout(() => {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("lock").classList.add("active");
}, 3000);

// SPECIAL DATE CHECK
function checkDate() {
  const input = document.getElementById("dateInput").value;
  if (input === "04/19/2025") {
    document.getElementById("lock").classList.remove("active");
    document.getElementById("main").classList.add("active");
  } else {
    document.getElementById("error").innerText = "Think of a special day ❤️";
  }
}

// MESSAGES
const messages = [
  "From the day I met you...",
  "Everything felt different...",
  "You became my favorite person..."
];

function startMessages() {
  const container = document.getElementById("messages");
  let i = 0;

  function show() {
    if (i < messages.length) {
      container.innerHTML = messages[i];
      i++;
      setTimeout(show, 2000);
    } else {
      document.getElementById("final").classList.remove("hidden");
    }
  }
  show();
}

// SECRET TAP
let taps = 0;
function secretTap() {
  taps++;
  if (taps >= 5) {
    document.getElementById("secret").innerText = "Ikaw at ikaw lang ❤️";
  }
}

// GLOBAL SECRET
let clicks = 0;
document.body.addEventListener("click", () => {
  clicks++;
  if (clicks >= 10) {
    document.getElementById("overlay").style.display = "flex";
  }
});
