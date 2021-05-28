import { header, main } from "./index.js";

export function showBuisnessPlan() {

    header.innerHTML = `GreenSway`;

    main.innerHTML = `
    <div id="div">
        <h1>Affärsplan</h1>
    </div>    
    <div class="flex.container">
        <div id="div">
            <p>
                Jag kallar min idé <span id="copy"><span>GreenSway</span></span>. Green som kan associeras med både miljö och med pengar och ”sway” 
                (eng.) med betydelse: svänga eller inflytande. Namnet beskriver vad jag vill åstadkomma med min lösning eftersom det handlar om att 
                återställa balansen gällande ansvar för kostnader och miljöpåverkan genom att ge individen större inflytande.
            </p>
        </div>
        <div id="div">
            <h2>Bakgrund & problemet</h2>
            <p><br/>
                Med en gedigen bakgrund som hyresgäst och engagemang i hyresgästföreningen har jag följt flera olika projekt för att få bukt på 
                sopsortering utan något större eller varaktigt resultat. Jag har också under alla år både upplevt och fått höra från både värdar och 
                boende om alla problem som uppstår i och omkring allmänna tvättstugor. Sophanteringens och tvättstugornas drift och underhåll , 
                tar idag upp till ca 20% av hyresvärdens totala driftskostnader. Samtidigt som miljöhus och tvättstugor är ständigt i särklass det 
                sämsta mätpunkterna i NKI undersökningar runt om i landet bland allmännyttans bestånd, runt 70% missnöjda hyresgäster. Därför har jag 
                länge försökt klura på lösningar som gagnar alla och samtidigt tar hänsyn till miljön.Vad är det som kostar så mycket och skapar missnöje?
            </p>
            <ul>
                <li>
                    I miljöhusen tampas vi idag med stora problem med dumpning av grovsopor, undermålig sortering och allmän nedskräpning. 
                    Detta gör hyresgäster än mindre motiverade att göra rätt.
                </li>
                <li>
                    I Tvättstugorna har vi ineffektiva bokningssystem, i form av låstavlor som möjliggör omedveten blockering av tvättider och det råder
                    ständig brist på tillgängliga tvättider. Dessutom finns en stor osäkerhet att behålla den bokade tiden. 
                    Och naturligtvis har vi problem med att städningen inte sköts.
                </li>
            </ul>
            <p>
                Jag tror att kärnan till alla problem är att hyresgästens handlingar leder till konsekvenser för hyresvärden.
                För att lösa problemet behöver vi återställa balansen gällande ansvar, skyldigheter och rättigheter.
            </p>
        </div>
    </div>
    <div class="flex.container"><div id="div">
        <div id="div"><h2>Syfte & Mål</h2></div>
            <p>
                Mitt främsta syfte är att öka medvetenheten om och minska miljöpåverkan. Även att:
            </p>
            <ul>
                <li>minska hyresvärdens kostnader för sophantering.</li>
                <li> öka individens ansvar och rättighet till kontroll över både miljöpåverkan och kostnader relaterat till sophantering och allmänna 
                tvättstugor.</li>
                <li>öka hyresgästernas trivsel och stärka relationen till hyresvärden.</li>
            </ul>
            <p>
                Redan först året ska bostadsbolagets kostnader reduceras med >50% för drift och underhåll av sophantering och allmänna tvättstugor. 
                Inom 3 år ska:
            </p>
            <ul>
                <li>mängden restavfall reduceras med 50%.</li>
                <li>el och vattenförbrukning i allmänna utrymmen minskas med 25%</li>
                <li>NKI mätpunkter för miljöhus och tvättstugor ökas till att matcha bolagets resterande mätpunkter.</li>
            </ul>
        </div>
    </div>
    <div id="div">
        <div id="div">
        <h2>Lösning & Omfattning</h2>
        </div>
            <p>
                Allt detta genom maximalt utnyttjande av allmänna utrymmen och ett webb-system som utvecklar befintligt bostadsbestånd till ett mer 
                klimatsmart boende (mer detaljer om systemet hittar du under Projektidé).
            </p>
            <p>
                Systemet ska vara skalbart med ett digitalt bokningssystem för tvättstugan som även inkluderar digitala lås för tillträde vid bokad tid. 
                Det ska även finnas funktionalitet som:
            </p>
            <ul>
                <li>identifiering och registrering av el- och vatten-förbrukning samt avfall för att informera hyresgästen och fakturera kostnaderna.</li>
                <li>tillåter översikt och statistik för hyresgästen och även för bostadsbolaget att se total förbrukning.</li>
                <li>kommunikation mellan hyresgäst och värden om tex felanmälan, driftuppehåll, rapportering angående bristfällig städning.</li>
            </ul>
        </div>
        <hr />
        <div id="div">
            <h3 class="user">Fotnot:</h3> 
            <p class="user">
                Mer än halvägs in i utarbetandet av prototypen har jag blivit varse om att det är emot hyreslagen att extrahera avfallsomkostnader från 
                hyran. Efter att jag har fått kännedom om att Nordvästra Skånes Renhållnings AB nyligen (maj 2021) anordnat en 
                <a href="https://nsr.se/workshop-teknisk-losning-for-matning-av-hushallsavfall/" target="_blank" id="link">workshop</a> 
                för att ta fram en mjukvara för individuell avfallsmätning i flerfamiljshus har jag har valt att ändå fortsätta med projektet. 
                Intresset för att hitta en lösning indikerar att behovet finns och att en ändring i lagen inte är omöjlig eller särkilt långt fram i tiden. 
                Jag ser ljust på framtiden för mitt projekt och tänker utforska möjligheten att använda lösningen i bostadsrättsföreningar.
            </p> 
        </div>
    </div>`
}