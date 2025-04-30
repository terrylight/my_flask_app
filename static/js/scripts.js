// JavaScript to show a loading message when form is submitted
document.querySelector('form').addEventListener('submit', function() {
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.value = "Submitting..."; // Change the submit button text
    submitButton.disabled = true; // Disable the button
});
