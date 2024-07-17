document.addEventListener("DOMContentLoaded", function () {
    // Example function to handle image clicks in the goal gallery
    const goalLinks = document.querySelectorAll(".goal-gallery a");

    goalLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert(`You clicked on ${link.querySelector("img").alt}`);
            // You can add more functionality here, such as navigating to another page or displaying content
        });
    });

    // Function to load content dynamically (if needed)
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const mainContent = document.querySelector("main");
                mainContent.innerHTML = data;
            })
            .catch(error => console.error("Error loading content:", error));
    }

    // Example usage: loadContent('goal1.html');
});


