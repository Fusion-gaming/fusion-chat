// chat-script.js

const firebaseConfig = {
  apiKey: "AIzaSyAuaEVKu-LJpRiD-FuSFmY2JURgxhbol3c",
  authDomain: "shipspace-cee83.firebaseapp.com",
  projectId: "shipspace-cee83",
  storageBucket: "shipspace-cee83.firebasestorage.app",
  messagingSenderId: "701760005847",
  appId: "1:701760005847:web:ce6977a9b05b2383b2f292",
  measurementId: "G-4RPTWZFCVZ"
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("Chat script loaded. Ready for Firebase integration!");

    const messagesDiv = document.getElementById('messages');
    const messageForm = document.getElementById('message-form');
    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('message-input');

    // Optional: Load username from local storage
    const savedUsername = localStorage.getItem('chatUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }

    // Placeholder for sending messages (will be replaced by Firebase logic)
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload on form submit

        const username = usernameInput.value.trim();
        const messageText = messageInput.value.trim();

        if (username && messageText) {
            // In a real Firebase setup, you'd send this to the database
            console.log(`Sending message: [${username}] ${messageText}`);

            // Simulate adding a message (for testing frontend display)
            const newMessageDiv = document.createElement('div');
            newMessageDiv.classList.add('message');
            newMessageDiv.innerHTML = `
                <span class="username">${username}</span>
                <span class="text">${messageText}</span>
            `;
            messagesDiv.appendChild(newMessageDiv);

            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom

            messageInput.value = ''; // Clear message input
            localStorage.setItem('chatUsername', username); // Save username
        }
    });
});
