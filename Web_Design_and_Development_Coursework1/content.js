document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust offset for sticky header
                    behavior: "smooth"
                });
            }
        });
    }

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerText = "↑";
    scrollToTopBtn.id = "scrollToTopBtn";
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.backgroundColor = "#0077b6";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "5px";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none"; // Initially hidden

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});
