import {showBuisnessPlan} from './index/business-plan.js';

export const main = document.getElementById('main');

const planBtn = document.getElementById('plan');

planBtn.addEventListener('click', () => {
    showBuisnessPlan(main);
    
})




