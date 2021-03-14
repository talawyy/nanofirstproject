/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const sections = document.querySelectorAll('section');
const navbar = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const windowHeight = window.innerHeight;
let isNewScroll = true;
let prevActiveSection = sections[0];
let prevIndex = 0;

// Build menu
// build the nav
for(const section of sections){ // loop over available sections
    // get all sections titles
    const sectionTitle = section.querySelector('.landing__container h2');
    const newUnorderdList = document.createElement('li');
    const newAnchor = document.createElement('a');
    // set the anchor text to the current section title in in the loop
    newAnchor.innerText = sectionTitle.textContent;
    newAnchor.classList.add("menu__link");
    newAnchor.setAttribute('href','');
    newUnorderdList.appendChild(newAnchor);
    fragment.appendChild(newUnorderdList)
}

navbar.appendChild(fragment);

function isInView(){
    const header = document.querySelector('header');
    header.style.display = "block";
    let activeSection;
    for (const [index, section] of sections.entries()) {
        const currentPosition = section.getBoundingClientRect();
        if((currentPosition.top >= 0 || currentPosition.bottom >= 0) &&
        (currentPosition.top <= windowHeight * 0.35 && currentPosition.bottom >= windowHeight * 0.55) &&
        (currentPosition.top <= windowHeight || currentPosition.bottom <= windowHeight)){
            activeSection = [section, index];
            activeNav(index, section);
            return
        } 
    }  
}

/*
* @description Add class 'active' to section when near top of viewport
* @constructor
* @param {integar} index - The index of the active section
* @param {Element} section - The active section
*/
function activeNav(index, section){
    // check if the page is newly loaded and this is the first scroll
    isNewScroll ? isNewScroll = false : removeClassActive(section, index);
    // Set section as active
    section.classList.add('active');
    navbar.querySelectorAll('.navbar__menu .menu__link')[index].style.cssText = "color: #6aa2a3"
}

/*
* @description Remove class "active" from the previous section in view
* @constructor
* @param {integar} index - The index of the active section
* @param {Element} section - The active section
*/
function removeClassActive(section, index){
    // check if this is the first scroll and if user moved to another section or still in prev active
    if(!isNewScroll && section !== prevActiveSection){
        prevActiveSection.classList.remove("active");
        navbar.querySelectorAll('.navbar__menu .menu__link')[prevIndex].style.cssText = "color: null"
    }
    prevActiveSection = sections[index];
    prevIndex = index
}

 // if there is scroll or mouse is over the nav b

// Scroll to section on link click
navbar.addEventListener('click', function(e){
   if(e.target.nodeName = "A"){
    e.preventDefault();
    const clickedEl = e.target.parentElement;
    const index = [...clickedEl.parentElement.children].indexOf(clickedEl);
    sections[index].scrollIntoView({behavior: 'smooth'});
   }
});

let timeOut = undefined;
let hover = false; // is mouse over the navbar?

// clear timer if mouse move over the navbar
// and let the scroll event listener know that mouse is over the navbar
navbar.addEventListener('mouseover', function(){
    timeOut !== undefined ? clearTimeout(timeOut) : 0; 
    hover = true
});

// set timer if mouse out of the navbar
// and let the scroll event listener know that mouse is out of the navbar
navbar.addEventListener('mouseout', function(){
    hover = false;
    timeOut = setTimeout(function(){
        document.querySelector('header').style.display = "none"
    },5000)
});

document.addEventListener('scroll', function(e){
    if(window.scrollY > 100){
        isInView();
        if(timeOut !== undefined && !hover){ // check is there a registered timer or not and if mouse is over the navbar
            clearTimeout(timeOut);
            document.querySelector('header').style.display = "block"
        }
        !hover ? timeOut = setTimeout(function(){
            document.querySelector('header').style.display = "none"
        },5000) : 0
    }else{
        prevActiveSection.classList.remove("active");
        navbar.querySelectorAll('.navbar__menu .menu__link')[prevIndex].style.cssText = "color: null";
        document.querySelector('header').style.display = "none"
    }
});

