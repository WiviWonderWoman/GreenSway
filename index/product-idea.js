import { main } from "./index.js";

export function showProductIdea() {

    const image1 = './index/images/pexels-markus-spiske-1089438.jpg';
    const image2 = './index/images/pexels-ready-made-3850452.jpg';

    main.innerHTML = `<div><h1>Produktidé</h1></div> 
    <div class="flex.container">
    <div>
        <div><img src="${image2}" alt="Mobile phone with recycling logo."></div>
        <div><p>Min lösning för att uppnå syftet innefattar först och främst ett komplett mjukvarusystem, förpackat i en användarvänlig webb-app med funktionalitet som:</p></div>
            <ul><li>tillåter individuella mätningar och fakturering. Genom att extrahera schablonkostnaderna för sophantering, el- och vatten-förbrukning i tvättstugan från hyran och i stället fakturera hyresgästen för den verkliga kostnaden anser vi att balansen återställs.</li><br>
                <li>använder digitala lås och identifiering för åtkomst till tvättstugor och miljöhus.</li><br>
                <li>i miljöhuset kontrolleras, vägs och registreras avfallet på identifierad hyresgäst som får direkt återkoppling om aktuell kostnad och miljöpåverkan.</li><br>
                <li>ett bokningssystem för tvättstugor. Bokning av tvättid sker bekvämt hemifrån via en app, vilket förhindrar blockering av tider. Endast vid bokat tid tillåts man tillträde till tvättstugan via den digital identifieringen, hyresgästen är säker på att få behålla sitt bokade pass.</li><br>
                <li>registrerar förbrukning av el och vatten. För att göra hyresgästen medveten om resursförbrukning och kostnader.</li><br>
                <li>visa statistik och översikt . Både för hyresgästen och för hyresvärden som ges möjlighet att se den total förbrukning</li><br>
                <li>möjliggör kommunikation mellan hyresgäst och hyresvärd angående tex felanmälan och driftuppehåll</li><br>
                <li>implementation av behovsstyrd drift och underhåll. Sensorer i soptunnorna, IoT maskiner i tvättstugor som kan förmedla statusrapporter.</li>
            </ul>
        </div>  
    </div>
    <div><img src="${image1}" alt="Green light from digital characters."></div>
    <div><p>För att få ut det mesta av systemet förespråkar jag även</p>
        <ul><li>effektiviserad användning av allmänna utrymmen, eventuellt med en del ombyggnationer. Här finns det stort spelrum att skräddarsy lösningen ( jag ger ett exempel på detta under Affärsplan).</li></ul>
    </div>`;
}