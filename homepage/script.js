let chefbutttonicon = document.querySelector(".chefbutttonicon");
chefbutttonicon.addEventListener("click", () => {
  window.location.href = "../recipedetails/index.html";
});

const BASE_URL = "https://foodieland-oq9b.onrender.com/api";

async function fetchCategories() {
  const container = document.getElementById("categories-container");

  try {
    const response = await axios.get(BASE_URL + "/categories/"); // به جای تمپلیت لترال از + استفاده شده
    const categories = response.data;

    container.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
      let item = categories[i];

      let imageName = item.name.toLowerCase();

      if (imageName === "dessert") {
        imageName = "desert";
      }

      let localImgSrc = "/assest/image/" + imageName + ".png";
      container.innerHTML += `
                <div class="${item.name} caticon">
                    <img src="${localImgSrc}" alt="${item.name}" />
                    <p>${item.name}</p>
                </div>
            `;
    }
  } catch (error) {
    console.error("خطا در دریافت اطلاعات:", error);
  }
}

fetchCategories();
