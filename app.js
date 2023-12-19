let ingredients = document.getElementById('ingredients')
let recipe = document.getElementById('recipe')
let blurredBg = document.getElementById('bg')

let ingredientsPage = document.getElementById('ingredients-page')
let recipePage = document.getElementById('recipe-page')


let close = document.querySelector('.close')
let getDish = document.getElementById('random-dish')

ingredients.onclick = () =>{
    ingredientsPage.style.display = 'flex'
    blurredBg.style.filter = 'blur(5px)'
    blurredBg.style.pointerEvents = 'none'
}

recipe.onclick = () =>{
    recipePage.style.display = 'flex'
    blurredBg.style.filter = 'blur(5px)'
    blurredBg.style.pointerEvents = 'none'
}

getDish.onclick = () => {
    document.querySelector('#title-2').scrollIntoView({behavior: 'smooth'})
}

let closePopUp = (popupId) =>{
    let popup = document.getElementById(popupId)
    popup.style.display = 'none'
    blurredBg.style.filter = 'none'
    blurredBg.style.pointerEvents = 'all'
}
