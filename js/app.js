const riddleData = [
    {
        riddle: "It has a golden head. It has a golden tail. It has no body",
        options: ["A gold coin", "A medal", "A crown", "A snake"],
        answer: "A gold coin"
    },
    {
        riddle: "What has two hands on its face but no arms?",
        options: ["A Puppet", "A Robot", "A Painting", "A Clock"],
        answer: "A Clock"
    },
    {
        riddle: "Brought to the table. Cut and served. Never eaten.",
        options: ["A turkey", "A cake", "A deck of cards", "A pizza"],
        answer: "A deck of cards"
    },
    {
        riddle: "You keep it, but it never ages. Once shared it is gone forever.",
        options: ["A secret", "A memory", "A promise", "A shadow"],
        answer: "A secret"
    },
    {
        riddle: "What tastes better than it smells?",
        options: ["A tongue", "A flower", "A chocolate", "A Coffee"],
        answer: "A tongue"
    },
];

const startBtn = document.querySelector(".start-btn");
const startScreen = document.querySelector(".start-screen");
const riddleElement = document.querySelector('.riddle');
const riddleContainer = document.querySelector(".riddle-container");
const optionsElements = document.querySelectorAll('.option');
const submitBtn = document.querySelector(".submit-btn");

startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    riddleContainer.style.display = "block";
    showRiddle();
});

let currentRiddleIndex = 0;
let score = 0;

// function showRiddle() {
//     const currentRiddle = riddleData[currentRiddleIndex];
//     riddleElement.textContent = currentRiddle.riddle;
//     optionsElements.forEach((option, index) => {
//         option.textContent = currentRiddle.options[index];
//         option.classList.remove("selected", "correct", "wrong");
//     });
// }

const showRiddle = () => {
    const currentRiddle = riddleData[currentRiddleIndex];
    riddleElement.textContent = currentRiddle.riddle;
    optionsElements.forEach((option, index)=> {
        option.textContent = currentRiddle.options[index]
        option.classList.remove("selected", "correct", "wrong")
    })
}

// function handleNextRiddle() {
//     const selectedOption = document.querySelector("li.option.selected");
//     if (selectedOption) {
//         const currentRiddle = riddleData[currentRiddleIndex];

//         optionsElements.forEach(option => {
//             if (option.textContent === currentRiddle.answer) {
//                 option.classList.add("correct");
//             } else if (option.classList.contains("selected")) {
//                 option.classList.add("wrong");
//             }
//         });

//         if (selectedOption.textContent === currentRiddle.answer) {
//             score++;
//         }

//         setTimeout(() => {
//             currentRiddleIndex++;
//             if (currentRiddleIndex < riddleData.length) {
//                 showRiddle();
//                 resetOptions();
//             } else {
//                 showResults();
//             }
//         }, 1500);
//     }
// }

const handleNextRiddle = () => {
    const selectedOption = document.querySelector("li.option.selected");
    if (selectedOption) {
        const currentRiddle = riddleData[currentRiddleIndex];

        optionsElements.forEach(option => {
            if (option.textContent === currentRiddle.answer) {
                option.classList.add("correct");
            } else if (option.classList.contains("selected")) {
                option.classList.add("wrong");
            }
        });

        if (selectedOption.textContent === currentRiddle.answer) {
            score++;
        }

        setTimeout(() => {
            currentRiddleIndex++;
            if (currentRiddleIndex < riddleData.length) {
                showRiddle();
                resetOptions();
            } else {
                showResults();
            }
        }, 1500);
    }
};

// function resetOptions() {
//     optionsElements.forEach(option => {
//         option.classList.remove("selected", "correct", "wrong");
//     });
// }

const resetOptions =()=> {
    optionsElements.forEach(option => {
        option.classList.remove("selected", "correct", "wrong")
    })
}

// function showResults() {
//     const riddleContainer = document.querySelector(".riddle-container");
//     riddleContainer.innerHTML = `
//         <h2>You solved ${score} out of ${riddleData.length} riddles</h2>
//         <button class="restart-btn">Restart Game</button>
//     `;

//     document.querySelector(".restart-btn").addEventListener("click", () => {
//         location.reload();
//     });
// }

const showResults = () => {
    const riddleContainer = document.querySelector(".riddle-container");
    riddleContainer.innerHTML = `
        <h2>You solved ${score} out of ${riddleData.length} riddles</h2>
        <button class="restart-btn">Back to Start</button>
    `;

    document.querySelector(".restart-btn").addEventListener("click", () => {
        location.reload();
    });
};

optionsElements.forEach(option => {
    option.addEventListener("click", () => {
        resetOptions();
        option.classList.add("selected");
    });
});

submitBtn.addEventListener("click", handleNextRiddle);

// showRiddle();
