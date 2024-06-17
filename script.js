
document.addEventListener('DOMContentLoaded', function() {
    const affirmations = [
        "I am worthy and equal to everyone around me.",
        "My voice and desires are important and deserve to be heard.",
        "I am allowed to pursue what I want honestly and openly.",
        "I embrace responsibility with grace and self-compassion.",
        "My mistakes do not define my worth; I learn and grow from them.",
        "I am a good person who tries my best, and that’s what matters.",
        "My feelings are temporary and do not define who I am.",
        "I nourish my body with healthy, filling foods that make me feel strong.",
        "I take care of my body with active hygiene and regular exercise.",
        "I prioritize good sleep and limit my screen time to improve my well-being.",
        "I engage only with longform content to maintain focus and mental clarity.",
        "I deserve to look and feel good by taking care of my appearance and environment.",
        "I maintain a clean and organized space for a clear mind.",
        "I reach out to family and friends because it brings me joy, not obligation.",
        "I maintain boundaries and communicate my needs honestly and openly.",
        "Consistency and discipline in my routine will improve my mental health.",
        "I am proud of how far I’ve come and excited for my continued growth.",
        "I focus on my happiness and well-being, knowing that it benefits all areas of my life.",
        "I am a good person who deserves happiness and will achieve it with confidence and determination.",
        "Every day is a new opportunity to be my best self and shine with confidence."
    ];

    const affirmationList = document.getElementById('affirmations-list');
    const completeButton = document.getElementById('complete-button');
    const currentDateElement = document.getElementById('current-date');
    const streakCountElement = document.getElementById('streak-count');
    const messagePopup = document.createElement('div');
    messagePopup.className = 'message-popup';
    messagePopup.textContent = 'Good job, now start your day';

    // Populate affirmations
    affirmations.forEach((affirmation, index) => {
        const affirmationItem = document.createElement('div');
        affirmationItem.className = 'affirmation';
        affirmationItem.innerHTML = `<img src="star.png" class="star" alt="star">${affirmation}`;

        affirmationItem.addEventListener('click', () => {
            affirmationItem.classList.toggle('checked');
        });

        affirmationList.appendChild(affirmationItem);
    });

    // Set current date
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'America/New_York' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);

    // Change background color based on day of week
    const daysColors = ['#D8E5FC', '#EFE3FC', '#FEEEF4', '#FFF9EC', '#E3F9F1', '#D7F4FB', '#F8BABA'];
    const dayOfWeek = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
    document.body.style.backgroundColor = daysColors[dayOfWeek];

    // Button click functionality
    let streakCount = 0;
    completeButton.addEventListener('click', () => {
        streakCount++;
        streakCountElement.textContent = streakCount;
        document.body.appendChild(messagePopup);

        // Confetti effect (assuming you have a function for this)
        runConfetti();

        // Close message popup after 3 seconds
        setTimeout(() => {
            messagePopup.remove();
        }, 3000);
    });

    // Function to simulate confetti effect
    function runConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
});
