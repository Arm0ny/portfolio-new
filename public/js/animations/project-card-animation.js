gsap.registerPlugin(ScrollTrigger);

let projectWrapper = document.getElementById('project-wrapper');
let projectCards = gsap.utils.toArray('.project');

projectCards.forEach((card, i) => {
    if (window.innerWidth >= 835) {
        gsap.to([...card.children][0], {
            position: 'relative',
            top: '-10%',
            left: '-5%',
            'box-shadow': '5px 5px 20px 1px rgb(251, 224, 200)',
            scrollTrigger: {
                trigger: card,
                toggleActions: 'play reverse play reverse',
                scroller: '#project-wrapper',
                horizontal: true,
                start: 'left center',
                end: 'center+=30 center',
            }
        })

        gsap.to([...card.children][1], {
            position: 'relative',
            left: '5%',
            'box-shadow': '5px 5px 20px 1px rgb(251, 224, 200)',
            scrollTrigger: {
                trigger: card,
                toggleActions: 'play reverse play reverse',
                scroller: '#project-wrapper',
                horizontal: true,
                start: 'left center',
                end: 'center+=30 center',
            }
        })
    }

})



