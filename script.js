let randomImage = document.getElementById('random-image')
let pageRightRecipe = document.querySelector('.page-right-recipe')
let pageRightIng = document.querySelector('.page-right-ing')
let instrcutionList = document.getElementById('ingredient-list')
let recipeList = document.getElementById('recipe-list')

let searchBox = document.querySelector('.search')
let searchBtn = document.getElementById('search-click')

let dishesTable = document.querySelector('.dishes-table')
let table = document.getElementById('table')
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(result => {
        console.log(result.meals[0])
        randomImage.setAttribute('src', result.meals[0]['strMealThumb'])
        updateIngredients(result)
        updateRecipe(result)


    })

let searchResults = (searchItem) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchItem}`)
        .then(response => response.json())
        .then((result) => {            
            serveOnTheTable(result.meals)
        })
}


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

let updateRecipe = (result) => {
    pageRightRecipe.innerHTML =
        `
    <img src="${result.meals[0]['strMealThumb']}" alt="" class="meal-img">
    <p class = "desc">${result.meals[0]['strMeal']}</p>    
    `

    recipeList.innerHTML = result.meals[0][`strInstructions`]
}

let serveOnTheTable = (dishes) => {
    dishesTable.style.display = 'block'
    dishes.forEach(dish => {
        console.log(dish)
        table.innerHTML +=
            `
        <div class="dish">
            <img src="${dish.strMealThumb}" alt="" >
            <p class = "food-desc">${dish.strMeal}</p>
        </div>        
        `
        dishesTable.scrollIntoView({behavior: 'smooth'})
    });
}

searchBtn.onclick = () => {
    if (searchBox.value) {
        console.log(searchBox.value)
        searchResults(searchBox.value)
    }
    else {
        alert("Enter a valid search value")
    }

}