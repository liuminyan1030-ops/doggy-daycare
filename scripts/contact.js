// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitBtn = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  contactPage.innerHTML = `
    <p id="message">Thank you for your message</p>
    <a href="../index.html" id="back-home" class="fake-button blue-hover">
        Back to Home
    </a>
  `;

  const message = document.getElementById("message");
  message.style.fontSize = "24px";
  message.style.textAlign = "center";
});



