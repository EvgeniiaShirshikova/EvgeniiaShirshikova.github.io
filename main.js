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

const frag = document.createDocumentFragment();

function createLineVert(wrapper, baseLine) {
    const lineVert = baseLine.cloneNode(true);
    frag.appendChild(lineVert);
    wrapper.appendChild(frag);

    function animateLine() {
        const tlVert = gsap.timeline({
            onComplete: animateLine
        })
        
        tlVert.set(lineVert, {
            left: `${gsap.utils.random(10, 90)}%`,
        })
        .fromTo(lineVert, {y: '-30rem'}, {duration: gsap.utils.random(8, 12, 2),
            y: '30rem'})
        .fromTo(lineVert, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }
    animateLine();
}

function createLineHorizLeft(wrapper, baseLine) {  
    const lineHorizLeft = baseLine.cloneNode(true);
    frag.appendChild(lineHorizLeft);
    wrapper.appendChild(frag);

    function animateLine() {
        const tlHorizLeft = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizLeft.set(lineHorizLeft, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizLeft, {x: '28vw'}, {duration: gsap.utils.random(4, 8, 1),
            x: '-5vw'})
        .fromTo(lineHorizLeft, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }

    animateLine();
}

function createLineHorizRight(wrapper, baseLine) {  
    const lineHorizRight = baseLine.cloneNode(true);
    frag.appendChild(lineHorizRight);
    wrapper.appendChild(frag);

    function animateLine() {
        const tlHorizRight = gsap.timeline({
            onComplete: animateLine
        })
        
        tlHorizRight.set(lineHorizRight, {
            top: `${gsap.utils.random(20, 80)}%`,
        })
        .fromTo(lineHorizRight, {x: '-28vw'}, {duration: gsap.utils.random(4, 8, 1),
            x: '5vw'})
        .fromTo(lineHorizRight, {
            opacity: 1}, {duration: 1, 
                opacity: 0, ease: "power1.out"})
    }

    animateLine();
}

let sections = document.querySelectorAll('section');

function createLines(section) {
    createLineVert(section.querySelector('.lines-vert.left'), section.querySelector('.lineVert'));
    createLineVert(section.querySelector('.lines-vert.right'), section.querySelector('.lineVert'));
    createLineHorizLeft(section.querySelector('.lines-horiz-top.left'), section.querySelector('.lineHorizLeft'));
    createLineHorizLeft(section.querySelector('.lines-horiz-bottom.left'), section.querySelector('.lineHorizLeft'));
    createLineHorizRight(section.querySelector('.lines-horiz-top.right'), section.querySelector('.lineHorizRight'));
    createLineHorizRight(section.querySelector('.lines-horiz-bottom.right'), section.querySelector('.lineHorizRight'));
}

function deleteLine (wrapper) {
    wrapper.innerHTML = '';
}

function deleteLines(section) {
    deleteLine(section.querySelector('.lines-vert.left'));
    deleteLine(section.querySelector('.lines-vert.right'));
    deleteLine(section.querySelector('.lines-horiz-top.left'));
    deleteLine(section.querySelector('.lines-horiz-bottom.left'));
    deleteLine(section.querySelector('.lines-horiz-top.right'));
    deleteLine(section.querySelector('.lines-horiz-bottom.right'));
} 

sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        //markers: true,
        onEnter: () => createLines(section),
        onLeave: () => deleteLines(section),
        onEnterBack: () => createLines(section),
        onLeaveBack: () => deleteLines(section),
    });
});
