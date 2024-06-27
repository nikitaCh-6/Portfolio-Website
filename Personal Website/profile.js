function changeAboutMeText() {
    const aboutMeTexts = ["Bsc.IT Student", "Fresher", "Learner"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    if (!aboutMeElement) {
        console.error('Element with class .about-me not found');
        return;
    }

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

/* Call function to add modifications */
document.addEventListener('DOMContentLoaded', function() {
    changeAboutMeText();

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (!darkModeToggle) {
        console.error('Element with ID dark-mode-toggle not found');
        return;
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        const icon = darkModeToggle.querySelector('i');

        if (icon) {
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        } else {
            console.error('Icon element not found');
        }
    });
    
});
