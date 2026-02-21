const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    userInput.value = "";

    setTimeout(() => {
        const reply = generateReply(message);
        addMessage(reply, "bot");
    }, 600);
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    }

    if (input.includes("your name")) {
        return "I am Mini GPT created by you 😎";
    }

    if (input.includes("how are you")) {
        return "I am just code, but I’m running perfectly!";
    }

    if (input.includes("python")) {
        return "Python is a powerful programming language used for AI, web, automation and more.";
    }

    if (input.includes("time")) {
        return "Current time is: " + new Date().toLocaleTimeString();
    }

    return "That's interesting! Tell me more about it.";
}

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
