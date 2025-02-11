// Image click handler
document.querySelectorAll(".image-box img").forEach(img => {
    img.addEventListener("click", () => {
        alert("You clicked on: " + img.alt);
    });
});

// Hamster button movement
const button = document.getElementById("hamsterButton");
button.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

// Header color change every 1 second
const header = document.getElementById("colorHeader");
let isBlue = true;
setInterval(() => {
    if (header) {
        header.style.color = isBlue ? "blue" : "green";
        isBlue = !isBlue;
    }
}, 1000); // Changes color every 1 second

// Wheel click animation toggle
const wheel = document.querySelector(".wheel");
if (wheel) {
    wheel.addEventListener("click", () => {
        if (wheel.style.animationPlayState === "paused") {
            wheel.style.animationPlayState = "running";
        } else {
            wheel.style.animationPlayState = "paused";
        }
    });
}

// Amazigh Flag movement
const flag = document.getElementById("amazighFlag");
function moveFlag() {
    if (flag) {
        const x = Math.random() * (window.innerWidth - flag.clientWidth);
        const y = Math.random() * (window.innerHeight - flag.clientHeight);

        flag.style.transition = "top 2s linear, left 2s linear";
        flag.style.left = `${x}px`;
        flag.style.top = `${y}px`;
    }
}
// Move the flag every 2 seconds
setInterval(moveFlag, 2000);

// Alert Button Interaction
document.getElementById("alertButton")?.addEventListener("click", () => {
    alert("You clicked the button!");
});

// Background color change
function changeBackground() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#f0db4f", "#d633ff"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
