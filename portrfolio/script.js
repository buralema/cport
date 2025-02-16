
//responsive







// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });a
});

// Typewriter effect
const text = "Computer Science Student | Web Developer | UI/UX Designer";
let index = 0;
const typewriter = document.querySelector('.typewriter');

function type() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
//screenshot
// Screenshot Slider functionality
function initScreenshotSliders() {
    document.querySelectorAll('.project-card').forEach(card => {
        const slides = card.querySelectorAll('.screenshot-slide');
        const dots = card.querySelectorAll('.dot');
        const prev = card.querySelector('.prev');
        const next = card.querySelector('.next');
        let currentSlide = 0;

        // Function to show specific slide
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        // Event listeners for navigation
        prev?.addEventListener('click', () => showSlide(currentSlide - 1));
        next?.addEventListener('click', () => showSlide(currentSlide + 1));
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto advance slides (optional)
        let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);

        // Pause auto-advance on hover
        card.addEventListener('mouseenter', () => clearInterval(slideInterval));
        card.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
            if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
        });
    });
}

// Initialize sliders when document is loaded
document.addEventListener('DOMContentLoaded', initScreenshotSliders);
// Start typewriter effect when page loads
window.onload = type;

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 150,
        once: true
    });
});
//project
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.parentElement.parentElement.parentElement.dataset.level + '%';
                    bar.style.width = width;
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const level = skillItem.dataset.level;
                const progressBar = skillItem.querySelector('.progress');
                progressBar.style.width = `${level}%`;
            }
        });
    }, { threshold: 0.2 });

    // Observe all skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
});



// Project data
const projects = {
    project1: {
        title: "E-Commerce Website",
        description: "A full-stack e-commerce platform with user authentication, product management, and secure payment integration using Stripe.",
        image: "https://via.placeholder.com/800x600",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        liveDemo: "https://your-demo-link.com",
        github: "https://github.com/yourusername/project"
    },
    project2: {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team workspace, and progress tracking features.",
        image: "https://via.placeholder.com/800x600",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
        liveDemo: "https://your-demo-link.com",
        github: "https://github.com/yourusername/project"
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const liveDemo = document.getElementById('live-demo-link');
    const githubLink = document.getElementById('github-link');

    // Open modal
    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', () => {
            const project = projects[button.dataset.project];
            
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalDescription.textContent = project.description;
            modalTech.innerHTML = project.tech
                .map(tech => `<span>${tech}</span>`)
                .join('');
            liveDemo.href = project.liveDemo;
            githubLink.href = project.github;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });




    
    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    document.querySelector('.close-modal').addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ... existing code ...
<div class="project-overlay">
    <a href="https://deft-chimera-9b4d28.netlify.app" target="_blank">
        <button class="view-project-btn">
            View Project <i class="fas fa-arrow-right"></i>
        </button>
    </a>
</div>
// ... existing code ...