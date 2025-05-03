// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all service cards and product cards
document.querySelectorAll('.service-card, .product-card, .testimonial-card').forEach(card => {
    observer.observe(card);
});

// Add animation class to hamburger menu
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Add hover effect to buttons
document.querySelectorAll('.cta-button, .learn-more, .buy-now, .download').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// Modal functionality
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close-modal');
const selectedPlanSpan = document.getElementById('selectedPlan');
const contactForm = document.getElementById('contactForm');

// Get all Get Started buttons
const getStartedButtons = document.querySelectorAll('.package-cta');

// Add click event to all Get Started buttons
getStartedButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.getAttribute('data-plan');
        selectedPlanSpan.textContent = plan;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        plan: selectedPlanSpan.textContent
    };

    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your interest! We will contact you shortly.');
    
    // Reset form and close modal
    contactForm.reset();
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Handle download button clicks
document.querySelectorAll('.download').forEach(button => {
    button.addEventListener('click', () => {
        const templateUrl = button.getAttribute('data-template-url');
        if (templateUrl) {
            window.open(templateUrl, '_blank');
        }
    });
}); 