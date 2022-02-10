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

/**
 * Define Global Variables
 * 
*/
let sections= document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function removeActiveClass(){
    let activeClasses= document.querySelectorAll('section');
     activeClasses.forEach((activeClass) =>{
     activeClass.classList.remove("your-active-class");
    });
}
function removeActiveClass2(){
    letActiveClasses=document.querySelectorAll('section');
    if(section.classList == "your-active-class "){
        section.classList.remove('your-active-class');
    }
}
function activeLink(activeSection){
    let links= document.querySelectorAll('a');
    let sectionNav = activeSection.getAttribute('data-nav');

    links.forEach((link) =>{
        if(link.textContent == sectionNav){
            link.classList.add("your-active-class");
        }
        else {
            link.classList.remove('your-active-class');
        }
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
let navBar= document.querySelector('ul');
const addNavItems = () => {
let fragment= document.createDocumentFragment(); 
sections.forEach( (section)  => {
    let text= section.getAttribute("data-nav");
    let newLi= document.createElement('li');
    let newLink= document.createElement('a');

    newLink.addEventListener('click', eve = () =>
     section.scrollIntoView({behavior:"smooth"}));

    newLink.classList.add("menu__link")
    let textNode= document.createTextNode(text);
    newLink.appendChild(textNode)
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);
});
navBar.appendChild(fragment);
}   
addNavItems();
// Add class 'active' to section when near top of viewport
const ActivateClass= () => {
sections.forEach((section) =>{
    
    let rect = section.getBoundingClientRect();    
    console.log(rect.top, rect.bottom, window.innerHeight);
    // rectangle height is less than window inner height
    if(rect.top >=0 && rect.top< 300) //bottom is the total height
    {
        removeActiveClass();
        section.classList.add('your-active-class');
        activeLink(section);
    }
    else { 
        if(rect.top <0 && rect.top >300){
        
        if(section.classList.contains('your-active-class')){
        //section.classList.add('your-active-class');
        removeActiveClass();
        activeLink(section);
        }}
    }
}); }
//ActivateClass();
document.addEventListener('scroll', ActivateClass);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
