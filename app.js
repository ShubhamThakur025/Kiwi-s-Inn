let ingredients = document.getElementById('ingredients')
let recipe = document.getElementById('recipe')
let blurredBg = document.getElementById('bg')

let ingredientsPage = document.getElementById('ingredients-page')
let recipePage = document.getElementById('recipe-page')


let close = document.querySelector('.close')
let getDish = document.getElementById('random-dish')

let bars = document.querySelector('.bars')
let flagForMenu = 0



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
ingredients.onclick = () => {
    showModal('ingredients')
}

recipe.onclick = () => {
    showModal('recipe')
}

getDish.onclick = () => {
    document.querySelector('#title-2').scrollIntoView({ behavior: 'smooth' })
}

let closePopUp = (popupId) => {
    let popup = document.getElementById(popupId)
    popup.style.display = 'none'
    blurredBg.style.filter = 'none'
    blurredBg.style.pointerEvents = 'all'
    console.log(blurredBg.style.pointerEvents)
}

let showModal = (type) => {
    type == 'ingredients' ? ingredientsPage.style.display = 'flex' : recipePage.style.display = 'flex'
    blurredBg.style.filter = 'blur(5px)'
    blurredBg.style.pointerEvents = 'none'
}

let showSearchModal = (result) => {
    console.log(result);

    let pr = document.getElementById('search-details-page');
    console.log(pr);

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
         <div id="recipe-search"><span id="head" class="stroke">RECIPE</span><br></div>
     </div>
    `;

    let ingrdList = document.getElementById('ingredients-search');
    for (let i = 1; i <= 20; i++) {
        if (result.meals[0][`strIngredient${i}`] !== '') {
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
            console.log('HeyBoy');
            pr.style.display = 'none';
        };
    }
};




table.addEventListener('click', (event) => {
    console.log("Hey")
    console.log(event.target.id)
    lookForDetails(event.target.id)

})
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
