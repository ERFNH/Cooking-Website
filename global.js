document.querySelectorAll(".recipe-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = "../recipedetails/index.html";
  });
});


const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


function setupNewsletter() {
    const emailInput = document.querySelector(".email-input");
    const subscribeBtn = document.querySelector(".click-button"); 
    if (!emailInput || !subscribeBtn) return;
    subscribeBtn.addEventListener("click", async function(event) {
        event.preventDefault();
        const emailValue = emailInput.value;
        if (emailValue == "") {
            alert("Please enter your email address!");
            return;
        }
        try {
            const response = await axios.post("https://foodieland-oq9b.onrender.com/api/subscribe/", {
                email: emailValue
            });
            alert("Thank you!");
            emailInput.value = "";
        } catch (error) {
            console.error("خطا در ارسال ایمیل به خبرنامه:", error);
            alert("Something went wrong. Please try again.");
        }
    });
}
setupNewsletter();