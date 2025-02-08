window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill');

        // Animate the width of the progress bar
        setTimeout(() => {
            bar.style.width = `${skillValue}%`;
            bar.style.opacity = 1; // Make it visible
            bar.textContent = `${skillValue}%`; // Display the percentage
        }, 500); // Delay animation for better effect
    });
});
