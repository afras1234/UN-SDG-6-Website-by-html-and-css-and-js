document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const improvementsTextarea = document.getElementById("improvements");
    const updatesSelect = document.getElementById("updates");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate required fields
        if (!nameInput.value.trim()) {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim()) {
            alert("Please enter your email.");
            emailInput.focus();
            return;
        }

        if (!improvementsTextarea.value.trim() && document.getElementById("informative-no").checked) {
            alert("Please suggest any improvements for the future.");
            improvementsTextarea.focus();
            return;
        }

        if (!updatesSelect.value) {
            alert("Please select if you would like to receive updates.");
            updatesSelect.focus();
            return;
        }

        // If validation passes, show a success message or handle form submission
        alert("Thank you for your feedback!");

        // Optionally, you can reset the form
        form.reset();
    });
});
