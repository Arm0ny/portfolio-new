gsap.registerPlugin(ScrollTrigger);
let myCard = document.getElementById('my-card')
let socialsBar = [...document.getElementsByClassName('sidebar')][1]
let stackBar = [...document.getElementsByClassName('sidebar')][0]




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#description',
        start: 'top center',
        end: 'center center',
        scrub: 4,
    }
})

tl.from('#my-card',{
    position: 'relative',
    ease: Back.easeOut.config(2),
    left: '100%',
    duration: 2,

})
    .from(stackBar, {
        position: 'relative',
        ease: Back.easeOut.config(1),
        left: '200%',
    })
    .from(socialsBar, {
        position: 'relative',
        ease: Back.easeOut.config(1.5),
        left: '100%',
    })

