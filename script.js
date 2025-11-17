// DOM Elements
const chatForm = document.getElementById('chatForm');
const questionInput = document.getElementById('questionInput');
const chatMessages = document.getElementById('chatMessages');
const sendButton = document.getElementById('sendButton');

// API Configuration
const WEBHOOK_URL = 'https://chita-uizp.onrender.com/webhook';

// Initialize
let isLoading = false;

// Event Listeners
chatForm.addEventListener('submit', handleSubmit);

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();
    
    const question = questionInput.value.trim();
    if (!question || isLoading) return;

    // Clear input
    questionInput.value = '';
    
    // Remove welcome message if it exists
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message
    addMessage(question, 'user');

    // Show loading
    const loadingElement = showLoading();
    isLoading = true;
    updateButtonState();

    try {
        // Send request to webhook
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: question
            })
        });

        // Remove loading
        loadingElement.remove();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract the answer from the response
        // Adjust this based on the actual response structure from your API
        const answer = data.answer || data.response || data.message || JSON.stringify(data);
        
        // Add bot response
        addMessage(answer, 'bot');

    } catch (error) {
        // Remove loading
        loadingElement.remove();
        
        console.error('Error:', error);
        showError('დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.');
    } finally {
        isLoading = false;
        updateButtonState();
        questionInput.focus();
    }
}

// Add message to chat
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    
    // Format the text for better display
    if (type === 'bot') {
        bubbleDiv.innerHTML = formatBotMessage(text);
    } else {
        bubbleDiv.textContent = text;
    }
    
    messageDiv.appendChild(bubbleDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    scrollToBottom();
}

// Format bot messages for better readability
function formatBotMessage(text) {
    // Split by common emoji markers that indicate list items
    let formatted = text
        // Convert emoji bullets to proper line breaks
        .replace(/([📍⭕🏢🏠💼📞📧🌐✅❌⚠️])/g, '<br>$1')
        // Handle multiple spaces
        .replace(/\s{2,}/g, ' ')
        // Clean up multiple consecutive line breaks
        .replace(/(<br>\s*){3,}/g, '<br><br>')
        // Trim leading/trailing breaks
        .trim();
    
    // Remove leading <br> if exists
    if (formatted.startsWith('<br>')) {
        formatted = formatted.substring(4);
    }
    
    // Escape HTML but preserve our <br> tags
    const div = document.createElement('div');
    div.textContent = formatted;
    let escaped = div.innerHTML;
    escaped = escaped.replace(/&lt;br&gt;/g, '<br>');
    
    return escaped;
}

// Show loading indicator
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message bot';
    loadingDiv.id = 'loading-indicator';
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    
    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'loading-dots';
    dotsDiv.innerHTML = '<span></span><span></span><span></span>';
    
    bubbleDiv.appendChild(dotsDiv);
    loadingDiv.appendChild(bubbleDiv);
    chatMessages.appendChild(loadingDiv);
    
    scrollToBottom();
    
    return loadingDiv;
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    chatMessages.appendChild(errorDiv);
    scrollToBottom();
    
    // Remove error after 5 seconds
    setTimeout(() => {
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
}

// Update button state
function updateButtonState() {
    sendButton.disabled = isLoading;
}

// Scroll to bottom of messages
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Auto-focus input on load
questionInput.focus();

