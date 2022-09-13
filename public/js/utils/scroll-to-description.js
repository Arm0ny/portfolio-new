let link =document.getElementById('discover')
let descriptionSection = document.getElementById('description')
let descriptionSectionRect = descriptionSection.getBoundingClientRect()

link.onclick = () => {
    window.scrollTo(0, descriptionSectionRect.y)
}