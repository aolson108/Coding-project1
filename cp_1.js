//DOMs (constants)
const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display");
const charCount = document.getElementById("char-count");

//display tooltip
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

//tooltip styles
commentsInput.addEventListener("input", function () {
    const length = commentsInput.value.length;
    charCount.textContent = `${length}/200`;
});

//mouseover
form.addEventListener("mouseover", function (event) {
    if (event.target.dataset.tooltip) {
        tooltip.textContent = event.target.dataset.tooltip;
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    }
});

//mouseout
form.addEventListener("mouseout", function (event) {
    tooltip.style.display = "none";
});

//event bubbling
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (!name || !email || !comments) {
        alert("Fill out all fields.");
        return;
    }

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${name}</strong> (${email}): <p>${comments}</p>`;
    feedbackDisplay.appendChild(entry);

    nameInput.value = "";
    emailInput.value = "";
    commentsInput.value = "";
    charCount.textContent = "0/200";
    });

    //background clicks
    document.body.addEventListener("click", function (event) {
        console.log("Background clicked");
    });

    form.addEventListener("click", function (event) {
        event.stopPropagation();
    });
