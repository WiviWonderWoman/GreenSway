import { showBuisnessPlan } from './business-plan.js';
import { showProductIdea } from "./product-idea.js";
import { showContactInformation } from "./contact-information.js";
import { showAbout } from "./about";


export const main = document.getElementById('main');
export const header = document.getElementById('header');

const aboutBtn = document.getElementById('about');
const planBtn = document.getElementById('plan');
const ideaBtn = document.getElementById('idea');
const contactBtn = document.getElementById('contact');

aboutBtn.addEventListener('click', () => {
    showAbout();
})
planBtn.addEventListener('click', () => {
    showBuisnessPlan();
})
ideaBtn.addEventListener('click', () => {
    showProductIdea();
})
contactBtn.addEventListener('click', () => {
    showContactInformation();
})

