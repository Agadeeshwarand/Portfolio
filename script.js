// Highlight active menu link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Button click events (specific to About page)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} button clicked!`);
    });
});


// JavaScript for Home, About, and Projects

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');

    // Add dynamic effects if needed, e.g., animations or event handling.
});

// Simple script to handle any dynamic behavior
console.log("Contact page is loaded successfully.");

// Optional: Smooth scroll or any interactivity can be added here.
console.log("Page Loaded Successfully!");
