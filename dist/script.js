const overlay = document.querySelector(".overlay");
const overlaybtns = document.querySelector(".overlay-buttons");

const home_button = document.querySelector("#home");
const workouts_button = document.querySelector("#workouts");

if (window.location.href.includes("index")) {
  home_button.classList.add("active");
  workouts_button.classList.remove("active");
} else if (window.location.href.includes("workout_history")) {
  home_button.classList.remove("active");
  workouts_button.classList.add("active");
}

let workouts;

if (localStorage.getItem("workouts")) {
  workouts = JSON.parse(localStorage.getItem("workouts"));
} else {
  workouts = [
    {
      name: "Chest",
      date: "2026-05-04",
      excercises: [
        {
          name: "Bench Press",
          sets: [
            { reps: "10", weight: "60" },
            { reps: "8", weight: "70" },
            { reps: "6", weight: "80" },
            { reps: "6", weight: "80" },
          ],
        },
        {
          name: "Incline Dumbbell Press",
          sets: [
            { reps: "10", weight: "24" },
            { reps: "10", weight: "26" },
            { reps: "8", weight: "28" },
          ],
        },
      ],
    },
    {
      name: "Back",
      date: "2026-05-04",
      excercises: [
        {
          name: "Deadlift",
          sets: [
            { reps: "8", weight: "80" },
            { reps: "6", weight: "100" },
            { reps: "5", weight: "120" },
            { reps: "3", weight: "130" },
            { reps: "3", weight: "130" },
          ],
        },
        {
          name: "Barbell Row",
          sets: [
            { reps: "10", weight: "50" },
            { reps: "8", weight: "60" },
            { reps: "8", weight: "60" },
          ],
        },
      ],
    },
    {
      name: "Legs",
      date: "2026-05-04",
      excercises: [
        {
          name: "Squat",
          sets: [
            { reps: "10", weight: "60" },
            { reps: "8", weight: "80" },
            { reps: "6", weight: "90" },
            { reps: "6", weight: "90" },
          ],
        },
        {
          name: "Leg Press",
          sets: [
            { reps: "12", weight: "120" },
            { reps: "12", weight: "140" },
            { reps: "10", weight: "160" },
          ],
        },
        {
          name: "Romanian Deadlift",
          sets: [
            { reps: "10", weight: "50" },
            { reps: "10", weight: "60" },
          ],
        },
      ],
    },
    {
      name: "Shoulders",
      date: "2026-05-04",
      excercises: [
        {
          name: "Overhead Press",
          sets: [
            { reps: "8", weight: "40" },
            { reps: "8", weight: "45" },
            { reps: "6", weight: "50" },
            { reps: "6", weight: "50" },
          ],
        },
        {
          name: "Lateral Raise",
          sets: [
            { reps: "12", weight: "10" },
            { reps: "12", weight: "12" },
            { reps: "12", weight: "12" },
          ],
        },
      ],
    },
  ];
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

function toggleOverlay() {
  overlay.classList.add("active");
  overlaybtns.classList.add("active");
  overlay.addEventListener("click", handleClick);
}

function closeOverlay() {
  overlay.classList.remove("active");
  overlaybtns.classList.remove("active");
}

function handleClick(e) {
  if (e.target === overlay) {
    closeOverlay();
  }
}
