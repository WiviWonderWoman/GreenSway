import { header, main } from "./index.js";

export function showAbout() {
    header.innerHTML = `"WiviWonderWoman"`;

    main.innerHTML = `<div id="div" class="user"><h1>Under utveckling</h1></div>    
    <div class="flex.container">
        <div id="div">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum, ipsum quia cum nulla nesciunt placeat eius vel nihil quibusdam 
                similique alias ratione suscipit sapiente enim architecto itaque non ea?
            </p>
        </div>
    </div>`;
}