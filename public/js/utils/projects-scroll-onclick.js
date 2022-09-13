let projectWrapper = document.getElementById('project-wrapper')
let projectCards = [...document.getElementsByClassName('project')]
let buttonLeft = document.getElementById('button-left')
let buttonRight = document.getElementById('button-right')
let cardRect = projectCards[0].getBoundingClientRect()
let viewportCenter = {x: window.innerWidth / 2, y: window.innerHeight/2}
let moveX = cardRect.width
let counter = 0



projectWrapper.onscroll = () => {
    projectCards.forEach((card, i) => {
        let cardRect = card.getBoundingClientRect()
        if (0 <= cardRect.left && window.innerWidth > cardRect.left){
            counter = i
        }

    })
}


buttonRight.onclick = () => {
    if (counter < projectCards.length - 1){
        projectWrapper.scrollBy({top: 0, left: moveX, behavior: 'smooth'})
        counter++
    }
    else{
        projectWrapper.scrollBy(-moveX * (projectCards.length + 2), 0)
        counter = 1
    }
}

buttonLeft.onclick = () => {
    if (counter > 0){
        projectWrapper.scrollBy({top: 0, left: -moveX, behavior: 'smooth'})
        counter--
    }
    else{
        projectWrapper.scrollBy(moveX * (projectCards.length + 2), 0)
        counter = 1
    }
}
