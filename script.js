function calculateElapsedTime(startTime) {
    const now = new Date();
    let elapsed = new Date(now - startTime);

    const years = elapsed.getUTCFullYear() - 1970; // UTCFullYear starts from 1970
    const months = elapsed.getUTCMonth(); // Month is 0-based
    const days = elapsed.getUTCDate() - 1; // Days start at 1
    const hours = elapsed.getUTCHours();
    const minutes = elapsed.getUTCMinutes();

    return `Allumé depuis : ${years} ans, ${months} mois, ${days} jours, ${hours} heures et ${minutes} minutes`;
}

function updateCounter() {
    const startTime = new Date(); // Change this to your desired start time if needed
    const counterElement = document.getElementById('counter');

    setInterval(() => {
        counterElement.textContent = calculateElapsedTime(startTime);
    }, 1000); // Update every second
}

// Initialize the counter on page load
updateCounter();
