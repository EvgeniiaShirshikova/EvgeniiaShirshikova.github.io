// анимация загловков

const tlHero = gsap.timeline({});
    
    const titlesWrapper = document.querySelector(".hero-title_wrapper");    
    const titles = titlesWrapper.querySelectorAll("h2");
    const textWrapper = document.querySelector(".hero-text_wrapper");
    
    tlHero.from(titles, {
        autoAlpha: 0,
        duration: 0.5, 
        y: '28rem',
        ease: "power4.out",
        stagger: 0.15,
    })
    .from(titles, {
        delay: 0.05,
        duration: 1.6, 
        scale: 0,
        ease: "elastic.out(1,0.45)",
        stagger: 0.15,
    }, '<')
    .from(textWrapper, {
        delay: 0.6,
        autoAlpha: 0,
        duration: 1,
        ease: Power4.easeOut,
    }, '<')

//анимация линий

const baseLineVert = document.querySelector(".lineVert");
const baseLineHorizLeft = document.querySelector(".lineHorizLeft");
const baseLineHorizRight = document.querySelector(".lineHorizRight");
const frag = document.createDocumentFragment();


function createLineVert(wrapper) {  
    const lineVert = baseLineVert.cloneNode(true);
    frag.appendChild(lineVert);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlVert = gsap.timeline({
            onComplete: animateLine
        })
        
        tlVert.set(lineVert, {
            left: `${gsap.utils.random(10, 90)}%`,
        })
        .fromTo(lineVert, {y: '0rem'}, {duration: gsap.utils.random(2, 10, 2),
            y: '40rem'})
        .fromTo(lineVert, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})

    }

    animateLine();
}

createLineVert(".lines-vert.left");
createLineVert(".lines-vert.right");

function createLineHorizLeft(wrapper) {  
    const lineHorizLeft = baseLineHorizLeft.cloneNode(true);
    frag.appendChild(lineHorizLeft);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlHorizLeft = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizLeft.set(lineHorizLeft, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizLeft, {x: '0vw'}, {duration: gsap.utils.random(2, 6, 2),
            x: '-36vw'})
        .fromTo(lineHorizLeft, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})

    }

    animateLine();
}

createLineHorizLeft('.lines-horiz-top.left');
createLineHorizLeft('.lines-horiz-bottom.left');

function createLineHorizRight(wrapper) {  
    const lineHorizRight = baseLineHorizRight.cloneNode(true);
    frag.appendChild(lineHorizRight);
    let linesWrapper = document.querySelector(wrapper);
    linesWrapper.appendChild(frag);

    function animateLine() {
        const tlHorizRight = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizRight.set(lineHorizRight, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizRight, {x: '0vw'}, {duration: gsap.utils.random(2, 6, 2),
            x: '36vw'})
        .fromTo(lineHorizRight, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})

    }

    animateLine();
}

createLineHorizRight('.lines-horiz-top.right');
createLineHorizRight('.lines-horiz-bottom.right');
