

const [red, green, blue] = [226, 13, 13]
const section1 = document.querySelector('.header__navbar')
const section2 = document.querySelector('.header__navbar-item a')
const scrollBtn = document.querySelector('.scroll-up-btn')
const icon_show = document.querySelector('.header__navbar-hided-icon')
const menu_layer = document.querySelector('.layer')
const close__layer = document.querySelector('.layer__icon')
const choice = document.querySelectorAll('.layer__item')

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150

    if(this.scrollY > 20){
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
        const [r, g, b] = [159, 154, 154].map(Math.round)
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        section1.style.padding = '14px 200px'
        icon_show.style.top = '18px'
    }
    else {
        const [r, g, b, a] = [0, 0, 0, 0.1].map(Math.round)
        section1.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
        section1.style.padding = '32px 200px'
        icon_show.style.top = '38px'
    }

    if(this.scrollY > 500){
        scrollBtn.style.opacity = '1'
    }
    else {
        scrollBtn.style.opacity = '0'
    }
})

icon_show.onclick = function() {
    menu_layer.style.left = '0'
}

close__layer.onclick = function() {
    menu_layer.style.left = '-100%'
};

for(var i =0; i < choice.length; i++){
    choice[i].onclick = function(){
        menu_layer.style.left = '-100%';
    }
}



var typed = new Typed(".typing", {
    strings: ["Student", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Student", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// const carouselVar = document.querySelector('.teams__body')
// carouselVar.owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false
//         },
//         600: {
//             items: 2,
//             nav: false
//         },
//         1000: {
//             items: 3,
//             nav: false
//         }
//     }
// })


const achives = document.querySelectorAll('.teams__item')


function moveLeft(selector) {
    selector.style.transform = 'translateX(-370px)'
}

function moveRight(selector) {
    selector.style.transform = 'translateX(370px)'
}

function moveLeftDouble(selector) {
    selector.style.transform = 'translateX(-750px)'
}

function moveRightDouble(selector) {
    selector.style.transform = 'translateX(750px)'
}

const shiftLeftBtn = document.querySelector('.team__shift-left')
const shiftRightBtn = document.querySelector('.team__shift-right')

shiftLeftBtn.onclick = function () {
    shiftRightHandle()
}

shiftRightBtn.onclick = function () {
    shiftLeftHandle()
}

// function shiftLeftHandle(){
//     for(var j = 0; j < achives.length; j++){
//         // console.log('haha')
//         for(var i = j; i<achives.length; i++) {
//             // console.log('hehe' + j + i)
//             moveLeft(achives[i])
//         }

//     }
// }

function shiftLeftHandle(){

    for(var i = 0; i<achives.length; i++) {
        // console.log('hehe' + j + i)
        moveLeft(achives[i])
        // moveLeftDouble(achives[i])
    }

    
}

// function shiftRightHandle(){
//     for(var j = achives.length - 1; j > 0; j--){
//         // console.log('haha')
//         for(var i = j; i>0; i--) {
//             // console.log('hehe' + j + i)
//             moveRight(achives[i])
//         }

//     }
// }

function shiftRightHandle(){

    for(var i = (achives.length - 1); i>=0; i--) {
        moveRight(achives[i])
        // moveRightDouble(achives[i])
    }
}

// changePageHandle()
// setInterval(changePageHandle, 1000)

const inforContent = document.querySelector('.about__infor-detail')
const inforContentBtn = document.querySelector('.about__infor-btn')
const inforContentHeight = inforContent.offsetHeight

const skillsContent = document.querySelector('.skills__infor-details')
const skillsContentBtn = document.querySelector('.skills__infor-btn')
const skillsContentHeight = skillsContent.offsetHeight

function showMoreHandler(selector, btn, selectorHeight, btnHeight, type) {
    selector.style.overflow = 'hidden'
    var screenWidth = window.innerWidth

    
    btn.onclick = function(){
        console.log(screenWidth)
        if(selector.style.overflow == 'hidden') {

            // selector.style.height = '250px'
            selector.style.overflow = 'visible'


            if(type == 'infor'){
                btn.style.top = ((btnHeight + selectorHeight) - 38 ) + 'px'
            }
            if(type == 'skill'){
                btn.style.marginTop = '102px'
            }

            // small pc
            if(screenWidth <= 1200){

                console.log(screenWidth)

                if(type == 'infor'){
                    btn.style.top = (btnHeight + 150) + 'px'
                    btn.style.left = 188 + 'px'
                }
                if(type == 'skill'){
                    btn.style.marginTop = '126px'
                }

                // tablet
                if(screenWidth <= 1023) {
                    
                    if(type == 'infor'){
                        btn.style.top = (btnHeight + 424) + 'px'
                        btn.style.left = '0'
                    }
                    if(type == 'skill'){
                        btn.style.marginTop = '80px'
                    }

                    // mobile
                    if(screenWidth <= 739) {
                        if(type == 'infor'){

                            btn.style.top = (btnHeight + 464) + 'px'
                            btn.style.left = '0'
                        }
                        if(type == 'skill'){
                            btn.style.marginTop = '158px'
                        }
                    }
                }
                
            }

            btn.innerText = 'Show less'
        }
        else{
            selector.style.overflow = 'hidden'
            if(type == 'infor'){
                btn.style.top = btnHeight + 'px'
            }
            if(type == 'skill'){
                btn.style.marginTop = '0'
            }

            // small pc
            if(screenWidth <= 1200){

                console.log(screenWidth)

                if(type == 'infor'){
                    btn.style.top = ((btnHeight + selectorHeight) - 50 ) + 'px'
                    btn.style.left = 516 + 'px'
                }
                if(type == 'skill'){
                    btn.style.marginTop = '0'
                }

                // tablet
                if(screenWidth <= 1023) {
    
                    if(type == 'infor'){
                        btn.style.top = (btnHeight + 360) + 'px'
                        btn.style.left = '0'
                    }
                    if(type == 'skill'){
                        btn.style.marginTop = '16px'
                    }

                    // mobile
                    if(screenWidth <= 739) {
                        if(type == 'infor'){

                            btn.style.top = (btnHeight + 330) + 'px'
                            btn.style.left = '0'
                        }
                        if(type == 'skill'){
                            btn.style.marginTop = '18px'
                        }
                    }
                    
                }

            }
            
            btn.innerText = 'Read more'
        }
    }
}

showMoreHandler(inforContent, inforContentBtn, inforContentHeight, 255, 'infor')
showMoreHandler(skillsContent, skillsContentBtn, skillsContentHeight, 255, 'skill')

const contactIcons = document.querySelectorAll('.contact__infor-detail-item-icon')
const contactTitles = document.querySelectorAll('.contact__infor-detail-item-title ')


function contactHandle(){
    for(var i=0; i<contactIcons.length; i++) {
        console.log(contactIcons[i])
        console.log(contactTitles[i])
        contactIcons[i].onmouseover = function(){
            contactTitles[i].style.display = 'block'
            console.log('hehe')
        }
    }
}

// contactHandle()

// achives[0].style.transform = 'translateX(-370px)'
// achives[1].style.transform = 'translateX(-750px)'
// achives[2].style.transform = 'translateX(-1200px)'
//  achives[achives.length - 1].style.transform = 'translateX(100px)'
// moveRight(achives[0])


// Handle heart click
const filledHeart = document.querySelector('.heart__icon--filled')
const emptyHeart = document.querySelector('.heart__icon--empty')
const heartArea = document.querySelector('.heart')
const heartNumber = document.querySelector('.heart__title')
const heartNumStorage = localStorage.getItem('heartNumber')

heartNumber.textContent = JSON.parse(heartNumStorage) 
emptyHeart.style.display = 'block'

// localStorage.setItem('heartNumber', JSON.stringify(50))

heartArea.addEventListener('click', () => {
    const isEmpty = emptyHeart.style.display === 'block'


    if(isEmpty){
        emptyHeart.style.display = 'none'
        filledHeart.style.display = 'block'

        heartNumber.textContent = Number(JSON.parse(heartNumStorage)) + 1
        localStorage.setItem('heartNumber', JSON.stringify(heartNumber.textContent))
        
        heartArea.style.animationName = 'heartMover'
    }
    else {
        emptyHeart.style.display = 'block'
        filledHeart.style.display = 'none'

        heartNumber.textContent = Number(JSON.parse(heartNumStorage)) - 1
        localStorage.setItem('heartNumber', JSON.stringify(heartNumber.textContent))
    }
})


setInterval(() => {
    heartArea.style.animationName = 'heartMover'
}, 2000)
