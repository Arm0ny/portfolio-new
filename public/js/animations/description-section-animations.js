gsap.registerPlugin(ScrollTrigger);
let myCard = document.getElementById('my-card')
let socialsBar = [...document.getElementsByClassName('sidebar')][1]
let stackBar = [...document.getElementsByClassName('sidebar')][0]




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#description',
        start: 'top center',
        end: 'center center',
        scrub: 1,
    }
})

tl.from('#my-card',{
    position: 'relative',
    left: '100%',
    duration: 2,

})
    .from(stackBar, {
        position: 'relative',
        left: '200%',
    })
    .from(socialsBar, {
        position: 'relative',
        left: '100%',
    })

