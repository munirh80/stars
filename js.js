// Get the "Tell Me Your Dream" button and the input field
const dreamBtn = document.getElementById('dreamBtn');
const dreamInput = document.getElementById('dreamInput');

// Add event listener to the "Tell Me Your Dream" button
dreamBtn.addEventListener('click', () => {
    // Toggle the visibility of the input field
    dreamInput.style.display = dreamInput.style.display === 'none' ? 'block' : 'none';
});

// Testimonials data
const testimonials = [
    "I've never thought dream interpretation could be so accurate! Thank you, DreamWeaver!",
    "DreamWeaver helped me understand my recurring dreams. It's like having a personal dream analyst!",
    "Using DreamWeaver has been an eye-opening experience. Highly recommended!"
];

let index = 0;

// Function to display testimonials
function displayTestimonial() {
    document.getElementById('testimonials').innerText = testimonials[index];
    index = (index + 1) % testimonials.length;
}

// Display initial testimonial
displayTestimonial();

// Rotate testimonials every 5-7 seconds
setInterval(displayTestimonial, Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000);
