// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initializeAnimations();
});

// Main function to initialize all animations
function initializeAnimations() {
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover animations
    initHoverAnimations();
    
    // Initialize click animations
    initClickAnimations();
    
    // Initialize page transition animations
    initPageTransitions();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize scroll progress indicator
    initScrollProgress();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize notification animations
    initNotificationAnimations();
    
    // Initialize expandable boxes in diet section
    initExpandableBoxes();
}

// Initialize GSAP animations
function initGSAPAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') return;
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-content h1', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.hero-content p', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.cta-buttons .btn', {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-image', {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8');
    
    // Feature cards animation
    gsap.from('.feature-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        }
    });
    
    // Section headers animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        gsap.from(header.children, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%'
            }
        });
    });
    
    // Diagnosis section animation
    const diagnosisTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.diagnosis-container',
            start: 'top 80%'
        }
    });
    
    diagnosisTimeline
        .from('.symptom-selector', {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.diagnosis-result', {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    
    // Medications grid animation
    gsap.from('.medication-card', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.medications-grid',
            start: 'top 80%'
        }
    });
    
    // Diet section animation
    const dietTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.diet-container',
            start: 'top 80%'
        }
    });
    
    dietTimeline
        .from('.diet-plan', {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.foods-to-avoid', {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.diet-recommendations li', {
            opacity: 0,
            x: -30,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.avoid-food-item', {
            opacity: 0,
            x: 30,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.8');
    
    // Precautions section animation
    gsap.from('.precaution-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.precautions-container',
            start: 'top 80%'
        }
    });
    
    // Workout section animation
    gsap.from('.workout-card', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.workout-plans',
            start: 'top 80%'
        }
    });
    
    // Analysis section animation
    gsap.from('.chart-container', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.analysis-charts',
            start: 'top 80%'
        }
    });
    
    // About section animation
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%'
        }
    });
    
    aboutTimeline
        .from('.about-text', {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.about-image', {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5');
    
    // Team members animation
    gsap.from('.team-member', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.team-members',
            start: 'top 80%'
        }
    });
    
    // Contact form animation
    gsap.from('.contact-form .form-group', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%'
        }
    });
    
    // Footer animation
    gsap.from('.footer-content > div', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%'
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Add scroll-animation class to elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .medication-card, .precaution-card, .workout-card, .insight-card, .chart-container, .team-member');
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-animation');
    });
    
    // Check if elements are in viewport on scroll
    window.addEventListener('scroll', checkScrollAnimations);
    
    // Initial check for elements in viewport
    checkScrollAnimations();
}

// Check which elements should be animated based on scroll position
function checkScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animation');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize hover animations
function initHoverAnimations() {
    // Add hover animation classes to elements
    const hoverElements = {
        'wobble-effect': '.feature-icon, .logo',
        'shake-animation': '.precaution-icon',
        'bounce-animation': '.social-links a',
        'zoom-effect': '.medication-card-image, .workout-card-image, .meal-card-image, .member-image'
    };
    
    for (const [className, selector] of Object.entries(hoverElements)) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add(className);
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('ripple-effect');
    });
}

// Initialize click animations
function initClickAnimations() {
    // Add click animation to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('nav-ripple');
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default for demo buttons
            if (this.getAttribute('type') !== 'submit') {
                e.preventDefault();
            }
            
            // Scale animation
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                onComplete: function() {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.2
                    });
                }
            });
        });
    });
}

// Initialize page transition animations
function initPageTransitions() {
    // Create page transition element
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);
    
    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Activate page transition
            pageTransition.classList.add('active');
            
            // After transition completes, show the target section
            setTimeout(() => {
                // Hide all sections
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show target section
                targetSection.classList.add('active');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Exit transition
                pageTransition.classList.add('exit');
                
                // Reset transition after exit animation
                setTimeout(() => {
                    pageTransition.classList.remove('active', 'exit');
                    
                    // Scroll to top of the section
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 500);
            }, 500);
        });
    });
}

// Initialize typing effect
function initTypingEffect() {
    // Add typing effect to hero heading
    const heroHeading = document.querySelector('.hero-content h1');
    
    if (heroHeading) {
        const text = heroHeading.textContent;
        heroHeading.innerHTML = '';
        heroHeading.classList.add('typing-effect');
        
        // Set the width to match the content
        setTimeout(() => {
            heroHeading.style.width = 'auto';
            
            // Add typing cursor
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            heroHeading.parentNode.insertBefore(cursor, heroHeading.nextSibling);
        }, 3500);
    }
}

// Initialize custom cursor
function initCustomCursor() {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add active class on clickable elements
    const clickableElements = document.querySelectorAll('a, button, .medication-card, .workout-card, .symptom-item, input[type="checkbox"], input[type="radio"]');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('active');
        });
    });
}

// Initialize scroll progress indicator
function initScrollProgress() {
    // Create scroll progress element
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Initialize parallax effects
function initParallaxEffects() {
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            const heroImage = document.querySelector('.hero-image');
            
            if (heroContent && heroImage) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
                heroImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;
            }
        });
    }
    
    // Add parallax effect to section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        window.addEventListener('scroll', function() {
            const rect = header.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxOffset = (rect.top - window.innerHeight) * 0.1;
                header.style.transform = `translateY(${parallaxOffset}px)`;
            }
        });
    });
}

// Initialize notification animations
function initNotificationAnimations() {
    // Create notification container
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    document.body.appendChild(notificationContainer);
    
    // Add click event listeners to buttons that should trigger notifications
    const actionButtons = document.querySelectorAll('#diagnose-btn, #view-recommendations-btn, .contact-form button, .newsletter-form button');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent form submission for demo
            if (this.closest('form')) {
                e.preventDefault();
            }
            
            // Create notification based on button
            let message = '';
            let type = 'info';
            
            if (this.id === 'diagnose-btn') {
                const selectedSymptoms = document.querySelectorAll('.symptom-item input[type="checkbox"]:checked');
                if (selectedSymptoms.length === 0) {
                    message = 'Please select at least one symptom for diagnosis.';
                    type = 'warning';
                } else {
                    message = 'Diagnosis completed successfully!';
                    type = 'success';
                }
            } else if (this.id === 'view-recommendations-btn') {
                const predictedDisease = document.getElementById('predicted-disease').textContent;
                if (predictedDisease === 'Please select symptoms to get a diagnosis') {
                    message = 'Please perform a diagnosis first.';
                    type = 'warning';
                } else {
                    message = 'Viewing recommendations for ' + predictedDisease;
                    type = 'info';
                }
            } else if (this.closest('.contact-form')) {
                message = 'Thank you for your message! We will get back to you soon.';
                type = 'success';
            } else if (this.closest('.newsletter-form')) {
                message = 'Thank you for subscribing to our newsletter!';
                type = 'success';
            }
            
            if (message) {
                showNotification(message, type);
            }
        });
    });
}

// Show notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-times-circle"></i>';
            break;
        default:
            icon = '<i class="fas fa-info-circle"></i>';
    }
    
    notification.innerHTML = `
        ${icon}
        <span>${message}</span>
        <button class="close-notification"><i class="fas fa-times"></i></button>
    `;
    
    // Add to container
    const container = document.querySelector('.notification-container');
    container.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Add click event to close button
    notification.querySelector('.close-notification').addEventListener('click', function() {
        closeNotification(notification);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

// Close notification function
function closeNotification(notification) {
    notification.classList.remove('show');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Add confetti animation for celebrations
function showConfetti() {
    // Create confetti elements
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Random delay
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        // Add to body
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 10000);
    }
}

// Initialize accordion animations
function initAccordionAnimations() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        header.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Animate content height
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
}

// Initialize tab animations
function initTabAnimations() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize countdown animation
function initCountdownAnimation(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) return;
    
    // Create countdown structure
    countdownElement.innerHTML = `
        <div class="countdown">
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-days">00</span>
                <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-hours">00</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-minutes">00</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="countdown-seconds">00</span>
                <span class="countdown-label">Seconds</span>
            </div>
        </div>
    `;
    
    // Update countdown function
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update elements
        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '<h3>The event has started!</h3>';
            showConfetti();
        }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize reveal animations
function initRevealAnimations() {
    // Add reveal class to elements
    const revealElements = document.querySelectorAll('.section-header h2, .hero-content h1');
    
    revealElements.forEach(element => {
        // Wrap text in reveal span
        const text = element.textContent;
        element.innerHTML = `<span class="reveal" data-text="${text}">${text}</span>`;
    });
}

// Initialize glitch effect
function initGlitchEffect() {
    // Add glitch class to elements
    const glitchElements = document.querySelectorAll('.logo span');
    
    glitchElements.forEach(element => {
        const text = element.textContent;
        element.classList.add('glitch');
        element.setAttribute('data-text', text);
    });
}

// Initialize 3D flip cards
function init3DFlipCards() {
    // Create flip card structure for team members
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Get original content
        const originalHTML = member.innerHTML;
        
        // Create flip card structure
        member.classList.add('flip-card');
        member.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    ${originalHTML}
                </div>
                <div class="flip-card-back">
                    <h4>Contact Info</h4>
                    <p>Email: example@mediguide.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Initialize shimmer loading effect
function initShimmerEffect() {
    // Add shimmer class to loading elements
    const loadingElements = document.querySelectorAll('.loading');
    
    loadingElements.forEach(element => {
        element.classList.add('shimmer');
    });
}

// Initialize tooltip animations
function initTooltipAnimations() {
    // Add tooltip attributes to elements
    const tooltipElements = {
        'View Details': '.medication-card, .workout-card',
        'Select Symptom': '.symptom-item',
        'Change Theme': '.theme-toggle',
        'Share': '.social-links a'
    };
    
    for (const [tooltipText, selector] of Object.entries(tooltipElements)) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('tooltip');
            element.setAttribute('data-tooltip', tooltipText);
        });
    }
}

// Initialize animated checkboxes and radio buttons
function initFormElementAnimations() {
    // Wrap checkboxes in animated container
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.parentNode.classList.contains('animated-checkbox')) return;
        
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (!label) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'animated-checkbox';
        
        // Insert wrapper before checkbox
        checkbox.parentNode.insertBefore(wrapper, checkbox);
        
        // Move checkbox and label into wrapper
        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
    });
    
    // Wrap radio buttons in animated container
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
        if (radio.parentNode.classList.contains('animated-radio')) return;
        
        const label = document.querySelector(`label[for="${radio.id}"]`);
        if (!label) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'animated-radio';
        
        // Insert wrapper before radio
        radio.parentNode.insertBefore(wrapper, radio);
        
        // Move radio and label into wrapper
        wrapper.appendChild(radio);
        wrapper.appendChild(label);
    });
}

// Initialize switch animations
function initSwitchAnimations() {
    // Convert checkboxes to switches
    const switchCheckboxes = document.querySelectorAll('.switch-checkbox');
    
    switchCheckboxes.forEach(checkbox => {
        const switchLabel = document.createElement('label');
        switchLabel.className = 'switch';
        
        // Insert switch before checkbox
        checkbox.parentNode.insertBefore(switchLabel, checkbox);
        
        // Move checkbox into switch
        switchLabel.appendChild(checkbox);
        
        // Add slider
        const slider = document.createElement('span');
        slider.className = 'slider';
        switchLabel.appendChild(slider);
    });
}

// Initialize gradient text animations
function initGradientTextAnimations() {
    // Add gradient-text class to elements
    const gradientTextElements = document.querySelectorAll('.hero-content h1, .section-header h2');
    
    gradientTextElements.forEach(element => {
        element.classList.add('gradient-text');
    });
}

// Initialize heartbeat animations
function initHeartbeatAnimations() {
    // Add heartbeat class to elements
    const heartbeatElements = document.querySelectorAll('.feature-icon, .precaution-icon');
    
    heartbeatElements.forEach(element => {
        element.classList.add('heartbeat');
    });
}

// Initialize floating animations
function initFloatingAnimations() {
    // Add floating class to elements
    const floatingElements = document.querySelectorAll('.hero-image, .about-image');
    
    floatingElements.forEach(element => {
        element.classList.add('floating');
    });
}

// Initialize rotate animations
function initRotateAnimations() {
    // Add rotate-animation class to elements
    const rotateElements = document.querySelectorAll('.loading-spinner');
    
    rotateElements.forEach(element => {
        element.classList.add('rotate-animation');
    });
}

// Initialize progress bar animations
function initProgressBarAnimations() {
    // Add progress-bar-animated class to elements
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(progressBar => {
        progressBar.classList.add('progress-bar-animated');
        
        // Animate progress after delay
        setTimeout(() => {
            const progress = progressBar.querySelector('.progress');
            if (progress) {
                const width = progress.textContent;
                progress.style.width = width;
            }
        }, 1000);
    });
}

// Initialize expandable boxes in the diet section
function initExpandableBoxes() {
    const statBoxes = document.querySelectorAll('.diet-stat-box');
    
    statBoxes.forEach(box => {
        const header = box.querySelector('.stat-box-header');
        
        if (header) {
            header.addEventListener('click', function() {
                box.classList.toggle('expanded');
            });
        }
    });
    
    // Expand the first box by default
    const firstBox = document.querySelector('#recommendations-box');
    if (firstBox) {
        firstBox.classList.add('expanded');
    }
}

// Add expandable boxes initialization to the main init function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize expandable boxes when the diet tab is clicked
    const dietTab = document.querySelector('a[href="#diet"]');
    if (dietTab) {
        dietTab.addEventListener('click', function() {
            setTimeout(initExpandableBoxes, 300); // Delay to ensure content is loaded
        });
    }
    
    // Initialize expandable boxes if diet section is active on page load
    if (document.querySelector('#diet.section.active')) {
        setTimeout(initExpandableBoxes, 300);
    }
});