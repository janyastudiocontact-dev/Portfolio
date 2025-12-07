document.addEventListener('DOMContentLoaded', () => {

    // --- Data Configuration ---
    const services = [
        { icon: 'megaphone', title: "Advertisement Post", desc: "Eye-catching social media advertisements that drive engagement and conversions.", delay: 0 },
        { icon: 'image', title: "Banners", desc: "Professional web and print banners for events, promotions, and marketing campaigns.", delay: 100 },
        { icon: 'play', title: "YouTube Thumbnails", desc: "Compelling thumbnails that increase click-through rates and video views.", delay: 200 },
        { icon: 'file-text', title: "Business Template", desc: "Professional templates for presentations, documents, and business materials.", delay: 300 },
        { icon: 'palette', title: "Promotional Posts", desc: "Creative social media posts that promote your products and services effectively.", delay: 400 },
        { icon: 'monitor', title: "UI Designs", desc: "Modern and intuitive user interface designs for web and mobile applications.", delay: 600 },
        { icon: 'file-text', title: "Brochures & Magazine", desc: "Professional print design for brochures, magazines, and marketing collateral.", delay: 700 },
        { icon: 'award', title: "Business Card", desc: "Clean, professional business card designs aligned with your brand.", delay: 800 },
    ];

    const tools = [
        { name: "Canva", logo: "./public/logos/canva.svg" },
        { name: "InDesign", logo: "./public/logos/indesign.svg" },
        { name: "Photoshop", logo: "./public/logos/adobe-photoshop.svg" },
        { name: "HTML", logo: "./public/logos/html.svg" },
        { name: "CSS", logo: "./public/logos/css.svg" },
        { name: "Illustrator", logo: "./public/logos/adobe-illustrator.svg" },
        { name: "CorelDraw", logo: "./public/logos/coreldraw.svg" },
        { name: "Sketch", logo: "./public/logos/sketch.svg" },
        { name: "Bootstrap", logo: "./public/logos/bootstrap.svg" },
        { name: "JavaScript", logo: "./public/logos/javascript.svg" },
        // Duplicate for infinite scroll
        { name: "Canva", logo: "./public/logos/canva.svg" },
        { name: "InDesign", logo: "./public/logos/indesign.svg" },
        { name: "Photoshop", logo: "./public/logos/adobe-photoshop.svg" },
        { name: "HTML", logo: "./public/logos/html.svg" },
        { name: "CSS", logo: "./public/logos/css.svg" },
        { name: "Illustrator", logo: "./public/logos/adobe-illustrator.svg" },
        { name: "CorelDraw", logo: "./public/logos/coreldraw.svg" },
        { name: "Sketch", logo: "./public/logos/sketch.svg" },
        { name: "Bootstrap", logo: "./public/logos/bootstrap.svg" },
        { name: "JavaScript", logo: "./public/logos/javascript.svg" },
    ];

    const skills = [
        { name: "Photoshop", percentage: 92, desc: "Advanced photo editing & manipulation", delay: 0 },
        { name: "Illustrator", percentage: 90, desc: "Vector graphics & logo design", delay: 100 },
        { name: "CorelDraw", percentage: 85, desc: "Professional vector illustration", delay: 200 },
        { name: "PicsArt", percentage: 87, desc: "Creative mobile editing & effects", delay: 300 },
        { name: "Canva", percentage: 95, desc: "Quick design & social media graphics", delay: 400 },
        { name: "Figma", percentage: 80, desc: "UI/UX design & prototyping", delay: 500 },
    ];

    const contacts = [
        { icon: 'mail', text: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=janyastudiocontact@gmail.com", label: "Send a Mail", color: "#EA4335" },
        { icon: 'message-circle', text: "Whatsapp", href: "https://wa.me/919426429900", label: "WhatsApp Me", color: "#25D366" },
        { icon: 'linkedin', text: "LinkedIn", href: "https://www.linkedin.com/in/jay-chandaliya-2a7172381", label: "Connect", color: "#0077B5" },
        { icon: 'instagram', text: "Instagram", href: "https://www.instagram.com/janya_studio_", label: "Follow Me", color: "#E4405F" },
    ];


    // --- 1. Site Loader ---
    const loader = document.getElementById('site-loader');
    const loaderCount = document.getElementById('loader-count');
    const loaderBar = document.getElementById('loader-bar');
    const floatingHeader = document.getElementById('floating-header');

    // Animate loader
    let count = 0;
    const duration = 2000;
    const intervalTime = 20; // Update every 20ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    // Show initial elements
    setTimeout(() => {
        if (loaderCount) loaderCount.classList.remove('translate-y-12', 'opacity-0');

        const interval = setInterval(() => {
            count += Math.random() * 2; // Randomize slightly
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                finishLoading();
            }
            if (loaderCount) loaderCount.textContent = Math.floor(count);
            if (loaderBar) loaderBar.style.width = `${Math.floor(count)}%`;
        }, intervalTime);
    }, 100);

    function finishLoading() {
        setTimeout(() => {
            // Slide up curtain
            if (loader) {
                loader.style.transition = 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)';
                loader.style.transform = 'translateY(-100%)';
            }

            // Reveal header
            setTimeout(() => {
                if (floatingHeader) floatingHeader.classList.remove('-translate-y-24', 'opacity-0');
                revealHero();
            }, 500);
        }, 500);
    }

    function revealHero() {
        const title = document.getElementById('hero-title');
        const subtitle = document.getElementById('hero-subtitle');
        const desc = document.getElementById('hero-desc');
        const cta = document.getElementById('hero-cta');
        if (title) title.classList.remove('translate-y-12', 'opacity-0');
        if (subtitle) subtitle.classList.remove('translate-y-8', 'opacity-0');
        if (desc) desc.classList.remove('translate-y-8', 'opacity-0');
        if (cta) cta.classList.remove('translate-y-8', 'opacity-0');
    }

    // --- 2. Floating Header & Scroll Spy ---
    const headerContainer = document.getElementById('header-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Blur effect
        if (headerContainer) {
            if (window.scrollY > 50) {
                headerContainer.classList.add('bg-[#19183a]/80', 'backdrop-blur-md', 'border-[#7f30e4]/50', 'shadow-[0_0_20px_rgba(127,48,228,0.3)]');
                headerContainer.classList.remove('border-transparent');
            } else {
                headerContainer.classList.remove('bg-[#19183a]/80', 'backdrop-blur-md', 'border-[#7f30e4]/50', 'shadow-[0_0_20px_rgba(127,48,228,0.3)]');
                headerContainer.classList.add('border-transparent');
            }
        }

        // Active link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const activeBg = link.querySelector('.active-bg');
            if (activeBg) {
                if (link.dataset.target === current) {
                    activeBg.classList.remove('hidden');
                    link.classList.add('text-white');
                    link.classList.remove('text-[#cdbef1]');
                } else {
                    activeBg.classList.add('hidden');
                    link.classList.remove('text-white');
                    link.classList.add('text-[#cdbef1]');
                }
            }
        });
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden', 'opacity-0', '-translate-y-5');
            } else {
                mobileMenu.classList.add('opacity-0', '-translate-y-5');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            }
        });
    }

    // --- 3. Dynamic Content Injection (No Reveals) ---

    // Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        services.forEach((service, index) => {
            const div = document.createElement('div');
            // Removed opacity-0 and transform logic
            div.className = `backdrop-blur-sm p-8 rounded-xl text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer border-2 shadow-lg`;
            div.style.backgroundColor = "rgba(127, 48, 228, 0.05)";
            div.style.borderColor = "#7f30e4";

            div.innerHTML = `
                <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style="background-color: rgba(127, 48, 228, 0.2)">
                    <i data-lucide="${service.icon}" class="w-8 h-8 transition-colors duration-300 text-[#7f30e4]"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 transition-colors duration-300 text-[#cdbef1]">${service.title}</h3>
                <p class="leading-relaxed transition-colors duration-300 font-medium text-[#cdbef1]">${service.desc}</p>
            `;
            // Add hover effects via JS since inline styles are complex with Tailwind
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = "rgba(127, 48, 228, 0.15)";
                div.style.borderColor = "#ae70f1";
                div.style.boxShadow = "0 0 20px rgba(127, 48, 228, 0.4)";
            });
            div.addEventListener('mouseleave', () => {
                div.style.backgroundColor = "rgba(127, 48, 228, 0.05)";
                div.style.borderColor = "#7f30e4";
                div.style.boxShadow = "";
            });

            servicesGrid.appendChild(div);
        });
    }

    // Tools
    const toolsSlider = document.getElementById('tools-slider');
    if (toolsSlider) {
        tools.forEach(tool => {
            const div = document.createElement('div');
            div.className = "flex-shrink-0 w-32 h-32 flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer border-0 flex-row rounded-full opacity-100 p-px";
            div.innerHTML = `
                <img src="${tool.logo}" alt="${tool.name}" class="w-16 h-16 object-contain group-hover:scale-125 transition-transform duration-300">
            `;
            toolsSlider.appendChild(div);
        });
    }

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = "space-y-2 flex flex-col items-center";

            // Circular progress logic
            const radius = 45;
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference - (skill.percentage / 100) * circumference;

            div.innerHTML = `
                <div class="relative w-32 h-32 mb-6 group cursor-pointer">
                    <svg class="w-32 h-32 transform -rotate-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="${radius}" stroke="currentColor" stroke-width="8" fill="transparent" class="text-white/10" />
                        <circle cx="50" cy="50" r="${radius}" stroke="#7f30e4" stroke-width="8" fill="transparent" 
                            stroke-dasharray="${circumference}" 
                            stroke-dashoffset="${circumference}" 
                            stroke-linecap="round"
                            class="skill-circle-progress transition-all duration-1000 ease-out group-hover:stroke-[#cdbef1] group-hover:drop-shadow-lg"
                        />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <span class="text-2xl font-bold text-[#7f30e4] group-hover:text-[#cdbef1] transition-colors duration-300">
                            ${skill.percentage}%
                        </span>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-2 text-[#7f30e4] group-hover:text-[#cdbef1] transition-colors duration-300">${skill.name}</h3>
                <p class="text-center transition-colors duration-300 font-medium text-[#cdbef1]">${skill.desc}</p>
            `;

            // Set offset immediately (no animation observer)
            setTimeout(() => {
                const circle = div.querySelector('.skill-circle-progress');
                if (circle) circle.style.strokeDashoffset = dashOffset;
            }, 500);

            skillsGrid.appendChild(div);
        });
    }

    // Contacts
    const contactGrid = document.getElementById('contact-grid');
    if (contactGrid) {
        contacts.forEach((contact, index) => {
            const a = document.createElement('a');
            a.href = contact.href;
            a.target = "_blank";
            a.className = "group relative flex flex-col items-center justify-center w-64 h-64 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden";
            // Removed opacity scale-in animations

            a.innerHTML = `
                <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style="background: radial-gradient(circle at center, ${contact.color}, transparent 70%)"></div>
                <div class="absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-500 group-hover:border-[${contact.color}]"></div>
                
                <div class="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl" style="background-color: ${contact.color}20; box-shadow: 0 0 20px ${contact.color}40">
                    <i data-lucide="${contact.icon}" class="w-10 h-10 transition-all duration-300" style="color: ${contact.color}"></i>
                </div>
                
                <div class="relative z-10 text-center space-y-1">
                    <h3 class="text-2xl font-bold text-white tracking-wide">${contact.text}</h3>
                    <p class="text-[10px] font-medium text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-widest">${contact.label}</p>
                </div>
            `;

            // Hover border color fix
            a.addEventListener('mouseenter', () => a.style.borderColor = contact.color);
            a.addEventListener('mouseleave', () => a.style.borderColor = 'rgba(255,255,255,0.1)');

            contactGrid.appendChild(a);
        });
    }

    // --- 4. Rotating Text (Hero) ---
    const rotatingText = document.getElementById('rotating-text');
    const words = ["Unforgettable.", "Impactful.", "Timeless.", "Unique."];
    let wordIndex = 0;

    if (rotatingText) {
        setInterval(() => {
            // Fade out
            rotatingText.style.opacity = '0';
            rotatingText.style.transform = 'translateY(20px)';
            rotatingText.style.transition = 'all 0.5s ease-in-out';

            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                rotatingText.textContent = words[wordIndex];

                // Fade in
                rotatingText.style.opacity = '1';
                rotatingText.style.transform = 'translateY(0)';
            }, 500);

        }, 3000);
    }

    // --- 5. Particles (Background) ---
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
        for (let i = 0; i < 20; i++) {
            const div = document.createElement('div');
            div.style.left = `${Math.random() * 100}%`;
            div.style.top = `${Math.random() * 100}%`;
            div.style.animationDelay = `${Math.random() * 3}s`;
            div.style.animationDuration = `${2 + Math.random() * 3}s`;
            particlesContainer.appendChild(div);
        }
    }

    // --- 7. Custom Cursor (Fluid Lagging) & Click Blast ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing) {
        // Mouse State
        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let isHovering = false;

        // Track mouse
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant dot movement
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        // Lagging ring animation
        const lerp = (start, end, factor) => start + (end - start) * factor;

        function animateCursor() {
            // Smoothly interpolate ring position
            ringX = lerp(ringX, mouseX, 0.1);
            ringY = lerp(ringY, mouseY, 0.1);

            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .group');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                document.body.classList.add('cursor-hover');
                cursorRing.style.width = '48px';
                cursorRing.style.height = '48px';
                cursorRing.style.backgroundColor = 'rgba(127, 48, 228, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                document.body.classList.remove('cursor-hover');
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.backgroundColor = 'transparent';
            });
        });

        // Click Blast Effect
        document.addEventListener('click', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Spawn particles
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.classList.add('blast-particle');
                document.body.appendChild(particle);

                // Random direction
                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 50 + 50; // Distance
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;

                // Initial pos
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);

                // Animate
                particle.style.animation = `particle-fade 0.6s ease-out forwards`;

                // Cleanup
                setTimeout(() => {
                    particle.remove();
                }, 600);
            }

            // Ring punch
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(0.8)`;
            setTimeout(() => {
                cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(1)`;
            }, 100);
        });
    }

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn("Lucide icons not loaded");
    }
});
