import { main } from "./index.js";

export function showBuisnessPlan() {

    const image1 = './images/pexels-artem-beliaikin-1122868.jpg';
    const image2 = './images/pexels-sora-shimazaki-5669602.jpg';
    const image3 = './images/before.png';
    const image4 = './images/after.png';

    main.innerHTML = `<div><h1>Affärsplan</h1></div>    
    <div class="flex.container">
        <div><p>Jag kallar min idé GreenSway.<br><br> Green som kan associeras med både miljö och med pengar och ”sway” (eng.) med betydelse: svänga eller inflytande. Namnet beskriver vad jag vill åstadkomma med min lösning eftersom det handlar om att återställa balansen gällande ansvar för kostnader och miljöpåverkan genom att ge individen större inflytande.</p></div>
        <div><img src="${image1}" alt="A woman swinging over green landscape"></div>
        <div>
            <h2>Bakgrund & problemet</h2>
            <p>Med en gedigen bakgrund som hyresgäst och engagemang i hyresgästföreningen har jag följt flera olika projekt för att få bukt på sopsortering utan något större eller varaktigt resultat. Jag har också under alla år både upplevt och fått höra från både värdar och boende om alla problem som uppstår i och omkring allmänna tvättstugor. Sophanteringens och tvättstugornas drift och underhåll , tar idag upp till ca 20% av hyresvärdens totala driftskostnader. Samtidigt som miljöhus och tvättstugor är ständigt i särklass det sämsta mätpunkterna i NKI undersökningar runt om i landet bland allmännyttans bestånd, runt 70% missnöjda hyresgäster. Därför har jag länge försökt klura på lösningar som gagnar alla och samtidigt tar hänsyn till miljön.Vad är det som kostar så mycket och skapar missnöje?</p>
            <ul>
                <li>I miljöhusen tampas vi idag med stora problem med dumpning av grovsopor, undermålig sortering och allmän nedskräpning. Detta gör hyresgäster än mindre motiverade att göra rätt.</li>
                <li>I Tvättstugorna har vi ineffektiva bokningssystem, i form av låstavlor som möjliggör omedveten blockering av tvättider och det råder ständig brist på tillgängliga tvättider. Dessutom finns en stor osäkerhet att behålla den bokade tiden. Och naturligtvis har vi problem med att städningen inte sköts.</li>
            </ul>
            <p>Jag tror att kärnan till alla problem är att hyresgästens handlingar leder till konsekvenser för hyresvärden.För att lösa problemet behöver vi återställa balansen gällande ansvar, skyldigheter och rättigheter.</p>
        </div>
    </div>
    <div class="flex.container">
        <div><img src="${image2}" alt="The scale of Justice."></div>
        <div>
            <h2>Syfte & Mål</h2>
            <p>Mitt främsta syfte är att öka medvetenheten om och minska miljöpåverkan. Även att:</p>
            <ul>
                <li>minska hyresvärdens kostnader för sophantering.</li>
                <li> öka individens ansvar och rättighet till kontroll över både miljöpåverkan och kostnader relaterat till sophantering och allmänna tvättstugor.</li>
                <li>öka hyresgästernas trivsel och stärka relationen till hyresvärden.</li>
            </ul>
            <p>Redan först året ska bostadsbolagets kostnader reduceras med >50% för drift och underhåll av sophantering och allmänna tvättstugor. Inom 3 år ska:</p>
            <ul>
                <li>mängden restavfall reduceras med 50%.</li>
                <li>el och vattenförbrukning i allmänna utrymmen minskas med 25%</li>
                <li>NKI mätpunkter för miljöhus och tvättstugor ökas till att matcha bolagets resterande mätpunkter.</li>
            </ul>
        </div>
    </div>
        <div><h2>Lösning & Omfattning</h2>
            <p>Allt detta genom maximalt utnyttjande av allmänna utrymmen och ett webb-system som utvecklar befintligt bostadsbestånd till ett mer klimatsmart boende (mer detaljer om systemet hittar du under Projektidé).</p>
            <p>Systemet ska vara skalbart med ett digitalt bokningssystem för tvättstugan som även inkluderar digitala lås för tillträde vid bokad tid. Det ska även finnas funktionalitet som:</p>
            <ul>
                <li>identifiering och registrering av el- och vatten-förbrukning samt avfall för att informera hyresgästen och fakturera kostnaderna.</li>
                <li>tillåter översikt och statistik för hyresgästen och även för bostadsbolaget att se total förbrukning.</li>
                <li>kommunikation mellan hyresgäst och värden om tex felanmälan, driftuppehåll, rapportering angående bristfällig städning.</li>
            </ul>
        </div>
        <div>
            <p>I min affärsplan har jag antagit ett fiktivt kvarter som implementerar en del ombyggnationer för att optimera utnyttjande av allmänna utrymmen som jag här kommer presentera. Siffrorna på husen motsvarar antalet hushåll/hus. Kvarteret består alltså av totalt 126 hushåll.</p>
            <p>Blå elipser motsvarar tvättstugor på källarplan som har 3 tvättider/dag mellan kl. 06.00 och 21.00. De gröna cirklar representerar miljöhus. 42 hushåll delar på en tvättstuga och ett miljöhus. Det finns även en friliggande tvättstuga som är tillgänglig för kvarterets alla hushåll dygnet runt i 3 timmars pass. En hyresgäst har 77 tvättpass att välja på per vecka.</p>
        </div>
        <div><img src="${image3}" alt="Ichnography over the block before"></div>
        <div><p>Mitt förslag innefattar expansion av den friliggande tvättstugan till 2 enheter som utrustas med digitala lås och mätare för el- och vatten-förbrukning. 2 miljöhus för samtliga hushåll som modifieras genom att installera sopinkast med digitala lås för varje fraktion för att motverka dumpning av grovsopor inne i husen. Inkasten utrustas med sensorer och mätutrustning för att kontrollera och registrera avfallet. De ursprungliga utrymmena i källaren för tvättstugor frigörs och kan hyras ut som förråd eller till och med verksamhetslokaler.</p></div>
        <div><img src="${image4}" alt="Ichnography over the block after"></div>
    </div>
    <div><p>Med min lösning sparar hyresvärden in miljonbelopp redan vid implementering och skapar en nettonytta på 1,2 miljoner redan andra året.</p></div>`;
}