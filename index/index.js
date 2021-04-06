import {showBuisnessPlan} from './business-plan.js';
import {showProductIdea} from "./product-idea.js";
import {showContactInformation} from "./contact-information.js";


export const main = document.getElementById('main');

const planBtn = document.getElementById('plan');
const ideaBtn = document.getElementById('idea');
const contactBtn = document.getElementById('contact');

planBtn.addEventListener('click', () => {
    showBuisnessPlan();  
})
ideaBtn.addEventListener('click', () => {
    showProductIdea();
})
contactBtn.addEventListener('click', () => {
    showContactInformation();
})

