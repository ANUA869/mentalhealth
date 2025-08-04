document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded: KeyHaven is live.");
});
const quotes = [
    "You are stronger than you think.",
    "It's okay to not be okay.",
    "Every day is a fresh start.",
    "Be gentle with yourself. You're doing the best you can.",
    "Your feelings are valid.",
    "You are enough, exactly as you are.",
    "Rest is productive too.",
    "The sun will rise again."
];

function generateQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

function saveJournal() {
    const entry = document.getElementById("journalEntry").value;
    if (entry.trim() !== "") {
        localStorage.setItem("myJournalEntry", entry);
        document.getElementById("savedMessage").textContent = "Journal entry saved!";
    } else {
        document.getElementById("savedMessage").textContent = "Please write something first.";
    }
}

function loadJournal() {
    const saved = localStorage.getItem("myJournalEntry");
    if (saved) {
        document.getElementById("journalEntry").value = saved;
    }
}

// Initialize on load
window.onload = () => {
    generateQuote();
    loadJournal();
};
function analyzeFeeling() {
    const input = document.getElementById("feelingInput").value.toLowerCase();
    const responseBox = document.getElementById("feelingResponse");

    let response = "";

    if (input.includes("anxious") || input.includes("anxiety")) {
        response = "🫂 It’s okay to feel anxious. Try the 5-4-3-2-1 grounding technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. Also, take a few deep breaths.";
    } else if (input.includes("sad") || input.includes("depressed")) {
        response = "💙 It’s perfectly okay to feel sad. Try journaling your thoughts, listen to soothing music, or call a trusted friend. You are not alone.";
    } else if (input.includes("stressed") || input.includes("overwhelmed")) {
        response = "🧘 Take a short break. Try deep breathing, light stretching, or break your tasks into small steps. You’re doing your best!";
    } else if (input.includes("tired") || input.includes("exhausted")) {
        response = "😴 Rest is essential. Drink a glass of water, take a short nap, and try some light movement. You deserve to rest.";
    } else if (input.trim() === "") {
        response = "Please share a little about how you're feeling 💬";
    } else {
        response = "🌈 Thank you for sharing. We may not fully understand, but your feelings are valid. Try taking a small walk, journaling, or talking to someone you trust.";
    }

    responseBox.textContent = response;
}
