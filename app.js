let ingredients = document.getElementById('ingredients')
let recipe = document.getElementById('recipe')
let blurredBg = document.getElementById('bg')

let ingredientsPage = document.getElementById('ingredients-page')
let recipePage = document.getElementById('recipe-page')


let close = document.querySelector('.close')
let getDish = document.getElementById('random-dish')

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
    console.log(blurredBg.style.pointerEvents )
}

let showModal = (type) => {
    type == 'ingredients' ? ingredientsPage.style.display = 'flex' : recipePage.style.display = 'flex'    
    blurredBg.style.filter = 'blur(5px)'
    blurredBg.style.pointerEvents = 'none'
}


// table.addEventListener('click' , (event) =>{
//     console.log(event.target.id)
//     lookForDetails(event.target.id)

// })
// let lookForDetails = (id) =>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then(response => response.json())
//     .then(resp =>{
//         showSearchModal(resp)
//     } 
//         )
// }