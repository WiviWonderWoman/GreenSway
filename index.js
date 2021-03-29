import {showBuisnessPlan} from './index/business-plan.js';
import { showProductIdea } from "./index/product-idea.js";

export const main = document.getElementById('main');

const planBtn = document.getElementById('plan');
const ideaBtn = document.getElementById('idea');

planBtn.addEventListener('click', () => {
    showBuisnessPlan();
    
})
ideaBtn.addEventListener('click', () => {
    showProductIdea();
})




