//accessing the needed DOM elements
let randomImage = document.getElementById('random-image')
let pageRightRecipe = document.querySelector('.page-right-recipe')
let pageRightIng = document.querySelector('.page-right-ing')
let instrcutionList = document.getElementById('ingredient-list')
let recipeList = document.getElementById('recipe-list')
let randDishName = document.getElementById('dishName')

let searchBox = document.querySelector('.search')
let searchBtn = document.getElementById('search-click')

let dishesTable = document.querySelector('.dishes-table')
let table = document.getElementById('table')

//fetching the API for random dish
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        return response.json()
    })
    .then(result => {
        randomImage.setAttribute('src', result.meals[0]['strMealThumb'])
        randDishName.innerText = result.meals[0]['strMeal']
        updateIngredients(result)
        updateRecipe(result)
    })
    .catch((error) =>{
        alert("Something wrong occurred!")
    })

//to trigger the search
let searchResults = (searchItem) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchItem}`)
        .then(response => response.json())
        .then((result) => {     
            serveOnTheTable(result.meals)
        })
        .catch((error) => {
            alert("No Item found")
        }
        )
    }

//to add the ingredients in the modal
let updateIngredients = (result) => {
    for (let i = 1; i <= 20; i++) {
        if (result.meals[0][`strIngredient${i}`] != '') {
            instrcutionList.innerHTML +=
                `<li>${result.meals[0][`strIngredient${i}`]} </li>`

        }
        else {
            break;
        }
    }
    pageRightIng.innerHTML =
        `
    <img src="${result.meals[0]['strMealThumb']}" alt="" class="meal-img">
    <p class = "desc" >${result.meals[0]['strMeal']}</p>    
    `
}

//to add the recipe in the modal
let updateRecipe = (result) => {
    pageRightRecipe.innerHTML =
        `
    <img src="${result.meals[0]['strMealThumb']}" alt="" class="meal-img">
    <p class = "desc">${result.meals[0]['strMeal']}</p>    
    `

    recipeList.innerHTML = result.meals[0][`strInstructions`]
}

//to display the fetched dishes on the screen
let serveOnTheTable = (dishes) => {
    dishesTable.style.display = 'block'
    dishes.forEach(dish => {
        table.innerHTML +=
            `
        <div class="dish">
            <img src="${dish.strMealThumb}" alt="" id = "${dish.idMeal}">
            <p class = "food-desc">${dish.strMeal}</p>
        </div>        
        `
        dishesTable.scrollIntoView({behavior: 'smooth'})
    });
}

//to make the search-buttton functional
searchBtn.onclick = () => {
    if (searchBox.value) {
        searchResults(searchBox.value)
    }
    else {
        alert("Enter a valid search value")
    }

}