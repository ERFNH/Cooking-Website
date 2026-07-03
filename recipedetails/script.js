async function fetchRecipeDetails() {
    const nutritionTex = document.querySelector(".nutrition-tex");
    if (!nutritionTex) return;

    try {
        const response = await axios.get("https://foodieland-oq9b.onrender.com/api/recipe-details/1/");
        const recipe = response.data;

        console.log("دیتای غذا:", recipe);
        nutritionTex.innerHTML = 
            '<div class="nutrition-info border-bottom">' +
                '<p class="nutrition-name">Calories</p>' +
                '<p class="nutrition-clori">' + recipe.calories + ' kcal</p>' +
            '</div>' +
            '<div class="nutrition-info border-bottom">' +
                '<p class="nutrition-name">Total Fat</p>' +
                '<p class="nutrition-clori">' + recipe.fat + ' g</p>' +
            '</div>' +
            '<div class="nutrition-info border-bottom">' +
                '<p class="nutrition-name">Protein</p>' +
                '<p class="nutrition-clori">' + recipe.protein + ' g</p>' +
            '</div>' +
            '<div class="nutrition-info border-bottom">' +
                '<p class="nutrition-name">Carbohydrate</p>' +
                '<p class="nutrition-clori">' + recipe.carbohydrate + ' g</p>' +
            '</div>' +
            '<div class="nutrition-info border-bottom">' +
                '<p class="nutrition-name">Cholesterol</p>' +
                '<p class="nutrition-clori">' + recipe.cholesterol + ' mg</p>' +
            '</div>';

    } catch (error) {
        console.error("خطا در دریافت اطلاعات :", error);
    }
}

fetchRecipeDetails();