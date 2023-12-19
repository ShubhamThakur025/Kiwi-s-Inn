let randomImage = document.getElementById('random-image')
let pageRightRecipe = document.querySelector('.page-right-recipe')
let pageRightIng = document.querySelector('.page-right-ing')
let instrcutionList = document.getElementById('ingredient-list')
let recipeList = document.getElementById('recipe-list')

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(result => {
        console.log(result.meals[0])
        randomImage.setAttribute('src', result.meals[0]['strMealThumb'])
        pageRightIng.innerHTML =
            `
    <img src="${result.meals[0]['strMealThumb']}" alt="" class="meal-img">
    <p class = "desc" >${result.meals[0]['strMeal']}</p>    
    `
        pageRightRecipe.innerHTML =
            `
    <img src="${result.meals[0]['strMealThumb']}" alt="" class="meal-img">
    <p class = "desc">${result.meals[0]['strMeal']}</p>    
    `
        for (let i = 1; i <= 20; i++) {
            if (result.meals[0][`strIngredient${i}`] != '') {
                instrcutionList.innerHTML +=
                    `<li>${result.meals[0][`strIngredient${i}`]} </li>`

            }
            else {
                break;
            }
        }
        recipeList.innerHTML = result.meals[0][`strInstructions`]

    })

