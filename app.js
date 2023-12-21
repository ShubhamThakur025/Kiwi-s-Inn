//needed DOM elements
let ingredients = document.getElementById('ingredients')
let recipe = document.getElementById('recipe')
let blurredBg = document.getElementById('bg')

let ingredientsPage = document.getElementById('ingredients-page')
let recipePage = document.getElementById('recipe-page')


let close = document.querySelector('.close')
let getDish = document.getElementById('random-dish')

let bars = document.querySelector('.bars')
let flagForMenu = 0


//event listener for the menu button in portrait mode
bars.onclick = () => {
    if (flagForMenu == 0) {
        document.getElementById('menu').style.display = 'flex'
        flagForMenu = 1
    }
    else {
        flagForMenu = 0
        document.getElementById('menu').style.display = 'none'
    }
}

//to get the modal of ingredients
ingredients.onclick = () => {
    showModal('ingredients')
}


//to get the modal of recipe
recipe.onclick = () => {
    showModal('recipe')
}

//event-listener for the random dish
getDish.onclick = () => {
    document.querySelector('#title-2').scrollIntoView({ behavior: 'smooth' })
}


//to make the close button of the modal functional
let closePopUp = (popupId) => {
    let popup = document.getElementById(popupId)
    popup.style.display = 'none'
    blurredBg.style.filter = 'none'
    blurredBg.style.pointerEvents = 'all'
}

//to toggle bw ingredients and the recipe modal
let showModal = (type) => {
    type == 'ingredients' ? ingredientsPage.style.display = 'flex' : recipePage.style.display = 'flex'
    blurredBg.style.filter = 'blur(5px)'
    blurredBg.style.pointerEvents = 'none'
}

//to display the modal for the search items
let showSearchModal = (result) => {

    let pr = document.getElementById('search-details-page');

    pr.innerHTML =
        `
     <button class="close-2">
         <img src="assets/cross.png" alt="">
     </button>
     <div id="search-right">
         <img src="${result.meals[0]['strMealThumb']}" alt="">
         <p>${result.meals[0]['strMeal']}</p> 
     </div>
     <div id="search-left">
         <div id="ingredients-search"><span id="head" class="stroke">INGREDIENTS</span><br></div>
         <div id="recipe-search"><span id="head" class="stroke">RECIPE</span><br>${result.meals[0][`strInstructions`]}</div>
     </div>
    `;

    let ingrdList = document.getElementById('ingredients-search');
    for (let i = 1; i <= 20; i++) {
        if (result.meals[0][`strIngredient${i}`] != "") {
            ingrdList.innerHTML +=
                `<li>${result.meals[0][`strIngredient${i}`]}</li>`;
        } else {
            break;
        }
    }

    pr.style.display = 'flex';
    let closeButton = pr.querySelector('.close-2');
    if (closeButton) {
        closeButton.onclick = () => { 
            pr.style.display = 'none';
        };
    }
};

//event delegation to handle the grids of the dishes
table.addEventListener('click', (event) => {
    lookForDetails(event.target.id)

})

//to call the API for details
let lookForDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
            return response.json()
        })
        .then(resp => {
            showSearchModal(resp)
        }
        )
}
