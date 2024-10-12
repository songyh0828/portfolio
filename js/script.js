document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is loaded and running...");

    const dynamicText1 = document.querySelector(".dynamic-txts");
    const words1 = ["Software Engineer", "Web Developer", "Full-Stack Developer", "Systems Architect"];

    const typingAndDeletingTime = 1500; 
    const pauseBetweenWords = 700; 
    const totalCycleTime = typingAndDeletingTime + pauseBetweenWords; 

    let wordIndex1 = 0;
    let charIndex1 = 0;
    let isDeleting1 = false;

    function typeEffect() {
        const currentWord1 = words1[wordIndex1];

        if (!isDeleting1 && charIndex1 < currentWord1.length) {
            charIndex1++;
        } else if (isDeleting1 && charIndex1 > 0) {
            charIndex1--;
        } else {

            if (!isDeleting1) {
                setTimeout(() => {
                    isDeleting1 = true; 
                    typeEffect();
                }, pauseBetweenWords); 
                return; 
            } else {
                isDeleting1 = false;
                wordIndex1 = (wordIndex1 + 1) % words1.length;
            }
        }

        dynamicText1.textContent = currentWord1.substring(0, charIndex1);

        const typingSpeed = typingAndDeletingTime / currentWord1.length;
        const deletingSpeed = typingSpeed * 0.2;
        const typingDeletingSpeed = isDeleting1 ? deletingSpeed : typingSpeed;

        setTimeout(typeEffect, typingDeletingSpeed);
    }

    typeEffect();
});
