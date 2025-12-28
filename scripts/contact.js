// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitBtn = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contactPage.textContent = "";
  const message = document.createElement("p");
  message.textContent = "Thank you for your message";
  message.style.fontSize = "24px";
  message.style.textAlign = "center";
  const backBtn = document.createElement("a");
  backBtn.textContent = "Back to Home";
  backBtn.href = "../index.html";
  backBtn.style.width = "clamp(150px, 20vw, 250px)";
  backBtn.style.margin = "20px auto";
  backBtn.style.display = "block";

  backBtn.classList.add("fake-button", "blue-hover");
  contactPage.appendChild(message);
  contactPage.appendChild(backBtn);
});



