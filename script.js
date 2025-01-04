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
    // Définir la date de départ à 13h44 le 4 janvier 2025
    const startTime = new Date(2025, 0, 4, 13, 44); // Mois est basé sur 0 (janvier = 0)
    const counterElement = document.getElementById('counter');

    setInterval(() => {
        counterElement.textContent = calculateElapsedTime(startTime);
    }, 1000); // Update every second
}

// Initialize the counter on page load
updateCounter();
