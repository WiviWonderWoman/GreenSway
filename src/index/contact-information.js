import { header, main } from "./index.js";
import file from "./files/GreenSway-Affärsplan.pdf"

export function showContactInformation() {

    header.innerHTML = `GreenSway`;

    main.innerHTML = `<div id="div"><h1>Intresserad av att veta mera?</h1><h2 class="user">Kul! Klicka på ikonerna för att:</h2></div>
    <div class="flex-container">
        <div id="div">
            <h3 class="contact">Läsa hela affärsplanen (pdf):</h3>
            <sup id="icon"><a href="${file}" target=":_blank"><i class="far fa-file-alt"></i></a></sup>
        </div>
        <div id="div">
            <h3 class="contact">Kontakta mig via mail:</h3>
            <sup id="icon"><a href="mailto:w.grapenholt@gmail.com" target=":_blank"><i class="fas fa-at"></i></a></sup>
        </div>
        <div id="div">
            <h3 class="user">Titta in på någon av nedanstående länkar:</h3>
        </div>
        <div id="div">
            <ul class="nav-list">
                <li><a href="https://github.com/WiviWonderWoman" target="_blank"><i class="fab fa-github-alt"></i></a></li>
                <li><a href="https://www.linkedin.com/in/wivianne-grapenholt-673b701b6/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/wivianne_grapenholt/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/wivi.grapenholt" target="_blank"><i class="fab fa-facebook"></i></a></li>
            </ul>
        </div>
    </div>`;
}
