document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("answer");
    const responseFile = "response.txt";  // Update with the correct file path or API endpoint

    fetch(responseFile)
        .then(response => response.text())
        .then(text => {
            let index = 0;
            function type() {
                typingText.textContent = text.slice(0, index++);
                if (index <= text.length) {
                    setTimeout(type, 50); // Adjust the typing speed (milliseconds)
                }
            }
            type();
        })
        .catch(error => console.error("Error fetching response:", error));
});