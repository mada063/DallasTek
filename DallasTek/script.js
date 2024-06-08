document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const cube = document.querySelector('.cube');
    const isometricCube = document.querySelector('.isometric-cube');
    const colorSets = [
        //1st set
        ['#EC6C76', '#FF9B71', '#7A1F5D', '#FFF1BA', '#ffb9a5'],
        ['#282c2f', '#2b393a', '#F4B860', '#D9D9D9', '#7f8888'],

        //2nd set
        ['#D5CCA4', '#E3C16F', '#E3E3E3', '#610022', '#7f8888'],
        ['#2a3b44', '#FDFDFF', '#C6C5B9', '#62929E', '#7f8888'],
        ['#DAC29B', '#A6755D', '#CF5C36', '#000000', '#7f8888'],
        ['#08415C', '#BF7379', '#6B818C', '#F1BF98', '#7f8888'],

        //3rd set
        ['#fe8a71', '#0e9aa7', '#4a4e4d', '#f8dc90', '#7f8888'],
        ['#4b3832', '#be9b7b', '#854442', '#fff4e6', '#3c2f2f'],
        ['#2e003e', '#3d2352', '#8874a3', '#e4dcf1', '#3d1e6d'],

        //4th set
        ['#1A4D2E', '#4F6F52', '#E8DFCA', '#F5EFE6', '#F8F3ED'],
        ['#141E46', '#41B06E', '#FFF5E0', '#8DECB4', '#DCF9E8'],
        ['#3E1649', '#662549', '#F39F5A', '#BE697A', '#F9CFAC']
        
    ];

    
    // Initially start spinning cubes at desired speeds
    startRotation();

    function startRotation() {
        cube.style.animation = 'spin 20s linear infinite'; // Adjust speed as needed
        isometricCube.style.animation = 'spin 5s linear infinite'; // Adjust speed as needed
    }

    //Header scrolled effect
    
    let lastScrollPosition = 0;
    let isScrolled = false;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Add 'scrolled' class to apply shadow when the page is scrolled down
        if (scrollPosition > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide or show the header based on scroll direction
        if (scrollPosition > lastScrollPosition) {
            header.classList.add('hide-header');
        } else {
            header.classList.remove('hide-header');
        }

        lastScrollPosition = scrollPosition;
    });

    let idleTimer;

    //Cube spinning
    document.addEventListener('mousemove', function(event) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(startRotation, 4000); // Resets rotation after inactivity

        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const deltaX = mouseX - window.innerWidth / 2;
        const deltaY = mouseY - window.innerHeight / 2;
        cube.style.transform = `rotateY(${deltaX / window.innerWidth * 30}deg) rotateX(${-deltaY / window.innerHeight * 30}deg)`;
        cube.style.animation = 'none'; // Stop spinning to follow the mouse
    });


    //Clicking a face on the cube runs changePageColor and gives it a random color set

    let lastColorIndex = null; // Initially, no color set is selected


    document.querySelectorAll('.face').forEach(face => {
        face.addEventListener('click', function() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * colorSets.length);
            } while (newIndex === lastColorIndex); // Ensure new index is not the same as the last one

            lastColorIndex = newIndex; // Update last index
            changePageColor(colorSets[newIndex]);
        });
    });

    function changePageColor(colors) {
        const [primaryColor, secondaryColor, borderColor, textColor, faceColor] = colors;
    
        // Updates Main backgrounds
        document.querySelector('.content-1').style.backgroundColor = primaryColor;
        document.querySelector('.footer-container').style.backgroundColor = primaryColor;
        document.querySelector('.footer-bottom').style.backgroundColor = primaryColor;
        document.querySelector('.text-box').style.backgroundColor = primaryColor;
        document.querySelector('.about-page').style.backgroundColor = primaryColor;
        document.querySelector('#contact-page').style.color = textColor;
    
        // Updates Header scrolling
        header.style.backgroundColor = window.scrollY > 0 ? primaryColor : primaryColor;
    
        document.querySelectorAll('.close-btn').forEach(button => {
            button.style.backgroundColor = secondaryColor;
            button.style.color = textColor;
        });
    
        // Set transition pages and contact page colors
        document.getElementById('transition-page-1').style.backgroundColor = secondaryColor;
        document.getElementById('transition-page-2').style.backgroundColor = borderColor;
        document.getElementById('contact-page').style.backgroundColor = primaryColor;
    
        // Updates Cube Face colors
        document.querySelectorAll('.cube .face').forEach(face => {
            face.style.backgroundColor = faceColor + '4D'; // Adding transparency
            face.style.borderColor = borderColor;
        });
    
        document.querySelectorAll('.isometric-cube .face').forEach(face => {
            face.style.backgroundColor = borderColor;
            face.style.borderColor = secondaryColor;
        });

        const carousel = document.querySelector('.carousel');
            if (carousel) {
                carousel.style.backgroundColor = primaryColor;
                carousel.style.color = textColor;
            }

        const projectMarks = document.querySelectorAll('.project-description mark');
            projectMarks.forEach(mark => {
            mark.style.backgroundColor = borderColor;
            mark.style.color = secondaryColor;
        });

        const titleMarks = document.querySelectorAll('.marked-text');
            titleMarks.forEach(mark => {
            mark.style.color = borderColor;
        });
    
        // Updates the bottom contact slide
        const contactDallasH2 = document.querySelector('.contact-dallas h2');
        if (contactDallasH2) {
            contactDallasH2.style.color = borderColor + '4D'; // Set text color for visibility
        }
    
        // Updates Cursor colors
        document.querySelector('.cursor').style.backgroundColor = textColor;
        document.querySelector('.cursor-outer').style.border = '1px solid ' + borderColor;
    
        // Updates Text color for entire page
        document.body.style.color = textColor;
    
        // Sets pseudo custom list marker color
        document.documentElement.style.setProperty('--marker-color', borderColor);
        
        const contactInputs = document.querySelectorAll('.contact-inputs');
    
        contactInputs.forEach(input => {
            input.style.color = textColor;
            input.style.borderBottom = `2px solid ${textColor}`; // Sets the default border color
    
            // Handle focus event to change border color
            input.addEventListener('focus', () => {
                input.style.borderBottom = `2px solid ${borderColor}`;
            });
    
            // Handle blur event to revert the border color
            input.addEventListener('blur', () => {
                input.style.borderBottom = `2px solid ${textColor}`;
            });
        });
    
        const formButton = document.querySelector('.contact-button');
    
        if (formButton) {
            formButton.style.backgroundColor = secondaryColor;
            formButton.style.color = textColor;
            // Setup hover effects using JavaScript
            formButton.onmouseover = () => {
                formButton.style.backgroundColor = borderColor;
                formButton.style.color = secondaryColor;
            };
            formButton.onmouseout = () => {
                formButton.style.backgroundColor = secondaryColor;
                formButton.style.color = textColor;
            };
        }
    
        const closeButtons = document.querySelectorAll('.close-btn');
    
        closeButtons.forEach(button => {
            button.style.backgroundColor = secondaryColor; // Set initial background color
            button.style.color = borderColor; // Set initial text color (fixed to black based on your requirements)
    
            // Hover effect
            button.onmouseover = () => {
                button.style.backgroundColor = borderColor; // Change on hover to primary color
                button.style.color = secondaryColor; // Text color to white on hover
            };
    
            // Mouseout effect
            button.onmouseout = () => {
                button.style.backgroundColor = secondaryColor; // Revert to secondary color on mouse out
                button.style.color = textColor; // Revert text color to black on mouse out
            };
        });
    
        // Updates contact boxes
        const contactLinks = document.querySelectorAll('.contact');
    
        contactLinks.forEach(contact => {
            contact.style.backgroundColor = secondaryColor; // Set initial background color
            contact.style.color = textColor; // Set text color
            contact.onmouseover = () => {
                contact.style.backgroundColor = borderColor; // Change on hover
                contact.style.color = secondaryColor;
            };
            contact.onmouseout = () => {
                contact.style.backgroundColor = secondaryColor; // Revert on mouse out
                contact.style.color = textColor;
            };
        });
    
        const textBoxes = document.querySelectorAll('.text-box');
    
        // Loop through each .text-box and change colors
        textBoxes.forEach(function(textBox) {
            textBox.style.backgroundColor = primaryColor; // Set background color
            textBox.style.color = textColor; // Set text color
        });
    
        const dividerLines = document.querySelectorAll('.divider-line');
    
        dividerLines.forEach(dividerLine => {
            dividerLine.style.backgroundColor = primaryColor;  // Or use borderColor if that suits the design better
        });
    
        const servicePageText = document.querySelectorAll('.service-page-text');
        
        servicePageText.forEach(box => {
            box.style.backgroundColor = primaryColor;  // Change as needed
            box.style.color = textColor;  // Change text color as needed
        });
    
        // Updates Header a hover effects
        document.querySelector('.header-left a').style.color = textColor;
    
        const headerLinks = document.querySelectorAll('.header-middle a, .header-right a');
    
        headerLinks.forEach(link => {
            link.style.color = textColor;
            link.onmouseover = () => {
                link.style.backgroundColor = borderColor;
                link.style.color = secondaryColor;
            };
            link.onmouseout = () => {
                link.style.backgroundColor = 'transparent';
                link.style.color = textColor;
            };
        });

        const footerOption = document.querySelectorAll('.footer-option');
    
        footerOption.forEach(footer => {
            footer.style.color = faceColor;
            footer.onmouseover = () => {
                footer.style.color = borderColor;
            };
            footer.onmouseout = () => {
                footer.style.color = faceColor;
            };
        });
    
        const imageTextConatinersText = document.querySelectorAll('.image-text-container .text');
    
        imageTextConatinersText.forEach(box => {
            box.style.backgroundColor = primaryColor;  // Change as needed
            box.style.color = textColor;  // Change text color as needed
        });
    
        // Updates Skill boxes
        const skillBoxes = document.querySelectorAll('.skill-box');
        skillBoxes.forEach(box => {
            box.style.backgroundColor = secondaryColor;  // Change as needed
            box.style.color = textColor;  // Change text color as needed
        });
    
        // Update divider boxes
        const dividerBoxes = document.querySelectorAll('.divider-box');
        dividerBoxes.forEach(divider => {
            divider.style.backgroundColor = primaryColor;  // Typically a subtle color
        });
    
        document.getElementById('transition-page').style.backgroundColor = secondaryColor;
    
        // Changes color for Text-boxes and Text-box-link
        const textBoxLinks = document.querySelectorAll('.text-box .text-box-link');
        textBoxLinks.forEach(link => {
            link.style.color = textColor;
            link.style.backgroundColor = 'transparent'; // You might adjust this if needed
            link.onmouseover = () => {
                link.style.backgroundColor = borderColor;
                link.style.color = secondaryColor;
            };
            link.onmouseout = () => {
                link.style.backgroundColor = 'transparent';
                link.style.color = textColor;
            };
        });
    
        const brackets = document.querySelectorAll('.bracket');
        brackets.forEach(bracket => {
            bracket.style.color = borderColor;  // Apply border color
        });
    
        // New section to update footer colors
        // Change the color of the class footer-color to the borderColor
        document.querySelectorAll('.footer-color').forEach(element => {
            element.style.color = borderColor;
        });
    
        // Change the color of every "a" element inside the footer-container class to secondaryColor
        document.querySelectorAll('.footer-container a').forEach(link => {
            link.style.color = faceColor;
        });
    
        // Change the colors of SVG images in the footer to textColor with the class footer-svg-image
        document.querySelectorAll('.footer-svg-image').forEach(svgElement => {
            if (svgElement.tagName.toLowerCase() === 'svg') {
                // For inline SVGs, directly modify the child elements
                const colorableElements = svgElement.querySelectorAll('[data-color-role]');
                colorableElements.forEach(el => {
                    const colorRole = el.getAttribute('data-color-role');
                    if (colorRole) {
                        el.style.fill = textColor;
                    }
                });
            } else if (svgElement.tagName.toLowerCase() === 'img') {
                // If it's an img tag, you might need to replace the src with a different SVG file
                // or consider loading SVG inline for dynamic manipulation
                console.log('SVG is used as an img and cannot be styled directly via JS');
            }
        });
    
        updateSVGColors(textColor, secondaryColor, borderColor);
    }
    
    function updateSVGColors(textColor, secondaryColor, borderColor) {
        // Select all SVG elements with the class 'svg-image'
        const svgElements = document.querySelectorAll('.svg-image');
    
        svgElements.forEach(svgElement => {
            if (svgElement.tagName.toLowerCase() === 'svg') {
                // For inline SVGs, directly modify the child elements
                const colorableElements = svgElement.querySelectorAll('[data-color-role]');
                colorableElements.forEach(el => {
                    const colorRole = el.getAttribute('data-color-role');
                    switch (colorRole) {
                        case 'text':
                            el.style.fill = textColor;
                            break;
                        case 'secondary':
                            el.style.fill = secondaryColor;
                            break;
                        case 'border':
                            el.style.fill = borderColor;
                            break;
                        // Add additional cases for other roles
                    }
                });
            } else if (svgElement.tagName.toLowerCase() === 'img') {
                // If it's an img tag, you might need to replace the src with a different SVG file
                // or consider loading SVG inline for dynamic manipulation
                console.log('SVG is used as an img and cannot be styled directly via JS');
            }
        });
    }
    


    //Custom Mouse effect

    const cursor = document.querySelector(".cursor");
    const cursorOuter = document.querySelector(".cursor-outer");
    let mouseX = 0, mouseY = 0; // Current mouse position
    let cursorX = 0, cursorY = 0; // Current cursor position
    let cursorOuterX = 0, cursorOuterY = 0; // Current outer cursor position
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener("scroll", () => {
        scrollX = window.scrollX;
        scrollY = window.scrollY;
    }, { passive: true });

    function animate() {
        // Smoothly interpolate the inner cursor position
        cursorX += (mouseX + scrollX - cursorX) * 0.4;
        cursorY += (mouseY + scrollY - cursorY) * 0.4;
        cursor.style.left = `${cursorX - 10}px`;
        cursor.style.top = `${cursorY - 10}px`;

        // Smoothly interpolate the outer cursor position with a slower rate
        cursorOuterX += (mouseX + scrollX - cursorOuterX) * 0.2;
        cursorOuterY += (mouseY + scrollY - cursorOuterY) * 0.2;
        cursorOuter.style.left = `${cursorOuterX - 38}px`;
        cursorOuter.style.top = `${cursorOuterY - 38}px`;

        requestAnimationFrame(animate);
    }

    animate();


    const hoverElements = document.querySelectorAll('.text-box-link, .cube .face, .contact, .header-middle a, .header-right a, .contact-button, .close-btn, .footer-section a, .footer-social, .project-image, .indicator, .customer');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                
                cursor.classList.add('expand');
            });
            el.addEventListener('mouseleave', () => {
                
                cursor.classList.remove('expand');
            });
        });

    const blendElements = document.querySelectorAll('.header-left a, .title-services, .title-skills, .service-page-container h2, .contact-left-title h2');
        blendElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover-effect');
                cursor.classList.add('expand2');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover-effect');
                cursor.classList.remove('expand2');
            });
        });

    // Om page

    const transitionPage = document.getElementById('transition-page');
    const aboutPageLinks = document.querySelectorAll('.about-btn');
    const aboutPage = document.querySelector('.about-page');

    aboutPageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showTransitionPage();

            setTimeout(() => {
                aboutPage.style.right = '0'; // Slide in the about page
            }, 500); // Delay to sync with the transition page's appearance
        });
    });

    document.querySelectorAll('.about-page .close-btn').forEach(button => {
        button.addEventListener('click', function() {
            closePage(aboutPage);
            hideTransitionPage();
        });
    });

    function showTransitionPage() {
        transitionPage.style.right = '0'; // Slide in the transition page
        setTimeout(() => {
            transitionPage.style.right = '-100%'; // Optionally reset position after showing
        }, 250); // Transition completion timeout
    }

    function closePage(page) {
        page.style.right = '-100%'; // Slide out the page
    }

    function hideTransitionPage() {
        transitionPage.style.right = '-100%'; // Slide out the transition page
    }

    window.addEventListener('scroll', () => {
        closePage(aboutPage); // Close the about page on scroll
        hideTransitionPage(); // Also hide the transition page
    });

        
    //Kontakt

    document.querySelectorAll('.contact, .header-right a, .contact-footer').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const transitionPage1 = document.getElementById('transition-page-1');
            const transitionPage2 = document.getElementById('transition-page-2');
            const contactPage = document.getElementById('contact-page');
         
    
            // Open the first transition page
            transitionPage1.style.right = '0';
    
            setTimeout(() => {
                // Open the second transition page
                transitionPage2.style.right = '0';
    
                setTimeout(() => {
                    // Open the contact page
                    contactPage.style.right = '0';
                }, 500); // Ensure the contact page appears after the second transition page
            }, 250); // Ensure the second transition page appears after the first
        });
    });
    
    
    // Adding event listener for close button in each service page
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            const transitionPage1 = document.getElementById('transition-page-1');
            const transitionPage2 = document.getElementById('transition-page-2');
            const contactPage = document.getElementById('contact-page');
    
            // Simultaneously close all pages
            transitionPage1.style.right = '-100%'; // Move first transition page off-screen
            transitionPage2.style.right = '-100%'; // Move second transition page off-screen
            contactPage.style.right = '-100%'; // Move contact page off-screen
        });
    });
    
    function forceClosePages() {
        const contactPage = document.getElementById('contact-page');
        const transitionPage1 = document.getElementById('transition-page-1');
        const transitionPage2 = document.getElementById('transition-page-2');
    
        // Forcefully move the pages off-screen
        contactPage.style.right = '-100%';
        transitionPage1.style.right = '-100%';
        transitionPage2.style.right = '-100%';
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        forceClosePages(); // Close the pages on scroll
    });

    // Open and close Service page function

    const links = document.querySelectorAll('.text-box-link, .text-box');

    document.querySelectorAll('.service-page .close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const servicePage = this.closest('.service-page'); // Get the nearest parent service page
            closeServicePage(servicePage);
            hideTransitionPage(); // Close the transition page as well
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            const servicePage = document.getElementById(serviceId);

            // Show the transition page first
            showTransitionPage();

            // Delay the opening of the service page to sync with the transition page
            setTimeout(() => {
                openServicePage(servicePage);
            }, 500); // This delay should be the same as the transition duration
        });
    });

    window.addEventListener('scroll', () => {
        closeServicePageOnScroll();
        hideTransitionPage(); // Hide transition page when scrolling
    });

    function showTransitionPage(color) {
        const transitionPage = document.getElementById('transition-page');
        transitionPage.classList.add('shadow-effect'); // Add shadow effect
        transitionPage.style.right = '0'; // Slide in the transition page
    
        // Remove shadow after transition completes
        setTimeout(() => {
            transitionPage.classList.remove('shadow-effect');
        }, 1500); // Match this timeout to the duration of your slide-in effect
    }

    function openServicePage(servicePage) {
        servicePage.classList.add('open', 'shadow-effect'); // Open and add shadow
    
        // Remove shadow after transition completes
        setTimeout(() => {
            servicePage.classList.remove('shadow-effect');
        }, 1500); // Ensure this matches the slide-in duration
    }

    function closeServicePage(servicePage) {
        servicePage.classList.remove('open');
        servicePage.classList.add('shadow-effect'); // Temporarily add shadow for sliding out
    
        // Remove shadow after a short delay to simulate sliding out
        setTimeout(() => {
            servicePage.classList.remove('shadow-effect');
        }, 1500); // Match this delay to your slide-out transition time
    }

    function closeServicePageOnScroll() {
        document.querySelectorAll('.service-page.open').forEach(page => {
            closeServicePage(page);
        });
    }

    function hideTransitionPage() {
        transitionPage.style.right = '-100%'; // Slide out the transition page
    }

    //Start
    const titles = document.querySelectorAll('.anim-title');

    const animateTitles = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target;
                console.log('Title in view:', title);
                setTimeout(() => {
                    title.classList.add('visible');
                    const lines = title.querySelectorAll('.line-inner');
                    lines.forEach((line, lineIndex) => {
                        setTimeout(() => {
                            line.style.transform = 'translateY(0)';
                            line.style.opacity = '1';
                        }, lineIndex * 300); // Adjust the delay for each line
                    });
                }, 500); // 0.5 second delay before starting the animation
                observer.unobserve(title); // Stop observing the element after animation
            }
        });
    };

    const titleObserver = new IntersectionObserver(animateTitles, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    titles.forEach(title => {
        titleObserver.observe(title);
    });

    const slideLeftElements = document.querySelectorAll('.slide-left');
    const waveScaleElements = document.querySelectorAll('.wave-scale');

    const animateSlideLeft = (element) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 500); // 0.5-second delay before starting the animation
    };

    const animateWaveScale = (element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // Stagger the animations by 0.3 seconds for each element
    };

    const slideLeftObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSlideLeft(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const waveScaleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(waveScaleElements).indexOf(entry.target);
                animateWaveScale(entry.target, index);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    slideLeftElements.forEach(element => {
        slideLeftObserver.observe(element);
    });

    waveScaleElements.forEach(element => {
        waveScaleObserver.observe(element);
    });
    
    //Transition into contact page  

    const servicesPage = document.querySelector('.services');
    const solutionsPage = document.querySelector('.solution');
    const contactPage = document.querySelector('.contact-page');

    // Function to open transition and content page
    function openPages(contentPage) {
        transitionPage.style.right = '0'; // Open the transition page first

        setTimeout(() => {
            contentPage.style.right = '0'; // Then open the content page
        }, 500); // Delay to ensure the transition is seen
    }

    // Function to close pages
    function closePages() {
        transitionPage.style.right = '-100%'; // Close transition page
        [servicesPage, solutionsPage, aboutPage, contactPage].forEach(page => {
            page.style.right = '-100%'; // Close all content pages
        });
    }

  
//Mouse Expand

document.addEventListener('click', function() {
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 300); // Duration should match the CSS transition time
});

const texts = document.querySelectorAll('.tek-text');
let current = 0;

function nextTekText() {
  const oldCurrent = current;
  texts[oldCurrent].classList.remove('active');
  texts[oldCurrent].classList.add('exit');

  current = (current + 1) % texts.length;
  texts[current].classList.add('active');

  setTimeout(() => {
    texts[oldCurrent].classList.remove('exit');
  }, 500); // Matches the CSS transition time
}

setInterval(nextTekText, 2000); // Changes every 2 seconds adjust as needed for longer visibility

const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const parallaxImages = document.querySelectorAll('.project-image img');
    let currentIndex = 0;
    let interval;
    const titleDelay = 1000; // Delay in milliseconds
    const slideInterval = 10000; // Longer delay between slides

    function showSlide(index) {
        items.forEach((item, i) => {
            const image = item.querySelector('.project-image img');
            const title = item.querySelector('.anim-title-left');
            const paragraph = item.querySelector('.anim-paragraph');
            
            
            if (i === index) {
                item.classList.add('active');
                item.classList.remove('prev');
                item.style.left = '0';
                item.style.opacity = '1';
                item.style.visibility = 'visible';
                
                image.classList.add('active');
                image.classList.remove('prev');
                image.style.left = '0';

                setTimeout(() => {
                    title.classList.add('visible', 'delayed');
                    title.classList.remove('hidden');
                    paragraph.classList.add('visible', 'delayed');
                    paragraph.classList.remove('hidden');
                    ;
                }, titleDelay);
            } else {
                item.classList.remove('active');
                item.style.opacity = '0';
                item.style.visibility = 'hidden';

                if (i === (index - 1 + items.length) % items.length) {
                    item.classList.add('prev');
                    item.style.left = '-100%';

                    image.classList.add('prev');
                    image.style.left = '-100%';
                } else {
                    item.classList.remove('prev');
                    item.style.left = '100%';

                    image.classList.remove('active', 'prev');
                    image.style.left = '100%';
                }

                title.classList.add('hidden');
                title.classList.remove('visible', 'delayed');
                paragraph.classList.add('hidden');
                paragraph.classList.remove('visible', 'delayed');
                
            }
            indicators[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    function startAutoplay() {
        interval = setInterval(nextSlide, slideInterval);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-slide'));
            currentIndex = index;
            showSlide(index);
        });
    });

    document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);
    document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showSlide(currentIndex);
                startAutoplay();
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    observer.observe(carousel);
});

