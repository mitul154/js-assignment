// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.querySelector("form");
const content = document.getElementById("contact-page");
console.log(content);

function changeContact(e){
    // e.preventDefault();
    content.innerHTML = "<p>Thank you for your message</p>";
    content.style.fontSize = "24px";
    content.style.justifyContent = "normal";
}

submitButton.addEventListener("submit", changeContact);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

