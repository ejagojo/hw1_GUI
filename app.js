// Select the nav links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.content-section');

// Hide all sections except the first one initially (Eljohn Agojo)
sections.forEach((section, index) => {
  if (index !== 0) {
    section.classList.add('hidden');
  }
});

// Function to handle switching between tabs
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    // Hide all sections
    sections.forEach(section => section.classList.add('hidden'));
    
    // Show the selected section with a fade-in effect
    targetSection.classList.remove('hidden');
    
    // A simple fade-in effect
    targetSection.style.opacity = 0;
    setTimeout(() => {
      targetSection.style.opacity = 1;
      targetSection.style.transition = 'opacity 0.5s ease';
    }, 100);
  });
});
