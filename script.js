document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Flashcard Animation for Projects, Skills, and Awards
    const flashcardSections = document.querySelectorAll("#projects, #skills, #awards");
    
    flashcardSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
    });
    
    function revealFlashcards() {
        flashcardSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", revealFlashcards);
    revealFlashcards(); // Initial check
});

// Linking JavaScript to HTML
const scriptElement = document.createElement('script');
scriptElement.src = "script.js";
document.body.appendChild(scriptElement);
