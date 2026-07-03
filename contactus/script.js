const myForm = document.querySelector(".contact-form-element");
async function sendMyForm() {
  const nameValue = document.querySelector('input[placeholder="Enter your name..."]').value;
  const emailValue = document.querySelector('input[placeholder="Your email address..."]').value;
  const subjectValue = document.querySelector('input[placeholder="Enter subject..."]').value;
  const enquiryValue = document.querySelector("select").value;
  const messageValue = document.querySelector(".input-textarra").value;

  const sendData = {
    name: nameValue,
    email: emailValue,
    subject: subjectValue,
    enquiry_type: enquiryValue,
    message: messageValue,
  };

  try {
    const response = await axios.post("https://foodieland-oq9b.onrender.com/api/contact/", sendData);

    alert("Your message has been sent");
    if (myForm) {
      myForm.reset();
    }

  } catch (error) {
    console.error("خطا در ارسال فرم ", error);
    alert("Failed to send message");
  }
}

const myButton = document.querySelector(".click-button");
if (myButton) {
  myButton.addEventListener("click", function (e) {
    e.preventDefault();
    sendMyForm();
  });
}